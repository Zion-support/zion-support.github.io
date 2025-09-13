import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2025() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀', color: 'from-purple-500 to-pink-500' },
    { id: 'breakthroughs', name: 'Breakthroughs', icon: '⚡', color: 'from-red-500 to-orange-500' },
    { id: 'trends', name: 'Trends & Predictions', icon: '🔮', color: 'from-blue-500 to-cyan-500' },
    { id: 'case-studies', name: 'Case Studies', icon: '🏆', color: 'from-green-500 to-emerald-500' },
    { id: 'resources', name: 'Resources', icon: '📚', color: 'from-yellow-500 to-orange-500' },
    { id: 'tools', name: 'Tools', icon: '🛠️', color: 'from-indigo-500 to-purple-500' }
  ];

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'The most revolutionary AI breakthrough delivering 10,000% ROI and 99.9% accuracy',
      category: 'breakthroughs',
      url: '/ai-2025-ultimate-breakthrough-revolution',
      stats: { roi: '10,000%', accuracy: '99.9%' },
      featured: true
    },
    {
      id: 2,
      title: 'Revolutionary Trends & Predictions 2025',
      description: 'Comprehensive analysis of AI trends including quantum-neural fusion and neural interfaces',
      category: 'trends',
      url: '/blog/ai-2025-revolutionary-trends-predictions',
      stats: { probability: '95%', timeframe: 'Q2 2025' },
      featured: true
    },
    {
      id: 3,
      title: 'Global Transformation Success Story',
      description: 'Fortune 500 company achieves 10,000% ROI in just 6 months with our AI breakthrough',
      category: 'case-studies',
      url: '/case-studies/ai-2025-global-transformation-breakthrough',
      stats: { roi: '10,000%', timeframe: '6 months' },
      featured: true
    },
    {
      id: 4,
      title: 'AI 2025 Implementation Toolkit',
      description: 'Complete guide to implementing revolutionary AI technologies in your business',
      category: 'resources',
      url: '/resources/ai-2025-ultimate-implementation-toolkit',
      stats: { pages: '500+', downloads: '10K+' },
      featured: false
    },
    {
      id: 5,
      title: 'AI ROI Calculator 2025',
      description: 'Calculate your potential returns on AI investments with our advanced calculator',
      category: 'tools',
      url: '/tools/ai-2025-roi-calculator',
      stats: { accuracy: '99%', users: '50K+' },
      featured: false
    },
    {
      id: 6,
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing solutions for infinite processing power',
      category: 'breakthroughs',
      url: '/quantum-computing-solutions-2025',
      stats: { power: '∞', speed: '10,000x' },
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold mb-6">
            🔍 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Revolutionary
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              AI Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Explore the most comprehensive collection of revolutionary AI content, breakthrough technologies, 
            and transformative insights that will reshape your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {contentCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${
                item.featured 
                  ? 'from-yellow-600/20 to-orange-600/20 border-yellow-500/40' 
                  : 'from-white/10 to-white/5 border-white/20'
              } rounded-2xl p-6 backdrop-blur-sm border hover:border-opacity-60 transition-all duration-300 hover:transform hover:scale-105`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold mb-4">
                  ⭐ FEATURED
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">{item.description}</p>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(item.stats).map(([key, value]) => (
                  <span
                    key={key}
                    className="px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-white"
                  >
                    {key}: {value}
                  </span>
                ))}
              </div>
              
              <Link
                href={item.url}
                className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                  item.featured
                    ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {item.category === 'breakthroughs' && '🚀 Discover Breakthrough'}
                {item.category === 'trends' && '🔮 Explore Trends'}
                {item.category === 'case-studies' && '🏆 View Success Story'}
                {item.category === 'resources' && '📚 Download Guide'}
                {item.category === 'tools' && '🛠️ Use Tool'}
                {!['breakthroughs', 'trends', 'case-studies', 'resources', 'tools'].includes(item.category) && 'Explore Content'}
              </Link>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our AI-powered content discovery system is constantly updating with new revolutionary content. 
            Contact us to request specific content or get personalized recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Request Custom Content
            </Link>
            <Link 
              href="/content-library"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Browse All Content
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}