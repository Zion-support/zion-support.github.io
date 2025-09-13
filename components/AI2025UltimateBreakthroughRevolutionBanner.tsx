import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
            <span className="text-white text-sm font-semibold animate-pulse">🚀 BREAKTHROUGH ANNOUNCEMENT</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            AI 2025 Ultimate
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Breakthrough Revolution
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Experience the most revolutionary AI breakthrough in history. 
            <span className="font-bold text-yellow-300"> 2,500-5,000% ROI</span> with 
            <span className="font-bold text-green-300"> 99.9% accuracy</span> and 
            <span className="font-bold text-blue-300"> 10,000x faster processing</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center px-8 py-4 bg-white text-red-600 font-bold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Discover the Revolution
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-lg hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}