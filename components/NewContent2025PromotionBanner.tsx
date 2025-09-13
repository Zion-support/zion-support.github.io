import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-pink-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW BREAKTHROUGH CONTENT 2025
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
            Revolutionary AI Content Just Released
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto">
            Discover the most advanced AI breakthrough content ever created. 
            Quantum computing, neural interfaces, and autonomous systems with infinite ROI potential.
          </p>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 p-6 rounded-xl border border-purple-500/30 hover:scale-105 transition-transform group"
            >
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 group-hover:text-pink-400 transition-colors">
                AI 2025 Ultimate Breakthrough
              </h3>
              <p className="text-gray-300 text-sm">
                Revolutionary quantum-neural fusion with 10,000% ROI potential
              </p>
              <div className="mt-3 text-green-400 font-bold">10,000% ROI</div>
            </Link>

            <Link 
              href="/quantum-computing-solutions-2026"
              className="bg-gradient-to-br from-indigo-800/50 to-purple-800/50 p-6 rounded-xl border border-indigo-500/30 hover:scale-105 transition-transform group"
            >
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="text-xl font-bold mb-2 text-cyan-400 group-hover:text-purple-400 transition-colors">
                Quantum Computing 2026
              </h3>
              <p className="text-gray-300 text-sm">
                Error-corrected quantum computers with 20,000% ROI
              </p>
              <div className="mt-3 text-green-400 font-bold">20,000% ROI</div>
            </Link>

            <Link 
              href="/advanced-automation-solutions-2025"
              className="bg-gradient-to-br from-green-800/50 to-blue-800/50 p-6 rounded-xl border border-green-500/30 hover:scale-105 transition-transform group"
            >
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-xl font-bold mb-2 text-green-400 group-hover:text-blue-400 transition-colors">
                Advanced Automation 2025
              </h3>
              <p className="text-gray-300 text-sm">
                Intelligent process automation with 5,000% ROI
              </p>
              <div className="mt-3 text-green-400 font-bold">5,000% ROI</div>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/content-showcase"
              className="bg-gradient-to-r from-yellow-500 to-pink-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform"
            >
              🚀 Explore All New Content
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-colors"
            >
              💬 Get Personalized Demo
            </Link>
          </div>

          {/* Additional Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">📚</div>
              <div className="text-sm text-gray-300">50+ New Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📊</div>
              <div className="text-sm text-gray-300">25+ Case Studies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🛠️</div>
              <div className="text-sm text-gray-300">15+ Tools</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-sm text-gray-300">100% ROI Focused</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}