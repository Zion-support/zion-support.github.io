import React, { useState } from 'react';
import Link from 'next/link';

export default function UltimateContentDiscoveryWidget2025() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      title: 'All Revolutionary Content',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500/30',
      bgColor: 'from-purple-800/50 to-pink-800/50'
    },
    breakthrough: {
      title: 'AI Breakthroughs',
      color: 'from-red-500 to-orange-500',
      borderColor: 'border-red-500/30',
      bgColor: 'from-red-800/50 to-orange-800/50'
    },
    quantum: {
      title: 'Quantum Computing',
      color: 'from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-500/30',
      bgColor: 'from-cyan-800/50 to-blue-800/50'
    },
    enterprise: {
      title: 'Enterprise Success',
      color: 'from-green-500 to-teal-500',
      borderColor: 'border-green-500/30',
      bgColor: 'from-green-800/50 to-teal-800/50'
    },
    future: {
      title: 'Future Predictions',
      color: 'from-purple-500 to-indigo-500',
      borderColor: 'border-purple-500/30',
      bgColor: 'from-purple-800/50 to-indigo-800/50'
    }
  };

  const contentItems = [
    {
      id: 'ai-2025-breakthrough',
      title: 'AI 2025 Ultimate Breakthrough Revolution',
      description: 'Revolutionary AI technology delivering 5,000% ROI through quantum-neural fusion',
      category: 'breakthrough',
      roi: '5,000%',
      type: 'Breakthrough',
      href: '/ai-2025-ultimate-breakthrough-revolution',
      icon: '🚀'
    },
    {
      id: 'ai-2026-quantum',
      title: 'AI 2026 Quantum-Neural Fusion',
      description: 'Consciousness-level AI processing with 15,000% ROI through quantum computing',
      category: 'quantum',
      roi: '15,000%',
      type: 'Revolutionary',
      href: '/ai-2026-quantum-neural-fusion-breakthrough',
      icon: '⚛️'
    },
    {
      id: 'enterprise-transformation',
      title: 'Global Enterprise Transformation',
      description: 'Fortune 500 company achieves 1,200% ROI through AI implementation',
      category: 'enterprise',
      roi: '1,200%',
      type: 'Success Story',
      href: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
      icon: '🏆'
    },
    {
      id: 'ai-2026-future',
      title: 'AI 2026 Future Predictions',
      description: 'Comprehensive predictions for AI development and business transformation',
      category: 'future',
      roi: '∞',
      type: 'Predictions',
      href: '/ai-2026-future-predictions-breakthrough',
      icon: '🔮'
    },
    {
      id: 'quantum-computing-2025',
      title: 'Quantum Computing Solutions 2025',
      description: 'Breakthrough quantum computing solutions for enterprise applications',
      category: 'quantum',
      roi: '8,500%',
      type: 'Breakthrough',
      href: '/quantum-computing-solutions-2025',
      icon: '⚛️'
    },
    {
      id: 'neural-interface-2026',
      title: 'Neural Interface Revolution 2026',
      description: 'Direct brain-computer interfaces enabling 500% cognitive enhancement',
      category: 'breakthrough',
      roi: '500%',
      type: 'Revolutionary',
      href: '/neural-interface-revolution-2026',
      icon: '🧠'
    },
    {
      id: 'ai-2028-predictions',
      title: 'AI 2028 Future Predictions',
      description: 'Revolutionary predictions for AI development through 2028',
      category: 'future',
      roi: '∞',
      type: 'Predictions',
      href: '/ai-2028-future-predictions-breakthrough',
      icon: '🔮'
    },
    {
      id: 'automation-mastery',
      title: 'Enterprise Automation Mastery',
      description: 'Complete guide to implementing AI automation in enterprise environments',
      category: 'enterprise',
      roi: '2,000%',
      type: 'Guide',
      href: '/enterprise-automation-mastery-2026',
      icon: '🤖'
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold mb-6 animate-pulse">
            🎯 ULTIMATE CONTENT DISCOVERY
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Revolutionary AI Content Hub
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Discover breakthrough AI technologies, success stories, and future predictions delivering unprecedented ROI
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`bg-gradient-to-br ${contentCategories[item.category as keyof typeof contentCategories].bgColor} p-8 rounded-xl border ${contentCategories[item.category as keyof typeof contentCategories].borderColor} hover:scale-105 transition-all duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-4xl">{item.icon}</div>
                <div className={`px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${contentCategories[item.category as keyof typeof contentCategories].color} text-white`}>
                  {item.type}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-4 text-sm">
                {item.description}
              </p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="text-2xl font-bold text-yellow-400">
                  {item.roi} ROI
                </div>
                <div className="text-sm text-gray-400">
                  {item.category.toUpperCase()}
                </div>
              </div>
              
              <Link
                href={item.href}
                className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${contentCategories[item.category as keyof typeof contentCategories].color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 transform group-hover:scale-105`}
              >
                Explore Content
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-200 mb-6">
              Get personalized recommendations and start your AI transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Get Personalized Recommendations
              </Link>
              <Link
                href="/newsletter"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                Subscribe to Updates
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}