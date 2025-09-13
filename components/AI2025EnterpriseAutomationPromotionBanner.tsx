import React from 'react';
import Link from 'next/link';

export default function AI2025EnterpriseAutomationPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold mr-3 animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="text-sm font-semibold">NEW CONTENT</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              🚀 AI 2025 Enterprise Automation Revolution
            </h2>
            <p className="text-blue-100 text-sm md:text-base">
              Discover how AI is delivering 800% ROI improvements and revolutionizing enterprise operations. 
              Learn from real success stories and implementation strategies.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-enterprise-automation-revolution"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Read Article
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-enterprise-transformation-breakthrough"
              className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-400 transition-colors text-center"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}