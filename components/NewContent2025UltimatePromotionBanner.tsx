import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimatePromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold mr-3 animate-pulse">
                NEW
              </span>
              <span className="text-sm font-semibold">Ultimate AI 2025 Content Collection</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 Discover the Future of AI
            </h2>
            <p className="text-lg opacity-90 mb-4">
              Comprehensive trends, breakthrough case studies, and the ultimate implementation toolkit for 2025
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✓</span>
                <span>1200% ROI Case Study</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✓</span>
                <span>Ultimate Implementation Toolkit</span>
              </div>
              <div className="flex items-center">
                <span className="text-green-300 mr-2">✓</span>
                <span>AI 2025 Trends & Predictions</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-ultimate-trends-predictions"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              Explore Trends
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-center"
            >
              View Case Study
            </Link>
            <Link 
              href="/resources/ai-2025-ultimate-implementation-toolkit"
              className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Get Toolkit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}