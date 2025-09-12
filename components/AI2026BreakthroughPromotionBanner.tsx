import React from 'react';
import Link from 'next/link';

export default function AI2026BreakthroughPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start mb-2">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold mr-3 animate-pulse">
                🚀 BREAKTHROUGH
              </span>
              <span className="text-lg font-semibold">AI 2026 Revolutionary Innovations</span>
            </div>
            <p className="text-sm md:text-base opacity-90">
              Discover the breakthrough technologies that are reshaping industries with 5,000% ROI improvements
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2026-breakthrough-innovations"
              className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
            >
              Explore Innovations
            </Link>
            <Link 
              href="/case-studies/ai-2026-global-enterprise-transformation-breakthrough"
              className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-center text-sm"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}