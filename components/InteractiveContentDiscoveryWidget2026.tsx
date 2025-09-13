import React, { useState } from 'react';
import Link from 'next/link';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  roi: string;
  status: string;
  href: string;
  icon: string;
  color: string;
}

const contentItems: ContentItem[] = [
  {
    id: 'ai-2025-breakthrough',
    title: 'AI 2025 Ultimate Breakthrough Revolution',
    description: 'Revolutionary AI breakthrough delivering 10,000% ROI with 99.9% accuracy and autonomous operations.',
    category: 'AI 2025',
    roi: '10,000%',
    status: 'BREAKTHROUGH',
    href: '/ai-2025-ultimate-breakthrough-revolution',
    icon: '🚀',
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'ai-2026-predictions',
    title: 'AI 2026 Future Predictions Breakthrough',
    description: 'Revolutionary AI predictions for 2026 with quantum-neural fusion and transcendent intelligence.',
    category: 'AI 2026',
    roi: '15,000%',
    status: 'REVOLUTIONARY',
    href: '/ai-2026-future-predictions-breakthrough',
    icon: '🔮',
    color: 'from-cyan-500 to-purple-500'
  },
  {
    id: 'global-transformation',
    title: 'Global Transformation Breakthrough',
    description: 'Fortune 500 company achieves 10,000% ROI with AI 2025 breakthrough technology.',
    category: 'Case Study',
    roi: '10,000%',
    status: 'SUCCESS',
    href: '/case-studies/ai-2025-global-transformation-breakthrough',
    icon: '🏆',
    color: 'from-green-500 to-blue-500'
  },
  {
    id: 'quantum-neural-fusion',
    title: 'Quantum-Neural Fusion Success',
    description: 'Breakthrough quantum-neural fusion technology delivering 15,000% ROI across industries.',
    category: 'AI 2026',
    roi: '15,000%',
    status: 'BREAKTHROUGH',
    href: '/case-studies/ai-2026-quantum-neural-fusion-success',
    icon: '⚛️',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'transcendent-intelligence',
    title: 'Transcendent Intelligence Platform',
    description: 'AI systems achieving consciousness-level capabilities with universal problem-solving abilities.',
    category: 'AI 2026',
    roi: '∞',
    status: 'TRANSCENDENT',
    href: '/ai-2026-transcendent-intelligence-platform',
    icon: '🧠',
    color: 'from-indigo-500 to-cyan-500'
  },
  {
    id: 'autonomous-systems',
    title: 'Fully Autonomous Systems',
    description: 'Complete autonomous business operations with 24/7 self-management and optimization.',
    category: 'AI 2026',
    roi: '8,500%',
    status: 'AUTONOMOUS',
    href: '/ai-2026-autonomous-systems',
    icon: '🤖',
    color: 'from-pink-500 to-rose-500'
  }
];

const categories = ['All', 'AI 2025', 'AI 2026', 'Case Study', 'Resources'];

export default function InteractiveContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-lg">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Interactive Content Discovery
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover our revolutionary AI content and case studies with interactive filtering 
          and personalized recommendations.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 pr-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              selectedCategory === category
                ? 'bg-blue-500 text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
          >
            {/* Status Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${item.color} text-white`}>
                {item.status}
              </span>
              <span className="text-2xl">{item.icon}</span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>

            {/* ROI and Category */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="text-xs text-gray-500 mr-2">ROI:</span>
                <span className="text-lg font-bold text-green-600">{item.roi}</span>
              </div>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {item.category}
              </span>
            </div>

            {/* Hover Effect */}
            <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="flex items-center text-blue-600 text-sm font-semibold">
                Learn More
                <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No Results */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No content found</h3>
          <p className="text-gray-600">Try adjusting your search or category filter</p>
        </div>
      )}

      {/* CTA */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          View All Content
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}