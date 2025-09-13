import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main heading with gradient text */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
            🚀 AI 2025 Ultimate Breakthrough Revolution
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI breakthroughs of 2025 that are transforming industries worldwide with unprecedented ROI and transcendent intelligence capabilities.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-green-800/30 to-emerald-800/30 p-6 rounded-xl border border-green-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">10,000%</div>
              <div className="text-gray-300">Maximum ROI Achieved</div>
            </div>
            <div className="bg-gradient-to-br from-blue-800/30 to-cyan-800/30 p-6 rounded-xl border border-blue-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-br from-purple-800/30 to-pink-800/30 p-6 rounded-xl border border-purple-500/30 backdrop-blur-sm">
              <div className="text-3xl font-bold text-purple-400 mb-2">10,000x</div>
              <div className="text-gray-300">Faster Processing</div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:from-yellow-400 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25"
            >
              🚀 Explore Breakthroughs
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
            >
              📊 View Success Stories
            </Link>
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-400 hover:to-pink-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              📚 Implementation Guide
            </Link>
          </div>

          {/* Additional features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">⚛️</div>
              <div className="text-sm text-gray-300">Quantum-AI Fusion</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🧠</div>
              <div className="text-sm text-gray-300">Transcendent Intelligence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤖</div>
              <div className="text-sm text-gray-300">Autonomous Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🌌</div>
              <div className="text-sm text-gray-300">Neural Interfaces</div>
            </div>
          </div>

          {/* Urgency indicator */}
          <div className="mt-8 inline-flex items-center bg-red-500/20 text-red-400 px-4 py-2 rounded-full text-sm font-semibold border border-red-500/30">
            <span className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
            Limited Time: Early Access Available Now
          </div>
        </div>
      </div>
    </div>
  );
}