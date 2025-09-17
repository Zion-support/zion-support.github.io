import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Calendar, 
  Clock, 
  Eye, 
  Heart, 
  User, 
  Tag, 
  ArrowRight,
  TrendingUp,
  Star,
  BookOpen
} from 'lucide-react';
import { REVOLUTIONARY_BLOG_POSTS_2026 } from '../data/revolutionaryContent2026';

const RevolutionaryBlogShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts', count: REVOLUTIONARY_BLOG_POSTS_2026.length },
    { id: 'AI Consciousness', name: 'AI Consciousness', count: REVOLUTIONARY_BLOG_POSTS_2026.filter(post => post.category === 'AI Consciousness').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: REVOLUTIONARY_BLOG_POSTS_2026.filter(post => post.category === 'Quantum Computing').length },
    { id: 'Neural Interface', name: 'Neural Interface', count: REVOLUTIONARY_BLOG_POSTS_2026.filter(post => post.category === 'Neural Interface').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? REVOLUTIONARY_BLOG_POSTS_2026 
    : REVOLUTIONARY_BLOG_POSTS_2026.filter(post => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'AI Consciousness': 'from-purple-600 to-pink-600',
      'Quantum Computing': 'from-cyan-600 to-blue-600',
      'Neural Interface': 'from-green-600 to-teal-600'
    };
    return colors[category] || 'from-gray-600 to-gray-700';
  };

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-gray-100">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Revolutionary Tech Insights 2026
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Stay ahead of the curve with the latest insights, breakthroughs, and trends in AI, quantum computing, and emerging technologies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                <span>{category.name}</span>
                <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === 'all' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="lg:flex">
                {/* Featured Image */}
                <div className="lg:w-1/2 h-64 lg:h-auto bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-6 left-6">
                    <span className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                      FEATURED POST
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{REVOLUTIONARY_BLOG_POSTS_2026[0].views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{REVOLUTIONARY_BLOG_POSTS_2026[0].likes.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{REVOLUTIONARY_BLOG_POSTS_2026[0].readTime}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Featured Content */}
                <div className="lg:w-1/2 p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className={`bg-gradient-to-r ${getCategoryColor(REVOLUTIONARY_BLOG_POSTS_2026[0].category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                      {REVOLUTIONARY_BLOG_POSTS_2026[0].category}
                    </span>
                    {REVOLUTIONARY_BLOG_POSTS_2026[0].isNew && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>

                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {REVOLUTIONARY_BLOG_POSTS_2026[0].title}
                  </h3>

                  <p className="text-lg text-gray-600 mb-6">
                    {REVOLUTIONARY_BLOG_POSTS_2026[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <User className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{REVOLUTIONARY_BLOG_POSTS_2026[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-5 h-5 text-gray-400" />
                        <span className="text-gray-600">{formatDate(REVOLUTIONARY_BLOG_POSTS_2026[0].publishDate)}</span>
                      </div>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${REVOLUTIONARY_BLOG_POSTS_2026[0].id}`}
                    className="inline-flex items-center space-x-2 bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Blog Posts Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.div
              key={post.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              {/* Post Image */}
              <div className={`h-48 bg-gradient-to-br ${getCategoryColor(post.category)} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <span className={`bg-gradient-to-r ${getCategoryColor(post.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {post.category}
                  </span>
                  {post.isNew && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                      NEW
                    </span>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">{post.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{post.likes.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Author and Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <User className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{formatDate(post.publishDate)}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/blog/${post.id}`}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 group"
                >
                  <span>Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">
              Stay Updated with the Latest Tech Insights
            </h3>
            <p className="text-xl mb-6 text-purple-100">
              Get exclusive access to breakthrough research, industry insights, and future predictions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/blog"
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                View All Articles
              </Link>
              <Link
                to="/newsletter"
                className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Subscribe to Newsletter
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RevolutionaryBlogShowcase2026;