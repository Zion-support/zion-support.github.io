import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-4 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start mb-2">
            <span className="bg-white text-red-600 px-3 py-1 rounded-full text-sm font-bold mr-3 animate-pulse">
              🔥 NEW 2025 CONTENT
            </span>
            <span className="text-sm font-semibold">Exclusive AI 2025 Content Now Available</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            Discover Revolutionary AI Trends & 1200% ROI Success Stories
          </h2>
          <p className="text-sm md:text-base opacity-90">
            Get access to our latest AI 2025 Ultimate Trends, Enterprise Case Studies, and Implementation Toolkit
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <Link 
            href="/blog/ai-2025-ultimate-trends-predictions"
            className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
          >
            🔮 AI 2025 Trends
          </Link>
          <Link 
            href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
            className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
          >
            🏆 1200% ROI Story
          </Link>
          <Link 
            href="/resources/ai-2025-ultimate-implementation-toolkit"
            className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
          >
            🛠️ Implementation Toolkit
          </Link>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-4 right-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-3 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}