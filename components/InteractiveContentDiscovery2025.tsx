'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, TrendingUp, Clock, Users, Star, ArrowRight, Sparkles } from 'lucide-react';

export default function InteractiveContentDiscovery2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('trending');

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'innovations', name: 'AI Innovations', icon: '🚀' },
    { id: 'case-studies', name: 'Success Stories', icon: '📈' },
    { id: 'tutorials', name: 'Tutorials', icon: '🎓' },
    { id: 'trends', name: 'Trends', icon: '📊' },
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025: Latest Innovations and Breakthrough Technologies',
      category: 'innovations',
      type: 'blog',
      readTime: '5 min',
      views: '12.5K',
      rating: 4.9,
      trending: true,
      description: 'Discover quantum AI fusion, neural interfaces, and autonomous systems revolutionizing industries.',
      tags: ['AI', 'Innovation', 'Technology', '2025'],
      url: '/blog/ai-2025-latest-innovations'
    },
    {
      id: 2,
      title: 'Global Tech Giant: 50,000% ROI Success Story',
      category: 'case-studies',
      type: 'case-study',
      readTime: '8 min',
      views: '8.2K',
      rating: 4.8,
      trending: true,
      description: 'How a Fortune 500 company achieved unprecedented ROI through AI transformation.',
      tags: ['ROI', 'Success', 'Fortune 500', 'Transformation'],
      url: '/case-studies/ai-2025-global-tech-transformation-mega-success'
    },
    {
      id: 3,
      title: 'Quantum Computing Breakthroughs in 2025',
      category: 'innovations',
      type: 'blog',
      readTime: '6 min',
      views: '15.3K',
      rating: 4.7,
      trending: false,
      description: 'Exploring the latest quantum computing advances and their impact on AI development.',
      tags: ['Quantum', 'Computing', 'Breakthrough', 'AI'],
      url: '/blog/quantum-computing-breakthroughs-2025'
    },
    {
      id: 4,
      title: 'Neural Interface Revolution: Healthcare Transformation',
      category: 'case-studies',
      type: 'case-study',
      readTime: '7 min',
      views: '6.8K',
      rating: 4.9,
      trending: false,
      description: 'Revolutionary neural interface technology transforming healthcare diagnostics and treatment.',
      tags: ['Neural Interface', 'Healthcare', 'Revolution', 'Medical'],
      url: '/case-studies/neural-interface-healthcare-transformation'
    },
    {
      id: 5,
      title: 'AI Automation Mastery: Complete Implementation Guide',
      category: 'tutorials',
      type: 'tutorial',
      readTime: '12 min',
      views: '22.1K',
      rating: 4.8,
      trending: true,
      description: 'Step-by-step guide to implementing AI automation in your organization.',
      tags: ['Automation', 'Implementation', 'Guide', 'Business'],
      url: '/tutorials/ai-automation-mastery-guide'
    },
    {
      id: 6,
      title: 'Future AI Trends: 2025-2030 Predictions',
      category: 'trends',
      type: 'blog',
      readTime: '9 min',
      views: '18.7K',
      rating: 4.6,
      trending: true,
      description: 'Comprehensive analysis of AI trends and predictions for the next five years.',
      tags: ['Trends', 'Predictions', 'Future', 'Analysis'],
      url: '/blog/future-ai-trends-2025-2030'
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.trending - a.trending;
      case 'rating':
        return b.rating - a.rating;
      case 'views':
        return parseInt(b.views.replace('K', '')) - parseInt(a.views.replace('K', ''));
      case 'recent':
        return b.id - a.id;
      default:
        return 0;
    }
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mr-4">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-white">Discover Amazing Content</h2>
        </div>
        <p className="text-gray-300 text-lg">
          Explore our latest articles, case studies, and tutorials powered by AI
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search content, tags, or topics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4">
          <Filter className="text-gray-400 w-5 h-5" />
          <span className="text-gray-300">Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="trending">Trending</option>
            <option value="rating">Rating</option>
            <option value="views">Most Views</option>
            <option value="recent">Most Recent</option>
          </select>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedContent.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="group bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${
                  item.type === 'blog' ? 'bg-blue-500/20' :
                  item.type === 'case-study' ? 'bg-green-500/20' :
                  item.type === 'tutorial' ? 'bg-purple-500/20' :
                  'bg-orange-500/20'
                }`}>
                  <span className="text-white text-sm font-bold">
                    {item.type === 'blog' ? '📝' :
                     item.type === 'case-study' ? '📊' :
                     item.type === 'tutorial' ? '🎓' : '📄'}
                  </span>
                </div>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wide">
                    {item.type.replace('-', ' ')}
                  </div>
                  {item.trending && (
                    <div className="flex items-center text-yellow-400 text-xs">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-center text-yellow-400">
                <Star className="w-4 h-4 fill-current mr-1" />
                <span className="text-sm font-semibold">{item.rating}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className="text-white font-bold text-lg mb-3 group-hover:text-purple-300 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {item.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="flex items-center justify-between text-gray-400 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {item.readTime}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                {item.views}
              </div>
              <div className="flex items-center text-purple-400 group-hover:text-purple-300">
                Read More
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/content-hub"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Explore All Content
          <ArrowRight className="w-5 h-5 ml-2" />
        </Link>
      </div>
    </div>
  );
}