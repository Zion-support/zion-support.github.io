import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 animate-pulse">
          🚀 BREAKTHROUGH ANNOUNCEMENT
        </div>
        
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          AI 2025 Ultimate Breakthrough Revolution
        </h2>
        
        <p className="text-xl text-purple-100 mb-6 max-w-4xl mx-auto">
          Experience the most revolutionary AI automation platform ever created. 
          Achieve <span className="font-bold text-yellow-300">2,500-5,000% ROI</span> with our breakthrough technology.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-ultimate-automation-revolution" 
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Discover the Revolution
          </Link>
          <Link 
            href="/case-studies/ai-2025-global-transformation-breakthrough" 
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            View 10,000% ROI Success
          </Link>
        </div>
      </div>
    </div>
  );
}