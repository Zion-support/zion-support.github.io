import React from 'react';
import { Link } from 'react-router-dom';

export default function AI2025BreakthroughContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🚀 BREAKTHROUGH
              </span>
              <span className="text-lg font-bold">NEW AI 2025 CONTENT</span>
            </div>
            <div className="hidden md:block text-sm opacity-90">
              Revolutionary AI insights, case studies, and implementation guides
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthrough-announcement"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm"
            >
              📚 Latest Breakthrough
            </Link>
            <Link 
              href="/case-studies/ai-2025-revolutionary-breakthrough-success"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors text-sm"
            >
              🏆 2000% ROI Success
            </Link>
            <Link 
              href="/resources/ai-2025-revolutionary-implementation-guide"
              className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
            >
              🛠️ Implementation Guide
            </Link>
            <Link 
              href="/ai-2025-breakthrough-revolution"
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors text-sm"
            >
              🔥 View All Content
            </Link>
          </div>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white rounded-full animate-ping opacity-40"></div>
      </div>
    </div>
  );
}