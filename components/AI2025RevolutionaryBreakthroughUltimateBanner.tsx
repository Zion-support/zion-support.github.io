import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryBreakthroughUltimateBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main headline */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg mb-8 animate-pulse">
            🚀 REVOLUTIONARY BREAKTHROUGH 2025
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Revolutionary Breakthrough
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-4xl mx-auto">
            The most revolutionary AI breakthrough in human history. Quantum-neural fusion technology delivering 
            <span className="text-yellow-400 font-bold"> 99.9% accuracy</span>
            <span className="text-green-400 font-bold"> 10,000x faster processing</span>and 
            <span className="text-red-400 font-bold"> infinite ROI potential</span>.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-red-500/20 to-pink-500/20 p-6 rounded-xl border border-red-500/30">
              <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl font-bold text-green-400 mb-2">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl font-bold text-red-400 mb-2">∞</div>
              <div className="text-sm text-gray-300">ROI Potential</div>
            </div>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-revolutionary-breakthrough-ultimate" 
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-infinite-roi-transformation" 
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View Success Story
            </Link>
            <Link 
              href="/contact" 
              className="px-8 py-4 border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 transform hover:scale-105"
            >
              Get Early Access
            </Link>
          </div>

          {/* Additional features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-2xl mb-2">⚛️</div>
              <div className="text-sm font-semibold text-cyan-400">Quantum-Neural Fusion</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🧠</div>
              <div className="text-sm font-semibold text-purple-400">Consciousness AI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🌌</div>
              <div className="text-sm font-semibold text-pink-400">Reality Manipulation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🚀</div>
              <div className="text-sm font-semibold text-yellow-400">Infinite Possibilities</div>
            </div>
          </div>

          {/* Urgency indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-red-500/20 border border-red-500/50 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-semibold text-red-400">
                Limited Early Access - Only 100 Spots Available
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-bounce"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-500"></div>
      <div className="absolute bottom-20 left-20 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute bottom-10 right-10 w-2 h-2 bg-green-400 rounded-full animate-bounce delay-1500"></div>
    </div>
  );
}