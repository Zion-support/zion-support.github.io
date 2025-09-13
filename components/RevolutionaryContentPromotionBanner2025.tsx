import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentPromotionBanner2025() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-4">
            <span className="text-white font-bold text-sm uppercase tracking-wide animate-pulse">
              🚀 NEW REVOLUTIONARY CONTENT 2025
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Discover Our Latest Breakthrough Content
          </h2>
          
          <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
            Explore our newest revolutionary AI and quantum computing content, featuring guaranteed ROI breakthroughs and transcendent intelligence systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="px-6 py-3 bg-white text-purple-600 hover:bg-gray-100 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              AI 2025 Ultimate Breakthrough
            </Link>
            <Link 
              href="/ai-2026-breakthrough-revolutionary-content"
              className="px-6 py-3 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300"
            >
              AI 2026 Revolutionary Content
            </Link>
            <Link 
              href="/quantum-computing-breakthroughs-2030"
              className="px-6 py-3 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 rounded-lg font-semibold transition-all duration-300"
            >
              Quantum Computing 2030
            </Link>
          </div>
          
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-yellow-300">10,000%</div>
              <div className="text-blue-100 text-sm">AI 2025 ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">15,000%</div>
              <div className="text-blue-100 text-sm">AI 2026 ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">∞</div>
              <div className="text-blue-100 text-sm">Quantum ROI</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">99.9%</div>
              <div className="text-blue-100 text-sm">Accuracy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}