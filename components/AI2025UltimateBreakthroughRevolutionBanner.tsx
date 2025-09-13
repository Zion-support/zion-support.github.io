import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const AI2025UltimateBreakthroughRevolutionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('ai2025-breakthrough-revolution-banner-dismissed');
    if (!dismissed) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai2025-breakthrough-revolution-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white shadow-2xl animate-pulse">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="text-3xl animate-bounce">🚀</div>
            <div>
              <div className="font-bold text-xl">
                🔥 BREAKTHROUGH: AI 2025 Ultimate Revolution
              </div>
              <div className="text-sm text-purple-100">
                Experience revolutionary AI breakthroughs with 15,000% ROI - Limited Time Access
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                BREAKTHROUGH
              </span>
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                15,000% ROI
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="/ai-2025-ultimate-breakthrough-revolution"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse"
            >
              🚀 Explore Revolution
            </Link>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors p-1"
              aria-label="Dismiss banner"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI2025UltimateBreakthroughRevolutionBanner;