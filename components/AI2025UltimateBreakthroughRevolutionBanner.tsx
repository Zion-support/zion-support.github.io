import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold mb-8 animate-bounce">
            🚀 BREAKTHROUGH ANNOUNCEMENT - NEW CONTENT
          </div>

          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough in human history. 
            Quantum-AI fusion delivering <span className="text-yellow-400 font-bold">10,000% ROI</span> with 
            <span className="text-green-400 font-bold"> 99.9% accuracy</span> across all industries.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-800/30 to-pink-800/30 p-6 rounded-xl border border-red-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">10,000%</div>
              <div className="text-gray-300 font-semibold">ROI Achievement</div>
            </div>
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300 font-semibold">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl font-bold text-blue-400 mb-2">10,000x</div>
              <div className="text-gray-300 font-semibold">Faster Processing</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              🚀 Explore Breakthrough Content
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              🏆 View 10,000% ROI Success Story
            </Link>
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              📚 Get Implementation Guide
            </Link>
          </div>

          {/* Additional content links */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions"
              className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 p-4 rounded-lg border border-purple-500/30 hover:border-purple-400/60 transition-all text-center"
            >
              <div className="text-2xl mb-2">🔮</div>
              <div className="text-sm font-semibold text-white">Revolutionary Trends</div>
            </Link>
            <Link 
              href="/case-studies/ai-2025-fortune-500-transformation-breakthrough"
              className="bg-gradient-to-r from-green-800/50 to-emerald-800/50 p-4 rounded-lg border border-green-500/30 hover:border-green-400/60 transition-all text-center"
            >
              <div className="text-2xl mb-2">🏢</div>
              <div className="text-sm font-semibold text-white">Fortune 500 Success</div>
            </Link>
            <Link 
              href="/tools/ai-2025-roi-calculator"
              className="bg-gradient-to-r from-blue-800/50 to-cyan-800/50 p-4 rounded-lg border border-blue-500/30 hover:border-blue-400/60 transition-all text-center"
            >
              <div className="text-2xl mb-2">🧮</div>
              <div className="text-sm font-semibold text-white">ROI Calculator</div>
            </Link>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="bg-gradient-to-r from-orange-800/50 to-red-800/50 p-4 rounded-lg border border-orange-500/30 hover:border-orange-400/60 transition-all text-center"
            >
              <div className="text-2xl mb-2">🔥</div>
              <div className="text-sm font-semibold text-white">Revolutionary Webinar</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}