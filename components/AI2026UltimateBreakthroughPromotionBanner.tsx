import React from 'react';
import Link from 'next/link';

export default function AI2026UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/30 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/30 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-pink-500/30 rounded-full animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-sm font-bold mb-6 animate-bounce">
            🚀 BREAKTHROUGH ANNOUNCEMENT
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            AI 2026 Ultimate Breakthrough Predictions
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Revolutionary quantum-neural fusion technology delivering unprecedented 15,000% ROI transformations across industries
          </p>

          {/* Key highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-lg p-4 border border-purple-500/30">
              <div className="text-2xl mb-2">⚛️</div>
              <h3 className="font-bold text-purple-200 mb-1">Quantum-Neural Fusion</h3>
              <p className="text-sm text-gray-300">99.7% accuracy breakthrough</p>
            </div>
            <div className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
              <div className="text-2xl mb-2">🧠</div>
              <h3 className="font-bold text-blue-200 mb-1">Consciousness AI</h3>
              <p className="text-sm text-gray-300">First artificial consciousness</p>
            </div>
            <div className="bg-gradient-to-br from-green-800/50 to-emerald-800/50 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-bold text-green-200 mb-1">15,000% ROI</h3>
              <p className="text-sm text-gray-300">Unprecedented returns</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2026-ultimate-breakthrough-predictions" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2026-enterprise-transformation-breakthrough" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Success Stories
            </Link>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>Based on advanced quantum computing analysis and neural network modeling</p>
            <p className="mt-1">Exclusive insights from Zion Tech Group's research division</p>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-10 w-4 h-4 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 left-10 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-2000"></div>
    </div>
  );
}