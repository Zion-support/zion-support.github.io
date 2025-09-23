"use client";
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  featured: boolean;
  image: string;
  tags: string[];
  publishedDate: string;
  author: string;
  views: number;
  likes: number;
}

const UltimateContentShowcase2025: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('trending');

  const contentItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI 2025: The Ultimate Business Transformation Guide',
      description: 'Discover how AI is revolutionizing business operations, increasing efficiency by 500%, and delivering unprecedented ROI across industries.',
      category: 'AI Revolution',
      readTime: '12 min',
      featured: true,
      image: '/images/ai-2025-transformation.jpg',
      tags: ['AI', 'Business Transformation', 'ROI', 'Automation'],
      publishedDate: '2025-01-15',
      author: 'Dr. Sarah Chen',
      views: 15420,
      likes: 892
    },
    {
      id: '2',
      title: 'Quantum Computing Breakthrough: 2026 Implementation Framework',
      description: 'Complete guide to implementing quantum computing solutions in enterprise environments with real-world case studies and ROI calculations.',
      category: 'Quantum Computing',
      readTime: '18 min',
      featured: true,
      image: '/images/quantum-computing-2026.jpg',
      tags: ['Quantum Computing', 'Enterprise', 'Implementation', 'Case Studies'],
      publishedDate: '2025-01-12',
      author: 'Prof. Michael Rodriguez',
      views: 12850,
      likes: 756
    },
    {
      id: '3',
      title: 'Neural Interface Revolution: The Future of Human-AI Collaboration',
      description: 'Explore cutting-edge neural interface technologies that are bridging the gap between human consciousness and artificial intelligence.',
      category: 'Neural Interfaces',
      readTime: '15 min',
      featured: true,
      image: '/images/neural-interface-revolution.jpg',
      tags: ['Neural Interfaces', 'Human-AI', 'Consciousness', 'Technology'],
      publishedDate: '2025-01-10',
      author: 'Dr. Elena Volkov',
      views: 19230,
      likes: 1124
    },
    {
      id: '4',
      title: 'Autonomous Business Operations: Complete Implementation Guide',
      description: 'Step-by-step guide to building fully autonomous business systems that operate 24/7 with minimal human intervention.',
      category: 'Autonomous Systems',
      readTime: '20 min',
      featured: false,
      image: '/images/autonomous-business.jpg',
      tags: ['Autonomous Systems', 'Business Operations', 'Automation', 'Implementation'],
      publishedDate: '2025-01-08',
      author: 'James Thompson',
      views: 8750,
      likes: 423
    },
    {
      id: '5',
      title: 'Synthetic Intelligence: Beyond Traditional AI',
      description: 'Understanding the next generation of AI systems that can think, learn, and adapt in ways that mimic human intelligence.',
      category: 'Synthetic Intelligence',
      readTime: '14 min',
      featured: false,
      image: '/images/synthetic-intelligence.jpg',
      tags: ['Synthetic Intelligence', 'AI Evolution', 'Machine Learning', 'Future Tech'],
      publishedDate: '2025-01-05',
      author: 'Dr. Alex Kim',
      views: 11200,
      likes: 678
    },
    {
      id: '6',
      title: 'Edge Computing Revolution: Real-Time AI Processing',
      description: 'How edge computing is enabling real-time AI processing and transforming industries from healthcare to manufacturing.',
      category: 'Edge Computing',
      readTime: '11 min',
      featured: false,
      image: '/images/edge-computing-revolution.jpg',
      tags: ['Edge Computing', 'Real-time Processing', 'AI', 'Industry 4.0'],
      publishedDate: '2025-01-03',
      author: 'Maria Santos',
      views: 9650,
      likes: 534
    }
  ];

  const categories = ['all', 'AI Revolution', 'Quantum Computing', 'Neural Interfaces', 'Autonomous Systems', 'Synthetic Intelligence', 'Edge Computing'];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedContent = [...filteredContent].sort((a, b) => {
    switch (sortBy) {
      case 'trending':
        return b.views - a.views;
      case 'popular':
        return b.likes - a.likes;
      case 'recent':
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime();
      default:
        return 0;
    }
  });

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-semibold">🚀 ULTIMATE CONTENT SHOWCASE 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Revolutionary AI Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge AI research, implementation guides, and breakthrough technologies 
            that are transforming businesses worldwide.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-purple-50 border border-gray-300'
                  }`}
                >
                  {category === 'all' ? 'All Content' : category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            >
              <option value="trending">Trending</option>
              <option value="popular">Most Popular</option>
              <option value="recent">Most Recent</option>
            </select>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedContent.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                item.featured ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {item.featured && (
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm font-semibold">
                  ⭐ FEATURED CONTENT
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                  <span className="text-gray-500 text-sm">{item.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>By {item.author}</span>
                  <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {item.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                      {item.likes}
                    </span>
                  </div>
                  
                  <Link
                    href={`/content/${item.id}`}
                    className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
            Load More Content
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
            <div className="text-gray-600">Expert Articles</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">250K+</div>
            <div className="text-gray-600">Monthly Readers</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
            <div className="text-gray-600">Reader Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Content Updates</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UltimateContentShowcase2025;