import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscovery2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedROI, setSelectedROI] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Experience the most revolutionary AI breakthroughs of 2025 with 15,000% ROI potential.',
      category: 'breakthrough',
      roi: '15000',
      icon: '🚀',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      tags: ['BREAKTHROUGH', 'REVOLUTIONARY', 'ULTIMATE']
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions Showcase',
      description: 'Explore revolutionary AI predictions for 2026-2030 with quantum-neural fusion.',
      category: 'predictions',
      roi: 'infinite',
      icon: '🔮',
      href: '/ai-2026-2030-future-predictions-showcase',
      tags: ['FUTURE', 'PREDICTIONS', 'REVOLUTIONARY']
    },
    {
      id: 3,
      title: 'Global Enterprise Transformation Mega Success',
      description: 'Fortune 500 company achieves 15,000% ROI and $2.3B value creation.',
      category: 'case-study',
      roi: '15000',
      icon: '🏆',
      href: '/case-studies/ai-2025-global-enterprise-transformation-mega-success',
      tags: ['MEGA SUCCESS', 'CASE STUDY', '15,000% ROI']
    },
    {
      id: 4,
      title: 'Ultimate Implementation Master Guide',
      description: 'Complete step-by-step guide to implementing AI 2025 breakthrough technologies.',
      category: 'guide',
      roi: '8000',
      icon: '📚',
      href: '/resources/ai-2025-ultimate-implementation-master-guide',
      tags: ['MASTER GUIDE', 'IMPLEMENTATION', 'ESSENTIAL']
    },
    {
      id: 5,
      title: 'Quantum-Neural Fusion Revolution',
      description: 'Breakthrough integration achieving 8,000% efficiency gains and infinite potential.',
      category: 'quantum',
      roi: '8000',
      icon: '⚛️',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      tags: ['QUANTUM', 'FUSION', '8,000% ROI']
    },
    {
      id: 6,
      title: 'Consciousness AI Systems',
      description: 'Revolutionary AI achieving 99.7% accuracy and consciousness upload protocols.',
      category: 'consciousness',
      roi: 'infinite',
      icon: '🧠',
      href: '/ai-2026-2030-future-predictions-showcase',
      tags: ['CONSCIOUSNESS', '99.7% ACCURACY', 'INFINITE ROI']
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const roiMatch = selectedROI === 'all' || 
      (selectedROI === 'high' && (item.roi === '15000' || item.roi === 'infinite')) ||
      (selectedROI === 'medium' && item.roi === '8000') ||
      (selectedROI === 'infinite' && item.roi === 'infinite');
    return categoryMatch && roiMatch;
  });

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-8 shadow-2xl">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Interactive Content Discovery
        </h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Discover the most revolutionary AI content tailored to your interests and ROI requirements.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-semibold text-gray-700 mr-2">Category:</span>
          {['all', 'breakthrough', 'predictions', 'case-study', 'guide', 'quantum', 'consciousness'].map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-purple-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
            </button>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          <span className="text-sm font-semibold text-gray-700 mr-2">ROI Level:</span>
          {['all', 'infinite', 'high', 'medium'].map(roi => (
            <button
              key={roi}
              onClick={() => setSelectedROI(roi)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedROI === roi
                  ? 'bg-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-pink-100'
              }`}
            >
              {roi === 'infinite' ? '∞ ROI' : roi === 'high' ? '15,000%+' : roi === 'medium' ? '8,000%+' : 'All ROI'}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContent.map(item => (
          <Link
            key={item.id}
            href={item.href}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-200 hover:border-purple-300"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs font-semibold rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-green-600">
                {item.roi === 'infinite' ? '∞' : `${item.roi}%`} ROI
              </div>
              <div className="text-purple-600 group-hover:text-purple-800 font-semibold">
                Explore →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Results Summary */}
      <div className="mt-8 text-center">
        <div className="bg-white rounded-2xl p-6 shadow-lg inline-block">
          <div className="text-2xl font-bold text-gray-900 mb-2">
            {filteredContent.length} Revolutionary Content{filteredContent.length !== 1 ? 's' : ''} Found
          </div>
          <div className="text-gray-600">
            Discovered {selectedCategory === 'all' ? 'all categories' : selectedCategory} with {selectedROI === 'all' ? 'all ROI levels' : selectedROI} ROI
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-8">
        <Link
          href="/ai-2025-ultimate-breakthrough-revolution"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg"
        >
          Explore All Revolutionary Content
        </Link>
      </div>
    </div>
  );
}