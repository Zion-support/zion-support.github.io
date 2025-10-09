import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  enableDebug?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = 'G-XXXXXXXXXX', 
  enableDebug = false 
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
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        debug_mode: enableDebug,
      });

      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [trackingId, enableDebug]);

  return null;
};

export default Analytics;