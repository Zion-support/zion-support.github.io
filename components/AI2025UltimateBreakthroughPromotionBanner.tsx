import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          {/* Breaking news badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold mb-8 animate-bounce">
            🚀 BREAKING: AI 2025 ULTIMATE BREAKTHROUGH REVOLUTION
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            AI 2025 Ultimate Breakthrough Revolution
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The most revolutionary AI breakthrough in history, delivering unprecedented 10,000% ROI and transforming businesses across every industry.
          </p>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-yellow-300 mb-2">10,000%</div>
              <div className="text-lg font-semibold">ROI Achieved</div>
              <div className="text-sm text-gray-300">In just 6 months</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-green-300 mb-2">99.9%</div>
              <div className="text-lg font-semibold">Accuracy Rate</div>
              <div className="text-sm text-gray-300">AI predictions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl font-bold text-blue-300 mb-2">95%</div>
              <div className="text-lg font-semibold">Efficiency Gain</div>
              <div className="text-sm text-gray-300">Across operations</div>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              🚀 Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📊 View 10,000% ROI Case Study
            </Link>
          </div>

          {/* Additional features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Transcendent Intelligence</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Quantum-Neural Fusion</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Autonomous Operations</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-300">
              <span className="text-green-400">✓</span>
              <span>Predictive Mastery</span>
            </div>
          </div>

          {/* Urgency message */}
          <div className="mt-8 p-4 bg-gradient-to-r from-red-600/20 to-pink-600/20 rounded-lg border border-red-500/30">
            <p className="text-lg font-semibold text-red-200">
              ⚡ Limited Time: Early adopters achieving 15,000% ROI - Don't miss the AI revolution!
            </p>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-pulse delay-500"></div>
    </div>
  );
}