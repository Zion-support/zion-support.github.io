'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Calendar, User, ArrowRight, Tag, Clock } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital landscape.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 2,
      title: '5G Implementation: Transforming Industries with Ultra-Fast Connectivity',
      excerpt: 'Discover how 5G technology is revolutionizing various industries and creating new opportunities for innovation.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: '5G & Connectivity',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Migration Best Practices: A Complete Guide',
      excerpt: 'Learn the essential steps and strategies for successful cloud migration that minimizes risks and maximizes benefits.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity in 2024: Protecting Your Digital Assets',
      excerpt: 'Stay ahead of cyber threats with the latest security strategies and technologies for modern businesses.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 5,
      title: 'Micro SAAS Solutions: The Future of Business Software',
      excerpt: 'Explore how micro SAAS applications are changing the way businesses approach software solutions.',
      author: 'Zion Tech Group',
      date: '2023-12-28',
      readTime: '4 min read',
      category: 'Micro SAAS',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 6,
      title: 'Digital Transformation: A Strategic Approach',
      excerpt: 'Learn how to successfully navigate digital transformation and position your business for future growth.',
      author: 'Zion Tech Group',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ]

  const categories = [
    'All Posts',
    'AI & Technology',
    '5G & Connectivity',
    'Cloud Computing',
    'Cybersecurity',
    'Micro SAAS',
    'Digital Transformation'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology trends, and industry updates from Zion Tech Group." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
              Stay updated with the latest insights on AI, technology trends, and industry updates from our experts.
            </p>
          </div>

          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
            {blogPosts.filter(post => post.featured).map((post) => (
              <div key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8" />
                      </div>
                      <p className="text-sm opacity-80">Featured Article</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-purple-600/20 text-purple-300 text-xs font-medium rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 hover:text-purple-300 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white text-sm font-medium">{post.author}</p>
                          <p className="text-gray-400 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Tag className="w-6 h-6" />
                      </div>
                      <p className="text-xs opacity-80">{post.category}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="px-2 py-1 bg-blue-600/20 text-blue-300 text-xs font-medium rounded">
                        {post.category}
                      </span>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-purple-300 transition-colors cursor-pointer line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <div>
                          <p className="text-white text-xs font-medium">{post.author}</p>
                          <p className="text-gray-400 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest insights on AI, technology trends, and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center">
                Subscribe
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
