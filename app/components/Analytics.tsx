'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void;
  }
}

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize gtag
      window.gtag = window.gtag || function(..._args: unknown[]) {
        (window as { gtag: { q: unknown[] } }).gtag.q = (window as { gtag: { q: unknown[] } }).gtag.q || [];
        (window as { gtag: { q: unknown[] } }).gtag.q.push(_args);
      };

      // Load GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize GA
      window.gtag('js', new Date());
      window.gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, []);

  return <>{children}</>;
};

export default Analytics;
