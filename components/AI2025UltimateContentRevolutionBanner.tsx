import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function AI2025UltimateContentRevolutionBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai2025-content-revolution-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai2025-content-revolution-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="relative bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white py-4 px-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left side - Main message */}
        <div className="flex items-center gap-4">
          <div className="text-3xl animate-pulse">🚀</div>
          <div>
            <h3 className="text-lg md:text-xl font-bold mb-1">
              AI 2025 Ultimate Content Revolution
            </h3>
            <p className="text-sm md:text-base text-purple-100">
              Discover breakthrough technologies delivering 2,500-5,000% ROI
            </p>
          </div>
        </div>

        {/* Right side - CTA buttons */}
        <div className="flex items-center gap-3">
          <Link
            href="/ai-2025-ultimate-content-revolution"
            className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 shadow-md"
          >
            Explore Now
          </Link>
          <Link
            href="/blog/ai-2025-revolutionary-trends-predictions"
            className="bg-transparent border-2 border-white text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
          >
            View Predictions
          </Link>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-purple-200 transition-colors p-1"
            aria-label="Dismiss banner"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-white opacity-20 rounded-full animate-ping"></div>
        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white opacity-30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-white opacity-25 rounded-full animate-bounce"></div>
      </div>
    </div>
  );
}