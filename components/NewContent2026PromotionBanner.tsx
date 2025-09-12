import React from 'react';
import Link from 'next/link';

export default function NewContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h3 className="text-lg font-bold">🚀 NEW: AI 2026 Revolutionary Content</h3>
              <p className="text-sm opacity-90">
                Discover breakthrough AI technologies that will transform everything in 2026
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2026-revolutionary-breakthroughs"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Article
            </Link>
            <Link 
              href="/case-studies/ai-2026-fortune-500-transformation-success"
              className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              View Case Study
            </Link>
            <Link 
              href="/resources/ai-2026-implementation-toolkit"
              className="bg-yellow-400 text-purple-800 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
            >
              Get Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}