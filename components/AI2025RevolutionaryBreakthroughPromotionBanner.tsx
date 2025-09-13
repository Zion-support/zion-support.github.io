import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-900 via-purple-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-yellow-500/20 rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
            <span className="text-red-400 font-semibold text-sm uppercase tracking-wide animate-pulse">
              🚀 BREAKTHROUGH ANNOUNCEMENT
            </span>
          </div>
          
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 Revolutionary Breakthrough
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            The most significant AI advancement in human history delivering 
            <span className="text-yellow-400 font-bold"> 10,000% ROI</span> with 
            <span className="text-pink-400 font-bold"> transcendent intelligence</span> and 
            <span className="text-purple-400 font-bold"> autonomous operations</span>.
          </p>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-600/20 to-pink-600/20 p-4 rounded-lg border border-red-500/30">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-red-400 font-bold text-lg">Transcendent Intelligence</div>
              <div className="text-gray-300 text-sm">10,000x Processing Speed</div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-lg border border-blue-500/30">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="text-blue-400 font-bold text-lg">Quantum Computing</div>
              <div className="text-gray-300 text-sm">∞ Computational Capacity</div>
            </div>
            
            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-4 rounded-lg border border-green-500/30">
              <div className="text-2xl mb-2">🤖</div>
              <div className="text-green-400 font-bold text-lg">Autonomous Operations</div>
              <div className="text-gray-300 text-sm">100% Automation</div>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-revolutionary-breakthrough-announcement"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              🚀 View Breakthrough Details
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-white/10"
            >
              🏆 See 10,000% ROI Success
            </Link>
          </div>
          
          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="text-yellow-400 hover:text-yellow-300 transition-colors"
            >
              📚 Implementation Guide →
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="text-pink-400 hover:text-pink-300 transition-colors"
            >
              🔥 Live Demo Webinar →
            </Link>
            <Link 
              href="/tools/ai-2025-roi-calculator"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              🧮 ROI Calculator →
            </Link>
            <Link 
              href="/contact"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🚀 Start Your Revolution →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}