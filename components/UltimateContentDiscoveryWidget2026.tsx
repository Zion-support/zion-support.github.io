import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2026() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀' },
    { id: 'ai-2026', name: 'AI 2026', icon: '🌌' },
    { id: 'quantum', name: 'Quantum Computing', icon: '⚛️' },
    { id: 'case-studies', name: 'Case Studies', icon: '📊' },
    { id: 'guides', name: 'Implementation Guides', icon: '📚' },
    { id: 'tools', name: 'Tools & Calculators', icon: '🛠️' },
  ];

  const featuredContent = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough of 2025 delivering 10,000% ROI with autonomous operations.',
      category: 'ai-2025',
      type: 'breakthrough',
      roi: '10,000%',
      link: '/ai-2025-ultimate-breakthrough-revolution',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-red-500 to-pink-500'
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Revolutionary quantum-neural fusion delivering 15,000% ROI with consciousness integration.',
      category: 'ai-2026',
      type: 'revolutionary',
      roi: '15,000%',
      link: '/ai-2026-breakthrough-revolutionary-content',
      badge: 'REVOLUTIONARY',
      badgeColor: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      title: 'Quantum Computing Solutions 2026',
      description: 'Advanced quantum computing solutions with error-corrected quantum computers and quantum supremacy.',
      category: 'quantum',
      type: 'breakthrough',
      roi: '8,500%',
      link: '/quantum-computing-solutions',
      badge: 'BREAKTHROUGH',
      badgeColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Global Enterprise Transformation Success',
      description: 'Fortune 500 company achieves 2,000% ROI through AI automation and digital transformation.',
      category: 'case-studies',
      type: 'success-story',
      roi: '2,000%',
      link: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
      badge: 'SUCCESS',
      badgeColor: 'from-green-500 to-emerald-500'
    },
    {
      id: 5,
      title: 'AI 2025 Revolutionary Implementation Guide',
      description: 'Comprehensive implementation guide for AI 2025 breakthrough with step-by-step instructions.',
      category: 'guides',
      type: 'guide',
      roi: 'N/A',
      link: '/resources/ai-2025-revolutionary-implementation-guide',
      badge: 'ESSENTIAL',
      badgeColor: 'from-orange-500 to-red-500'
    },
    {
      id: 6,
      title: 'AI ROI Calculator 2026',
      description: 'Advanced ROI calculator for AI implementations with quantum computing integration.',
      category: 'tools',
      type: 'tool',
      roi: 'N/A',
      link: '/tools/ai-2026-roi-calculator',
      badge: 'NEW',
      badgeColor: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    const matchesSearch = content.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold rounded-full mb-6 animate-pulse">
            🌟 ULTIMATE CONTENT DISCOVERY 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthroughs, case studies, implementation guides, and tools.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-4xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <input
                type="text"
                placeholder="Search for AI breakthroughs, case studies, guides..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                🔍
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 justify-center">
              {contentCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105'
                      : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Badge */}
              <div className={`inline-block px-3 py-1 bg-gradient-to-r ${content.badgeColor} text-white text-xs font-bold rounded-full mb-4`}>
                {content.badge}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-cyan-400 group-hover:text-yellow-400 transition-colors">
                {content.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {content.description}
              </p>

              {/* ROI */}
              {content.roi !== 'N/A' && (
                <div className="mb-4">
                  <span className="text-green-400 font-bold text-lg">{content.roi} ROI</span>
                </div>
              )}

              {/* Link */}
              <Link
                href={content.link}
                className="inline-flex items-center text-purple-400 hover:text-yellow-400 font-semibold transition-colors group-hover:translate-x-1 transform duration-300"
              >
                Explore Now
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Content
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-sm text-gray-300">Content Pieces</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-green-400 mb-2">50,000%</div>
            <div className="text-sm text-gray-300">Max ROI Achieved</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
            <div className="text-sm text-gray-300">Success Rate</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
            <div className="text-sm text-gray-300">Support Available</div>
          </div>
        </div>
      </div>
    </div>
  );
}