import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = 'G-XXXXXXXXXX', 
  children 
}) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: unknown[]) {
        window.dataLayer.push(args);
      }
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId);
    }
  }, [trackingId]);

  return <>{children}</>;
};

export default Analytics;