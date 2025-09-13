import React from 'react';
import Link from 'next/link';

export default function AI2025UltimateBreakthroughAnnouncementBanner() {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 text-white py-4 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                🚀 ULTIMATE BREAKTHROUGH ANNOUNCEMENT
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              AI 2025 Ultimate Breakthrough - 15,000% ROI Revolutionary Technology
            </h2>
            <p className="text-sm md:text-base opacity-90">
              Quantum-neural fusion delivering consciousness-level AI with unprecedented results
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3">
            <Link 
              href="/blog/ai-2025-ultimate-breakthrough-announcement"
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 text-center whitespace-nowrap"
            >
              Learn More
            </Link>
            <Link 
              href="/case-studies/ai-2025-global-tech-giant-transformation"
              className="bg-white/20 text-white px-6 py-2 rounded-lg font-semibold hover:bg-white/30 transition-colors duration-200 text-center whitespace-nowrap border border-white/30"
            >
              View Case Study
            </Link>
          </div>
        </div>
      </div>
      
      {/* Floating particles animation */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-4 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-bounce delay-100"></div>
        <div className="absolute bottom-4 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-bounce delay-200"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-bounce delay-300"></div>
      </div>
    </div>
  );
}