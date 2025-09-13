import React from 'react';
import Link from 'next/link';

export default function NewContent2028PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-yellow-400 text-purple-900 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                NEW 2028
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                Future-Ready AI
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              🚀 AI 2028: Revolutionary Future Predictions & Breakthrough Technologies
            </h2>
            <p className="text-lg text-blue-100 mb-4">
              Discover AGI emergence, quantum AI integration, neural interfaces, and the technologies that will reshape our world by 2028.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">🧠 AGI Predictions</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">⚛️ Quantum AI</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">🧬 Neural Interfaces</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">📊 2,400% ROI Case Study</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-2028-future-predictions"
              className="bg-yellow-400 text-purple-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-300 transition-colors text-center"
            >
              Read Predictions
            </Link>
            <Link
              href="/case-studies/ai-2028-energy-sector-transformation-breakthrough"
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-center border border-white/30"
            >
              View Case Study
            </Link>
            <Link
              href="/resources/ai-2028-implementation-master-guide"
              className="bg-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-center border border-white/30"
            >
              Get Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}