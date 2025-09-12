import React from 'react';
import Link from 'next/link';

export default function AI2027ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-800 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center space-x-2 mb-2">
              <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                NEW 2027
              </span>
              <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              AI 2027: Revolutionary Future Trends & Predictions
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Discover quantum AI, neural interfaces, and autonomous systems that will transform your business in 2027
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2027-future-trends-predictions"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Read Full Guide
            </Link>
            <Link 
              href="/case-studies/ai-2027-financial-services-revolution"
              className="bg-yellow-400 text-yellow-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
            >
              View 2000% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2027-ultimate-implementation-master-guide"
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Download Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}