import React from 'react';
import Link from 'next/link';

export default function AI2030ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 left-1/2 w-16 h-16 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                NEW
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                FREE
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 AI 2030: Revolutionary Future Predictions & Breakthrough Technologies
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-4">
              Discover quantum AI, neural interfaces, and autonomous systems that will transform every industry by 2030
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
              <Link 
                href="/blog/ai-2030-future-predictions"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                🔮 Read Predictions
              </Link>
              <Link 
                href="/case-studies/ai-2030-enterprise-transformation-breakthrough"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors inline-flex items-center justify-center"
              >
                💰 5000% ROI Case Study
              </Link>
              <Link 
                href="/resources/ai-2030-implementation-master-guide"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors inline-flex items-center justify-center"
              >
                📚 Download Master Guide
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-3xl font-bold mb-2">5000%</div>
              <div className="text-sm opacity-90">ROI Achieved</div>
              <div className="text-xs opacity-75 mt-1">Fortune 100 Case Study</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
        onClick={() => {
          // Add logic to hide banner
          const banner = document.querySelector('.ai-2030-banner');
          if (banner) banner.style.display = 'none';
        }}
        aria-label="Close banner"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}