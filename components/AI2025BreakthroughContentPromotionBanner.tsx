import React from 'react';
import Link from 'next/link';

export default function AI2025BreakthroughContentPromotionBanner() {
  return (
    <section className="relative py-16 px-4 overflow-hidden bg-gradient-to-r from-red-600 via-purple-600 to-blue-600">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-500/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-semibold mb-6 animate-pulse">
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Breakthrough Revolution
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary AI breakthrough in history delivering 
            <span className="font-bold text-yellow-300"> 2,500-5,000% ROI</span> to businesses worldwide.
          </p>
        </div>

        {/* Featured Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Main Breakthrough Page */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold text-white mb-3">Ultimate Breakthrough Revolution</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Experience quantum computing, neural interfaces, and autonomous operations delivering unprecedented results.
            </p>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              Explore Breakthrough →
            </Link>
          </div>

          {/* Case Study */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🏆</div>
            <h3 className="text-xl font-bold text-white mb-3">10,000% ROI Success Story</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Fortune 500 company achieves complete digital transformation with our AI breakthrough technologies.
            </p>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              Read Case Study →
            </Link>
          </div>

          {/* Implementation Toolkit */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="text-3xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold text-white mb-3">Ultimate Implementation Toolkit</h3>
            <p className="text-blue-100 mb-4 text-sm">
              Complete step-by-step guide with templates, checklists, and expert support for maximum ROI.
            </p>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="inline-flex items-center text-white font-semibold hover:text-yellow-300 transition-colors"
            >
              Get Toolkit →
            </Link>
          </div>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-1">5,000%</div>
            <div className="text-blue-100 text-sm">Average ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-1">99.9%</div>
            <div className="text-blue-100 text-sm">Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-1">10,000x</div>
            <div className="text-blue-100 text-sm">Faster Processing</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-1">500+</div>
            <div className="text-blue-100 text-sm">Global Clients</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthrough Technologies
            </Link>
            <Link 
              href="/contact"
              className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}