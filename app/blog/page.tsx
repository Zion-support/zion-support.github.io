'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, User, Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.',
      author: 'Zion Tech Team',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/api/placeholder/400/250',
      slug: 'future-ai-business-2024-trends'
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Barriers',
      excerpt: 'Understanding quantum computing fundamentals and its potential impact on solving complex business problems.',
      author: 'Dr. Sarah Chen',
      date: 'December 10, 2024',
      readTime: '8 min read',
      category: 'Quantum Computing',
      image: '/api/placeholder/400/250',
      slug: 'quantum-computing-barriers'
    },
    {
      id: 3,
      title: 'Digital Transformation: A Complete Guide for Enterprises',
      excerpt: 'Learn the essential steps for successful digital transformation and avoid common pitfalls that derail projects.',
      author: 'Michael Rodriguez',
      date: 'December 5, 2024',
      readTime: '12 min read',
      category: 'Digital Transformation',
      image: '/api/placeholder/400/250',
      slug: 'digital-transformation-enterprise-guide'
    },
    {
      id: 4,
      title: 'Cybersecurity Best Practices for AI-Powered Systems',
      excerpt: 'Protect your AI infrastructure with these essential security measures and compliance guidelines.',
      author: 'Alex Thompson',
      date: 'November 28, 2024',
      readTime: '6 min read',
      category: 'Cybersecurity',
      image: '/api/placeholder/400/250',
      slug: 'cybersecurity-ai-systems'
    },
    {
      id: 5,
      title: 'Cloud Migration Strategies: From Planning to Execution',
      excerpt: 'A comprehensive guide to migrating your infrastructure to the cloud with minimal disruption.',
      author: 'Jennifer Lee',
      date: 'November 20, 2024',
      readTime: '10 min read',
      category: 'Cloud Computing',
      image: '/api/placeholder/400/250',
      slug: 'cloud-migration-strategies'
    },
    {
      id: 6,
      title: 'Machine Learning in Healthcare: Real-World Applications',
      excerpt: 'Discover how machine learning is revolutionizing healthcare and improving patient outcomes.',
      author: 'Dr. Robert Kim',
      date: 'November 15, 2024',
      readTime: '7 min read',
      category: 'Healthcare AI',
      image: '/api/placeholder/400/250',
      slug: 'machine-learning-healthcare-applications'
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
        <title>Blog | Zion Tech Group - AI & Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, technology trends, and digital transformation. Expert articles from Zion Tech Group." />
        <meta name="keywords" content="AI blog, technology insights, digital transformation, machine learning, quantum computing, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Tech Insights
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Stay ahead with the latest insights on AI, technology trends, and digital transformation from our expert team.
              </p>
              
              {/* Search Bar */}
              <div className="max-w-2xl mx-auto relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="aspect-video bg-gradient-to-br from-purple-500 to-blue-600 relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-300 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
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
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
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
      </div>
    </>
  );
};

export default BlogPage;

