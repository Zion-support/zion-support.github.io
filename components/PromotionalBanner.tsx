'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function PromotionalBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Store dismissal in localStorage
    localStorage.setItem('promo-banner-dismissed', 'true');
  };

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('promo-banner-dismissed');
    if (dismissed === 'true') {
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-lg shadow-lg border border-blue-200">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-1">
              🚀 Limited Time Offer
            </h3>
            <p className="text-sm opacity-90 mb-3">
              Get a FREE automation assessment worth $2,500. 
              Discover how to save 40% on operational costs.
            </p>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white hover:text-gray-200 ml-2 text-lg font-bold"
            aria-label="Close banner"
          >
            ×
          </button>
        </div>
        
        <div className="space-y-2">
          <Link
            href="/contact"
            className="block w-full bg-white text-blue-600 py-2 px-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors text-sm"
          >
            Claim Free Assessment
          </Link>
          <a
            href="tel:+13024640950"
            className="block w-full border border-white text-white py-2 px-4 rounded-lg font-semibold text-center hover:bg-white hover:text-blue-600 transition-colors text-sm"
          >
            Call Now: (302) 464-0950
          </a>
        </div>
        
        <div className="mt-3 text-xs opacity-75 text-center">
          Offer expires in 7 days
        </div>
      </div>
    </div>
  );
}