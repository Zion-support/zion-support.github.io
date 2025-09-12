import React from 'react';
import Link from 'next/link';

export default function AI2032ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 text-center md:text-left mb-4 md:mb-0">
            <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mb-2">
              🚀 BREAKTHROUGH CONTENT
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              AI 2032 Future Predictions: The Ultimate Breakthrough Guide
            </h2>
            <p className="text-lg opacity-90">
              Discover revolutionary AI predictions that will reshape our world by 2032. 
              Quantum AI, neural interfaces, and breakthrough technologies with up to 50,000% ROI.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/ai-2032-future-predictions-breakthrough"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Explore Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2032-quantum-breakthrough-50000-roi"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              View 50,000% ROI Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}