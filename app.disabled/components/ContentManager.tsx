'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'service';
  category: string;
  readingTime: string;
  featured: boolean;
  metrics?: {
    roi?: string;
    savings?: string;
    efficiency?: string;
    accuracy?: string;
  };
  tags: string[];
  url: string;
}

interface ContentManagerProps {
  showFilters?: boolean;
  showMetrics?: boolean;
  maxItems?: number;
  category?: string;
}

const ContentManager: React.FC<ContentManagerProps> = ({
  showFilters = true,
  showMetrics = true,
  maxItems = 12,
  category = 'all'
}) => {
  const [activeCategory, setActiveCategory] = useState(category);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const content: ContentItem[] = [
    {
      id: 'ai-innovation-breakthrough',
      title: 'AI 2025: The Ultimate Innovation Breakthrough',
      description: 'Complete Guide to 5,000% ROI Through Revolutionary AI Technologies',
      type: 'blog',
      category: 'innovation',
      readingTime: '30 min read',
      featured: true,
      metrics: {
        roi: '5,000%',
        savings: '$12.8B+',
        efficiency: '2,400%',
        accuracy: '99.7%'
      },
      tags: ['AI Innovation', 'ROI', 'Breakthrough', 'Revolutionary'],
      url: '/blog/ai-2025-ultimate-innovation-breakthrough-ultimate-guide'
    },
    {
      id: 'fortune-500-innovation-success',
      title: 'Fortune 500 AI Innovation Success Story',
      description: '$12.8B Annual Savings with 5,000% ROI Achievement',
      type: 'case-study',
      category: 'success-stories',
      readingTime: '20 min read',
      featured: true,
      metrics: {
        roi: '5,000%',
        savings: '$12.8B',
        efficiency: '2,400%',
        accuracy: '99.7%'
      },
      tags: ['Fortune 500', 'Success Story', 'ROI', 'Innovation'],
      url: '/case-studies/fortune-500-ai-innovation-5000-roi-success-story'
    },
    {
      id: 'ai-implementation-guide',
      title: 'AI Innovation Implementation Ultimate Guide',
      description: 'Complete Roadmap to 5,000% ROI Implementation',
      type: 'resource',
      category: 'implementation',
      readingTime: '45 min read',
      featured: true,
      metrics: {
        roi: '5,000%',
        savings: '$12.8B+',
        efficiency: '2,400%',
        accuracy: '99.7%'
      },
      tags: ['Implementation', 'Guide', 'ROI', 'Roadmap'],
      url: '/resources/ai-innovation-implementation-ultimate-guide-2025'
    },
    {
      id: 'quantum-neural-fusion',
      title: 'Quantum Neural Fusion Revolution',
      description: '25,000% ROI Through Quantum-AI Integration',
      type: 'blog',
      category: 'quantum',
      readingTime: '35 min read',
      featured: true,
      metrics: {
        roi: '25,000%',
        savings: '$45.2B+',
        efficiency: '3,600%',
        accuracy: '99.9%'
      },
      tags: ['Quantum AI', 'Neural Fusion', 'Revolution', '25,000% ROI'],
      url: '/blog/ai-2025-quantum-neural-fusion-revolution-ultimate-breakthrough'
    },
    {
      id: 'autonomous-business-revolution',
      title: 'Autonomous Business Revolution 2025',
      description: 'Complete Guide to Self-Managing Enterprise Systems',
      type: 'blog',
      category: 'autonomous',
      readingTime: '40 min read',
      featured: true,
      metrics: {
        roi: '15,000%',
        savings: '$28.5B+',
        efficiency: '2,800%',
        accuracy: '99.8%'
      },
      tags: ['Autonomous', 'Business', 'Revolution', 'Self-Managing'],
      url: '/blog/ai-2025-autonomous-business-revolution-complete-guide'
    },
    {
      id: 'business-intelligence-revolution',
      title: 'AI Business Intelligence Revolution',
      description: '15,000% ROI Through Advanced BI Solutions',
      type: 'blog',
      category: 'business-intelligence',
      readingTime: '35 min read',
      featured: true,
      metrics: {
        roi: '15,000%',
        savings: '$45.2B+',
        efficiency: '2,400%',
        accuracy: '99.8%'
      },
      tags: ['Business Intelligence', 'BI', 'Analytics', '15,000% ROI'],
      url: '/blog/ai-2025-ultimate-business-intelligence-revolution-ultimate-breakthrough'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: content.length },
    { id: 'innovation', name: 'AI Innovation', count: content.filter(item => item.category === 'innovation').length },
    { id: 'success-stories', name: 'Success Stories', count: content.filter(item => item.category === 'success-stories').length },
    { id: 'implementation', name: 'Implementation', count: content.filter(item => item.category === 'implementation').length },
    { id: 'quantum', name: 'Quantum AI', count: content.filter(item => item.category === 'quantum').length },
    { id: 'autonomous', name: 'Autonomous Systems', count: content.filter(item => item.category === 'autonomous').length },
    { id: 'business-intelligence', name: 'Business Intelligence', count: content.filter(item => item.category === 'business-intelligence').length }
  ];

  const filteredContent = content
    .filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = searchTerm === '' || 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') return b.featured ? 1 : -1;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'reading-time') return a.readingTime.localeCompare(b.readingTime);
      return 0;
    })
    .slice(0, maxItems);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return '📝';
      case 'case-study': return '📊';
      case 'resource': return '📚';
      case 'service': return '⚙️';
      default: return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'bg-blue-100 text-blue-800';
      case 'case-study': return 'bg-green-100 text-green-800';
      case 'resource': return 'bg-purple-100 text-purple-800';
      case 'service': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Revolutionary AI Content Hub
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the most advanced AI content, case studies, and implementation guides 
          featuring verified ROI metrics and real-world success stories.
        </p>
      </div>

      {/* Filters and Search */}
      {showFilters && (
        <div className="mb-8 space-y-6">
          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>

          {/* Sort Options */}
          <div className="flex justify-center">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="featured">Featured First</option>
              <option value="title">Title A-Z</option>
              <option value="reading-time">Reading Time</option>
            </select>
          </div>
        </div>
      )}

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-200"
          >
            {/* Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                    {item.type.replace('-', ' ').toUpperCase()}
                  </span>
                </div>
                {item.featured && (
                  <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                {item.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* Metrics */}
              {showMetrics && item.metrics && (
                <div className="grid grid-cols-2 gap-3 mb-4">
                  {item.metrics.roi && (
                    <div className="text-center p-2 bg-green-50 rounded-lg">
                      <div className="text-lg font-bold text-green-600">{item.metrics.roi}</div>
                      <div className="text-xs text-green-600">ROI</div>
                    </div>
                  )}
                  {item.metrics.savings && (
                    <div className="text-center p-2 bg-blue-50 rounded-lg">
                      <div className="text-lg font-bold text-blue-600">{item.metrics.savings}</div>
                      <div className="text-xs text-blue-600">Savings</div>
                    </div>
                  )}
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {item.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {item.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    +{item.tags.length - 3} more
                  </span>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">{item.readingTime}</span>
                <Link
                  href={item.url}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Read More
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      {filteredContent.length >= maxItems && (
        <div className="text-center mt-12">
          <Link
            href="/content"
            className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors"
          >
            View All Content
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ContentManager;