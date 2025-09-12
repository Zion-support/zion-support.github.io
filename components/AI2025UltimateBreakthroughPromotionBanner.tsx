import React from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughPromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-1/2 left-1/4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-green-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 right-8 w-10 h-10 bg-blue-400 rounded-full animate-ping opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              🚀 BREAKTHROUGH
            </span>
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
              ⚡ ULTIMATE
            </span>
            <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🌟 REVOLUTIONARY
            </span>
            <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold">
              🔥 NEW
            </span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            AI 2025 ULTIMATE BREAKTHROUGH REVOLUTION
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthroughs that will transform your business reality forever. 
            Join thousands of enterprises achieving infinite ROI with our cutting-edge AI technologies.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🚀 Start Your Revolution
            </Link>
            <Link 
              href="/tools/ai-2025-ultimate-roi-calculator"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              🧮 Calculate Infinite ROI
            </Link>
          </div>

          {/* Success metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Reality Transformations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-sm text-gray-300">Universe Expansions</div>
            </div>
          </div>

          {/* Featured content links */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link 
              href="/blog/ai-2025-neural-quantum-fusion-breakthrough"
              className="text-yellow-300 hover:text-yellow-200 text-sm font-semibold underline"
            >
              🧠 Neural Quantum Fusion
            </Link>
            <Link 
              href="/blog/ai-2025-quantum-consciousness-breakthrough"
              className="text-blue-300 hover:text-blue-200 text-sm font-semibold underline"
            >
              ⚛️ Quantum Consciousness
            </Link>
            <Link 
              href="/blog/ai-2025-reality-manipulation-breakthrough"
              className="text-green-300 hover:text-green-200 text-sm font-semibold underline"
            >
              🌌 Reality Manipulation
            </Link>
            <Link 
              href="/blog/ai-2025-time-space-breakthrough"
              className="text-purple-300 hover:text-purple-200 text-sm font-semibold underline"
            >
              🚀 Time-Space AI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;