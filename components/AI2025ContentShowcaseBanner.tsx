import React from 'react';
import Link from 'next/link';

export default function AI2025ContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-400 to-pink-400 animate-pulse"></div>
        <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-2 left-12 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-white rounded-full animate-bounce delay-300"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-2xl mr-3 animate-pulse">🚀</div>
          <div>
            <h3 className="text-lg md:text-xl font-bold">
              AI 2025 Ultimate Content Showcase
            </h3>
            <p className="text-sm md:text-base text-purple-100">
              Revolutionary breakthroughs10,000% ROI success storiesand implementation guides
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/ai-2025-ultimate-content-showcase"
            className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Explore Now
          </Link>
          <Link 
            href="/ai-2025-roi-calculator"
            className="px-6 py-2 bg-transparent text-white font-semibold rounded-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Calculate ROI
          </Link>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
        onClick={() => {
          const banner = document.querySelector('.ai-2025-banner');
          if (banner) banner.style.display = 'none';
        }}
        aria-label="Close banner"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}