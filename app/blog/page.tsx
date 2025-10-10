'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search, Filter, Clock, Tag, Eye } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping enterprise operations and driving unprecedented business value.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      category: 'AI & Machine Learning',
      readTime: '5 min read',
      image: '/images/blog/ai-enterprise-2024.jpg',
      views: 1250,
      tags: ['AI', 'Enterprise', 'Trends', '2024']
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Barriers in Data Processing',
      excerpt: 'Discover how quantum computing is revolutionizing data processing and what it means for your business.',
      author: 'Michael Chen',
      date: '2024-01-10',
      category: 'Quantum Computing',
      readTime: '7 min read',
      image: '/images/blog/quantum-computing.jpg',
      views: 980,
      tags: ['Quantum', 'Computing', 'Data Processing']
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Remote Work Environments',
      excerpt: 'Essential security measures to protect your remote workforce and sensitive business data.',
      author: 'Emily Rodriguez',
      date: '2024-01-05',
      category: 'Cybersecurity',
      readTime: '6 min read',
      image: '/images/blog/cybersecurity-remote.jpg',
      views: 2100,
      tags: ['Cybersecurity', 'Remote Work', 'Best Practices']
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide',
      excerpt: 'Step-by-step guide to successfully migrating your infrastructure to the cloud.',
      author: 'David Kim',
      date: '2024-01-01',
      category: 'Cloud Computing',
      readTime: '8 min read',
      image: '/images/blog/cloud-migration.jpg',
      views: 1750,
      tags: ['Cloud', 'Migration', 'Infrastructure']
    },
    {
      id: 5,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'How AI and ML are revolutionizing healthcare delivery and improving patient outcomes.',
      author: 'Dr. Sarah Johnson',
      date: '2023-12-28',
      category: 'AI & Machine Learning',
      readTime: '9 min read',
      image: '/images/blog/ml-healthcare.jpg',
      views: 3200,
      tags: ['Machine Learning', 'Healthcare', 'AI']
    },
    {
      id: 6,
      title: 'Data Privacy Regulations: What You Need to Know in 2024',
      excerpt: 'Comprehensive overview of data privacy laws and compliance requirements for businesses.',
      author: 'Emily Rodriguez',
      date: '2023-12-20',
      category: 'Data Privacy',
      readTime: '6 min read',
      image: '/images/blog/data-privacy.jpg',
      views: 1450,
      tags: ['Data Privacy', 'Compliance', 'Regulations']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'AI & Machine Learning', name: 'AI & ML', count: blogPosts.filter(post => post.category === 'AI & Machine Learning').length },
    { id: 'Quantum Computing', name: 'Quantum', count: blogPosts.filter(post => post.category === 'Quantum Computing').length },
    { id: 'Cybersecurity', name: 'Security', count: blogPosts.filter(post => post.category === 'Cybersecurity').length },
    { id: 'Cloud Computing', name: 'Cloud', count: blogPosts.filter(post => post.category === 'Cloud Computing').length },
    { id: 'Data Privacy', name: 'Privacy', count: blogPosts.filter(post => post.category === 'Data Privacy').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, IT insights, technology trends, cybersecurity, cloud computing, machine learning, Zion Tech Group" />
      </Helmet>

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
              Stay ahead of the curve with expert insights on AI, IT solutions, 
              and the latest technology trends.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'all' && (
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Eye className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-semibold">Featured Image</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-blue-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                      Featured
                    </span>
                    <span className="ml-4 text-gray-400 text-sm">{featuredPost.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Link
                      to={`/blog/${featuredPost.id}`}
                      className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-gray-400">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-r from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Eye className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm font-semibold">Blog Image</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-white/20 text-white text-xs font-semibold px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.views} views</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-purple-500/20 text-purple-300 text-xs px-2 py-1 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  
                  <Link
                    to={`/blog/${post.id}`}
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-gray-300">
                Try adjusting your search terms or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Subscribe to our newsletter for the latest tech insights and industry updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;