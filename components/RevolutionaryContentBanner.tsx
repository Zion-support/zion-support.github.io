import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-1/4 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-white rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-white">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH
            </span>
            <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
              NEW CONTENT
            </span>
          </div>
          
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            AI 2025 Ultimate Breakthrough Revolution - 10,000% ROI Guaranteed
          </h2>
          
          <p className="text-sm md:text-base text-gray-100 max-w-2xl">
            Experience the most revolutionary AI breakthrough in human history. 
            Quantum-enhanced neural networks deliver unprecedented returns through 
            transcendent intelligence and autonomous decision systems.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/ai-2025-ultimate-breakthrough-revolution"
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg text-center"
          >
            Explore Now
          </Link>
          <Link 
            href="/case-studies/ai-2025-ultimate-breakthrough-success"
            className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold hover:bg-white/20 transition-all border border-white/30 text-center"
          >
            View Success Story
          </Link>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
        onClick={() => {
          const banner = document.querySelector('.revolutionary-banner');
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