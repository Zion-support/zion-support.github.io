import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '📚', color: 'from-blue-500 to-purple-500' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀', color: 'from-red-500 to-pink-500' },
    { id: 'ai-2026', name: 'AI 2026', icon: '🧠', color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', color: 'from-purple-500 to-indigo-500' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', color: 'from-green-500 to-emerald-500' },
    { id: 'guides', name: 'Implementation Guides', icon: '📋', color: 'from-orange-500 to-red-500' },
    { id: 'predictions', name: 'Future Predictions', icon: '🔮', color: 'from-pink-500 to-rose-500' }
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Experience the most revolutionary AI breakthrough in history with 15,000% ROI',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '15,000%',
      accuracy: '99.9%',
      speed: '10,000x',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions',
      description: 'Discover revolutionary AI predictions from quantum consciousness to neural interfaces',
      category: 'predictions',
      type: 'predictions',
      roi: '∞',
      accuracy: '95%',
      speed: 'Future',
      url: '/ai-2026-2030-future-predictions-breakthrough',
      badge: 'REVOLUTIONARY'
    },
    {
      id: 3,
      title: 'Quantum-Neural Fusion 2026',
      description: 'Revolutionary quantum-neural integration achieving unprecedented AI capabilities',
      category: 'quantum',
      type: 'quantum',
      roi: '15,000%',
      accuracy: '99.9%',
      speed: '1Mx',
      url: '/quantum-neural-fusion-2026',
      badge: 'BREAKTHROUGH'
    },
    {
      id: 4,
      title: 'Fortune 500 AI Transformation',
      description: 'How Fortune 500 companies achieved 1,500% ROI with our AI solutions',
      category: 'case-studies',
      type: 'case-study',
      roi: '1,500%',
      accuracy: '98%',
      speed: '5x',
      url: '/case-studies/ai-2025-fortune-500-transformation-breakthrough',
      badge: 'SUCCESS'
    },
    {
      id: 5,
      title: 'AI 2025 Ultimate Implementation Guide',
      description: 'Complete step-by-step guide to implementing AI breakthrough technology',
      category: 'guides',
      type: 'guide',
      roi: '15,000%',
      accuracy: '99.9%',
      speed: '10,000x',
      url: '/resources/ai-2025-ultimate-implementation-guide',
      badge: 'ESSENTIAL'
    },
    {
      id: 6,
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces achieving 95% accuracy in thought-to-text conversion',
      category: 'ai-2026',
      type: 'neural',
      roi: '3,000%',
      accuracy: '95%',
      speed: 'Real-time',
      url: '/neural-interface-revolution-2026',
      badge: 'REVOLUTIONARY'
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case 'BREAKTHROUGH': return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'REVOLUTIONARY': return 'bg-gradient-to-r from-purple-500 to-indigo-500';
      case 'SUCCESS': return 'bg-gradient-to-r from-green-500 to-emerald-500';
      case 'ESSENTIAL': return 'bg-gradient-to-r from-blue-500 to-cyan-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold mb-8 animate-pulse">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, case studies, and implementation guides
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search AI content, breakthroughs, case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 rounded-lg border border-white/30 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/30'
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <div className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getBadgeColor(content.badge)}`}>
                  {content.badge}
                </div>
                <div className="text-2xl">{content.type === 'breakthrough' ? '🚀' : content.type === 'quantum' ? '⚛️' : content.type === 'neural' ? '🧠' : '📚'}</div>
              </div>

              {/* Title and Description */}
              <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                {content.title}
              </h3>
              <p className="text-gray-300 text-sm mb-6 line-clamp-3">
                {content.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-yellow-400">{content.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-400">{content.accuracy}</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">{content.speed}</div>
                  <div className="text-xs text-gray-400">Speed</div>
                </div>
              </div>

              {/* Action Button */}
              <Link
                href={content.url}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Content
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
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 p-8 rounded-2xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h3>
            <p className="text-gray-300 mb-6">
              Our AI experts can help you discover the perfect content for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Get Expert Help
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/30"
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