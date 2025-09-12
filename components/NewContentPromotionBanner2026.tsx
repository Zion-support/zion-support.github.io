import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner2026() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white py-4 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-12 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-2 right-4 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
              <span className="text-sm font-bold animate-pulse">🚀 NEW 2026 CONTENT</span>
            </div>
            <div className="hidden md:block">
              <h3 className="text-lg font-bold">Revolutionary AI Technologies & Tools</h3>
              <p className="text-sm opacity-90">Neural interfaces, quantum AI, autonomous systems, and more!</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link
              href="/ai-2026-technology-showcase"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm shadow-lg"
            >
              🔮 AI 2026 Showcase
            </Link>
            <Link
              href="/resources/ai-2026-implementation-toolkit"
              className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm shadow-lg"
            >
              🛠️ Implementation Toolkit
            </Link>
            <Link
              href="/tools/ai-roi-calculator-2026"
              className="bg-white text-cyan-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm shadow-lg"
            >
              💰 ROI Calculator
            </Link>
            <Link
              href="/ai-trends-2026-predictions"
              className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm shadow-lg"
            >
              📈 Trends 2026
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}