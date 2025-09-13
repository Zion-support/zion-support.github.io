import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      title: 'AI 2025 Ultimate Automation Revolution',
      description: 'Revolutionary AI automation with 5,000% ROI',
      category: 'automation',
      href: '/blog/ai-2025-ultimate-automation-revolution',
      tags: ['AI 2025', 'Automation', 'ROI', 'Breakthrough'],
      icon: '🚀',
      stats: '5,000% ROI'
    },
    {
      title: 'AI 2026 Quantum Neural Breakthrough',
      description: 'Quantum-neural fusion technology with 15,000% ROI',
      category: 'quantum',
      href: '/blog/ai-2026-quantum-neural-breakthrough',
      tags: ['AI 2026', 'Quantum', 'Neural', 'Breakthrough'],
      icon: '⚛️',
      stats: '15,000% ROI'
    },
    {
      title: 'AI 2030 Transcendent Intelligence',
      description: 'Transcendent intelligence with infinite ROI potential',
      category: 'transcendent',
      href: '/blog/ai-2030-transcendent-intelligence',
      tags: ['AI 2030', 'Transcendent', 'Intelligence', 'Infinite'],
      icon: '🌌',
      stats: '∞ ROI'
    },
    {
      title: 'AI 2025 Revolutionary Trends & Predictions',
      description: 'Comprehensive AI trends analysis for 2025',
      category: 'predictions',
      href: '/blog/ai-2025-revolutionary-trends-predictions',
      tags: ['AI 2025', 'Trends', 'Predictions', 'Analysis'],
      icon: '🔮',
      stats: '99.9% Accuracy'
    },
    {
      title: 'AI 2026 Future Predictions Breakthrough',
      description: 'Revolutionary AI predictions for 2026',
      category: 'predictions',
      href: '/blog/ai-2026-future-predictions-breakthrough',
      tags: ['AI 2026', 'Future', 'Predictions', 'Quantum'],
      icon: '🔮',
      stats: '95% Probability'
    },
    {
      title: 'AI 2028-2030 Quantum Neural Breakthroughs',
      description: 'Advanced quantum neural technologies for 2030',
      category: 'quantum',
      href: '/blog/ai-2028-2030-quantum-neural-breakthroughs',
      tags: ['AI 2028', 'Quantum', 'Neural', '2030'],
      icon: '⚛️',
      stats: '10,000x Faster'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Content', icon: '🌟' },
    { value: 'automation', label: 'Automation', icon: '🚀' },
    { value: 'quantum', label: 'Quantum', icon: '⚛️' },
    { value: 'transcendent', label: 'Transcendent', icon: '🌌' },
    { value: 'predictions', label: 'Predictions', icon: '🔮' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          🚀 Ultimate Content Discovery
        </h3>
        <p className="text-gray-600">
          Find the perfect AI content for your needs
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                  selectedCategory === category.value
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon} {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContent.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all duration-200">
            <div className="flex items-start justify-between mb-3">
              <div className="text-2xl">{item.icon}</div>
              <div className="text-sm font-semibold text-green-600">
                {item.stats}
              </div>
            </div>
            <h4 className="font-bold text-gray-900 mb-2 text-sm">
              {item.title}
            </h4>
            <p className="text-gray-600 text-xs mb-3">
              {item.description}
            </p>
            <div className="flex flex-wrap gap-1 mb-3">
              {item.tags.slice(0, 2).map((tag, tagIndex) => (
                <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={item.href}
              className="text-blue-600 hover:text-blue-800 font-semibold text-xs transition-colors"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>

      {filteredContent.length === 0 && (
        <div className="text-center py-8">
          <div className="text-4xl mb-4">🔍</div>
          <p className="text-gray-500">No content found matching your criteria</p>
        </div>
      )}

      <div className="text-center mt-6">
        <Link 
          href="/content-showcase"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View All Content →
        </Link>
      </div>
    </div>
  );
}