'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in artificial intelligence and how they\'re transforming modern businesses.',
      author: 'Zion Tech Team',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Best Practices for Enterprise Applications',
      excerpt: 'Learn how to optimize your cloud infrastructure for better performance and cost efficiency.',
      author: 'Zion Tech Team',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Cloud Solutions',
      image: '/api/placeholder/400/250'
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Discover essential cybersecurity strategies to protect your business in an AI-driven world.',
      author: 'Zion Tech Team',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Security',
      image: '/api/placeholder/400/250'
    },
    {
      id: 4,
      title: 'Digital Transformation: A Complete Guide for Modern Businesses',
      excerpt: 'Everything you need to know about digital transformation and how to implement it successfully.',
      author: 'Zion Tech Team',
      date: 'November 28, 2024',
      readTime: '8 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/400/250'
    },
    {
      id: 5,
      title: 'Machine Learning for Business Intelligence: Getting Started',
      excerpt: 'A beginner\'s guide to implementing machine learning solutions for business intelligence.',
      author: 'Zion Tech Team',
      date: 'November 20, 2024',
      readTime: '6 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250'
    },
    {
      id: 6,
      title: 'API Management: Best Practices for Modern Applications',
      excerpt: 'Learn how to effectively manage APIs in your modern application architecture.',
      author: 'Zion Tech Team',
      date: 'November 15, 2024',
      readTime: '5 min read',
      category: 'Development',
      image: '/api/placeholder/400/250'
    }
  ];

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology, and digital transformation from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, digital transformation, cloud solutions, cybersecurity, machine learning" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Tech Insights & Blog
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Stay ahead with the latest insights on AI, technology, and digital transformation from our expert team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-amber-500/20 to-blue-600/20 flex items-center justify-center">
                    <div className="text-6xl opacity-50">📄</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </span>
                    </div>
                    
                    <div className="mb-3">
                      <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <button className="flex items-center text-amber-400 hover:text-amber-300 font-medium group-hover:translate-x-1 transition-all">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter for the latest tech insights and industry updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogPage;