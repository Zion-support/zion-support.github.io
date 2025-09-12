import React from 'react';
import Link from 'next/link';

export default function AI2031ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-4 right-8 w-16 h-16 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 left-1/4 w-24 h-24 bg-white rounded-full animate-pulse"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🔮 BREAKTHROUGH
              </span>
              <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                AI 2031
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              The Future is Here: AI 2031 Breakthrough Content
            </h2>
            <p className="text-purple-100 text-sm md:text-base">
              Discover quantum AI, neural interfaces, and autonomous systems that will revolutionize your business
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/blog/ai-2031-future-predictions-breakthrough"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-sm"
            >
              🔮 AI 2031 Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2031-quantum-ai-breakthrough"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-sm"
            >
              🏆 10,000% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2031-ultimate-implementation-master-guide"
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-sm"
            >
              📚 Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}