import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className="bg-white/20 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold">🚀 NEW: AI 2026 Content Revolution</h2>
              <p className="text-blue-100 text-sm">
                Discover cutting-edge AI insights, case studies, and implementation guides
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Read Latest Blog
            </Link>
            <Link 
              href="/case-studies/ai-2026-global-retail-transformation-success"
              className="bg-transparent border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-center"
            >
              View Success Story
            </Link>
            <Link 
              href="/resources/ai-2026-implementation-master-guide"
              className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
            >
              Get Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}