'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'case-study' | 'blog' | 'resource' | 'webinar';
  roi?: string;
  featured?: boolean;
  url: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: '1',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering 2,500-5,000% ROI with 99.9% accuracy',
    category: 'AI 2025',
    type: 'blog',
    roi: '2,500-5,000%',
    featured: true,
    url: '/ai-2025-ultimate-breakthrough-revolution',
    icon: '🚀'
  },
  {
    id: '2',
    title: 'Global Transformation Breakthrough',
    description: 'Fortune 500 company achieves 10,000% ROI in 6 months with AI implementation',
    category: 'Case Studies',
    type: 'case-study',
    roi: '10,000%',
    featured: true,
    url: '/case-studies/ai-2025-global-transformation-breakthrough',
    icon: '🏆'
  },
  {
    id: '3',
    title: 'Revolutionary Implementation Guide',
    description: 'Complete 200-page guide for implementing AI 2025 breakthrough technology',
    category: 'Resources',
    type: 'resource',
    url: '/resources/ai-2025-revolutionary-implementation-guide',
    icon: '📚'
  },
  {
    id: '4',
    title: 'AI 2026 Quantum-Neural Fusion',
    description: 'Breakthrough quantum-neural integration delivering 15,000% ROI',
    category: 'AI 2026',
    type: 'blog',
    roi: '15,000%',
    featured: true,
    url: '/ai-2026-quantum-neural-fusion-breakthrough',
    icon: '⚛️'
  },
  {
    id: '5',
    title: 'Manufacturing Revolution Success',
    description: 'Leading manufacturer increases efficiency by 2,500% with autonomous AI',
    category: 'Case Studies',
    type: 'case-study',
    roi: '2,500%',
    url: '/case-studies/ai-2025-manufacturing-breakthrough',
    icon: '🏭'
  },
  {
    id: '6',
    title: 'Revolutionary Breakthroughs Webinar',
    description: 'Live webinar showcasing the latest AI 2025 breakthrough technologies',
    category: 'Webinars',
    type: 'webinar',
    url: '/webinars/ai-2025-revolutionary-breakthroughs',
    icon: '🔥'
  },
  {
    id: '7',
    title: 'Financial Services Revolution',
    description: 'Major bank achieves 5,000% ROI through AI-powered optimization',
    category: 'Case Studies',
    type: 'case-study',
    roi: '5,000%',
    url: '/case-studies/ai-2025-financial-breakthrough',
    icon: '💰'
  },
  {
    id: '8',
    title: 'Ultimate Implementation Toolkit',
    description: 'Complete toolkit with templates, calculators, and implementation strategies',
    category: 'Resources',
    type: 'resource',
    url: '/resources/ai-2025-ultimate-implementation-toolkit',
    icon: '🛠️'
  }
];

const categories = ['All', 'AI 2025', 'AI 2026', 'Case Studies', 'Resources', 'Webinars'];
const types = ['All', 'case-study', 'blog', 'resource', 'webinar'];

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(contentItems);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate loading delay for better UX
    const timer = setTimeout(() => {
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
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFilteredItems(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, selectedType, searchTerm]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl font-bold mb-2">Discover Revolutionary Content</h2>
            <p className="text-purple-100">Explore our latest AI breakthroughs, case studies, and resources</p>
          </div>
          <div className="text-4xl">🔍</div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for content..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-6 py-4 pr-12 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="p-6 bg-gray-50 border-b border-gray-200">
        <div className="flex flex-wrap gap-4 mb-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="text-sm text-gray-600">
          Showing {filteredItems.length} of {contentItems.length} content items
        </div>
      </div>

      {/* Content Grid */}
      <div className="p-6">
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <Link
                key={item.id}
                href={item.url}
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-purple-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  {item.featured && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                      FEATURED
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  {item.roi && (
                    <span className="text-sm font-bold text-green-600">
                      {item.roi} ROI
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}

        {filteredItems.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">No content found</h3>
            <p className="text-gray-600">Try adjusting your search terms or filters</p>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Want to see more content?</h3>
          <p className="text-gray-600 mb-4">Explore our complete content library</p>
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105"
          >
            View All Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}