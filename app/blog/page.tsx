'use client';
import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Filter, Tag, TrendingUp, Star, Eye, MessageSquare, Share2, BookOpen, Brain, Cloud, Shield, Code, BarChart, Zap, Target, Globe, Database, Smartphone, Settings, Lock, Users, Award, Phone, Mail } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('latest');

  const categories = [
    'All',
    'AI & Machine Learning',
    'IT Infrastructure',
    'Cybersecurity',
    'Cloud Computing',
    'Digital Transformation',
    'Case Studies',
    'Industry News',
    'Technology Trends'
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'AI-Powered Autonomous Business Processes: The Future of Enterprise Operations',
      excerpt: 'Discover how AI is revolutionizing business operations with autonomous decision-making and process optimization.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      authorImage: '/team/sarah-chen.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Automation', 'Business Process', 'Enterprise'],
      image: '/blog/ai-autonomous-business.jpg',
      views: 1250,
      likes: 89,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Through Traditional Computing Barriers',
      excerpt: 'Explore the revolutionary potential of quantum computing and its applications in solving complex business problems.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      authorImage: '/team/michael-rodriguez.jpg',
      publishDate: '2025-01-12',
      readTime: '12 min read',
      category: 'Technology Trends',
      tags: ['Quantum Computing', 'Innovation', 'Technology', 'Future'],
      image: '/blog/quantum-computing.jpg',
      views: 980,
      likes: 67,
      comments: 18,
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Learn about the latest cybersecurity threats and how AI-powered solutions can protect your business.',
      content: 'Full article content...',
      author: 'Dr. Emily Watson',
      authorImage: '/team/emily-watson.jpg',
      publishDate: '2025-01-10',
      readTime: '6 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Digital Protection', 'Threats'],
      image: '/blog/ai-cybersecurity.jpg',
      views: 1450,
      likes: 112,
      comments: 31,
      featured: true
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide for Enterprise',
      excerpt: 'Comprehensive guide to planning and executing successful cloud migration for large organizations.',
      content: 'Full article content...',
      author: 'Kleber Santos',
      authorImage: '/team/kleber-santos.jpg',
      publishDate: '2025-01-08',
      readTime: '15 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Migration', 'Enterprise', 'Strategy', 'Best Practices'],
      image: '/blog/cloud-migration.jpg',
      views: 2100,
      likes: 156,
      comments: 42,
      featured: false
    },
    {
      id: 5,
      title: 'Case Study: How AI Transformed a Fortune 500 Company\'s Operations',
      excerpt: 'Real-world example of AI implementation that resulted in 300% ROI and 95% process automation.',
      content: 'Full article content...',
      author: 'Dr. Sarah Chen',
      authorImage: '/team/sarah-chen.jpg',
      publishDate: '2025-01-05',
      readTime: '10 min read',
      category: 'Case Studies',
      tags: ['Case Study', 'ROI', 'Success Story', 'AI Implementation'],
      image: '/blog/fortune-500-case-study.jpg',
      views: 3200,
      likes: 234,
      comments: 67,
      featured: true
    },
    {
      id: 6,
      title: 'The Future of IT Infrastructure: Edge Computing and IoT Integration',
      excerpt: 'Understanding how edge computing and IoT are reshaping IT infrastructure for modern businesses.',
      content: 'Full article content...',
      author: 'Michael Rodriguez',
      authorImage: '/team/michael-rodriguez.jpg',
      publishDate: '2025-01-03',
      readTime: '9 min read',
      category: 'IT Infrastructure',
      tags: ['Edge Computing', 'IoT', 'Infrastructure', 'Future Tech'],
      image: '/blog/edge-computing-iot.jpg',
      views: 1800,
      likes: 98,
      comments: 25,
      featured: false
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'latest':
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime();
        case 'popular':
          return b.views - a.views;
        case 'trending':
          return b.likes - a.likes;
        default:
          return 0;
      }
    });

  const featuredPosts = blogPosts.filter(post => post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Our Blog
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in AI, IT solutions, and technology.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="cyber-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            >
              <option value="latest">Latest</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>
          </div>
        </div>

        {/* Featured Posts */}
        {searchTerm === '' && selectedCategory === 'All' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post) => (
                <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-medium">{post.author}</div>
                      <div className="text-gray-400 text-sm">{post.publishDate}</div>
                    </div>
                    <div className="flex items-center text-yellow-400 ml-auto">
                      <Star className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </span>
                      <span className="flex items-center">
                        <MessageSquare className="w-4 h-4 mr-1" />
                        {post.comments}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {post.tags.slice(0, 2).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">
            {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'All Articles'}
            <span className="text-gray-400 text-lg ml-2">({filteredPosts.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <article key={post.id} className="cyber-card p-6 hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xs">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-medium text-sm">{post.author}</div>
                    <div className="text-gray-400 text-xs">{post.publishDate}</div>
                  </div>
                  {post.featured && (
                    <div className="flex items-center text-yellow-400 ml-auto">
                      <Star className="w-4 h-4" />
                    </div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 text-xs text-gray-400">
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center">
                      <Eye className="w-3 h-3 mr-1" />
                      {post.views}
                    </span>
                    <span className="flex items-center">
                      <MessageSquare className="w-3 h-3 mr-1" />
                      {post.comments}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="cyber-card p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights, trends, and innovations in AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <button className="cyber-button px-6 py-3">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;