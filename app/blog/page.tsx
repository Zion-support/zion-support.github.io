'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';

const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: 2024 Trends and Predictions',
      excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI & Technology',
      image: '/images/blog/ai-trends.jpg',
      featured: true
    },
    {
      id: 2,
      title: 'Building Scalable Micro SaaS Applications: A Complete Guide',
      excerpt: 'Learn how to build and scale micro SaaS applications that generate recurring revenue while serving specific market needs.',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '8 min read',
      category: 'Development',
      image: '/images/blog/micro-saas.jpg',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Security Best Practices for Enterprise Applications',
      excerpt: 'Essential security measures and best practices to protect your cloud infrastructure and sensitive data from cyber threats.',
      author: 'Zion Tech Group',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Security',
      image: '/images/blog/cloud-security.jpg',
      featured: false
    },
    {
      id: 4,
      title: 'Machine Learning in Healthcare: Transforming Patient Care',
      excerpt: 'Discover how machine learning is revolutionizing healthcare through predictive analytics, diagnosis assistance, and personalized treatment.',
      author: 'Zion Tech Group',
      date: '2024-01-01',
      readTime: '7 min read',
      category: 'AI & Technology',
      image: '/images/blog/ml-healthcare.jpg',
      featured: false
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Bringing AI Closer to Data',
      excerpt: 'Understanding edge computing and its role in enabling real-time AI processing for IoT devices and autonomous systems.',
      author: 'Zion Tech Group',
      date: '2023-12-28',
      readTime: '5 min read',
      category: 'Cloud Computing',
      image: '/images/blog/edge-computing.jpg',
      featured: false
    },
    {
      id: 6,
      title: 'Building Resilient APIs: Design Patterns and Best Practices',
      excerpt: 'Learn how to design and implement robust APIs that can handle high traffic, failures, and evolving requirements.',
      author: 'Zion Tech Group',
      date: '2023-12-25',
      readTime: '9 min read',
      category: 'Development',
      image: '/images/blog/api-design.jpg',
      featured: false
    }
  ];

  const categories = ['All', 'AI & Technology', 'Cloud Computing', 'Security', 'Development'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Zion Tech Group | AI & IT Insights</title>
        <meta name="description" content="Stay updated with the latest insights on AI, IT solutions, cloud computing, and technology trends from Zion Tech Group experts." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-cyan-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest insights on AI, IT solutions, cloud computing, 
              and technology trends from our expert team.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-slate-800/50 text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && selectedCategory === 'All' && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-8">Featured Article</h2>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Calendar className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-cyan-400 font-semibold">Featured Article</p>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full">{featuredPost.category}</span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{featuredPost.author}</p>
                          <p className="text-gray-400 text-sm">{new Date(featuredPost.date).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                        <span>Read More</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-cyan-400 font-semibold text-sm">Article</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs">{post.category}</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">{post.author}</p>
                        <p className="text-gray-400 text-xs">{new Date(post.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-12 border border-cyan-500/20 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest insights on AI, IT solutions, 
                and technology trends delivered to your inbox.
              </p>
              <div className="max-w-md mx-auto flex space-x-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;