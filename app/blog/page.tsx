'use client';

import React from 'react';
import { ArrowRight, Calendar, User, Clock, Tag, Search } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'ai-future-business',
      title: 'The Future of AI in Business: Trends to Watch in 2024',
      excerpt: 'Explore the latest AI trends that are reshaping how businesses operate and compete in the digital age.',
      author: 'Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/600/400',
      featured: true
    },
    {
      id: 'cloud-migration-guide',
      title: 'Complete Guide to Cloud Migration: Best Practices and Strategies',
      excerpt: 'Learn the essential steps and best practices for successfully migrating your infrastructure to the cloud.',
      author: 'Michael Chen',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'cybersecurity-essentials',
      title: 'Cybersecurity Essentials: Protecting Your Business in 2024',
      excerpt: 'Discover the critical cybersecurity measures every business should implement to protect against modern threats.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation: A Step-by-Step Implementation Guide',
      excerpt: 'Navigate the complexities of digital transformation with our comprehensive implementation guide.',
      author: 'David Kim',
      date: '2024-01-01',
      readTime: '10 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'data-analytics-insights',
      title: 'Unlocking Business Insights with Advanced Data Analytics',
      excerpt: 'Learn how to leverage data analytics to drive better business decisions and improve performance.',
      author: 'Lisa Wang',
      date: '2023-12-28',
      readTime: '7 min read',
      category: 'Data Analytics',
      image: '/api/placeholder/600/400',
      featured: false
    },
    {
      id: 'mobile-app-development',
      title: 'Mobile App Development: Native vs Cross-Platform Solutions',
      excerpt: 'Compare native and cross-platform mobile development approaches to choose the best solution for your project.',
      author: 'Alex Thompson',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Mobile Development',
      image: '/api/placeholder/600/400',
      featured: false
    }
  ];

  const categories = [
    'All Posts',
    'AI & Technology',
    'Cloud Computing',
    'Security',
    'Digital Transformation',
    'Data Analytics',
    'Mobile Development'
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group</title>
        <meta name="description" content="Stay updated with the latest insights on AI, cloud computing, cybersecurity, and digital transformation from our expert team at Zion Tech Group." />
        <meta name="keywords" content="blog, AI insights, cloud computing, cybersecurity, digital transformation, technology trends, Zion Tech Group" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Stay informed with the latest insights on AI, cloud computing, cybersecurity, 
            and digital transformation from our expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Subscribe to Newsletter
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    index === 0
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
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
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-12">
              <div className="flex items-center mb-4">
                <Tag className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-400 text-sm font-medium">Featured Post</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {featuredPost.title}
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center text-gray-400">
                    <User className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{featuredPost.readTime}</span>
                  </div>
                </div>
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
                  {featuredPost.category}
                </span>
              </div>
              <Link
                to={`/blog/${featuredPost.id}`}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-gray-400 text-sm">
                    <User className="w-4 h-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">{post.date}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and never miss the latest insights on AI, cloud computing, and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
