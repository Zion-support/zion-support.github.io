import React from 'react';
import Link from 'next/link';

export default function NewContent2025BreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1 animate-pulse"></div>
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-6 right-1/3 w-1 h-1 bg-white rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-4 left-1/2 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-200"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                NEW
              </span>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold mb-1">
                🚀 AI 2025 Revolutionary Breakthroughs Now Available!
              </h2>
              <p className="text-sm opacity-90">
                Discover groundbreaking innovations delivering 2000% ROI • Free Implementation Toolkit • Live Webinars
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
            >
              📖 Read Article
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
            >
              🏆 View Case Study
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm whitespace-nowrap"
            >
              🛠️ Get Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}