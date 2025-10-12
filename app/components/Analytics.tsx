import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: ((...args: unknown[]) => void) & { q?: unknown[] };
  }
}

const Analytics: React.FC = () => {
  useEffect(() => {
    const initAnalytics = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    };
    initAnalytics();
  }, []);

  return null; // Analytics component doesn't render anything
};

export default Analytics;
