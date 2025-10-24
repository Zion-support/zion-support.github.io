'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize gtag
      window.gtag = window.gtag || function() {
        (window as any).gtag.q = (window as any).gtag.q || [];
        (window as any).gtag.q.push(arguments);
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
