import React from 'react';
import Link from 'next/link';

export default function Revolutionary2026ContentShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 rounded-xl p-6 mb-8 text-white">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            🚀 Revolutionary 2026 Content Showcase
          </h2>
          <p className="text-lg opacity-90 mb-4">
            Explore breakthrough AI technologies transforming industries worldwide
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🧠 Neural Interfaces
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🛰️ Space AI Tech
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              🔒 Synthetic Data
            </span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
              💰 $150M ROI Case Study
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <Link 
            href="/blog/ai-neural-interfaces-2026" 
            className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
          >
            Read Neural Interfaces
          </Link>
          <Link 
            href="/case-studies/ai-mega-transformation-success-2026" 
            className="bg-white/20 border border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-center"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}