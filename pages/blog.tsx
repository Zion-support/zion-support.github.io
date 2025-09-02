import React from 'react';
import type { NextPage } from 'next';
import MainLayout from '../components/layout/MainLayout';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const Blog: NextPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends shaping the business landscape and how companies can leverage artificial intelligence for competitive advantage.',
      author: 'Zion Tech Group Team',
      date: '2024-01-15',
      category: 'AI & Technology',
      readTime: '5 min read',
      image: '/blog/ai-future.jpg'
    },
    {
      id: 2,
      title: 'Digital Transformation: A Complete Guide for Small Businesses',
      excerpt: 'Learn how small businesses can successfully navigate digital transformation and modernize their operations for the digital age.',
      author: 'Sarah Johnson',
      date: '2024-01-10',
      category: 'Digital Transformation',
      readTime: '8 min read',
      image: '/blog/digital-transformation.jpg'
    },
    {
      id: 3,
      title: 'Building Scalable Web Applications: Best Practices and Architecture',
      excerpt: 'Discover the key principles and technologies for building web applications that can scale with your business growth.',
      author: 'Michael Chen',
      date: '2024-01-05',
      category: 'Development',
      readTime: '6 min read',
      image: '/blog/scalable-apps.jpg'
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: Moving Your Business to the Cloud',
      excerpt: 'A comprehensive guide to planning and executing a successful cloud migration strategy for your organization.',
      author: 'David Rodriguez',
      date: '2024-01-01',
      category: 'Cloud Computing',
      readTime: '7 min read',
      image: '/blog/cloud-migration.jpg'
    },
    {
      id: 5,
      title: 'Cybersecurity Best Practices for Modern Businesses',
      excerpt: 'Essential cybersecurity measures every business should implement to protect their data and systems from threats.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      category: 'Security',
      readTime: '9 min read',
      image: '/blog/cybersecurity.jpg'
    },
    {
      id: 6,
      title: 'The Rise of Micro SaaS: Opportunities for Entrepreneurs',
      excerpt: 'Explore the growing micro SaaS market and learn how to build and launch successful micro SaaS products.',
      author: 'Alex Thompson',
      date: '2023-12-20',
      category: 'Entrepreneurship',
      readTime: '6 min read',
      image: '/blog/micro-saas.jpg'
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Digital Transformation',
    'Development',
    'Cloud Computing',
    'Security',
    'Entrepreneurship'
  ];

  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology, AI, digital transformation, and business innovation."
      keywords="technology blog, AI insights, digital transformation, business technology, tech trends"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            className="text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Technology
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Insights</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Stay ahead of the curve with expert insights on AI, digital transformation, 
            cloud computing, and the latest technology trends shaping the future of business.
          </motion.p>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Featured Image</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium group"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter and never miss the latest insights and technology trends.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;