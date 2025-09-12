import React from 'react';
import Link from 'next/link';

export default function AI2027ContentPromotionBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex-1 mb-4 md:mb-0">
            <div className="flex items-center mb-2">
              <span className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full text-sm font-semibold mr-3">
                🔮 NEW AI 2027 CONTENT
              </span>
              <span className="text-sm opacity-90">Revolutionary Breakthrough Technologies</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Discover the Future of AI
            </h2>
            <p className="text-lg opacity-90 max-w-2xl">
              Explore cutting-edge AI 2027 predictions, breakthrough case studies, and complete implementation guides. 
              Transform your business with neural interfaces, quantum AI, and autonomous systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2027-future-predictions"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              🔮 Future Predictions
            </Link>
            <Link 
              href="/case-studies/ai-2027-automotive-transformation-breakthrough"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              🚗 500% ROI Case Study
            </Link>
            <Link 
              href="/resources/ai-2027-implementation-master-guide"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white font-semibold rounded-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              📚 Master Guide
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}