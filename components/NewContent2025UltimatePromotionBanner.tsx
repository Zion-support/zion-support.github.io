import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse font-bold">
                NEW
              </span>
              <span className="bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 AI 2025 Revolutionary Breakthroughs Now Live!
            </h2>
            <p className="text-lg text-blue-100 mb-4">
              Discover the cutting-edge AI innovations that are transforming industries. 
              From quantum AI to neural interfaces - see what's possible in 2025.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <span>1500% ROI Case Study</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                <span>Ultimate Implementation Guide</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                <span>Fortune 500 Success Story</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold text-center transition-colors shadow-lg"
            >
              Read Breakthroughs →
            </Link>
            <Link 
              href="/case-studies/ai-2025-fortune-500-transformation-breakthrough"
              className="bg-yellow-500 text-black hover:bg-yellow-400 px-6 py-3 rounded-lg font-semibold text-center transition-colors shadow-lg"
            >
              View Case Study →
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-master-guide"
              className="bg-green-500 text-white hover:bg-green-400 px-6 py-3 rounded-lg font-semibold text-center transition-colors shadow-lg"
            >
              Get Master Guide →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}