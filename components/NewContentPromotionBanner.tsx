import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center">
              <span className="text-white text-sm font-semibold mr-2">🚀 NEW BREAKTHROUGH CONTENT:</span>
              <span className="text-yellow-300 text-sm font-bold">AI 2025 Ultimate Revolution</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Explore Now
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link
              href="/quantum-computing-solutions-2025"
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Quantum Solutions
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            
            <Link
              href="/advanced-automation-solutions-2026"
              className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-lg border border-white/30 hover:bg-white/30 transition-all duration-300"
            >
              Automation 2026
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}