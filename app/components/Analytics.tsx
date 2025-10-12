'use client';

import { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = ($2) => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };

    initAnalytics();
  }, []);

  return <>{children}</>;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}