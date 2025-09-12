import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ContentPromoBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show banner after scrolling 50% of the page
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  if (!isVisible || isDismissed) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto">
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl shadow-2xl border border-white border-opacity-20 backdrop-blur-sm">
        <div className="p-4">
          <div className="flex items-start justify-between mb-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium bg-white bg-opacity-20 px-2 py-1 rounded-full">
                  🚀 NEW CONTENT
                </span>
              </div>
              <h3 className="font-bold text-lg mb-1">
                15+ New AI Resources Just Dropped!
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Interactive tools, guides, and case studies to accelerate your success.
              </p>
            </div>
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors ml-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex gap-2">
            <Link
              href="/content-showcase"
              className="flex-1 bg-white text-purple-600 px-3 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center text-sm"
            >
              Explore Now
            </Link>
            <Link
              href="/resources"
              className="flex-1 border border-white text-white px-3 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center text-sm"
            >
              Download Free
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}