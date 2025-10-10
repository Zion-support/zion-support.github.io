'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar, User, ArrowRight, Search, Filter, Clock, Tag, Eye, ThumbsUp, MessageCircle, Share, BookOpen, Brain, Cloud, Shield, Code, BarChart, Zap, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, FileText } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: Trends and Predictions for 2024',
      excerpt: 'Explore the latest trends in enterprise AI adoption, from machine learning automation to quantum computing integration.',
      content: 'Artificial Intelligence is revolutionizing how businesses operate, with 2024 bringing unprecedented advances in enterprise AI solutions...',
      author: 'Dr. Kleber Santos',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'AI',
      tags: ['AI', 'Enterprise', 'Machine Learning', 'Automation'],
      image: '/blog/ai-enterprise-trends.jpg',
      views: 1250,
      likes: 89,
      comments: 23
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs Reality',
      excerpt: 'A comprehensive look at quantum computing capabilities, current limitations, and practical applications for businesses.',
      content: 'Quantum computing has been touted as the next revolutionary technology, but what can it actually deliver today?...',
      author: 'Sarah Johnson',
      date: '2024-01-12',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Technology', 'Innovation', 'Research'],
      image: '/blog/quantum-computing-reality.jpg',
      views: 980,
      likes: 67,
      comments: 18
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: Protecting Your Digital Assets',
      excerpt: 'Learn how AI-powered security solutions are changing the cybersecurity landscape and protecting businesses from evolving threats.',
      content: 'As cyber threats become more sophisticated, AI-powered security solutions are becoming essential for protecting digital assets...',
      author: 'Emily Rodriguez',
      date: '2024-01-10',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Data Protection'],
      image: '/blog/ai-cybersecurity.jpg',
      views: 1100,
      likes: 76,
      comments: 31
    },
    {
      id: 4,
      title: 'Cloud Migration Strategies: A Complete Guide for 2024',
      excerpt: 'Everything you need to know about migrating to the cloud, including best practices, common pitfalls, and cost optimization.',
      content: 'Cloud migration is no longer optional for modern businesses. Here\'s how to plan and execute a successful migration...',
      author: 'Michael Chen',
      date: '2024-01-08',
      readTime: '15 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Computing', 'Migration', 'AWS', 'Azure', 'GCP'],
      image: '/blog/cloud-migration-guide.jpg',
      views: 1450,
      likes: 92,
      comments: 28
    },
    {
      id: 5,
      title: 'Building Scalable Microservices Architecture with AI',
      excerpt: 'Discover how to design and implement microservices that can scale with AI workloads and handle massive data processing.',
      content: 'Microservices architecture combined with AI capabilities can create powerful, scalable systems that adapt to changing demands...',
      author: 'Dr. Kleber Santos',
      date: '2024-01-05',
      readTime: '11 min read',
      category: 'Architecture',
      tags: ['Microservices', 'AI', 'Scalability', 'Architecture', 'DevOps'],
      image: '/blog/microservices-ai.jpg',
      views: 890,
      likes: 54,
      comments: 15
    },
    {
      id: 6,
      title: 'Data Analytics Revolution: From Insights to Action',
      excerpt: 'How modern data analytics platforms are transforming raw data into actionable business insights and competitive advantages.',
      content: 'The data analytics landscape has evolved dramatically, with new tools and techniques enabling deeper insights than ever before...',
      author: 'Sarah Johnson',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Data Analytics',
      tags: ['Data Analytics', 'Business Intelligence', 'Machine Learning', 'Insights'],
      image: '/blog/data-analytics-revolution.jpg',
      views: 1200,
      likes: 71,
      comments: 22
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'AI', name: 'AI', count: blogPosts.filter(post => post.category === 'AI').length },
    { id: 'Quantum Computing', name: 'Quantum Computing', count: blogPosts.filter(post => post.category === 'Quantum Computing').length },
    { id: 'Cybersecurity', name: 'Cybersecurity', count: blogPosts.filter(post => post.category === 'Cybersecurity').length },
    { id: 'Cloud Computing', name: 'Cloud Computing', count: blogPosts.filter(post => post.category === 'Cloud Computing').length },
    { id: 'Architecture', name: 'Architecture', count: blogPosts.filter(post => post.category === 'Architecture').length },
    { id: 'Data Analytics', name: 'Data Analytics', count: blogPosts.filter(post => post.category === 'Data Analytics').length }
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Blog | Zion Tech Group - AI and Technology Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and technology trends from Zion Tech Group experts." />
        <meta name="keywords" content="AI blog, technology insights, quantum computing, cybersecurity, cloud computing, data analytics, tech trends" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Tech Blog">
            <span className="text-cyan-400 neon-text">Tech</span> Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Stay ahead with the latest insights on <span className="text-cyan-400 font-bold">AI, quantum computing, cybersecurity, and technology trends</span> from our expert team.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search blog posts..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none">
                    {categories.map((category) => (
                      <option key={category.id} value={category.id} className="bg-slate-800">
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.slice(1).map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 neon-text">Featured Article</h2>
          <div className="cyber-card group hover:scale-105 transition-all duration-300">
            <div className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/3">
                  <div className="w-full h-64 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-16 h-16 text-white" />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {featuredPost.views}
                      </div>
                    </div>
                    <a
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white neon-text">
              {selectedCategory === 'all' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <span className="text-cyan-400 font-semibold">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="cyber-card group hover:scale-105 transition-all duration-300">
                <div className="p-6">
                  <div className="w-full h-48 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-slate-800/50 text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {post.views}
                      </div>
                      <div className="flex items-center">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        {post.likes}
                      </div>
                    </div>
                  </div>
                  
                  <a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold text-white mb-4">No articles found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or category filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights on AI, technology trends, and industry best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
              />
              <button className="cyber-button px-6 py-3">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;