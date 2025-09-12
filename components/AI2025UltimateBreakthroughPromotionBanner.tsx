import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-red-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold text-sm mb-4 animate-pulse">
              🚀 ULTIMATE BREAKTHROUGH REVOLUTION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI 2025 Ultimate Breakthrough Revolution
            </h2>
            <p className="text-lg mb-6 max-w-2xl">
              Discover revolutionary AI breakthroughs delivering 5,000% to 50,000% ROI. 
              Exclusive case studies, implementation guides, and breakthrough technologies 
              that will transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution" 
                className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105"
              >
                Explore Breakthroughs
              </Link>
              <Link 
                href="/case-studies/ai-2025-global-transformation-breakthrough" 
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                View Case Studies
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">10,000%</div>
                <div className="text-lg font-semibold mb-2">Average ROI</div>
                <div className="text-sm text-gray-300">Across All Implementations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}