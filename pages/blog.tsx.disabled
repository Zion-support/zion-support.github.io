import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import MainLayout from '../components/layout/MainLayout';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI in Business: Trends and Predictions for 2025',
    excerpt: 'Explore the latest AI trends that are reshaping how businesses operate, from automation to predictive analytics.',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    category: 'AI & Technology',
    readTime: '5 min read',
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'Micro SaaS: Building Scalable Solutions for Modern Businesses',
    excerpt: 'Learn how micro SaaS solutions are revolutionizing business operations and creating new opportunities.',
    author: 'Michael Chen',
    date: '2025-01-12',
    category: 'Business',
    readTime: '7 min read',
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'Cybersecurity Best Practices for Remote Work Environments',
    excerpt: 'Essential security measures to protect your business data in distributed work environments.',
    author: 'Emily Rodriguez',
    date: '2025-01-10',
    category: 'Security',
    readTime: '6 min read',
    image: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: 'Cloud Infrastructure: Choosing the Right Solution for Your Business',
    excerpt: 'A comprehensive guide to selecting and implementing cloud infrastructure that scales with your business.',
    author: 'David Kim',
    date: '2025-01-08',
    category: 'Infrastructure',
    readTime: '8 min read',
    image: '/api/placeholder/600/400'
  }
];

const categories = ['All', 'AI & Technology', 'Business', 'Security', 'Infrastructure', 'Development'];

export default function BlogPage() {
  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology, AI, and business solutions."
      keywords="blog, technology, AI, business, cybersecurity, cloud, micro SaaS"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Tech Insights
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Stay updated with the latest insights, trends, and best practices in technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <Tag className="w-4 h-4 text-blue-600" />
                          <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <span>{post.readTime}</span>
                        </div>
                        <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
                          <span>Read More</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className="block w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Newsletter</h3>
                  <p className="text-gray-600 mb-4">
                    Subscribe to get the latest tech insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}