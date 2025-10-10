'use client';
import React, { useEffect } from 'react';

const EnhancedAnalytics: React.FC = () => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
      
      // Track page view
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  return null;
};

export default EnhancedAnalytics;