import React, { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

interface AnalyticsProps {
  trackingId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  trackingId = process.env['NEXT_PUBLIC_GA_TRACKING_ID'] 
}) => {
  useEffect(() => {
    if (!trackingId || typeof window === 'undefined') {
      return;
    }

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

    return () => {
      // Cleanup if needed
      const existingScript = document.querySelector(`script[src*="${trackingId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [trackingId]);

  return null;
};

export default Analytics;