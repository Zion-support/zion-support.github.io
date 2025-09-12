import React from 'react';
import Link from 'next/link';

export default function AI2028ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-semibold animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="text-sm font-medium">AI 2028 Content Now Available</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              🚀 Revolutionary AI 2028 Predictions & Implementation Guide
            </h2>
            <p className="text-sm md:text-base text-blue-100">
              Discover breakthrough technologies, 3000% ROI case studies, and complete implementation roadmap for AI transformation in 2028
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2028-future-predictions" 
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              🔮 AI 2028 Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2028-automotive-transformation-breakthrough" 
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              🚗 3000% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2028-ultimate-implementation-master-guide" 
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              📚 Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}