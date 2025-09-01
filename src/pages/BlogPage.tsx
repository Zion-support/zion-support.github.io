import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag } from 'lucide-react';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',
      author: 'Dr. Sarah Chen',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Technology',
      tags: ['AI', 'Business', 'Trends', '2025'],
      image: '🤖'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'An in-depth look at how quantum computing is solving previously impossible problems.',
      author: 'Michael Rodriguez',
      date: '2025-01-10',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum', 'Computing', 'Innovation'],
      image: '⚛️'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How AI is both creating new security challenges and providing innovative solutions.',
      author: 'Dr. Emily Watson',
      date: '2025-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Security', 'AI', 'Threats', 'Solutions'],
      image: '🔒'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Complete Guide for Enterprises',
      excerpt: 'Step-by-step strategies for successful digital transformation in large organizations.',
      author: 'David Kim',
      date: '2024-12-28',
      readTime: '15 min read',
      category: 'Digital Transformation',
      tags: ['Digital', 'Transformation', 'Enterprise', 'Strategy'],
      image: '🚀'
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Processing Data Where It Matters',
      excerpt: 'Understanding edge computing and its impact on IoT and real-time applications.',
      author: 'Dr. Sarah Chen',
      date: '2024-12-20',
      readTime: '9 min read',
      category: 'Edge Computing',
      tags: ['Edge Computing', 'IoT', 'Real-time', 'Data'],
      image: '🌐'
    },
    {
      id: 6,
      title: 'Machine Learning in Healthcare: Saving Lives with Data',
      excerpt: 'Real-world applications of ML in healthcare and the future of medical AI.',
      author: 'Dr. Emily Watson',
      date: '2024-12-15',
      readTime: '11 min read',
      category: 'Healthcare AI',
      tags: ['Healthcare', 'Machine Learning', 'Medical AI', 'Data'],
      image: '🏥'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Quantum Computing',
    'Cybersecurity',
    'Digital Transformation',
    'Edge Computing',
    'Healthcare AI'
  ];

  const filteredPosts = selectedCategory === 'All Posts' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold text-white mb-6">
              Blog & Insights
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Stay updated with the latest insights on AI, quantum computing,
              cybersecurity, and emerging technologies from our team of experts.
            </p>
          </motion.div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              {/* Post Image */}
              <div className="text-6xl mb-4 text-center">
                {post.image}
              </div>

              {/* Post Meta */}
              <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString()}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </div>
              </div>

              {/* Post Content */}
              <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <User className="w-4 h-4" />
                {post.author}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Button */}
              <button className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Read More
              </button>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights and updates delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default BlogPage;