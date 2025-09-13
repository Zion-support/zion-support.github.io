import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI breakthrough delivering 10,000% ROI with quantum-neural fusion technology.',
      category: 'breakthrough',
      roi: '10,000%',
      type: 'Revolutionary Content',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-red-500 to-pink-600'
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion Success',
      description: 'Fortune 500 case study achieving 15,000% ROI with consciousness-level AI processing.',
      category: 'case-study',
      roi: '15,000%',
      type: 'Success Story',
      href: '/case-studies/ai-2026-quantum-neural-fusion-success',
      badge: 'SUCCESS',
      badgeColor: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'AI 2026 Breakthrough Revolutionary Content',
      description: 'Explore revolutionary AI 2026 breakthrough content featuring quantum-neural fusion.',
      category: 'breakthrough',
      roi: '15,000%',
      type: 'Revolutionary Content',
      href: '/ai-2026-breakthrough-revolutionary-content',
      badge: 'REVOLUTIONARY',
      badgeColor: 'from-cyan-500 to-blue-600'
    },
    {
      id: 4,
      title: 'AI 2027 Future Predictions',
      description: 'Comprehensive predictions for AI development in 2027 and beyond.',
      category: 'predictions',
      roi: '8,000%',
      type: 'Future Insights',
      href: '/ai-2027-future-predictions',
      badge: 'FUTURE',
      badgeColor: 'from-purple-500 to-indigo-600'
    },
    {
      id: 5,
      title: 'AI 2028 Quantum Neural Breakthroughs',
      description: 'Advanced quantum neural technologies achieving transcendent intelligence.',
      category: 'breakthrough',
      roi: '20,000%',
      type: 'Revolutionary Content',
      href: '/ai-2028-2030-quantum-neural-breakthroughs',
      badge: 'TRANSCENDENT',
      badgeColor: 'from-indigo-500 to-purple-600'
    },
    {
      id: 6,
      title: 'AI 2029 Singularity Breakthrough',
      description: 'The singularity event and its implications for human-AI collaboration.',
      category: 'singularity',
      roi: '∞',
      type: 'Singularity Content',
      href: '/ai-2029-singularity-breakthrough',
      badge: 'SINGULARITY',
      badgeColor: 'from-pink-500 to-rose-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Content', count: contentItems.length },
    { id: 'breakthrough', name: 'Breakthroughs', count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'case-study', name: 'Case Studies', count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'predictions', name: 'Predictions', count: contentItems.filter(item => item.category === 'predictions').length },
    { id: 'singularity', name: 'Singularity', count: contentItems.filter(item => item.category === 'singularity').length }
  ];

  const filteredItems = contentItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold mb-6">
            🚀 ULTIMATE CONTENT DISCOVERY 2026
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore breakthrough AI technologies, success stories, and future predictions 
            that are transforming industries worldwide.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search revolutionary AI content..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-slate-800/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-slate-800/50 to-blue-800/50 rounded-2xl p-6 border border-slate-600/30 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Badge */}
              <div className="flex justify-between items-start mb-4">
                <span className={`inline-block bg-gradient-to-r ${item.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold`}>
                  {item.badge}
                </span>
                <span className="text-xs text-gray-400">{item.type}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-cyan-400 line-clamp-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                {item.description}
              </p>

              {/* ROI */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-green-400">
                  {item.roi} ROI
                </div>
                <div className="text-xs text-gray-400">
                  Average Return
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href={item.href}
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-4 rounded-lg text-center transition-all duration-300 transform hover:scale-105"
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2 text-gray-300">No content found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-cyan-800/30 to-blue-800/30 p-8 rounded-2xl border border-cyan-500/30">
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join thousands of companies already achieving breakthrough results with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                🚀 Start Your Transformation
              </Link>
              <Link
                href="/resources"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                📚 View All Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}