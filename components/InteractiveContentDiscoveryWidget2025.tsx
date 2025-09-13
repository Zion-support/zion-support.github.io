import React, { useState } from 'react';
import Link from 'next/link';

export default function InteractiveContentDiscoveryWidget2025() {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const contentCategories = {
    all: {
      title: 'All Revolutionary Content',
      icon: '🚀',
      color: 'from-purple-500 to-pink-500'
    },
    ai2025: {
      title: 'AI 2025 Breakthroughs',
      icon: '⚡',
      color: 'from-red-500 to-orange-500'
    },
    ai2026: {
      title: 'AI 2026 Quantum Fusion',
      icon: '⚛️',
      color: 'from-cyan-500 to-blue-500'
    },
    predictions: {
      title: 'Future Predictions',
      icon: '🔮',
      color: 'from-green-500 to-emerald-500'
    },
    caseStudies: {
      title: 'Success Stories',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500'
    }
  };

  const contentItems = [
    {
      id: 1,
      title: 'AI 2025 Revolutionary Breakthrough Announcement',
      description: 'The most advanced AI system ever created, delivering 10,000% ROI, 99.9% accuracy, and 100x faster processing.',
      category: 'ai2025',
      roi: '10,000%',
      accuracy: '99.9%',
      speed: '100x',
      link: '/ai-2025-revolutionary-breakthrough-announcement',
      featured: true
    },
    {
      id: 2,
      title: 'AI 2026 Quantum-Neural Fusion Revolutionary Breakthrough',
      description: 'Revolutionary quantum-neural fusion technology delivering 15,000% ROI, 99.7% accuracy, and infinite processing potential.',
      category: 'ai2026',
      roi: '15,000%',
      accuracy: '99.7%',
      speed: '∞',
      link: '/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
      featured: true
    },
    {
      id: 3,
      title: 'AI 2025-2030 Ultimate Breakthrough Predictions',
      description: 'Comprehensive future predictions and trends analysis for the next decade of AI evolution and transformation.',
      category: 'predictions',
      roi: 'Future Vision',
      accuracy: '95%',
      speed: 'Predictive',
      link: '/ai-2025-2030-ultimate-breakthrough',
      featured: true
    },
    {
      id: 4,
      title: 'Global Enterprise Transformation Success Story',
      description: 'How a Fortune 500 company achieved 12,000% ROI with AI 2025 breakthrough technology implementation.',
      category: 'caseStudies',
      roi: '12,000%',
      accuracy: '100%',
      speed: '6 months',
      link: '/case-studies/ai-2025-global-enterprise-transformation-breakthrough',
      featured: false
    },
    {
      id: 5,
      title: 'Quantum Computing Breakthroughs 2030',
      description: 'Revolutionary quantum computing solutions that will transform entire industries and create new possibilities.',
      category: 'ai2026',
      roi: '20,000%',
      accuracy: '99.8%',
      speed: 'Quantum',
      link: '/quantum-computing-breakthroughs-2030',
      featured: false
    },
    {
      id: 6,
      title: 'Neural Interface Revolution 2026',
      description: 'Breakthrough neural interface technology enabling direct brain-computer communication and control.',
      category: 'ai2026',
      roi: '8,500%',
      accuracy: '98.5%',
      speed: 'Real-time',
      link: '/neural-interface-revolution-2026',
      featured: false
    }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-bold text-sm uppercase tracking-wider">
              🔍 INTERACTIVE CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Discover Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore the most advanced AI content ever created, featuring breakthrough technologies, 
            success stories, and future predictions that will transform your business.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(contentCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
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
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 overflow-hidden ${
                item.featured ? 'ring-2 ring-yellow-500/50' : ''
              }`}
            >
              {item.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold">
                    ⭐ FEATURED
                  </span>
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">
                    {contentCategories[item.category as keyof typeof contentCategories]?.icon}
                  </span>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-lg font-bold text-yellow-400">{item.roi}</div>
                    <div className="text-xs text-gray-400">ROI</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-green-400">{item.accuracy}</div>
                    <div className="text-xs text-gray-400">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-blue-400">{item.speed}</div>
                    <div className="text-xs text-gray-400">Speed</div>
                  </div>
                </div>
                
                <Link
                  href={item.link}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform group-hover:scale-105"
                >
                  Explore Content
                  <svg className="inline-block ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already achieving extraordinary results with our 
              revolutionary AI content and breakthrough technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                Get Started Today
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold text-lg rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                View All Success Stories
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}