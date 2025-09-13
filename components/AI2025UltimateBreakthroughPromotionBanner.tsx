import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-purple-500/10 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/50 mb-6 animate-pulse">
            <span className="text-red-400 font-bold text-sm">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>

          {/* Main heading */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
            AI 2025 ULTIMATE BREAKTHROUGH REVOLUTION
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Discover the most revolutionary AI breakthroughs of 2025 that are transforming industries worldwide with unprecedented <span className="text-yellow-400 font-bold">2,500-5,000% ROI</span> and <span className="text-green-400 font-bold">99.9% accuracy</span> rates.
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-500/30">
              <div className="text-3xl mb-2">🧠</div>
              <h3 className="text-lg font-bold text-yellow-400 mb-2">Synthetic Intelligence</h3>
              <p className="text-sm text-gray-300">Human-level AI consciousness</p>
              <div className="text-green-400 font-bold text-lg mt-2">3,500% ROI</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-lg p-6 border border-blue-500/30">
              <div className="text-3xl mb-2">⚛️</div>
              <h3 className="text-lg font-bold text-cyan-400 mb-2">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300">Exponential processing power</p>
              <div className="text-blue-400 font-bold text-lg mt-2">5,000% ROI</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-lg p-6 border border-green-500/30">
              <div className="text-3xl mb-2">🤖</div>
              <h3 className="text-lg font-bold text-green-400 mb-2">Autonomous Operations</h3>
              <p className="text-sm text-gray-300">Fully automated systems</p>
              <div className="text-emerald-400 font-bold text-lg mt-2">2,800% ROI</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthroughs
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get Started Today
            </Link>
          </div>

          {/* Success metrics */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-yellow-400 mb-1">2,500%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-1">99.9%</div>
              <div className="text-sm text-gray-300">Accuracy Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-400 mb-1">10,000x</div>
              <div className="text-sm text-gray-300">Faster Processing</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-1">500+</div>
              <div className="text-sm text-gray-300">Enterprise Clients</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}