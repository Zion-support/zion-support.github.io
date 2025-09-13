import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-indigo-500/20 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-purple-500/20 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 mb-6">
            <span className="text-purple-200 text-sm font-semibold mr-2">🚀 NEW CONTENT 2025</span>
            <span className="text-white text-sm font-bold">ULTIMATE BREAKTHROUGH</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Revolutionary AI Content 2025
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            Discover the most advanced AI breakthroughs, quantum computing solutions, and automation technologies that are transforming industries worldwide.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
              <p className="text-blue-100 text-sm">50,000x performance improvements</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Automation</h3>
              <p className="text-blue-100 text-sm">2,500-5,000% ROI guaranteed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-3">🧠</div>
              <h3 className="text-lg font-semibold text-white mb-2">Neural Networks</h3>
              <p className="text-blue-100 text-sm">99.9% accuracy rates</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Breakthrough Content
            </Link>
            <Link
              href="/quantum-computing-solutions-2025"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Quantum Solutions
            </Link>
            <Link
              href="/advanced-automation-solutions-2025"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
            >
              Automation Solutions
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-blue-200 text-sm">
              Join 10,000+ companies already experiencing the AI revolution
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}