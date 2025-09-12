import React from 'react';
import Link from 'next/link';

export default function AI2029ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-bold">
                NEW
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              🚀 AI 2029 Future Predictions & Implementation Guide
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Discover the revolutionary AI trends coming in 2029. Get the complete implementation roadmap with 5000% ROI case studies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2029-future-predictions"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Predictions
            </Link>
            <Link 
              href="/resources/ai-2029-ultimate-implementation-master-guide"
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Get Master Guide
            </Link>
            <Link 
              href="/case-studies/ai-2029-space-exploration-breakthrough"
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
            >
              View 5000% ROI Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}