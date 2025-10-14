'use client';
import React, { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export default function Analytics({ children }: AnalyticsProps) {
  useEffect(() => {
    // Initialize analytics tracking
    const initAnalytics = () => {
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

  return <React.Fragment>{children}</React.Fragment>;
}
