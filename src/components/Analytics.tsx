import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ trackingId = 'G-XXXXXXXXXX' }) => {
  useEffect(() => {
    // Google Analytics 4
    if (trackingId && typeof window !== 'undefined') {
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
      gtag('js', new Date());
      gtag('config', trackingId);

      // Track page views
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, [trackingId]);

  return null;
};

export default Analytics;