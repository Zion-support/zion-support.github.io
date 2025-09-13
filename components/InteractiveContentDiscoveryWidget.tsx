import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  badge: string;
  href: string;
  icon: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering 2,500-5,000% ROI with 99.9% accuracy and 10,000x faster processing.',
    category: 'AI Solutions',
    roi: '2,500-5,000% ROI',
    badge: 'BREAKTHROUGH',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    icon: '🚀'
  },
  {
    id: 'quantum-computing',
    title: 'Quantum Computing Solutions 2025',
    description: 'Revolutionary quantum computing delivering 15,000% ROI with error-corrected quantum computers and quantum supremacy.',
    category: 'Quantum Computing',
    roi: '15,000% ROI',
    badge: 'REVOLUTIONARY',
    href: '/quantum-computing-solutions',
    icon: '⚛️'
  },
  {
    id: 'automation-2026',
    title: 'Advanced Automation Solutions 2026-2030',
    description: 'Next-generation automation delivering 5,000-10,000% ROI with autonomous operations and self-evolving systems.',
    category: 'Automation',
    roi: '5,000-10,000% ROI',
    badge: 'FUTURE',
    href: '/advanced-automation-solutions-2026',
    icon: '🤖'
  },
  {
    id: 'neural-interface',
    title: 'Neural Interface Revolution 2026',
    description: 'Breakthrough neural interfaces delivering 3,000% ROI with 95% patient recovery success in healthcare applications.',
    category: 'Neural Technology',
    roi: '3,000% ROI',
    badge: 'BREAKTHROUGH',
    href: '/blog/ai-2026-neural-interface-revolution',
    icon: '🧠'
  },
  {
    id: 'space-technology',
    title: 'Space Technology Solutions 2025',
    description: 'Revolutionary space-based AI systems enabling global connectivity and resource optimization from orbit.',
    category: 'Space Technology',
    roi: '5,000% ROI',
    badge: 'REVOLUTIONARY',
    href: '/space-technology-solutions-2025',
    icon: '🚀'
  },
  {
    id: 'financial-optimization',
    title: 'Quantum AI Financial Optimization',
    description: 'Quantum-powered financial optimization delivering 8,500% ROI through advanced trading algorithms and risk assessment.',
    category: 'Financial Services',
    roi: '8,500% ROI',
    badge: 'BREAKTHROUGH',
    href: '/case-studies/quantum-ai-financial-optimization-breakthrough-2026',
    icon: '💰'
  }
];

const categories = ['All', 'AI Solutions', 'Quantum Computing', 'Automation', 'Neural Technology', 'Space Technology', 'Financial Services'];

export default function InteractiveContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive library of breakthrough AI solutions, case studies, 
            and implementation guides that are transforming businesses worldwide.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for breakthrough content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-200">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl">{item.icon}</div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    item.badge === 'BREAKTHROUGH' ? 'bg-red-100 text-red-800' :
                    item.badge === 'REVOLUTIONARY' ? 'bg-purple-100 text-purple-800' :
                    item.badge === 'FUTURE' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <span className="text-sm font-bold text-green-600">
                    {item.roi}
                  </span>
                </div>
                
                <Link
                  href={item.href}
                  className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Explore Content
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Content Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Revolutionary Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}