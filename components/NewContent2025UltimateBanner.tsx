import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 text-white text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW BREAKTHROUGH CONTENT
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            AI 2025 Ultimate Content Revolution
          </h2>
          <p className="text-xl md:text-2xl text-purple-100 mb-6 max-w-4xl mx-auto">
            Discover revolutionary AI breakthroughs, case studies with 50,000% ROI, and future predictions that will transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50,000% ROI</div>
            <div className="text-purple-100">Enterprise Case Study</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-cyan-300 mb-2">∞ ROI</div>
            <div className="text-purple-100">Future Predictions</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-300 mb-2">10,000%+</div>
            <div className="text-purple-100">Implementation Guide</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/ai-2025-ultimate-automation-revolution" 
            className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Explore AI 2025 Revolution
          </Link>
          <Link 
            href="/ai-2026-2030-future-predictions-revolutionary" 
            className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            View Future Predictions
          </Link>
          <Link 
            href="/case-studies/ai-2025-global-enterprise-transformation-50000-roi" 
            className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold text-lg border-2 border-white hover:bg-white hover:text-purple-600 transition-all duration-300"
          >
            See 50,000% ROI Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}