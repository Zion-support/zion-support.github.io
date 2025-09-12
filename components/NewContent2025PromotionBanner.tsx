import React from 'react';
import Link from 'next/link';

export default function NewContent2025PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                NEW
              </span>
              <span className="text-sm font-semibold">January 2025 Content Release</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              🚀 Revolutionary AI 2025 Content Now Available
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Master enterprise AI automation, discover breakthrough case studies, and get the ultimate implementation toolkit
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-enterprise-automation-mastery"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
            >
              📚 Automation Mastery Guide
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center text-sm"
            >
              💰 1200% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center text-sm"
            >
              🛠️ Ultimate Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}