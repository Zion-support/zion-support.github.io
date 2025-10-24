'use client';

import React, { useEffect } from 'react';

interface AnalyticsProps {
  children: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ children }) => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize gtag
      (window as Window & { gtag: Function }).gtag = (window as Window & { gtag: Function }).gtag || function() {
        ((window as Window & { gtag: Function }).gtag.q = (window as Window & { gtag: Function }).gtag.q || []).push(arguments);
      };

      // Load GA script
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      // Initialize GA
      (window as Window & { gtag: Function }).gtag('js', new Date());
      (window as Window & { gtag: Function }).gtag('config', 'GA_MEASUREMENT_ID');
    }
  }, []);

  return <>{children}</>;
};

export default Analytics;
