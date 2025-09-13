'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource';
  category: string;
  roi?: string;
  badge?: string;
  href: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'breakthrough-announcement',
    title: 'AI 2025 Revolutionary Breakthrough',
    description: 'The most significant AI advancement of our generation',
    type: 'blog',
    category: 'AI 2025',
    badge: 'BREAKTHROUGH',
    href: '/blog/ai-2025-revolutionary-breakthrough-announcement',
    icon: '🚀'
  },
  {
    id: 'breakthrough-success',
    title: 'Revolutionary Breakthrough Success',
    description: 'Fortune 500 company achieves 2000% ROI',
    type: 'case-study',
    category: 'Success Stories',
    roi: '2000%',
    badge: 'SUCCESS',
    href: '/case-studies/ai-2025-revolutionary-breakthrough-success',
    icon: '🏆'
  },
  {
    id: 'fortune-500-transformation',
    title: 'Fortune 500 Transformation',
    description: 'Global enterprise achieves 1500% ROI breakthrough',
    type: 'case-study',
    category: 'Enterprise',
    roi: '1500%',
    badge: 'TRANSFORMATION',
    href: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
    icon: '🏢'
  },
  {
    id: 'quantum-neural-fusion',
    title: 'AI 2026 Quantum-Neural Fusion',
    description: 'Breakthrough quantum computing integration',
    type: 'blog',
    category: 'AI 2026',
    roi: '15000%',
    badge: 'REVOLUTIONARY',
    href: '/blog/ai-2026-quantum-neural-fusion-breakthrough',
    icon: '⚛️'
  },
  {
    id: 'implementation-guide',
    title: 'Revolutionary Implementation Guide',
    description: 'Complete guide to implementing breakthrough AI',
    type: 'resource',
    category: 'Implementation',
    badge: 'ESSENTIAL',
    href: '/resources/ai-2025-revolutionary-implementation-guide',
    icon: '📚'
  },
  {
    id: 'ultimate-toolkit',
    title: 'Ultimate Implementation Toolkit',
    description: 'Complete toolkit for AI transformation',
    type: 'resource',
    category: 'Tools',
    badge: 'NEW',
    href: '/resources/ai-2025-ultimate-implementation-toolkit',
    icon: '🛠️'
  }
];

const categories = ['All', 'AI 2025', 'AI 2026', 'Success Stories', 'Enterprise', 'Implementation', 'Tools'];

export default function InteractiveContentDiscovery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredContent(contentItems);
    } else {
      setFilteredContent(contentItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'SUCCESS':
        return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'REVOLUTIONARY':
        return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'TRANSFORMATION':
        return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      case 'ESSENTIAL':
        return 'bg-gradient-to-r from-orange-500 to-red-500';
      case 'NEW':
        return 'bg-gradient-to-r from-teal-500 to-green-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📖';
      case 'case-study':
        return '📊';
      case 'resource':
        return '📚';
      default:
        return '📄';
    }
  };

  return (
    <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-lg shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Discover Revolutionary Content
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our breakthrough AI content library. Find the insights and tools 
          you need to transform your business with unprecedented ROI.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg transform scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer ${
              hoveredItem === item.id ? 'ring-2 ring-blue-500' : ''
            }`}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <Link href={item.href} className="block p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm text-gray-500">{getTypeIcon(item.type)}</span>
                      <span className="text-xs text-gray-500 uppercase tracking-wide">{item.type.replace('-', ' ')}</span>
                    </div>
                    <div className={`inline-block px-2 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(item.badge || '')}`}>
                      {item.badge}
                    </div>
                  </div>
                </div>
                {item.roi && (
                  <div className="text-right">
                    <div className="text-lg font-bold text-green-600">{item.roi}</div>
                    <div className="text-xs text-gray-500">ROI</div>
                  </div>
                )}
              </div>
              
              <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                  {item.category}
                </span>
                <div className="flex items-center text-blue-600 text-sm font-semibold">
                  Explore <span className="ml-1">→</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Featured Content Highlight */}
      <div className="mt-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 rounded-lg border border-red-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="text-4xl">🔥</span>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-1">
                Most Popular This Week
              </h3>
              <p className="text-gray-600">
                AI 2025 Revolutionary Breakthrough Announcement
              </p>
            </div>
          </div>
          <Link 
            href="/blog/ai-2025-revolutionary-breakthrough-announcement"
            className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Read Now
          </Link>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-blue-600">500+</div>
          <div className="text-sm text-gray-600">Success Stories</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-green-600">2000%</div>
          <div className="text-sm text-gray-600">Avg. ROI</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-purple-600">95%</div>
          <div className="text-sm text-gray-600">Success Rate</div>
        </div>
        <div className="text-center p-4 bg-white rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-orange-600">24/7</div>
          <div className="text-sm text-gray-600">Support</div>
        </div>
      </div>
    </div>
  );
}