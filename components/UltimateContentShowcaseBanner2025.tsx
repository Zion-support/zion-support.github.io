import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcaseBanner2025() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">
            <span className="text-yellow-400 font-bold text-sm uppercase tracking-wide animate-pulse">
              ⭐ ULTIMATE CONTENT SHOWCASE 2025
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
            Revolutionary Content Library
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Explore our comprehensive collection of breakthrough AI, quantum computing, and automation content. 
            Find the perfect solution for your business transformation with guaranteed ROI.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-8 rounded-xl border border-purple-200/30 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🧠</div>
            <h3 className="text-2xl font-bold mb-4 text-white">AI 2025 Breakthroughs</h3>
            <p className="text-gray-300 mb-6">
              Revolutionary AI systems delivering 10,000% ROI through transcendent intelligence and autonomous operations.
            </p>
            <div className="text-2xl font-bold text-green-400 mb-4">10,000% ROI</div>
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold"
            >
              Explore AI 2025 →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 p-8 rounded-xl border border-cyan-200/30 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">🌌</div>
            <h3 className="text-2xl font-bold mb-4 text-white">AI 2026 Revolutionary</h3>
            <p className="text-gray-300 mb-6">
              Quantum-neural fusion technology with consciousness integration delivering 15,000% ROI.
            </p>
            <div className="text-2xl font-bold text-green-400 mb-4">15,000% ROI</div>
            <Link 
              href="/ai-2026-breakthrough-revolutionary-content"
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold"
            >
              Discover AI 2026 →
            </Link>
          </div>

          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 p-8 rounded-xl border border-indigo-200/30 hover:shadow-lg transition-all duration-300">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quantum Computing 2030</h3>
            <p className="text-gray-300 mb-6">
              Error-corrected quantum supremacy with infinite computational power and quantum internet.
            </p>
            <div className="text-2xl font-bold text-green-400 mb-4">∞ ROI</div>
            <Link 
              href="/quantum-computing-breakthroughs-2030"
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 font-semibold"
            >
              Enter Quantum Era →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link 
            href="/content-showcase"
            className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 text-white"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
}