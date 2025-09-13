import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-purple-600 to-pink-600 py-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-6">
            <span className="text-red-200 font-semibold text-sm animate-pulse">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            AI 2025 Ultimate Breakthrough Revolution
          </h2>
          <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
            Experience the most revolutionary AI breakthrough in human history. 
            <span className="font-bold text-yellow-300"> 5,000% ROI guaranteed</span> through quantum-enhanced neural networks and transcendent intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Discover the Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}