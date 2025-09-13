'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, ArrowRight, Clock, TrendingUp, Star, Eye, Users, Zap } from 'lucide-react';

export default function InteractiveContentDiscoveryWidget2025() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [featuredContent, setFeaturedContent] = useState([]);

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟', count: 45 },
    { id: 'ai-innovations', name: 'AI Innovations', icon: '🤖', count: 12 },
    { id: 'case-studies', name: 'Case Studies', icon: '📊', count: 8 },
    { id: 'tools', name: 'AI Tools', icon: '⚡', count: 15 },
    { id: 'automation', name: 'Automation', icon: '🔄', count: 10 }
  ];

  const trendingContent = [
    {
      id: 'ai-breakthroughs',
      title: 'AI 2025 Breakthrough Innovations',
      description: 'Discover revolutionary AI technologies reshaping industries',
      category: 'ai-innovations',
      views: 12500,
      rating: 4.9,
      readTime: '8 min',
      featured: true,
      tags: ['AI', 'Innovation', 'Technology'],
      url: '/ai-2025-breakthrough-innovations'
    },
    {
      id: 'interactive-tools',
      title: 'Interactive AI Tools Demo',
      description: 'Try our AI tools live and experience their capabilities',
      category: 'tools',
      views: 8900,
      rating: 4.8,
      readTime: 'Interactive',
      featured: true,
      tags: ['Demo', 'Tools', 'Interactive'],
      url: '/ai-tools-demonstration'
    },
    {
      id: 'success-stories',
      title: 'Success Stories & Case Studies',
      description: 'Real-world transformations with measurable results',
      category: 'case-studies',
      views: 15200,
      rating: 4.9,
      readTime: '12 min',
      featured: true,
      tags: ['Success', 'ROI', 'Results'],
      url: '/case-studies'
    },
    {
      id: 'automation-solutions',
      title: 'Advanced Automation Solutions',
      description: 'Calculate ROI and explore automation possibilities',
      category: 'automation',
      views: 9800,
      rating: 4.7,
      readTime: '10 min',
      featured: true,
      tags: ['Automation', 'ROI', 'Efficiency'],
      url: '/automation-solutions-showcase'
    }
  ];

  const [filteredContent, setFilteredContent] = useState(trendingContent);

  useEffect(() => {
    let filtered = trendingContent;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchQuery) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    setFilteredContent(filtered);
  }, [searchQuery, selectedCategory]);

  const getCategoryIcon = (category: string) => {
    const categoryData = contentCategories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : '📄';
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Amazing Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of AI innovations, tools, and success stories. Find exactly what you need to transform your business.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Input */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search content, tools, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="md:w-64">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {contentCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.icon} {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredContent.map((content) => (
            <div key={content.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{getCategoryIcon(content.category)}</span>
                  {content.featured && (
                    <span className="px-3 py-1 bg-yellow-400 text-yellow-900 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{content.title}</h3>
                <p className="text-blue-100 text-sm">{content.description}</p>
              </div>

              {/* Content Stats */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {content.views.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {content.readTime}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
                      {content.rating}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {content.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <Link
                  href={content.url}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Explore Content <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Content Library Statistics</h3>
            <p className="text-gray-600">Our growing collection of AI resources and insights</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">45+</div>
              <div className="text-sm text-gray-600">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">125K+</div>
              <div className="text-sm text-gray-600">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">15+</div>
              <div className="text-sm text-gray-600">Interactive Tools</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Latest Content</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get notified about new AI innovations, tools, and success stories delivered straight to your inbox.
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}