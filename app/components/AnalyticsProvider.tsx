'use client';

import React, { useEffect } from 'react';

interface AnalyticsProviderProps {
  children: React.ReactNode;
  trackingId?: string;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  trackingId = 'GA_MEASUREMENT_ID' 
}) => {
  useEffect(() => {
    // Initialize Google Analytics if tracking ID is provided
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
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId);
    }
  }, [trackingId]);

  return <>{children}</>;
};

export default AnalyticsProvider;