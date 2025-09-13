import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentPromotionBanner2025() {
  return (
    <section className="relative py-16 px-4 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-cyan-500/20 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-full text-red-300 text-sm font-semibold mb-8 animate-pulse">
          🚀 REVOLUTIONARY CONTENT LAUNCH
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Revolutionary AI Content 2025
        </h2>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
          Discover the most revolutionary AI breakthrough content ever created. Experience 10,000% ROI, quantum supremacy, and transcendent intelligence.
        </p>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-500/20 to-pink-500/20 p-6 rounded-xl border border-red-500/30 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="text-xl font-bold text-red-300 mb-2">AI 2025 Ultimate Breakthrough</h3>
            <p className="text-gray-300 text-sm mb-4">Revolutionary AI breakthrough with 10,000% ROI and 99.9% accuracy</p>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="text-red-400 hover:text-red-300 font-semibold text-sm"
            >
              Explore Breakthrough →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-6 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl mb-3">⚛️</div>
            <h3 className="text-xl font-bold text-purple-300 mb-2">Quantum Computing Solutions</h3>
            <p className="text-gray-300 text-sm mb-4">Achieve quantum supremacy with infinite computational power</p>
            <Link 
              href="/quantum-computing-solutions-2025"
              className="text-purple-400 hover:text-purple-300 font-semibold text-sm"
            >
              Discover Quantum →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-green-500/30 hover:scale-105 transition-transform duration-300">
            <div className="text-3xl mb-3">🤖</div>
            <h3 className="text-xl font-bold text-green-300 mb-2">Advanced Automation</h3>
            <p className="text-gray-300 text-sm mb-4">Intelligent automation delivering 5,000% ROI through self-managing systems</p>
            <Link 
              href="/advanced-automation-solutions-2025"
              className="text-green-400 hover:text-green-300 font-semibold text-sm"
            >
              Explore Automation →
            </Link>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/content-showcase"
            className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            View All Content
          </Link>
          <Link 
            href="/resources/ai-2025-revolutionary-implementation-guide"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
          >
            Download Implementation Guide
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm mb-4">Trusted by industry leaders worldwide</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-gray-500">Fortune 500</div>
            <div className="text-2xl font-bold text-gray-500">Global 2000</div>
            <div className="text-2xl font-bold text-gray-500">Tech Giants</div>
            <div className="text-2xl font-bold text-gray-500">Startups</div>
          </div>
        </div>
      </div>
    </section>
  );
}