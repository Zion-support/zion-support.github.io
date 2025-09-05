import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { User, Calendar, ArrowRight, Tag } from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 'ai-transformation-2025',
    title: 'AI Transformation Trends for 2025',
    excerpt: 'Discover the latest AI trends and how they\'re reshaping business operations across industries.',
    author: 'Zion Tech Team',
    date: '2024-01-15',
    readTime: '5 min read',
    tags: ['AI', 'Technology', 'Innovation']
  },
  {
    id: 'micro-saas-success',
    title: 'Building Successful Micro SAAS Solutions',
    excerpt: 'Learn the key strategies for developing and scaling micro SAAS products that solve real business problems.',
    author: 'Kleber Santos',
    date: '2024-01-10',
    readTime: '7 min read',
    tags: ['Micro SAAS', 'Business', 'Strategy']
  },
  {
    id: 'cloud-migration-guide',
    title: 'Complete Guide to Cloud Migration',
    excerpt: 'Everything you need to know about migrating your infrastructure to the cloud successfully.',
    author: 'IT Solutions Team',
    date: '2024-01-05',
    readTime: '8 min read',
    tags: ['Cloud', 'Migration', 'IT Services']
  },
  {
    id: 'cybersecurity-best-practices',
    title: 'Cybersecurity Best Practices for 2025',
    excerpt: 'Essential cybersecurity measures every business should implement to protect their digital assets.',
    author: 'Security Team',
    date: '2024-01-01',
    readTime: '6 min read',
    tags: ['Cybersecurity', 'Security', 'Best Practices']
  },
  {
    id: 'machine-learning-implementation',
    title: 'Machine Learning Implementation Guide',
    excerpt: 'A comprehensive guide to implementing machine learning solutions in your business processes.',
    author: 'AI Research Team',
    date: '2023-12-28',
    readTime: '9 min read',
    tags: ['Machine Learning', 'AI', 'Implementation']
  },
  {
    id: 'data-analytics-trends',
    title: 'Data Analytics Trends for Modern Businesses',
    excerpt: 'How data analytics is revolutionizing decision-making and business intelligence.',
    author: 'Data Science Team',
    date: '2023-12-20',
    readTime: '6 min read',
    tags: ['Data Analytics', 'Business Intelligence', 'Trends']
  }
];

export default function BlogPage() {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Latest insights on AI, technology trends, and business innovation from Zion Tech Group experts."
      keywords="blog, AI insights, technology trends, business innovation, Zion Tech Group"
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Tech Insights & Innovation
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Stay ahead with the latest insights on AI, technology trends, and business innovation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.tags[0]}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <User className="w-4 h-4 mr-2" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-700 font-semibold group"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get the latest insights and updates delivered directly to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}