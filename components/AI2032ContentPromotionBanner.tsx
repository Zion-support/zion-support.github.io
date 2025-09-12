import React from 'react';
import Link from 'next/link';

export default function AI2032ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="flex items-center mr-4">
              <span className="text-2xl mr-2">🚀</span>
              <span className="font-bold text-lg">AI 2032 BREAKTHROUGH</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-white/30 mx-4"></div>
            <div className="text-sm">
              <span className="font-semibold">25,000% ROI</span> achieved in 18 months
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/blog/ai-2032-future-predictions-breakthrough"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center"
            >
              🔮 Future Predictions
            </Link>
            <Link
              href="/case-studies/ai-2032-quantum-breakthrough-25000-roi"
              className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-center"
            >
              🏆 Success Stories
            </Link>
            <Link
              href="/resources/ai-2032-ultimate-implementation-master-guide"
              className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg text-sm font-bold transition-colors text-center"
            >
              📚 Get Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}