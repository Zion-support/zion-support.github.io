import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateAutomationRevolutionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-ping animation-delay-200"></div>
        <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping animation-delay-400"></div>
        <div className="absolute bottom-8 right-1/4 w-3 h-3 bg-white rounded-full animate-ping animation-delay-600"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-4 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white bg-opacity-20 text-sm font-semibold mb-3 animate-pulse">
              🚀 BREAKTHROUGH ANNOUNCEMENT
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              AI 2025 Ultimate Automation Revolution
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-4">
              Achieve <strong>99.9% accuracy</strong> and <strong>15,000% ROI</strong> with our revolutionary AI breakthrough
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">⚡ 10,000x Faster</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">🎯 99.9% Accuracy</span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">💰 15,000% ROI</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/ai-2025-ultimate-automation-revolution"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-center"
            >
              Discover Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 text-center"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors z-20"
        onClick={() => {
          // Add close functionality here
          const banner = document.querySelector('.ai-2025-ultimate-automation-banner');
          if (banner) {
            banner.style.display = 'none';
          }
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