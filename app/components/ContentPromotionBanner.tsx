'use client';

import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Star } from 'lucide-react';

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
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('promotion-banner-dismissed', 'true');
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-yellow-300" />
              <span className="font-semibold">Limited Time Offer</span>
            </div>
            <span className="ml-4 text-sm">
              Get 30% off your first AI solution implementation. 
              <a href="/contact" className="underline hover:no-underline ml-1">
                Learn more
              </a>
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-4 py-1 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            
            <button
              onClick={handleDismiss}
              className="text-white hover:text-gray-200 transition-colors duration-200"
              aria-label="Dismiss banner"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPromotionBanner;
