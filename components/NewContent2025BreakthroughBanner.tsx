import React from 'react';
import Link from 'next/link';

export default function NewContent2025BreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 text-white py-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 NEW: AI 2025 Revolutionary Breakthroughs
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Discover the most transformative AI innovations delivering 2000%+ ROI
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              View Breakthroughs
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors shadow-lg"
            >
              See 2000% ROI Success
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors shadow-lg"
            >
              Get Toolkit
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1500"></div>
      </div>
    </div>
  );
}