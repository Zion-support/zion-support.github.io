'use client';

import React from 'react';
import { X, ArrowRight } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-4 relative">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold">🚀 New AI Solutions Available!</span>
            <span className="hidden sm:inline">Get 30% off your first month</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="/services"
            className="flex items-center space-x-1 bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-medium transition-colors"
          >
            <span>Explore Now</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;