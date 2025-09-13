import React from 'react';
import Link from 'next/link';

export default function AI2026UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
            AI 2026 Ultimate Breakthrough Predictions
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Revolutionary technology forecasts that will reshape humanity and deliver unprecedented ROI opportunities
          </p>
          
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-red-500 text-white px-6 py-2 rounded-full text-lg font-semibold animate-bounce">
              BREAKTHROUGH
            </span>
            <span className="bg-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold animate-bounce">
              15,000% ROI
            </span>
            <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-lg font-semibold animate-bounce">
              REVOLUTIONARY
            </span>
          </div>
          
          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-r from-purple-800/50 to-blue-800/50 p-6 rounded-xl border border-purple-500/30">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">🧠 Quantum-Neural Fusion</h3>
              <p className="text-gray-300 text-sm">99.7% accuracy in complex problem-solving</p>
            </div>
            <div className="bg-gradient-to-r from-cyan-800/50 to-blue-800/50 p-6 rounded-xl border border-cyan-500/30">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">🌌 Consciousness AI</h3>
              <p className="text-gray-300 text-sm">Genuine consciousness and creative thinking</p>
            </div>
            <div className="bg-gradient-to-r from-pink-800/50 to-purple-800/50 p-6 rounded-xl border border-pink-500/30">
              <h3 className="text-xl font-bold mb-3 text-cyan-400">⚛️ Quantum Internet</h3>
              <p className="text-gray-300 text-sm">Instant, secure global communication</p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-ultimate-breakthrough-predictions"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105 shadow-lg"
            >
              Explore Predictions
            </Link>
            <Link 
              href="/tools/ai-2026-roi-calculator"
              className="bg-transparent border-2 border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500 hover:text-white transition-all transform hover:scale-105"
            >
              Calculate Your ROI
            </Link>
          </div>
          
          {/* Urgency indicator */}
          <div className="mt-8 text-center">
            <p className="text-yellow-400 font-semibold animate-pulse">
              ⚡ Limited Time: Early access to implementation toolkit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}