import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 text-white py-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 via-purple-600/20 to-blue-600/20 animate-pulse"></div>
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-bounce">🚀</span>
              <span className="font-bold text-lg">BREAKTHROUGH ANNOUNCEMENT</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-white/30"></div>
            <div className="text-sm md:text-base">
              <span className="text-yellow-400 font-bold">AI 2025 Ultimate Revolution</span> - 
              <span className="text-green-400 font-bold"> 10,000% ROI</span> Guaranteed
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              href="/contact"
              className="border-2 border-white/30 hover:border-white/60 text-white font-bold py-2 px-6 rounded-full text-sm transition-all duration-300 hover:bg-white/10"
            >
              Get Access
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-3 right-1/3 w-1 h-1 bg-red-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}