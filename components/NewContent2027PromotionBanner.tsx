import React from 'react';
import Link from 'next/link';

export default function NewContent2027PromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span className="text-sm font-bold bg-white/20 px-2 py-1 rounded-full">
                NEW 2027 CONTENT
              </span>
            </div>
            <div className="hidden md:block">
              <span className="text-lg font-semibold">
                Revolutionary AI 2027 Predictions & Case Studies Now Available
              </span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2027-future-predictions"
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors text-center"
            >
              📈 AI 2027 Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2027-automotive-transformation-breakthrough"
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition-colors text-center"
            >
              🚗 Automotive Case Study
            </Link>
            <Link 
              href="/resources/ai-2027-implementation-master-guide"
              className="px-4 py-2 bg-white text-purple-600 hover:bg-gray-100 rounded-lg text-sm font-semibold transition-colors text-center"
            >
              📚 Master Guide
            </Link>
          </div>
        </div>
        
        <div className="md:hidden mt-3 text-center">
          <span className="text-sm">
            Revolutionary AI 2027 Predictions & Case Studies Now Available
          </span>
        </div>
      </div>
    </div>
  );
}