import React from 'react';
import Link from 'next/link';

export default function AI2025NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                NEW
              </span>
              <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-lg md:text-xl font-bold">
              🚀 AI 2025 Next-Generation Breakthroughs Now Live!
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-next-generation-breakthroughs"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm text-center"
            >
              Read New Blog Post
            </Link>
            <Link 
              href="/case-studies/ai-2025-enterprise-transformation-mega-success"
              className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-sm text-center"
            >
              View 15,000% ROI Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}