import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {

  FileText,  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
  Tag,
  Clock,
  Eye} from 'lucide-react';

export function BlogPage(...args: any[]): any {

  const blogPosts = [
    {

      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt:'
        'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['AI',Business',Trends',2025'],
      image: '🤖'},
    {

      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt:'
        'An in-depth look at how quantum computing is solving previously impossible problems.',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum',Computing',Innovation'],
      image: '⚛️'},
    {

      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt:'
        'How AI is both creating new security challenges and providing innovative solutions.',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Security',AI',Threats',Solutions'],
      image: '🔒'},
    {

      id: 4,
      title: 'Digital Transformation: A Complete Guide for Enterprises',
      excerpt:'
        'Step-by-step strategies for successful digital transformation in large organizations.',
      author: 'David Kim',
      date: '2024-12-28',
      readTime: '15 min read',
      category: 'Digital Transformation',
      tags: ['Digital',Transformation',Enterprise',Strategy'],
      image: '🚀'},
    {

      id: 5,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt:'
        'Understanding edge computing and its impact on IoT and real-time applications.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-20',
      readTime: '9 min read',
      category: 'Edge Computing',
      tags: ['Edge Computing',IoT',Real-time',Data'],
      image: '🌐'},
    {

      id: 6,
      title: 'Machine Learning in Healthcare: Saving Lives with Data',
      excerpt:'
        'Real-world applications of ML in healthcare and the future of medical AI.',
      author: 'Dr. Emily Watson',
      date: '2024-12-15',
      readTime: '11 min read',
      category: 'Healthcare AI',
      tags: ['Healthcare',Machine Learning',Medical AI',Data'],
      image: '🏥'},
  ];

  const categories = ['
    'All Posts',AI & Technology',Quantum Computing',Cybersecurity',Digital Transformation',Edge Computing',Healthcare AI',
  ];

  return()
    <div className="min-h-screen py-8">"      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}"
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >"
            <h1 className="text-5xl font-bold text-white mb-6">
              Blog & Insights
            </h1>"
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, quantum computing,
              cybersecurity, and emerging technologies from our team of experts.
            </p>
          </motion.div>
        </div>

        {/* Search and Filters */}"
        <div className="mb-12">"
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}"
            <div className="relative w-full md:w-96">"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input"
<<<<<<< HEAD
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
=======
                type="text""
                placeholder="Search articles...""                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
>>>>>>> 0fd73b8ff3a0ba02edb753912246afb53a531954
              />
            </div>

            {/* Category Filter */}"
            <div className="flex items-center space-x-2">"
              <Filter className="w-5 h-5 text-gray-400" />"              <select className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus: anyoutline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}"
        <div className="grid grid-cols-1 md: anygrid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}"
              className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              {/* Post Image */}"
              <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-6xl">
                {post.image}
              </div>

              {/* Post Content */}"
              <div className="p-6">
                {/* Category and Date */}"
                <div className="flex items-center justify-between mb-3">"
                  <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full border border-cyan-500/30">
                    {post.category}
                  </span>"
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Calendar className="w-4 h-4" />                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>

                {/* Title */}"
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                {/* Excerpt */}"
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta Info */}"
                <div className="flex items-center justify-between mb-4">"
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>"
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">"
                    <Clock className="w-4 h-4" />                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Tags */}"
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map(tag => (
                    <span
                      key={tag}"
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>) ) }
                </div>

                {/* Read More */}
                <Link
                  to={`/blog/${post.id}`}"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group-hover:translate-x-1 transition-transform"
                >
                  <span>Read More</span>"
                  <ArrowRight className="w-4 h-4" />                </Link>
              </div>
            </motion.article>) ) }
        </div>

        {/* Load More */}"
        <div className="text-center mt-12">"
          <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-semibold">
            <span>Load More Articles</span>"
            <ArrowRight className="w-5 h-5" />          </button>
        </div>

        {/* Newsletter Signup */}"
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}"
            className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-2xl p-12 text-center"
          >"
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>"
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Get the latest articles, research, and technology insights
              delivered to your inbox.
            </p>
"
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input"
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />"
              <button className="px-6 py-3 bg-cyan-800 text-white rounded-lg hover:bg-cyan-900 transition-colors font-medium">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
'"`