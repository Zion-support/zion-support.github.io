import React from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughPromotionBanner = () => {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400/20 via-pink-500/20 to-purple-400/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-full text-sm mb-4 animate-pulse">
              🚀 ULTIMATE BREAKTHROUGH 2025
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-400 bg-clip-text text-transparent">
              AI 2025 Ultimate Breakthrough
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-3xl">
              Experience the most revolutionary AI breakthroughs of 2025. From quantum neural networks to consciousness-level AI systems, discover the future of artificial intelligence.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <div className="flex items-center bg-green-500/20 px-4 py-2 rounded-lg">
                <span className="text-green-400 font-bold text-lg mr-2">∞ ROI</span>
                <span className="text-gray-300">Infinite Returns</span>
              </div>
              <div className="flex items-center bg-blue-500/20 px-4 py-2 rounded-lg">
                <span className="text-blue-400 font-bold text-lg mr-2">99.9%</span>
                <span className="text-gray-300">Accuracy Rate</span>
              </div>
              <div className="flex items-center bg-purple-500/20 px-4 py-2 rounded-lg">
                <span className="text-purple-400 font-bold text-lg mr-2">∞</span>
                <span className="text-gray-300">Possibilities</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg text-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🚀 Explore Breakthroughs
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link 
              href="/tools/ai-2025-ultimate-roi-calculator"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              🧮 Calculate ROI
              <svg className="w-6 h-6 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Featured Breakthroughs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
            <div className="text-2xl mb-3">🧠</div>
            <h3 className="text-lg font-bold mb-2 text-yellow-400">Quantum Neural Consciousness</h3>
            <p className="text-sm text-gray-300 mb-3">99.9% human-level consciousness through quantum processing</p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-bold">15,000% ROI</span>
              <Link href="/blog/ai-2025-quantum-neural-consciousness" className="text-yellow-400 hover:text-yellow-300 text-sm font-semibold">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-800/30 to-cyan-800/30 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
            <div className="text-2xl mb-3">⚛️</div>
            <h3 className="text-lg font-bold mb-2 text-cyan-400">Matter Creation AI</h3>
            <p className="text-sm text-gray-300 mb-3">Create matter from energy, revolutionizing everything</p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-bold">∞ ROI</span>
              <Link href="/blog/ai-2025-matter-creation-breakthrough" className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-800/30 to-emerald-800/30 backdrop-blur-sm rounded-xl p-6 border border-green-400/30 hover:border-green-400/60 transition-all duration-300">
            <div className="text-2xl mb-3">🌌</div>
            <h3 className="text-lg font-bold mb-2 text-emerald-400">Universal Peace Algorithm</h3>
            <p className="text-sm text-gray-300 mb-3">AI that creates world peace through advanced diplomacy</p>
            <div className="flex items-center justify-between">
              <span className="text-green-400 font-bold">∞ ROI</span>
              <Link href="/blog/ai-2025-universal-peace-algorithm" className="text-emerald-400 hover:text-emerald-300 text-sm font-semibold">
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughPromotionBanner;