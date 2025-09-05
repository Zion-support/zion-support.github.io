import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import Layout from '../components/Layout';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends and Predictions for 2024',
    excerpt: 'Explore the latest AI trends and how they\'re transforming business operations across industries.',
    author: 'Zion Tech Team',
    date: '2024-01-15',
    category: 'AI & Machine Learning',
    readTime: '5 min read',
    image: '/images/blog/ai-future.jpg'
  },
  {
    id: 2,
    title: 'Micro SaaS Success: Building Scalable Solutions',
    excerpt: 'Learn the key strategies for building and scaling successful micro SaaS applications.',
    author: 'Zion Tech Team',
    date: '2024-01-10',
    category: 'Micro SaaS',
    readTime: '7 min read',
    image: '/images/blog/micro-saas.jpg'
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Best Practices for 2024',
    excerpt: 'Discover the essential cloud infrastructure practices that will drive efficiency and security.',
    author: 'Zion Tech Team',
    date: '2024-01-05',
    category: 'Cloud Computing',
    readTime: '6 min read',
    image: '/images/blog/cloud-infrastructure.jpg'
  }
];

export default function BlogPage() {
  return (
    <Layout>
      <div className="min-h-screen bg-white">
        <Head>
          <title>Blog - Zion Tech Group</title>
          <meta name="description" content="Stay updated with the latest insights, trends, and best practices in technology." />
          <meta name="keywords" content="technology blog, AI insights, cloud computing, micro SaaS, tech trends" />
        </Head>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Blog</h1>
              <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                Stay updated with the latest insights, trends, and best practices in technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Tag className="w-4 h-4 text-blue-600 mr-2" />
                      <span className="text-sm text-blue-600 font-semibold">{post.category}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <button className="flex items-center text-blue-600 hover:text-blue-800 font-semibold">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter for the latest technology insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}