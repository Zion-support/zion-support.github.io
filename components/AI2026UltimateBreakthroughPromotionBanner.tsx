import React from 'react';
import Link from 'next/link';

export default function AI2026UltimateBreakthroughPromotionBanner() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8 px-4 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 -right-8 w-32 h-32 bg-white/5 rounded-full animate-bounce"></div>
        <div className="absolute bottom-0 left-1/4 w-16 h-16 bg-white/10 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-semibold mb-4 animate-pulse">
            🚀 NEW: AI 2026 ULTIMATE BREAKTHROUGH SHOWCASE
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Revolutionary AI Breakthroughs
          </h2>
          
          <p className="text-lg md:text-xl mb-6 opacity-90 max-w-4xl mx-auto">
            Discover quantum-neural fusion, consciousness AI, and autonomous systems delivering 15,000% ROI
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">15,000% ROI</div>
              <div className="text-sm opacity-90">Quantum-Neural Fusion</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">99.8%</div>
              <div className="text-sm opacity-90">Accuracy Rate</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-sm opacity-90">Potential</div>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/ai-2026-ultimate-breakthrough-showcase"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Showcase →
            </Link>
            <Link 
              href="/case-studies/ai-2026-quantum-neural-fusion-success"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              View Success Story
            </Link>
            <Link 
              href="/blog/ai-2026-revolutionary-breakthroughs"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-bold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Read Analysis
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}