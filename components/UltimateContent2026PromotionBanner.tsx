import React from 'react';
import Link from 'next/link';

export default function UltimateContent2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-1"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-yellow-400 text-purple-900 px-2 py-1 rounded-full text-xs font-bold animate-pulse">
                🚀 NEW 2026 CONTENT
              </span>
              <span className="text-sm opacity-90">Ultimate AI Implementation Toolkit</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-1">
              Transform Your Enterprise with AI in 2026
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Complete toolkit with frameworks, templates, and step-by-step guides for 400%+ ROI
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/resources/ai-2026-implementation-toolkit-ultimate"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
            >
              Download Toolkit
            </Link>
            <Link 
              href="/blog/ai-2026-enterprise-automation-mastery"
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center text-sm"
            >
              Read Guide
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-2 right-4 text-2xl opacity-20 animate-bounce">🤖</div>
      <div className="absolute bottom-2 left-4 text-xl opacity-20 animate-pulse">⚡</div>
    </div>
  );
}