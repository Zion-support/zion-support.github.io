import React, { useState } from 'react';
import Link from 'next/link';

export default function NewContentDiscoveryWidget() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI with 99.9% accuracy',
      category: 'ai-2025',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '🚀',
      featured: true,
      roi: '10,000%',
      accuracy: '99.9%'
    },
    {
      id: 2,
      title: 'AI 2026 Breakthrough Revolutionary Content',
      description: 'Quantum-neural fusion and consciousness integration with 15,000% ROI',
      category: 'ai-2026',
      url: '/ai-2026-breakthrough-revolutionary-content',
      icon: '🌌',
      featured: true,
      roi: '15,000%',
      accuracy: '99.8%'
    },
    {
      id: 3,
      title: 'Global Transformation Breakthrough Case Study',
      description: 'Fortune 500 company achieves 10,000% ROI through AI implementation',
      category: 'case-studies',
      url: '/case-studies/ai-2025-global-transformation-breakthrough',
      icon: '🏆',
      featured: true,
      roi: '10,000%',
      accuracy: '99.9%'
    },
    {
      id: 4,
      title: 'AI 2025 Revolutionary Trends & Predictions',
      description: 'Comprehensive analysis of AI trends and future predictions',
      category: 'blog',
      url: '/blog/ai-2025-revolutionary-trends-predictions',
      icon: '🔮',
      featured: false,
      roi: '2,500%',
      accuracy: '95%'
    },
    {
      id: 5,
      title: 'AI 2025 Revolutionary Implementation Guide',
      description: 'Complete guide to implementing AI 2025 breakthrough technologies',
      category: 'resources',
      url: '/resources/ai-2025-revolutionary-implementation-guide',
      icon: '📚',
      featured: false,
      roi: '5,000%',
      accuracy: '98%'
    },
    {
      id: 6,
      title: 'AI 2025 ROI Calculator',
      description: 'Calculate your potential ROI with AI 2025 implementation',
      category: 'tools',
      url: '/tools/ai-2025-roi-calculator',
      icon: '🧮',
      featured: false,
      roi: 'Variable',
      accuracy: '99%'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀' },
    { id: 'ai-2026', name: 'AI 2026', icon: '🌌' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆' },
    { id: 'blog', name: 'Blog', icon: '🔮' },
    { id: 'resources', name: 'Resources', icon: '📚' },
    { id: 'tools', name: 'Tools', icon: '🧮' }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our latest breakthrough content and find exactly what you need to transform your business
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map(item => (
            <div
              key={item.id}
              className={`bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-yellow-400/50' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{item.icon}</div>
                <div className="text-right">
                  <div className="text-green-400 font-bold text-sm">{item.roi} ROI</div>
                  <div className="text-blue-400 font-bold text-sm">{item.accuracy} Accuracy</div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                {item.title}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4">
                {item.description}
              </p>
              
              <Link
                href={item.url}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-4">No Content Found</h3>
            <p className="text-gray-300 mb-6">
              Try adjusting your search terms or category filter
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-blue-800/30 to-purple-800/30 p-8 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI experts are here to help you find the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white rounded-lg font-bold transition-all transform hover:scale-105"
              >
                Contact Our Experts
              </Link>
              <Link
                href="/resources"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-lg font-bold transition-all transform hover:scale-105"
              >
                Browse All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}