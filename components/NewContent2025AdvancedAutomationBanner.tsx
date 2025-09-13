import React from 'react';
import Link from 'next/link';

export default function NewContent2025AdvancedAutomationBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-700 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="bg-white text-blue-600 px-3 py-1 rounded-full text-sm font-bold mr-3">
                🚀 NEW CONTENT
              </span>
              <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              AI 2025 Advanced Automation Mastery
            </h2>
            <p className="text-xl mb-6 text-blue-100">
              Master cutting-edge AI automation techniques and achieve 2,500-5,000% ROI with our comprehensive implementation guide.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">📚 Complete Guide</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🎯 2,500-5,000% ROI</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">⚡ 10,000x Faster</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🎯 99.9% Accuracy</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/blog/ai-2025-advanced-automation-mastery"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Read Complete Guide
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Get Implementation Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}