import React from 'react';
import Link from 'next/link';

export default function NewContent2025BreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="flex items-center space-x-2">
            <span className="text-2xl animate-bounce">🚀</span>
            <span className="font-bold text-lg md:text-xl">BREAKTHROUGH CONTENT</span>
          </div>
          <div className="hidden md:block w-px h-6 bg-white/30"></div>
          <div className="text-sm md:text-base">
            <span className="font-semibold">NEW:</span> AI 2025 Revolutionary Content Showcase
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <span className="bg-white/20 px-2 py-1 rounded-full">20,000% ROI</span>
            <span className="bg-white/20 px-2 py-1 rounded-full">500+ Case Studies</span>
            <span className="bg-white/20 px-2 py-1 rounded-full">99.7% Success Rate</span>
          </div>
          
          <div className="flex space-x-2">
            <Link 
              href="/ai-2025-breakthrough-content-showcase"
              className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm md:text-base"
            >
              Explore Now
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-tech-transformation-breakthrough"
              className="border border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-sm md:text-base"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-2 left-10 text-2xl animate-float">⭐</div>
      <div className="absolute top-3 right-20 text-xl animate-float-delayed">💎</div>
      <div className="absolute bottom-2 left-1/4 text-lg animate-float-slow">🔥</div>
      <div className="absolute bottom-3 right-10 text-xl animate-float">⚡</div>
    </div>
  );
}