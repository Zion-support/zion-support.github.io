import React from 'react';
import Link from 'next/link';

export default function NewContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-500/20 border border-red-500/30 mb-4">
            <span className="text-red-400 font-semibold text-sm animate-pulse">🚀 NEW BREAKTHROUGH CONTENT</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Revolutionary AI 2025-2026 Content Now Available
          </h2>
          <p className="text-lg text-gray-300 mb-6 max-w-4xl mx-auto">
            Discover our latest breakthrough content featuring <span className="text-yellow-400 font-bold">10,000% ROI</span> success stories, 
            <span className="text-cyan-400 font-bold"> quantum-neural fusion</span> technology, and revolutionary AI predictions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2025-ultimate-breakthrough-revolution" 
              className="bg-gradient-to-r from-yellow-500 to-red-500 text-black px-6 py-3 rounded-lg font-bold hover:from-yellow-400 hover:to-red-400 transition-all duration-300 transform hover:scale-105"
            >
              🚀 AI 2025 Breakthrough (10,000% ROI)
            </Link>
            <Link 
              href="/ai-2026-future-predictions-breakthrough" 
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-bold hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 transform hover:scale-105"
            >
              🔮 AI 2026 Predictions (15,000% ROI)
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-enterprise-transformation-breakthrough" 
              className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:from-green-400 hover:to-teal-400 transition-all duration-300 transform hover:scale-105"
            >
              🏆 Success Story (15,000% ROI)
            </Link>
            <Link 
              href="/blog/ai-2025-revolutionary-trends-predictions" 
              className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-bold hover:from-blue-400 hover:to-indigo-400 transition-all duration-300 transform hover:scale-105"
            >
              📈 Revolutionary Trends
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}