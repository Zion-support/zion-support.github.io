import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟', color: 'from-purple-500 to-pink-500' },
    { id: 'ai2025', name: 'AI 2025', icon: '🚀', color: 'from-red-500 to-pink-500' },
    { id: 'ai2026-2030', name: 'AI 2026-2030', icon: '🔮', color: 'from-cyan-500 to-blue-500' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️', color: 'from-green-500 to-emerald-500' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🧠', color: 'from-purple-500 to-indigo-500' },
    { id: 'future', name: 'Future Tech', icon: '🌌', color: 'from-orange-500 to-red-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI with quantum-powered intelligence',
      category: 'ai2025',
      roi: '10,000%',
      accuracy: '99.9%',
      icon: '🚀',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026-2030 Future Predictions Revolutionary',
      description: 'Comprehensive roadmap of AI breakthroughs from 2026 to 2030 including quantum consciousness',
      category: 'ai2026-2030',
      roi: '25,000%',
      accuracy: '99.8%',
      icon: '🔮',
      href: '/ai-2026-2030-future-predictions-revolutionary',
      featured: true
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions 2025',
      description: 'Error-corrected quantum computers delivering 50,000% ROI in optimization problems',
      category: 'quantum',
      roi: '50,000%',
      accuracy: '99.9%',
      icon: '⚛️',
      href: '/quantum-computing-solutions-2025',
      featured: true
    },
    {
      id: 4,
      title: 'Neural Interface Revolution 2025',
      description: 'Direct brain-computer interfaces achieving 95% success rate in medical applications',
      category: 'neural',
      roi: '5,000%',
      accuracy: '95%',
      icon: '🧠',
      href: '/neural-interface-revolution-2025',
      featured: false
    },
    {
      id: 5,
      title: 'Quantum-Neural Fusion Breakthrough',
      description: 'Revolutionary fusion of quantum computing and neural interfaces for 15,000% ROI',
      category: 'future',
      roi: '15,000%',
      accuracy: '99.7%',
      icon: '🌌',
      href: '/quantum-neural-fusion-breakthrough',
      featured: false
    },
    {
      id: 6,
      title: 'AI 2028 Dimensional Processing',
      description: 'Multi-dimensional AI systems operating across 11 dimensions for 30,000% ROI',
      category: 'ai2026-2030',
      roi: '30,000%',
      accuracy: '99.9%',
      icon: '🌌',
      href: '/ai-2028-dimensional-processing',
      featured: false
    }
  ];

  const filteredContent = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary AI content library. Discover breakthrough technologies 
            and solutions that deliver unprecedented ROI across all industries.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search revolutionary content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 pl-12 rounded-lg bg-black/30 border border-purple-500/30 text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-black/30 border border-purple-500/30 text-white focus:border-purple-500 focus:outline-none"
              >
                {contentCategories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.icon} {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {contentCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                }`}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                item.featured 
                  ? 'border-yellow-500/50 hover:border-yellow-500' 
                  : 'border-purple-500/30 hover:border-purple-500'
              }`}
            >
              {/* Featured Badge */}
              {item.featured && (
                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4">{item.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-yellow-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {item.description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-green-800/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-green-400">{item.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="bg-blue-800/30 rounded-lg p-3 text-center">
                  <div className="text-lg font-bold text-blue-400">{item.accuracy}</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-400">Learn More</span>
                <div className="text-purple-400 group-hover:text-yellow-400 transition-colors">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredContent.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400 mb-2">No Content Found</h3>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 rounded-2xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Don't miss out on the most revolutionary AI breakthrough in human history. 
              Get started with our comprehensive implementation guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                href="/resources"
                className="bg-transparent border-2 border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}