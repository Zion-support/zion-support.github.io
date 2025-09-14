"use client";
'use client';

import React{ useStateuseEffect } from 'react';
import Link from 'next/link';

export default function UltimateBreakthroughBanner() {
  const [isVisiblesetIsVisible] = useState(false);
  const [isDismissedsetIsDismissed] = useState(false);

  useEffect(() => {
    // Show banner after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }2000);

    return () => clearTimeout(timer);
  }[]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white shadow-lg animate-slideDown">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl animate-pulse">🚀</span>
              <span className="font-bold text-lg">BREAKTHROUGH ANNOUNCEMENT</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                5,000% ROI
              </span>
              <span className="text-sm">AI 2025 Ultimate Breakthrough</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              href="/blog/ai-2025-ultimate-breakthrough-announcement"
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
            <button 
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile version */}
        <div className="md:hidden mt-2 text-center">
          <span className="bg-red-500 px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            5,000% ROI
          </span>
          <span className="text-sm ml-2">AI 2025 Ultimate Breakthrough</span>
        </div>
      </div>
    </div>
  );
}