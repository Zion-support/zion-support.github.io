'use client';

import React from 'react';
import Link from 'next/link';

export default function NewContent2025UltimateBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold mr-4 animate-pulse">
                🚀 ULTIMATE BREAKTHROUGH
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-bold animate-pulse">
                NEW CONTENT
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Revolutionary AI 2025 Breakthrough Content
            </h2>
            <p className="text-lg text-purple-100 mb-6 max-w-2xl">
              Discover the most revolutionary AI breakthroughs of 2025 with unprecedented ROI success stories, 
              interactive predictions, and quantum computing solutions that transcend traditional limitations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/ai-2025-ultimate-breakthrough-revolution"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg"
              >
                🚀 AI 2025 Ultimate Breakthrough
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link 
                href="/ai-2026-future-predictions-interactive"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                🔮 Interactive 2026 Predictions
              </Link>
              <Link 
                href="/quantum-computing-solutions-breakthrough-2030"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all duration-300"
              >
                ⚛️ Quantum Computing 2030
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">10,000%</div>
                <div className="text-purple-100 text-sm">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}