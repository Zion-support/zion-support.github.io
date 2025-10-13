import React, { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  trackingId?: string;
  children?: React.ReactNode;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId, children }) => {
  useEffect(() => {
    if (trackingId && typeof window !== 'undefined') {
      // Initialize Google Analytics
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.gtag = window.gtag || function() {
        (window.gtag as any).q = (window.gtag as any).q || [];
        (window.gtag as any).q.push(arguments);
      };

      window.gtag('js', new Date());
      window.gtag('config', trackingId);
    }
  }, [trackingId]);

  return <>{children}</>;
};

export default Analytics;