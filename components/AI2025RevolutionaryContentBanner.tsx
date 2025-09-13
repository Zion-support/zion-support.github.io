import React from 'react';
import Link from 'next/link';

export default function AI2025RevolutionaryContentBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transform -skew-x-12 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-transparent via-white to-transparent transform skew-x-12 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="text-2xl animate-bounce">🚀</span>
              <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">
                BREAKTHROUGH ALERT
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-1">
              AI 2025 Revolutionary Breakthroughs Now Live!
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Discover the most transformative AI innovations of 2025 with unprecedented business value
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthroughs"
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 text-center whitespace-nowrap"
            >
              Read Breakthroughs
            </Link>
            <Link 
              href="/blog/ai-2026-quantum-computing-revolution"
              className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 text-center whitespace-nowrap border border-white/30"
            >
              Quantum Revolution
            </Link>
            <Link 
              href="/blog/ai-2027-future-predictions"
              className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-all duration-200 text-center whitespace-nowrap border border-white/30"
            >
              Future Predictions
            </Link>
          </div>
        </div>
        
        {/* Key stats */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 rounded-lg p-2">
            <div className="text-lg font-bold">2,000%</div>
            <div className="text-xs opacity-80">Average ROI</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2">
            <div className="text-lg font-bold">95%</div>
            <div className="text-xs opacity-80">Success Rate</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2">
            <div className="text-lg font-bold">500+</div>
            <div className="text-xs opacity-80">Companies</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2">
            <div className="text-lg font-bold">$50B+</div>
            <div className="text-xs opacity-80">Value Created</div>
          </div>
        </div>
      </div>
    </div>
  );
}