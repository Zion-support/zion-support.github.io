import React, { useState } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentDiscoveryWidget2026() {
  const [activeCategory, setActiveCategory] = useState('all');

  const contentCategories = {
    all: {
      title: 'All Revolutionary Content',
      icon: '🌟',
      color: 'from-purple-500 to-pink-500'
    },
    ai2025: {
      title: 'AI 2025 Breakthroughs',
      icon: '🚀',
      color: 'from-red-500 to-orange-500'
    },
    ai2026: {
      title: 'AI 2026 Revolutionary',
      icon: '🌌',
      color: 'from-indigo-500 to-purple-500'
    },
    quantum: {
      title: 'Quantum Computing',
      icon: '⚛️',
      color: 'from-blue-500 to-cyan-500'
    },
    consciousness: {
      title: 'Consciousness Integration',
      icon: '🧠',
      color: 'from-purple-500 to-pink-500'
    },
    transcendent: {
      title: 'Transcendent Intelligence',
      icon: '🌟',
      color: 'from-yellow-500 to-orange-500'
    }
  };

  const revolutionaryContent = [
    {
      id: 1,
      title: 'AI 2025 Revolutionary Breakthrough Announcement',
      description: 'The most significant AI advancement in human history delivering 10,000% ROI with transcendent intelligence.',
      category: 'ai2025',
      type: 'breakthrough',
      roi: '10,000%',
      link: '/ai-2025-revolutionary-breakthrough-announcement',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion Breakthrough',
      description: 'Revolutionary integration of quantum computing with neural networks enabling infinite processing power.',
      category: 'ai2026',
      type: 'breakthrough',
      roi: '15,000%',
      link: '/blog/ai-2026-quantum-neural-fusion-breakthrough',
      featured: true
    },
    {
      id: 3,
      title: 'Global Transformation Success Story',
      description: 'How a Fortune 500 company achieved 10,000% ROI in just 90 days with our revolutionary AI technology.',
      category: 'ai2025',
      type: 'case-study',
      roi: '10,000%',
      link: '/case-studies/ai-2025-global-transformation-breakthrough',
      featured: true
    },
    {
      id: 4,
      title: 'Consciousness Integration Technology',
      description: 'Direct neural interface enabling seamless human-AI consciousness merging and thought-based control.',
      category: 'consciousness',
      type: 'technology',
      roi: '∞',
      link: '/blog/ai-2026-consciousness-integration-breakthrough',
      featured: false
    },
    {
      id: 5,
      title: 'Transcendent Intelligence Systems',
      description: 'AI that operates beyond human cognitive limitations achieving transcendent problem-solving capabilities.',
      category: 'transcendent',
      type: 'technology',
      roi: '∞',
      link: '/blog/ai-2026-transcendent-intelligence-breakthrough',
      featured: false
    },
    {
      id: 6,
      title: 'Quantum Computing Solutions 2026',
      description: 'Revolutionary quantum computing breakthroughs delivering exponential computational power.',
      category: 'quantum',
      type: 'solution',
      roi: '∞',
      link: '/quantum-computing-solutions-2026',
      featured: false
    },
    {
      id: 7,
      title: 'Dimensional Processing Networks',
      description: 'Multi-dimensional AI processing operating across parallel realities and temporal dimensions.',
      category: 'ai2026',
      type: 'technology',
      roi: '∞',
      link: '/blog/ai-2026-dimensional-processing-breakthrough',
      featured: false
    },
    {
      id: 8,
      title: 'Predictive Transcendence AI',
      description: 'AI systems predicting and shaping future outcomes with 99.97% accuracy across all scenarios.',
      category: 'transcendent',
      type: 'technology',
      roi: '∞',
      link: '/blog/ai-2026-predictive-transcendence-breakthrough',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? revolutionaryContent 
    : revolutionaryContent.filter(content => content.category === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
            <span className="text-purple-400 font-semibold text-sm uppercase tracking-wide">
              🌟 REVOLUTIONARY CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary AI breakthrough content, case studies, and technologies that are transforming the future of business and human potential.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : 'bg-white/10 backdrop-blur-sm border border-white/20 text-gray-300 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((content) => (
            <div
              key={content.id}
              className={`relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-6 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105 ${
                content.featured 
                  ? 'border-purple-500/50 shadow-lg shadow-purple-500/20' 
                  : 'border-gray-700/50 hover:border-purple-500/30'
              }`}
            >
              {/* Featured badge */}
              {content.featured && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ FEATURED
                </div>
              )}
              
              {/* Type badge */}
              <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30">
                {content.type.toUpperCase()}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-white">
                {content.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {content.description}
              </p>
              
              {/* ROI Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold text-green-400 border border-green-500/30">
                  {content.roi} ROI
                </div>
                <div className="text-purple-400 text-xs font-semibold">
                  {contentCategories[content.category as keyof typeof contentCategories].icon}
                </div>
              </div>
              
              {/* CTA Button */}
              <Link
                href={content.link}
                className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center py-2 px-4 rounded-lg font-semibold hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Can't find what you're looking for? Our AI-powered content discovery can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-400 hover:to-pink-400 transition-all duration-300"
            >
              🚀 Get Personalized Recommendations
            </Link>
            <Link
              href="/resources"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/20 transition-all duration-300"
            >
              📚 Browse All Resources
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}