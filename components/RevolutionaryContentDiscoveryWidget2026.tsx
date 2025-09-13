import React, { useState } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentDiscoveryWidget2026() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🌟', count: '500+' },
    { id: 'ai-2025', name: 'AI 2025 Breakthroughs', icon: '🚀', count: '150+' },
    { id: 'ai-2026', name: 'AI 2026 Quantum', icon: '⚛️', count: '120+' },
    { id: 'ai-2027-2030', name: 'AI 2027-2030 Future', icon: '🔮', count: '200+' },
    { id: 'case-studies', name: 'Success Stories', icon: '🏆', count: '100+' },
    { id: 'resources', name: 'Resources & Tools', icon: '🛠️', count: '70+' },
    { id: 'webinars', name: 'Webinars & Training', icon: '🎓', count: '40+' }
  ];

  const featuredContent = [
    {
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technologies with 10,000% ROI and 99.9% accuracy',
      category: 'ai-2025',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      roi: '10,000%',
      accuracy: '99.9%',
      icon: '🚀',
      featured: true
    },
    {
      title: 'AI 2026 Quantum-Neural Revolution',
      description: 'Quantum-neural fusion achieving infinite processing capabilities',
      category: 'ai-2026',
      url: '/ai-2026-quantum-neural-revolution',
      roi: '15,000%',
      accuracy: '99.97%',
      icon: '⚛️',
      featured: true
    },
    {
      title: 'Revolutionary Content Showcase 2026',
      description: 'Comprehensive collection of all revolutionary AI content',
      category: 'all',
      url: '/revolutionary-content-showcase-2026',
      roi: '∞',
      accuracy: 'Perfect',
      icon: '🌟',
      featured: true
    },
    {
      title: 'Global Transformation Breakthrough',
      description: 'Fortune 500 company achieves 10,000% ROI with AI implementation',
      category: 'case-studies',
      url: '/case-studies/ai-2025-global-transformation-breakthrough',
      roi: '10,000%',
      accuracy: '99.9%',
      icon: '🏆',
      featured: false
    },
    {
      title: 'Quantum Manufacturing Revolution',
      description: 'Manufacturing company achieves 15,000% ROI with quantum AI',
      category: 'case-studies',
      url: '/case-studies/ai-2026-quantum-manufacturing-breakthrough',
      roi: '15,000%',
      accuracy: 'Perfect',
      icon: '⚛️',
      featured: false
    },
    {
      title: 'AI 2025 Ultimate Implementation Toolkit',
      description: 'Complete toolkit for implementing revolutionary AI technologies',
      category: 'resources',
      url: '/resources/ai-2025-ultimate-implementation-toolkit',
      roi: '2,500%',
      accuracy: '99.9%',
      icon: '🛠️',
      featured: false
    }
  ];

  const filteredContent = featuredContent.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || content.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-500 bg-clip-text text-transparent">
            Revolutionary Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive collection of revolutionary AI content, breakthrough technologies, and success stories.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search revolutionary content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div className="md:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              >
                {contentCategories.map(category => (
                  <option key={category.id} value={category.id} className="bg-slate-900 text-white">
                    {category.icon} {category.name} ({category.count})
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
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-yellow-500 to-pink-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category.icon} {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredContent.map((content, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${
                content.featured
                  ? 'from-yellow-800/30 to-pink-800/30 border-yellow-500/30'
                  : 'from-slate-800/30 to-purple-800/30 border-slate-500/30'
              } rounded-xl p-6 border hover:border-opacity-60 transition-all duration-300 hover:scale-105`}
            >
              {content.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-pink-500 text-white text-xs font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <div className="flex items-start mb-4">
                <div className="text-3xl mr-3">{content.icon}</div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{content.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{content.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-4">
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-sm">ROI</div>
                    <div className="text-white font-semibold">{content.roi}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-blue-400 font-bold text-sm">Accuracy</div>
                    <div className="text-white font-semibold">{content.accuracy}</div>
                  </div>
                </div>
              </div>

              <Link
                href={content.url}
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-all duration-300"
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
            <h3 className="text-2xl font-bold text-white mb-2">No Content Found</h3>
            <p className="text-gray-300 mb-6">Try adjusting your search terms or category filter.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Business?</h3>
          <p className="text-gray-300 mb-6">Join thousands of companies already achieving revolutionary success with our AI technologies.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-pink-500 hover:from-yellow-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
            <Link
              href="/revolutionary-content-showcase-2026"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              View All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}