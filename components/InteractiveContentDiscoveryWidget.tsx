'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  type: 'blog' | 'case-study' | 'resource' | 'tool';
  category: string;
  roi?: string;
  readTime?: string;
  tags: string[];
  href: string;
  emoji: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Ultimate Trends & Predictions',
    description: 'Revolutionary predictions with 5,000% ROI insights',
    type: 'blog',
    category: 'AI Trends',
    roi: '5,000%',
    readTime: '25 min',
    tags: ['AI', 'Trends', 'Predictions', '2025'],
    href: '/blog/ai-2025-ultimate-trends-predictions',
    emoji: '🔮'
  },
  {
    id: '2',
    title: 'Global Enterprise Transformation Breakthrough',
    description: '12,000% ROI transformation success story',
    type: 'case-study',
    category: 'Enterprise',
    roi: '12,000%',
    readTime: 'Case Study',
    tags: ['Enterprise', 'Transformation', 'ROI', 'Success'],
    href: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
    emoji: '🏆'
  },
  {
    id: '3',
    title: 'AI 2025 Ultimate Implementation Guide',
    description: 'Complete step-by-step AI transformation roadmap',
    type: 'resource',
    category: 'Implementation',
    readTime: 'Guide',
    tags: ['Implementation', 'Guide', 'Strategy', 'Roadmap'],
    href: '/resources/ai-2025-ultimate-implementation-guide',
    emoji: '📚'
  },
  {
    id: '4',
    title: 'AI ROI Calculator',
    description: 'Calculate your potential AI transformation ROI',
    type: 'tool',
    category: 'Tools',
    tags: ['Calculator', 'ROI', 'Planning', 'Assessment'],
    href: '/tools/ai-2025-roi-calculator',
    emoji: '🧮'
  },
  {
    id: '5',
    title: 'Synthetic Intelligence Revolution',
    description: 'Breakthrough technology with 50,000% ROI potential',
    type: 'blog',
    category: 'AI Technology',
    roi: '50,000%',
    readTime: '30 min',
    tags: ['Synthetic Intelligence', 'Breakthrough', 'Technology', 'Revolution'],
    href: '/blog/ai-2025-synthetic-intelligence-revolution',
    emoji: '🧠'
  },
  {
    id: '6',
    title: 'Quantum Computing Solutions 2025',
    description: 'Next-generation quantum computing implementations',
    type: 'resource',
    category: 'Quantum Computing',
    readTime: 'Guide',
    tags: ['Quantum Computing', 'Technology', 'Implementation', '2025'],
    href: '/quantum-computing-solutions-2025',
    emoji: '⚛️'
  }
];

const categories = ['All', 'AI Trends', 'Enterprise', 'Implementation', 'Tools', 'AI Technology', 'Quantum Computing'];
const types = ['All', 'blog', 'case-study', 'resource', 'tool'];

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredContent, setFilteredContent] = useState(contentItems);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = contentItems;

    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (selectedType !== 'All') {
      filtered = filtered.filter(item => item.type === selectedType);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredContent(filtered);
  }, [selectedCategory, selectedType, searchTerm]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog': return 'from-purple-500 to-pink-500';
      case 'case-study': return 'from-green-500 to-emerald-500';
      case 'resource': return 'from-blue-500 to-cyan-500';
      case 'tool': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog Post';
      case 'case-study': return 'Case Study';
      case 'resource': return 'Resource';
      case 'tool': return 'Tool';
      default: return 'Content';
    }
  };

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full mb-4">
          <span className="text-sm font-bold">🔍 INTERACTIVE CONTENT DISCOVERY</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Discover Your Perfect AI Resources
        </h2>
        <p className="text-gray-300 text-lg">
          Find exactly what you need with our intelligent content discovery system
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search content, topics, or tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pl-12 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            🔍
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-slate-800 text-white">
                  {category}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {types.map(type => (
                <option key={type} value={type} className="bg-slate-800 text-white">
                  {type === 'All' ? 'All Types' : getTypeLabel(type)}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">
            {filteredContent.length} Content {filteredContent.length === 1 ? 'Item' : 'Items'} Found
          </h3>
          <div className="text-sm text-gray-400">
            {selectedCategory !== 'All' && `Category: ${selectedCategory}`}
            {selectedType !== 'All' && ` • Type: ${getTypeLabel(selectedType)}`}
          </div>
        </div>

        {filteredContent.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No Content Found</h3>
            <p className="text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredContent.map((item) => (
              <Link key={item.id} href={item.href} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-3xl group-hover:scale-110 transition-transform">
                      {item.emoji}
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                      {getTypeLabel(item.type)}
                    </div>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.slice(0, 3).map((tag, index) => (
                      <span key={index} className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                    {item.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/20 text-white text-xs rounded-full">
                        +{item.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <span>{item.readTime}</span>
                    {item.roi && (
                      <span className="font-semibold text-green-400">
                        {item.roi} ROI
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/ultimate-content-showcase-2026"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 inline-block"
        >
          🌟 Explore All Content
        </Link>
      </div>
    </div>
  );
}