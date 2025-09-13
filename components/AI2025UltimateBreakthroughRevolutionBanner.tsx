import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Breaking news badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-sm font-bold mb-6 animate-pulse">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-ping"></span>
            BREAKING: AI 2025 ULTIMATE BREAKTHROUGH REVOLUTION
          </div>

          {/* Main headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            🚀 AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
              Breakthrough Revolution
            </span>
          </h2>

          {/* Subheadline with key metrics */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-2xl font-bold text-yellow-400">5,000%</span>
              <span className="text-white ml-2">ROI Guaranteed</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-2xl font-bold text-cyan-400">99.9%</span>
              <span className="text-white ml-2">Accuracy Rate</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
              <span className="text-2xl font-bold text-green-400">10,000x</span>
              <span className="text-white ml-2">Faster Processing</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            The most revolutionary AI breakthrough of 2025 delivering unprecedented business transformation 
            through quantum computing, neural interfaces, and autonomous operations.
          </p>

          {/* Key features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-bold text-white mb-2">Quantum Computing</h3>
              <p className="text-gray-300 text-sm">Revolutionary quantum algorithms for ultra-fast processing</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-bold text-white mb-2">Neural Interfaces</h3>
              <p className="text-gray-300 text-sm">Direct brain-computer interfaces with zero latency</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-bold text-white mb-2">Autonomous Ops</h3>
              <p className="text-gray-300 text-sm">Fully autonomous 24/7 business operations</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-lg rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Discover the Breakthrough
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/case-studies/ai-2025-ultimate-breakthrough-success"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              View Success Stories
            </Link>
            <Link
              href="/webinars/ai-2025-ultimate-breakthrough-demo"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              Watch Demo
            </Link>
          </div>

          {/* Urgency indicator */}
          <div className="mt-8 text-center">
            <p className="text-yellow-400 font-bold text-lg animate-pulse">
              ⚡ Limited Time: Only 100 implementations available in 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}