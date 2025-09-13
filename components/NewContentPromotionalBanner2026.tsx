import React, { useState } from 'react';
import Link from 'next/link';

export default function NewContentPromotionalBanner2026() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between relative z-10">
        <div className="flex-1 mb-4 md:mb-0">
          <div className="flex items-center space-x-2 mb-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-green-100">NEW CONTENT</span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-2">
            🚀 Discover AI 2026: The Future is Here
          </h2>
          <p className="text-blue-100 text-sm md:text-base">
            Explore our latest insights on AI trends, implementation strategies, and real-world success stories
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 md:ml-6">
          <Link 
            href="/blog/ai-2026-future-trends"
            className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors text-center text-sm"
          >
            Read AI 2026 Trends
          </Link>
          <Link 
            href="/case-studies/ai-transformation-global-retail-giant-2026"
            className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center text-sm"
          >
            View Case Study
          </Link>
          <Link 
            href="/webinars/ai-implementation-strategies-2026"
            className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full font-semibold hover:bg-yellow-300 transition-colors text-center text-sm"
          >
            Join Webinar
          </Link>
        </div>
        
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-white hover:text-gray-200 transition-colors"
          aria-label="Close banner"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}