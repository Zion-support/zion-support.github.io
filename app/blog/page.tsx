'use client';

import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Filter, TrendingUp, Star, Eye, MessageCircle, BookOpen, Brain, Cloud, Shield, Code } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { name: 'all', label: 'All Posts', count: 24 },
    { name: 'ai', label: 'Artificial Intelligence', count: 8 },
    { name: 'cloud', label: 'Cloud Computing', count: 6 },
    { name: 'security', label: 'Cybersecurity', count: 4 },
    { name: 'business', label: 'Business', count: 3 },
    { name: 'technology', label: 'Technology', count: 3 }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of AI in Enterprise: 2024 Trends and Predictions',
    excerpt: 'Explore the latest AI trends that are reshaping enterprise operations and driving unprecedented business value.',
    author: 'Dr. Sarah Johnson',
    authorRole: 'CTO',
    date: '2024-01-15',
    category: 'ai',
    readTime: '8 min read',
    views: 1250,
    likes: 89
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Cloud Migration Strategies for Modern Businesses',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud safely and efficiently.',
      author: 'Michael Chen',
      authorRole: 'Cloud Architect',
      date: '2024-01-12',
      category: 'cloud',
      readTime: '6 min read',
      views: 980,
      likes: 67
    },
    {
      id: 3,
      title: 'Cybersecurity Best Practices for 2024',
      excerpt: 'Essential security measures every organization should implement to protect against evolving threats.',
      author: 'Emily Rodriguez',
      authorRole: 'Security Expert',
      date: '2024-01-10',
      category: 'security',
      readTime: '5 min read',
      views: 1100,
      likes: 78
    },
    {
      id: 4,
      title: 'Building Scalable AI Applications',
      excerpt: 'Technical insights on creating AI applications that can handle enterprise-scale workloads.',
      author: 'David Kim',
      authorRole: 'Lead Engineer',
      date: '2024-01-08',
      category: 'ai',
      readTime: '7 min read',
      views: 850,
      likes: 56
    },
    {
      id: 5,
      title: 'The Business Impact of Digital Transformation',
      excerpt: 'How digital transformation is reshaping industries and creating new opportunities.',
      author: 'Kleber Santos',
      authorRole: 'CEO',
      date: '2024-01-05',
      category: 'business',
      readTime: '4 min read',
      views: 720,
      likes: 45
    },
    {
      id: 6,
      title: 'Edge Computing: The Next Frontier',
      excerpt: 'Understanding edge computing and its role in the future of distributed systems.',
      author: 'Sarah Johnson',
      authorRole: 'CTO',
      date: '2024-01-03',
      category: 'technology',
      readTime: '6 min read',
      views: 650,
      likes: 42
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="Blog - Zion Tech Group"
        description="Latest insights on AI, cloud computing, cybersecurity, and technology trends. Expert articles from our team of specialists."
        keywords="AI blog, technology insights, cloud computing, cybersecurity, business technology, AI trends"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Our
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Insights, trends, and expert perspectives on AI, technology, and business transformation.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`flex items-center px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Article</h2>
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="h-64 lg:h-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="w-8 h-8 text-purple-400" />
                  </div>
                  <span className="text-gray-300">Featured Article</span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-sm rounded">
                    {categories.find(c => c.name === featuredPost.category)?.label}
                  </span>
                  <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>
                <p className="text-gray-300 mb-6">{featuredPost.excerpt}</p>
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center mr-3">
                      <span className="text-purple-400 font-semibold">
                        {featuredPost.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{featuredPost.author}</div>
                      <div className="text-gray-400 text-sm">{featuredPost.authorRole}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gray-400 text-sm">{featuredPost.date}</div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredPost.views}
                    </div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                  Read Article
                  <ArrowRight className="inline-block ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300">
                <div className="h-48 bg-gradient-to-r from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="w-6 h-6 text-purple-400" />
                    </div>
                    <span className="text-sm text-gray-300">Article Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded">
                      {categories.find(c => c.name === post.category)?.label}
                    </span>
                    <span className="text-gray-400 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mr-2">
                        <span className="text-purple-400 text-xs font-semibold">
                          {post.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">{post.author}</div>
                        <div className="text-gray-400 text-xs">{post.authorRole}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-xs">{post.date}</div>
                      <div className="flex items-center text-gray-400 text-xs">
                        <Eye className="w-3 h-3 mr-1" />
                        {post.views}
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                    Read More
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}