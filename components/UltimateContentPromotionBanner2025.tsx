import React from 'react';
import Link from 'next/link';

export default function UltimateContentPromotionBanner2025() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-semibold animate-pulse">
                🚀 ULTIMATE BREAKTHROUGH CONTENT
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-sm font-semibold">
                NEW
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI Content Now Available
            </h2>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl">
              Discover the most advanced AI breakthroughs, quantum computing solutions, and future predictions 
              that are transforming industries worldwide with unprecedented ROI.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                AI 2025 Breakthrough Revolution
              </Link>
              <Link 
                href="/ai-2026-2030-future-predictions-showcase"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Future Predictions 2026-2030
              </Link>
              <Link 
                href="/quantum-computing-solutions-advanced"
                className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                Quantum Computing Solutions
              </Link>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">5000%+</div>
                <div className="text-sm text-purple-100 mb-4">Average ROI</div>
                <div className="text-2xl font-bold text-green-300 mb-2">99.7%</div>
                <div className="text-sm text-purple-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-white/5 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-10 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/5 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
}