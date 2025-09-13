import React from 'react';
import Link from 'next/link';

export default function UltimateContentShowcase2026PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-slate-600 via-indigo-600 to-purple-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 text-center lg:text-left mb-6 lg:mb-0">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-sm font-semibold mb-3 animate-pulse">
              🚀 ULTIMATE SHOWCASE 2026
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Explore Our Revolutionary Content Collection
            </h2>
            <p className="text-lg text-slate-100 mb-4 max-w-2xl">
              Discover the most comprehensive collection of AI breakthroughs, quantum computing 
              innovations, and cutting-edge technology solutions. Experience guaranteed 15,000% ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link 
                href="/ultimate-content-showcase-2026" 
                className="bg-white text-slate-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-50 transition-all duration-300 transform hover:scale-105"
              >
                Explore Ultimate Showcase
              </Link>
              <Link 
                href="/ai-2026-future-predictions-breakthrough" 
                className="bg-transparent text-white px-6 py-3 rounded-lg font-semibold border-2 border-white hover:bg-white hover:text-slate-600 transition-all duration-300"
              >
                View AI 2026 Predictions
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">15,000%</div>
                <div className="text-sm text-slate-200">Guaranteed ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                <div className="text-2xl font-bold">∞</div>
                <div className="text-sm text-slate-200">Content Value</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}