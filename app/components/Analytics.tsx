'use client';

import React, { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize gtag
      (window as unknown as { gtag: Function }).gtag = (window as unknown as { gtag: Function }).gtag || function() {
        ((window as unknown as { gtag: { q: unknown[] } }).gtag.q = (window as unknown as { gtag: { q: unknown[] } }).gtag.q || []).push(arguments);
      };

      // Load GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize GA
      (window as unknown as { gtag: Function }).gtag('js', new Date());
      (window as unknown as { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, []);

  return <>{children}</>;
};

export default Analytics;
