import React from 'react';
import Link from 'next/link';

export default function NewContent2025ImplementationToolkitBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-600 to-rose-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="bg-white text-purple-600 px-3 py-1 rounded-full text-sm font-bold mr-3">
                🛠️ ULTIMATE TOOLKIT
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                47 RESOURCES
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              AI 2025 Ultimate Implementation Toolkit
            </h2>
            <p className="text-xl mb-6 text-purple-100">
              Everything you need to achieve 2,500-5,000% ROI with AI automation. 47 resources including templateschecklistsframeworksand step-by-step guides.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">📚 47 Resources</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📋 15 Templates</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">✅ 12 Checklists</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📖 20 Guides</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Access Complete Toolkit
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Get Expert Help
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}