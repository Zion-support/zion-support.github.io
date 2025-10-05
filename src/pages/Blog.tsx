import React from 'react';

import { Calendar, Clock, User, ArrowRight, Tag, Search } from 'lucide-react';

import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';





;

const Blog: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2025 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Sarah Johnson',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'AI & Machine Learning',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
      excerpt: 'Learn how micro SaaS applications are revolutionizing software delivery and creating new opportunities for businesses.',
      author: 'Michael Chen',
      date: '2025-01-12',
      readTime: '7 min read',
      category: 'Micro SaaS',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Comprehensive guide to successful cloud migration strategies, common pitfalls, and how to ensure smooth transitions.',
      author: 'David Thompson',
      date: '2025-01-10',
      readTime: '8 min read',
      category: 'Cloud & DevOps',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in 2025: Protecting Your Digital Assets',
      excerpt: 'Essential cybersecurity strategies and tools every business needs to protect against evolving threats.',
      author: 'Emily Rodriguez',
      date: '2025-01-08',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Data Analytics: Turning Information into Business Intelligence',
      excerpt: 'How to leverage data analytics to make informed business decisions and gain competitive advantages.',
      author: 'Sarah Johnson',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'The Rise of No-Code/Low-Code Development Platforms',
      excerpt: 'Exploring how no-code and low-code platforms are democratizing software development and accelerating innovation.',
      author: 'Michael Chen',
      date: '2025-01-03',
      readTime: '6 min read',
      category: 'Development',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = [
    'All',
    'AI & Machine Learning',
    'Micro SaaS',
    'Cloud & DevOps',
    'Cybersecurity',
    'Data Analytics',
    'Development'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology trends, and business transformation from Zion Tech Group's expert team." />
        <meta name="keywords" content="AI blog, technology insights, business transformation, machine learning, cloud computing, cybersecurity" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technology Insights & Trends
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Stay ahead of the curve with expert insights on AI, technology trends, 
                and business transformation strategies from our team of specialists.
              </p>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      category === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 flex items-center">
                    <div>
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-20 text-white text-sm font-medium mb-4">
                        <Tag className="w-4 h-4 mr-1" />
                        Featured Article
                      </div>
                      <h2 className="text-3xl font-bold text-white mb-4">
                        {featuredPost.title}
                      </h2>
                      <p className="text-blue-100 mb-6">
                        {featuredPost.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-blue-100 text-sm mb-6">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {featuredPost.readTime}
                        </div>
                      </div>
                      <Link
                        to={`/blog/${featuredPost.id}`}
                        className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Read Article
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                  <div className="bg-gray-100 flex items-center justify-center p-8">
                    <div className="w-full h-64 bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                      <span className="text-gray-500">Featured Image</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Article Image</span>
                </div>
                <div className="p-6">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss an article. Get weekly insights 
              on AI, technology trends, and business transformation delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              />
              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Blog;