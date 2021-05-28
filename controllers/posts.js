const mongoose = require("mongoose");
const Post = require('../models/Post');

// const { ObjectId } = mongoose.Types;

const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({
      success: true,
      msg: 'show all posts',
      data: posts,
    })  
  } catch(err) {
    next(err)
  }
};

const getPost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id);
        res.json({
            success: true,
            msg: 'show selected post',
            data: post
        })
    } catch(err) {
        next(err)
    }
};

const createPost = async (req, res, next) => {
    try {
        const { region, country, city, title, story, picture, user, status } = req.body;
        const post = await Post.create({ region, country, city, title, story, picture, user, status });
        res.json({ success: true, msg: 'show new post', data: post})
    } catch(err) {
        next(err)
    }
};

const updatePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { region, country, city, title, story, picture, user, status } = req.body;
        const post = await post.findByIdAndUpdate(id, { region, country, city, title, story, picture, user, status }, { new: true});
        res.json({
            success: true,
            msg: `post with ${id} updated`,
            data: post
        })
    } catch(err) {
        next(err)
    }
};

const deletePost = async (req, res, next) => {
    try {
        const { id } = req.params;
        const post = await Post.findByIdAndDelete(id);
        res.json({
            success: true,
            msg: `post with id ${id} deleted`,
            data: post
        })
    } catch(err) {
        next(err)
    }
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
 }