"use client";
import React{ useState } from 'react';
import Link from 'next/link';

export default function RevolutionaryContentDiscoveryWidget2025() {
  const [activeCategorysetActiveCategory] = useState('all');

  const contentItems = [
    {
      id: 1,
      title: "AI 2025 Revolutionary Breakthrough",
      description: "Experience 99.9% accuracy10,000x faster processingand 2,500-5,000% ROI",
      category: "breakthrough",
      type: "announcement",
      roi: "5,000%",
      accuracy: "99.9%",
      speed: "10,000x",
      href: "/ai-2025-revolutionary-breakthrough-announcement",
      badge: "BREAKTHROUGH",
      badgeColor: "from-red-500 to-pink-500"
    },
    {
      id: 2,
      title: "AI 2026 Quantum Neural Fusion",
      description: "The convergence of quantum computing and neural networks with 15,000% ROI",
      category: "quantum",
      type: "technology",
      roi: "15,000%",
      accuracy: "99.7%",
      speed: "∞",
      href: "/ai-2026-quantum-neural-fusion-revolutionary-breakthrough",
      badge: "REVOLUTIONARY",
      badgeColor: "from-cyan-500 to-purple-500"
    },
    {
      id: 3,
      title: "Global Transformation Success",
      description: "Fortune 500 company achieves 10,000% ROI in just 6 months",
      category: "case-study",
      type: "success",
      roi: "10,000%",
      accuracy: "99.9%",
      speed: "300%",
      href: "/case-studies/ai-2025-global-transformation-breakthrough",
      badge: "SUCCESS STORY",
      badgeColor: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Quantum Manufacturing Revolution",
      description: "Manufacturing company achieves 15,000% ROI through quantum optimization",
      category: "quantum",
      type: "case-study",
      roi: "15,000%",
      accuracy: "99.7%",
      speed: "∞",
      href: "/case-studies/ai-2026-quantum-manufacturing-breakthrough",
      badge: "QUANTUM SUCCESS",
      badgeColor: "from-purple-500 to-pink-500"
    },
    {
      id: 5,
      title: "AI 2025 Implementation Guide",
      description: "Complete guide to implementing revolutionary AI technology in your business",
      category: "guide",
      type: "resource",
      roi: "2,500%",
      accuracy: "99.9%",
      speed: "10,000x",
      href: "/resources/ai-2025-revolutionary-implementation-guide",
      badge: "ESSENTIAL",
      badgeColor: "from-blue-500 to-purple-500"
    },
    {
      id: 6,
      title: "Quantum Implementation Roadmap",
      description: "Step-by-step roadmap for quantum neural fusion implementation",
      category: "quantum",
      type: "resource",
      roi: "15,000%",
      accuracy: "99.7%",
      speed: "∞",
      href: "/resources/ai-2026-quantum-implementation-guide",
      badge: "QUANTUM GUIDE",
      badgeColor: "from-cyan-500 to-blue-500"
    }
  ];

  const categories = [
    { id: 'all'name: 'All Content'count: contentItems.length },
    { id: 'breakthrough'name: 'Breakthroughs'count: contentItems.filter(item => item.category === 'breakthrough').length },
    { id: 'quantum'name: 'Quantum AI'count: contentItems.filter(item => item.category === 'quantum').length },
    { id: 'case-study'name: 'Success Stories'count: contentItems.filter(item => item.category === 'case-study').length },
    { id: 'guide'name: 'Implementation Guides'count: contentItems.filter(item => item.category === 'guide').length }
  ];

  const filteredContent = activeCategory === 'all' 
    ? contentItems 
    : contentItems.filter(item => item.category === activeCategory);

  return (
    <div className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 mb-8">
            <span className="text-blue-400 font-semibold text-sm uppercase tracking-wider">
              🚀 REVOLUTIONARY CONTENT DISCOVERY
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Explore Revolutionary AI Content
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the most advanced AI contentcase studiesand implementation guides. 
            Experience breakthrough technologies that deliver extraordinary results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredContent.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl border border-white/20 p-8 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${item.badgeColor} text-white text-xs font-semibold`}>
                  {item.badge}
                </div>
                <div className="text-2xl">
                  {item.type === 'announcement' && '🚀'}
                  {item.type === 'technology' && '⚛️'}
                  {item.type === 'success' && '🏆'}
                  {item.type === 'resource' && '📚'}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">{item.roi}</div>
                  <div className="text-xs text-gray-400">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">{item.accuracy}</div>
                  <div className="text-xs text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">{item.speed}</div>
                  <div className="text-xs text-gray-400">Speed</div>
                </div>
              </div>

              {/* CTA */}
              <Link
                href={item.href}
                className="inline-flex items-center w-full justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Content
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-8">
            Ready to transform your business with revolutionary AI technology?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🚀 Start Your Transformation
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/tools/ai-2025-roi-calculator"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              🧮 Calculate Your ROI
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}