import React from 'react';
import Link from 'next/link';

export default function AI2026RevolutionaryBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-8 right-8 w-3 h-3 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 right-1/3 w-2 h-2 bg-white rounded-full animate-ping"></div>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-bold mr-3 animate-pulse">
              🚀 REVOLUTIONARY BREAKTHROUGH
            </span>
            <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold animate-bounce">
              JUST RELEASED
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            AI 2026 Revolutionary Breakthrough Predictions
          </h2>
          <p className="text-sm md:text-base opacity-90">
            Discover the 5 revolutionary AI breakthroughs that will reshape industries and create unprecedented opportunities in 2026.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/blog/ai-2026-revolutionary-breakthrough-predictions"
            className="bg-white text-red-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors text-center animate-pulse"
          >
            Read Predictions
          </Link>
          <Link 
            href="/case-studies/ai-2026-enterprise-transformation-breakthrough"
            className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-red-500 transition-colors text-center"
          >
            View Case Study
          </Link>
        </div>
      </div>
      
      {/* Progress indicator */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div className="h-full bg-gradient-to-r from-yellow-400 to-white animate-pulse" style={{width: '75%'}}></div>
      </div>
    </div>
  );
}