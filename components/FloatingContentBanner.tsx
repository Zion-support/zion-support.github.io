import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function FloatingContentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show banner when user has scrolled 30% of the page
      if (scrollTop > (documentHeight - windowHeight) * 0.3 && !isDismissed) {
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
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6 relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
        >
          ✕
        </button>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">
              NEW
            </span>
            <span className="text-xs text-gray-500">Just Published</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            🚀 Fresh AI Content Just Dropped
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            AI Governance Framework, Cost Optimization Guide, and 200+ item Implementation Checklist
          </p>
        </div>
        
        <div className="flex flex-col gap-2">
          <Link
            href="/content-showcase"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors text-center"
          >
            View New Content
          </Link>
          <Link
            href="/resources/ai-implementation-master-checklist-2025"
            className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-50 transition-colors text-center"
          >
            Download Free Checklist
          </Link>
        </div>
      </div>
    </div>
  );
}