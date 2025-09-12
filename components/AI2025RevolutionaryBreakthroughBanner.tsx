import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Star, TrendingUp, Users } from 'lucide-react';

export default function AI2025RevolutionaryBreakthroughBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-2 left-4 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="absolute top-6 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-4 left-12 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-2 right-4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-700"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Main content */}
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Zap className="w-5 h-5 animate-pulse" />
              <span className="text-sm font-bold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
                BREAKTHROUGH ANNOUNCEMENT
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              AI 2025 Revolutionary Breakthrough
            </h2>
            <p className="text-lg opacity-90 mb-3">
              The most significant AI breakthrough of 2025 is here. Achieve 2000%+ ROI with our revolutionary technology.
            </p>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 text-yellow-300" />
                <span>99.7% Accuracy</span>
              </div>
              <div className="flex items-center gap-1">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>2000%+ ROI</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4 text-blue-300" />
                <span>500+ Clients</span>
              </div>
            </div>
          </div>
          
          {/* Right side - CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-revolutionary-breakthrough-announcement"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg"
            >
              Learn More
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/case-studies/ai-2025-revolutionary-breakthrough-success"
              className="bg-white/20 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
      
      {/* Close button */}
      <button 
        className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
        onClick={() => {
          // Add logic to hide banner
          const banner = document.querySelector('[data-banner="revolutionary-breakthrough"]');
          if (banner) banner.style.display = 'none';
        }}
        aria-label="Close banner"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}