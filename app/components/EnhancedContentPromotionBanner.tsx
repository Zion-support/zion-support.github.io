'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const EnhancedContentPromotionBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem('enhancedContentBannerDismissed', 'true');
  };

  useEffect(() => {
    const dismissed = localStorage.getItem('enhancedContentBannerDismissed');
    if (dismissed === 'true') {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Enhanced Content Promotion
          </h2>
          <p className="text-xl opacity-90 mb-6">
            Discover our latest AI implementation guides and success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/resources"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Resources
            </Link>
            <button
              onClick={handleDismiss}
              className="text-white/75 hover:text-white transition-colors"
            >
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedContentPromotionBanner;