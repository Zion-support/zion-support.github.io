import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryContentBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center mb-4">
              <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mr-4 animate-pulse">
                🚀 BREAKTHROUGH ANNOUNCEMENT
              </span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                NEW
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI 2025 Ultimate Breakthrough Revolution
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-6 max-w-2xl">
              Discover the revolutionary AI breakthrough delivering 10,000% ROI, 99.9% accuracy, 
              and 10,000x faster processing. The ultimate content revolution is here.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">10,000%</div>
                <div className="text-sm">ROI</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm">Accuracy</div>
              </div>
              <div className="bg-white/20 rounded-lg px-4 py-2">
                <div className="text-2xl font-bold">10,000x</div>
                <div className="text-sm">Faster</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors text-center"
            >
              Explore Breakthrough
            </Link>
            <Link
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center"
            >
              View Success Story
            </Link>
          </div>
        </div>
        
        {/* Featured Content Links */}
        <div className="mt-8 pt-6 border-t border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors group"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🚀</span>
                <h3 className="font-semibold group-hover:text-yellow-300">Ultimate Breakthrough</h3>
              </div>
              <p className="text-sm text-white/80">
                Revolutionary AI technology delivering unprecedented performance gains
              </p>
            </Link>
            
            <Link
              href="/case-studies/ai-2025-global-transformation-breakthrough"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors group"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🏆</span>
                <h3 className="font-semibold group-hover:text-yellow-300">10,000% ROI Success</h3>
              </div>
              <p className="text-sm text-white/80">
                Fortune 500 company achieves unprecedented ROI in just 6 months
              </p>
            </Link>
            
            <Link
              href="/blog/ai-2025-revolutionary-trends-predictions"
              className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-colors group"
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-3">🔮</span>
                <h3 className="font-semibold group-hover:text-yellow-300">Revolutionary Trends</h3>
              </div>
              <p className="text-sm text-white/80">
                Comprehensive analysis of AI trends and breakthrough predictions for 2025
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}