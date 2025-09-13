import React, { useState } from 'react';
import Link from 'next/link';

const AI2025AutonomousSystemsBreakthroughBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse"></div>
        <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full animate-bounce"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-4 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-8 right-1/4 w-1 h-1 bg-white rounded-full animate-ping delay-700"></div>
      </div>

      <div className="relative px-4 py-6 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Left side - Main content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold animate-pulse">
                  🚀 BREAKTHROUGH ANNOUNCEMENT
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-red-500 text-white text-sm font-semibold">
                  NEW
                </span>
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                AI 2025 Revolutionary Autonomous Systems Breakthrough
              </h2>
              <p className="text-sm sm:text-base text-blue-100 max-w-2xl">
                Discover how revolutionary autonomous systems are delivering <span className="font-bold text-yellow-300">15,000% ROI</span> and transforming entire industries. 
                <span className="hidden sm:inline"> Learn about the latest breakthroughs in self-governing AI systems.</span>
              </p>
            </div>

            {/* Right side - CTA buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link 
                href="/blog/ai-2025-revolutionary-autonomous-systems-breakthrough"
                className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 text-sm sm:text-base"
              >
                Read More
              </Link>
              <Link 
                href="/case-studies/ai-2025-autonomous-systems-transformation-breakthrough"
                className="inline-flex items-center px-4 py-2 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 text-sm sm:text-base"
              >
                View Case Study
              </Link>
              <button
                onClick={() => setIsVisible(false)}
                className="inline-flex items-center justify-center w-8 h-8 text-white hover:bg-white/20 rounded-full transition-colors"
                aria-label="Close banner"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full bg-white/20 rounded-full h-1">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-1 rounded-full animate-pulse" style={{ width: '75%' }}></div>
          </div>
        </div>
      </div>

      {/* Floating metrics */}
      <div className="absolute top-2 right-2 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-white text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>15,000% ROI</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-2 left-2 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 text-white text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>99.9% Accuracy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025AutonomousSystemsBreakthroughBanner;