import React from 'react';
import Link from 'next/link';

export default function AI2026BreakthroughPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-white opacity-10 rounded-full animate-ping"></div>
        <div className="absolute top-2 right-1/4 w-6 h-6 bg-white opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-1/3 w-4 h-4 bg-white opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white opacity-20 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <div className="flex items-center mr-4">
            <span className="text-2xl mr-2">🚀</span>
            <span className="font-bold text-lg">NEW AI 2026 BREAKTHROUGHS</span>
          </div>
          <div className="hidden md:block">
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
              REVOLUTIONARY
            </span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="text-center sm:text-left">
            <div className="text-sm opacity-90">Discover 15,000% ROI Success Stories</div>
            <div className="text-xs opacity-75">Quantum-Neural Fusion • Autonomous Systems • Neural Interfaces</div>
          </div>
          
          <div className="flex space-x-2">
            <Link 
              href="/ai-2026-breakthrough-showcase" 
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
            >
              Explore Now
            </Link>
            <Link 
              href="/case-studies/ai-2026-global-enterprise-transformation-breakthrough" 
              className="border border-white text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors duration-200"
        onClick={() => {
          // Add logic to hide banner
          const banner = document.querySelector('.ai-2026-banner');
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