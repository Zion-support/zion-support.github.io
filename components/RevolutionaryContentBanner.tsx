import React from 'react';
import Link from 'next/link';

export default function RevolutionaryContentBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white py-6 mb-8 rounded-xl shadow-xl">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold mr-3 animate-pulse">
                🚀 BREAKTHROUGH
              </span>
              <span className="text-2xl font-bold">Revolutionary AI Content 2026</span>
            </div>
            <p className="text-pink-100 text-lg">
              Discover breakthrough AI solutions with proven 15,000% ROI achievements
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-ultimate-automation-revolution"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              AI 2025 Revolution
            </Link>
            <Link 
              href="/blog/quantum-ai-fusion-2026-breakthrough"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-bold hover:bg-white/30 transition-colors"
            >
              Quantum AI Fusion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}