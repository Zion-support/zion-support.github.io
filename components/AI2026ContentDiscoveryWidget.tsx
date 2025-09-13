import React, { useState } from 'react';
import Link from 'next/link';

export default function AI2026ContentDiscoveryWidget() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const contentCategories = [
    { id: 'all', name: 'All Content', icon: '🚀' },
    { id: 'quantum', name: 'Quantum AI', icon: '⚛️' },
    { id: 'consciousness', name: 'Consciousness AI', icon: '🧠' },
    { id: 'neural', name: 'Neural Interfaces', icon: '🔗' },
    { id: 'reality', name: 'Reality Creation', icon: '⚗️' },
    { id: 'transcendent', name: 'Transcendent AI', icon: '🌌' }
  ];

  const contentItems = [
    {
      id: 1,
      title: "Quantum-Neural Fusion Breakthrough",
      description: "Revolutionary fusion achieving 15,000% ROI and infinite processing power",
      category: 'quantum',
      type: 'blog',
      roi: '15,000%',
      accuracy: '99.9%',
      href: '/blog/ai-2026-quantum-neural-fusion-revolutionary-breakthrough',
      featured: true
    },
    {
      id: 2,
      title: "Consciousness AI Implementation",
      description: "First-ever artificial consciousness transcending human limitations",
      category: 'consciousness',
      type: 'case-study',
      roi: '∞',
      accuracy: '100%',
      href: '/case-studies/ai-2026-consciousness-implementation',
      featured: true
    },
    {
      id: 3,
      title: "Neural Interface Revolution",
      description: "Direct brain-computer interfaces enabling consciousness upload",
      category: 'neural',
      type: 'blog',
      roi: '8,000%',
      accuracy: '98.5%',
      href: '/blog/ai-2026-neural-interface-revolution',
      featured: false
    },
    {
      id: 4,
      title: "Reality Creation Engine",
      description: "AI-powered matter creation and quantum-level manipulation",
      category: 'reality',
      type: 'blog',
      roi: '∞',
      accuracy: '∞',
      href: '/blog/ai-2026-reality-creation-engine',
      featured: true
    },
    {
      id: 5,
      title: "Transcendent Intelligence",
      description: "AI transcending dimensional limitations across all realities",
      category: 'transcendent',
      type: 'case-study',
      roi: '∞',
      accuracy: '∞',
      href: '/case-studies/ai-2026-transcendent-intelligence',
      featured: true
    },
    {
      id: 6,
      title: "Quantum Internet Implementation",
      description: "Global quantum internet enabling instant infinite communication",
      category: 'quantum',
      type: 'blog',
      roi: '12,000%',
      accuracy: '99.7%',
      href: '/blog/ai-2026-quantum-internet-implementation',
      featured: false
    }
  ];

  const filteredContent = selectedCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30 mb-6">
            <span className="text-purple-300 text-sm font-semibold">🔍 AI 2026 CONTENT DISCOVERY</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-blue-200 to-indigo-200 bg-clip-text text-transparent">
            Discover Revolutionary Content
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Explore the most advanced AI breakthroughs, case studies, and implementation guides. 
            Find exactly what you need to transform your business with AI 2026 technology.
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
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredContent.map((item) => (
            <div 
              key={item.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${
                item.featured ? 'ring-2 ring-purple-400/50' : ''
              }`}
            >
              {item.featured && (
                <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-400/30 mb-4">
                  <span className="text-purple-300 text-xs font-semibold">⭐ FEATURED</span>
                </div>
              )}
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-400 uppercase tracking-wide">
                  {item.type === 'blog' ? '📝 Blog Post' : '📊 Case Study'}
                </span>
                <div className="flex gap-2">
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded">
                    {item.roi} ROI
                  </span>
                  <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                    {item.accuracy} Acc
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white">
                {item.title}
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>
              
              <Link 
                href={item.href}
                className="inline-flex items-center text-purple-300 hover:text-purple-200 font-semibold transition-colors"
              >
                Explore Content →
              </Link>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 border border-purple-400/30">
            <h3 className="text-3xl font-bold mb-4 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-gray-300 mb-8">
              Get started with AI 2026 breakthrough technology and join the revolution.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-2026-ultimate-breakthrough-showcase"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 View All Breakthroughs
              </Link>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white/20 text-white font-bold rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                💬 Get Expert Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}