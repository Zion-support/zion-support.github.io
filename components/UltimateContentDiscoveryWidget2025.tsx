import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2025() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '📚', count: '500+' },
    { id: 'ai-2025', name: 'AI 2025', icon: '🚀', count: '150+' },
    { id: 'ai-2026', name: 'AI 2026', icon: '🌌', count: '120+' },
    { id: 'ai-2030', name: 'AI 2030', icon: '🔮', count: '80+' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', count: '100+' },
    { id: 'resources', name: 'Resources', icon: '📖', count: '50+' },
  ];

  const featuredContent = [
    {
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough delivering 10,000% ROI',
      category: 'ai-2025',
      roi: '10,000%',
      status: 'BREAKTHROUGH',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'AI 2026 Quantum-Neural Fusion Success',
      description: 'Revolutionary quantum-neural fusion achieving 15,000% ROI',
      category: 'ai-2026',
      roi: '15,000%',
      status: 'REVOLUTIONARY',
      href: '/case-studies/ai-2026-quantum-neural-fusion-success',
      gradient: 'from-cyan-500 to-purple-500'
    },
    {
      title: 'AI 2030 Future Predictions',
      description: 'Transcendent intelligence and infinite ROI possibilities',
      category: 'ai-2030',
      roi: '∞',
      status: 'TRANSCENDENT',
      href: '/ai-2030-future-predictions',
      gradient: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Global Enterprise Transformation',
      description: 'Fortune 500 company achieves 2,000% ROI in 6 months',
      category: 'case-studies',
      roi: '2,000%',
      status: 'SUCCESS',
      href: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Ultimate Implementation Guide',
      description: 'Complete guide to implementing AI 2025 breakthrough solutions',
      category: 'resources',
      roi: 'N/A',
      status: 'ESSENTIAL',
      href: '/resources/ai-2025-revolutionary-implementation-guide',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing integration for business',
      category: 'ai-2026',
      roi: '8,500%',
      status: 'BREAKTHROUGH',
      href: '/quantum-computing-solutions',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-sm font-semibold mb-6">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-indigo-500 to-cyan-600 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive library of AI breakthrough content, case studies, and resources 
            designed to transform your business with unprecedented ROI.
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
                  placeholder="Search revolutionary content..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-80">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {contentCategories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-800 text-white">
                    {category.icon} {category.name} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content, index) => (
            <Link
              key={index}
              href={content.href}
              className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:from-white/10 hover:to-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${content.gradient} text-white`}>
                  {content.status}
                </div>
                <div className="text-sm font-bold text-cyan-400">
                  {content.roi} ROI
                </div>
              </div>

              {/* Content Title */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {content.title}
              </h3>

              {/* Content Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {content.description}
              </p>

              {/* Read More */}
              <div className="flex items-center text-cyan-400 text-sm font-semibold group-hover:text-cyan-300 transition-colors">
                Explore Content
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/content-showcase"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Revolutionary Content
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
            <div className="text-gray-400">Revolutionary Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100+</div>
            <div className="text-gray-400">Success Stories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-400 mb-2">50+</div>
            <div className="text-gray-400">Implementation Guides</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">∞</div>
            <div className="text-gray-400">ROI Possibilities</div>
          </div>
        </div>
      </div>
    </div>
  );
}