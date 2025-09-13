import React from 'react';
import Link from 'next/link';

export default function AI2028RevolutionaryPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-3 animate-pulse">
              🚀 REVOLUTIONARY
            </span>
            <span className="text-sm font-medium">AI 2028 BREAKTHROUGH</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-1">
            Discover the Future of AI: 10,000% ROI Predictions
          </h2>
          <p className="text-sm opacity-90">
            Explore revolutionary AI breakthroughs that will transform industries in 2028
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/blog/ai-2028-future-predictions-breakthrough"
            className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Explore Predictions
          </Link>
          <Link 
            href="/case-studies/ai-2028-automotive-transformation-breakthrough"
            className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-center"
          >
            View Case Study
          </Link>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
        onClick={() => {
          const banner = document.querySelector('[data-banner="ai-2028-revolutionary"]');
          if (banner) banner.style.display = 'none';
        }}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}