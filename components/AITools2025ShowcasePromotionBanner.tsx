import React from 'react';
import Link from 'next/link';

export default function AITools2025ShowcasePromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-16 h-16 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 left-1/3 w-14 h-14 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="text-2xl mr-3 animate-pulse">🛠️</div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-1">
              AI Tools 2025 Ultimate Showcase - NOW AVAILABLE!
            </h3>
            <p className="text-sm md:text-base opacity-90">
              Revolutionary AI tools collection • ROI Calculator • Automation Assessment • Performance Monitor
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/ai-tools-2025-ultimate-showcase"
            className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
          >
            Explore Tools
          </Link>
          <Link 
            href="/tools/ai-2025-roi-calculator"
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105 text-center"
          >
            Try ROI Calculator
          </Link>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors z-20"
        onClick={() => {
          const banner = document.querySelector('.ai-tools-banner');
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