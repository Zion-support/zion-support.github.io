'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of AI in Business: Trends and Predictions for 2024",
      excerpt: "Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.",
      author: "Sarah Chen",
      date: "December 15, 2024",
      category: "AI & Machine Learning",
      readTime: "5 min read",
      image: "/images/blog/ai-future.jpg"
    },
    {
      id: 2,
      title: "5G Technology: Transforming Industries and Creating New Opportunities",
      excerpt: "Discover how 5G networks are revolutionizing industries and enabling new business models.",
      author: "Michael Rodriguez",
      date: "December 10, 2024",
      category: "5G Technology",
      readTime: "7 min read",
      image: "/images/blog/5g-transformation.jpg"
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices for Modern Enterprises",
      excerpt: "Essential cybersecurity strategies to protect your business from evolving threats and attacks.",
      author: "Emily Johnson",
      date: "December 5, 2024",
      category: "Cybersecurity",
      readTime: "6 min read",
      image: "/images/blog/cybersecurity-best-practices.jpg"
    },
    {
      id: 4,
      title: "Cloud Migration: A Complete Guide for Business Leaders",
      excerpt: "Everything you need to know about migrating to the cloud and maximizing its benefits.",
      author: "David Kim",
      date: "November 28, 2024",
      category: "Cloud Computing",
      readTime: "8 min read",
      image: "/images/blog/cloud-migration.jpg"
    },
    {
      id: 5,
      title: "Micro SaaS: The Future of Software Distribution",
      excerpt: "How micro SaaS solutions are changing the software industry and creating new opportunities.",
      author: "Sarah Chen",
      date: "November 20, 2024",
      category: "SaaS",
      readTime: "4 min read",
      image: "/images/blog/micro-saas.jpg"
    },
    {
      id: 6,
      title: "Data Analytics: Turning Information into Business Intelligence",
      excerpt: "Learn how to leverage data analytics to make informed business decisions and drive growth.",
      author: "Michael Rodriguez",
      date: "November 15, 2024",
      category: "Data Analytics",
      readTime: "6 min read",
      image: "/images/blog/data-analytics.jpg"
    }
  ];

  const categories = [
    "All Posts",
    "AI & Machine Learning",
    "5G Technology",
    "Cybersecurity",
    "Cloud Computing",
    "SaaS",
    "Data Analytics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, cybersecurity, and business innovation from Zion Tech Group experts." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights on technology, AI, cybersecurity, 
            and business innovation from our team of experts.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                index === 0
                  ? 'bg-cyan-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Tag className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <p className="text-gray-300">Featured Image</p>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-gray-400 text-sm">{blogPosts[0].category}</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-gray-300 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-400">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{blogPosts[0].author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                  <Link
                    to={`/blog/${blogPosts[0].id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="group bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Tag className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                  <p className="text-gray-300 text-sm">Blog Image</p>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-white/20 text-white px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <span className="text-gray-400 text-xs">{post.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>{post.date}</span>
                  </div>
                </div>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm mt-4 group-hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights on technology, 
            AI, and business innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;