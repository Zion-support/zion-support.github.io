import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
=======
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Search, Tag, Clock } from 'lucide-react';
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229

const blogPosts = [
  {
    id: 1,
<<<<<<< HEAD
    title: 'The Future of AI in Business: Trends and Predictions for 2025',
    excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.',
    author: 'Sarah Johnson',
    date: '2025-01-15',
    category: 'AI & Machine Learning',
    readTime: '5 min read',
    image: '/api/placeholder/600/300'
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices: Protecting Your Digital Assets',
    excerpt: 'Learn essential cloud security strategies to safeguard your data and infrastructure in an increasingly connected world.',
    author: 'Michael Chen',
    date: '2025-01-12',
    category: 'Cybersecurity',
    readTime: '7 min read',
    image: '/api/placeholder/600/300'
  },
  {
    id: 3,
    title: 'Micro SaaS: Building Scalable Software Solutions',
    excerpt: 'Discover how micro SaaS architecture can help you build focused, scalable software solutions that serve specific market needs.',
    author: 'Emily Rodriguez',
    date: '2025-01-10',
    category: 'Software Development',
    readTime: '6 min read',
    image: '/api/placeholder/600/300'
  },
  {
    id: 4,
    title: 'Digital Transformation: A Complete Guide for Enterprises',
    excerpt: 'Navigate the complexities of digital transformation with our comprehensive guide covering strategy, implementation, and best practices.',
    author: 'David Kim',
    date: '2025-01-08',
    category: 'Digital Transformation',
    readTime: '8 min read',
    image: '/api/placeholder/600/300'
  },
  {
    id: 5,
    title: 'API-First Development: Building Modern Applications',
    excerpt: 'Learn how API-first development approaches can accelerate your application development and improve scalability.',
    author: 'Sarah Johnson',
    date: '2025-01-05',
    category: 'Software Development',
    readTime: '4 min read',
    image: '/api/placeholder/600/300'
  },
  {
    id: 6,
    title: 'Data Privacy in the Age of AI: Compliance and Best Practices',
    excerpt: 'Understand the critical importance of data privacy in AI applications and learn how to implement compliant solutions.',
    author: 'Michael Chen',
    date: '2025-01-03',
    category: 'Data Privacy',
    readTime: '6 min read',
    image: '/api/placeholder/600/300'
=======
    title: 'The Future of AI in Business: Trends to Watch in 2024',
    excerpt: 'Discover the latest AI trends that are transforming how businesses operate and compete in the digital landscape.',
    author: 'Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'AI & Machine Learning',
    image: '/api/placeholder/600/400',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Security Best Practices for Enterprise',
    excerpt: 'Learn essential security measures to protect your cloud infrastructure and sensitive data.',
    author: 'Michael Chen',
    date: '2024-01-12',
    readTime: '7 min read',
    category: 'Cybersecurity',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 3,
    title: 'Building Scalable Microservices Architecture',
    excerpt: 'A comprehensive guide to designing and implementing microservices that can grow with your business.',
    author: 'David Rodriguez',
    date: '2024-01-10',
    readTime: '8 min read',
    category: 'Software Development',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 4,
    title: 'The Rise of Edge Computing: What It Means for Your Business',
    excerpt: 'Explore how edge computing is revolutionizing data processing and what it means for your organization.',
    author: 'Emily Watson',
    date: '2024-01-08',
    readTime: '6 min read',
    category: 'Technology Trends',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 5,
    title: 'Cybersecurity in the Age of Remote Work',
    excerpt: 'Essential security strategies to protect your remote workforce and company data.',
    author: 'Alex Thompson',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Cybersecurity',
    image: '/api/placeholder/600/400',
    featured: false
  },
  {
    id: 6,
    title: 'Digital Transformation: A Step-by-Step Guide',
    excerpt: 'Learn how to successfully navigate your organization through digital transformation.',
    author: 'Lisa Park',
    date: '2024-01-03',
    readTime: '9 min read',
    category: 'Digital Transformation',
    image: '/api/placeholder/600/400',
    featured: false
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  }
];

const categories = [
  'All',
  'AI & Machine Learning',
  'Cybersecurity',
  'Software Development',
<<<<<<< HEAD
  'Digital Transformation',
  'Data Privacy',
  'Cloud Computing'
];

export default function BlogPage() {
  return (
    <Layout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and innovations in technology, AI, and digital transformation."
      keywords="technology blog, AI insights, software development, digital transformation, tech trends"
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-6">
              Technology Insights & News
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Stay updated with the latest trends, insights, and innovations in technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="text-4xl font-bold mb-2">{post.id}</div>
                      <div className="text-sm opacity-80">Featured Post</div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-600 font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
=======
  'Technology Trends',
  'Digital Transformation',
  'Cloud Computing',
  'IoT & Edge Computing'
];

const featuredPost = blogPosts.find(post => post.featured);
const regularPosts = blogPosts.filter(post => !post.featured);

export default function BlogPage() {
  return (
    <MainLayout
      title="Blog - Zion Tech Group"
      description="Stay updated with the latest insights, trends, and best practices in technology and digital transformation."
      keywords="technology blog, AI insights, cybersecurity, software development, digital transformation"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Technology Insights
                <span className="block text-yellow-400">& Best Practices</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
                Stay ahead with expert insights on AI, cybersecurity, cloud computing, and digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      category === 'All'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {featuredPost && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Article</h2>
                <div className="w-20 h-1 bg-blue-600"></div>
              </div>
              
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8 md:p-12">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredPost.category}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {featuredPost.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(featuredPost.date).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </div>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                      </div>
                      <Link
                        href={`/blog/${featuredPost.id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
<<<<<<< HEAD
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.readTime}</span>
                      <Link
                        href={`/blog/${post.id}`}
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
=======
                  </div>
                </div>
              </motion.article>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
              <div className="w-20 h-1 bg-blue-600"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-sm text-gray-500">
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.date).toLocaleDateString()}
                        </div>
                      </div>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
<<<<<<< HEAD

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Load More Posts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Stay Updated with Our Latest Insights
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Subscribe to our newsletter and never miss the latest technology trends and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
=======
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest technology insights delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-yellow-400"
              />
              <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
  );
}