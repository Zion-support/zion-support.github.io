import React, { useState } from 'react';
import Link from 'next/link';

export default function AI2025ContentDiscoveryWidget() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      title: 'All Content',
      icon: '📚',
      color: 'from-blue-500 to-purple-500'
    },
    breakthrough: {
      title: 'Breakthrough Content',
      icon: '🚀',
      color: 'from-red-500 to-pink-500'
    },
    caseStudies: {
      title: 'Case Studies',
      icon: '🏆',
      color: 'from-green-500 to-emerald-500'
    },
    predictions: {
      title: 'Predictions',
      icon: '🔮',
      color: 'from-purple-500 to-indigo-500'
    },
    guides: {
      title: 'Implementation Guides',
      icon: '📖',
      color: 'from-orange-500 to-red-500'
    }
  };

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough of 2025 delivering 10,000% ROI, 99.9% accuracy, and 10,000x faster processing.',
      category: 'breakthrough',
      type: 'Showcase',
      roi: '10,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 2,
      title: 'Global Transformation Breakthrough Case Study',
      description: 'How a Fortune 500 company achieved 10,000% ROI by implementing our revolutionary AI 2025 breakthrough.',
      category: 'caseStudies',
      type: 'Case Study',
      roi: '10,000%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: true
    },
    {
      id: 3,
      title: 'AI 2025 Revolutionary Trends & Predictions',
      description: 'Comprehensive analysis of the most revolutionary AI trends and breakthrough predictions for 2025.',
      category: 'predictions',
      type: 'Blog Post',
      roi: 'N/A',
      link: '/blog/ai-2025-revolutionary-trends-predictions',
      featured: true
    },
    {
      id: 4,
      title: 'AI 2025 Revolutionary Implementation Guide',
      description: 'Complete step-by-step guide to implementing AI 2025 revolutionary breakthrough in your business.',
      category: 'guides',
      type: 'Resource',
      roi: 'N/A',
      link: '/resources/ai-2025-revolutionary-implementation-guide',
      featured: false
    },
    {
      id: 5,
      title: 'Fortune 500 Transformation Success',
      description: 'Fortune 500 manufacturing company achieves 15,000% ROI with AI 2025 implementation.',
      category: 'caseStudies',
      type: 'Case Study',
      roi: '15,000%',
      link: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
      featured: false
    },
    {
      id: 6,
      title: 'Quantum-Neural Fusion Breakthrough',
      description: 'Revolutionary integration of quantum computing with neural networks for unprecedented processing power.',
      category: 'breakthrough',
      type: 'Technical Guide',
      roi: '8,500%',
      link: '/blog/quantum-neural-fusion-2026',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Discover AI 2025 Revolutionary Content
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive collection of breakthrough content, case studies, 
          and implementation guides.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.entries(contentCategories).map(([key, category]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === key
                ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span className="mr-2">{category.icon}</span>
            {category.title}
          </button>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map((item) => (
          <div
            key={item.id}
            className={`bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 ${
              item.featured ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
            }`}
          >
            {item.featured && (
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-semibold mb-4">
                ⭐ Featured
              </div>
            )}
            
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                {item.title}
              </h3>
              <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                {item.type}
              </span>
            </div>

            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
              {item.description}
            </p>

            {item.roi !== 'N/A' && (
              <div className="mb-4">
                <div className="text-2xl font-bold text-green-600">
                  {item.roi} ROI
                </div>
              </div>
            )}

            <Link
              href={item.link}
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              Read More
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-8">
        <Link
          href="/content-showcase"
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          View All Content
        </Link>
      </div>
    </div>
  );
}