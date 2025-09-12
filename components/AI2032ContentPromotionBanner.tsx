import React from 'react';
import Link from 'next/link';

export default function AI2032ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 BREAKTHROUGH
            </span>
            <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              NEW
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            AI 2032 Future Predictions: Revolutionary Breakthroughs
          </h2>
          <p className="text-purple-100 text-sm md:text-base">
            Discover quantum AI, neural interfaces, and technologies that will transform every industry
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/ai-2032-future-predictions-breakthrough"
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
          >
            View Predictions
          </Link>
          <Link 
            href="/case-studies/ai-2032-quantum-breakthrough-25000-roi"
            className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-400 transition-colors text-center"
          >
            25,000% ROI Case Study
          </Link>
          <Link 
            href="/resources/ai-2032-ultimate-implementation-master-guide"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-center"
          >
            Master Guide
          </Link>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-16 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}