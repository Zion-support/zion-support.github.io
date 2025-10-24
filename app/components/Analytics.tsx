'use client';

import React, { useEffect } from 'react';

interface AnalyticsProps {
  className?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ className }) => {
  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    initAnalytics();
  }, []);

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default Analytics;