import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-red-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-pink-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm font-bold rounded-full mb-6 animate-pulse shadow-lg">
          🚀 BREAKTHROUGH ANNOUNCEMENT - AI 2025 ULTIMATE REVOLUTION
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 bg-clip-text text-transparent leading-tight">
          AI 2025 Ultimate Breakthrough Revolution
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Experience the most revolutionary AI breakthrough of 2025 delivering{' '}
          <span className="text-yellow-400 font-bold text-3xl">10,000% ROI</span>{' '}
          with autonomous operations, quantum computing integration, and transcendent intelligence capabilities.
        </p>

        {/* Key features */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-lg font-bold text-yellow-400 mb-2">Transcendent Intelligence</h3>
            <p className="text-sm text-gray-300">99.9% accuracy with self-improving capabilities</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-lg font-bold text-yellow-400 mb-2">Quantum Integration</h3>
            <p className="text-sm text-gray-300">Revolutionary quantum computing integration</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-lg font-bold text-yellow-400 mb-2">Autonomous Operations</h3>
            <p className="text-sm text-gray-300">Fully autonomous business operations</p>
          </div>
        </div>

        {/* ROI showcase */}
        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-yellow-500/30 mb-10 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-yellow-400 mb-4">Proven ROI Results</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">2,500%</div>
              <div className="text-sm text-gray-300">Minimum ROI</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">10,000%</div>
              <div className="text-sm text-gray-300">Average ROI</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">50,000%</div>
              <div className="text-sm text-gray-300">Maximum ROI</div>
            </div>
            <div className="bg-white/10 p-4 rounded-lg">
              <div className="text-2xl font-bold text-green-400">∞</div>
              <div className="text-sm text-gray-300">Potential ROI</div>
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-ultimate-breakthrough-revolution" 
            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discover the Breakthrough
          </Link>
          <Link 
            href="/case-studies/ai-2025-global-transformation-breakthrough" 
            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View Success Stories
          </Link>
          <Link 
            href="/resources/ai-2025-revolutionary-implementation-guide" 
            className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Download Guide
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-10 text-sm text-gray-400">
          <p>Trusted by 10,000+ businesses worldwide • 99.9% success rate • 24/7 support</p>
        </div>
      </div>
    </section>
  );
}