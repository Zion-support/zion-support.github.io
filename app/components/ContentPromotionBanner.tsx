'use client';
import React, { useState, useEffect } from 'react';
import { X, Star, Zap, Shield } from 'lucide-react';

const ContentPromotionBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('promotion-banner-dismissed');
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    localStorage.setItem('promotion-banner-dismissed', 'true');
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <Zap className="w-5 h-5 text-cyan-400" />
                <Shield className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-sm sm:text-base">
                <span className="text-white font-semibold">🚀 New AI Services Available!</span>
                <span className="text-gray-300 ml-2">
                  Explore our latest AI-powered solutions and transform your business today.
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="/ai-services"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Learn More
              </a>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Dismiss banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
