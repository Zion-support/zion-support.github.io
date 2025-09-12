import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                NEW
              </span>
              <span className="text-sm font-semibold">AI 2026 Content Drop</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Revolutionary AI Trends & Implementation Guides
            </h2>
            <p className="text-blue-100 text-lg">
              Discover the future of AI with our comprehensive 2026 predictions, case studies, and implementation master guides.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2026-revolutionary-trends-predictions"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Trends Report
            </Link>
            <Link 
              href="/case-studies/ai-2026-global-enterprise-transformation-success"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              View Success Story
            </Link>
            <Link 
              href="/resources/ai-2026-complete-implementation-master-guide"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              Get Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}