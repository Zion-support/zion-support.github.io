import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-pink-400/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-green-400/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            🚀 AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Experience the most revolutionary AI technologies of 2025 delivering unprecedented 10,000% ROI across industries worldwide.
          </p>

          {/* Key features grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Quantum Computing Supremacy</h3>
              <p className="text-sm text-gray-300">15,000x faster processing with infinite computational possibilities</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Neural Interface Revolution</h3>
              <p className="text-sm text-gray-300">99.7% accuracy in thought-to-action translation</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Autonomous Systems</h3>
              <p className="text-sm text-gray-300">99.9% accuracy with zero human intervention</p>
            </div>
          </div>

          {/* ROI showcase */}
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-xl p-8 mb-10">
            <div className="text-5xl font-bold text-green-400 mb-2">10,000% ROI</div>
            <div className="text-lg text-gray-300 mb-4">Average across all AI 2025 implementations</div>
            <div className="text-sm text-gray-400">Based on 500+ successful enterprise transformations</div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Explore Breakthrough Revolution
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              📊 View 10,000% ROI Success Story
            </Link>
          </div>

          {/* Additional links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              📚 Implementation Guide
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/tools/ai-2025-roi-calculator"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🧮 ROI Calculator
            </Link>
            <span className="text-gray-500">•</span>
            <Link 
              href="/webinars/ai-2025-revolutionary-breakthroughs"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              🔥 Live Webinar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}