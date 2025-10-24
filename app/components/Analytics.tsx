'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

interface AnalyticsProps {
  gaId?: string;
  gtmId?: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ 
  gaId = process.env.NEXT_PUBLIC_GA_ID,
  gtmId = process.env.NEXT_PUBLIC_GTM_ID 
}) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Track page views
    if (typeof window !== 'undefined' && gaId) {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('config', gaId, {
          page_path: pathname + searchParams.toString(),
        });
      }
    }
  }, [pathname, searchParams, gaId]);

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && gaId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', gaId, {
        page_path: window.location.pathname,
      });
    }
  }, [gaId]);

  useEffect(() => {
    // Initialize Google Tag Manager
    if (typeof window !== 'undefined' && gtmId) {
      // Load GTM script
      const script = document.createElement('script');
      script.async = true;
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${gtmId}');
      `;
      document.head.appendChild(script);
    }
  }, [gtmId]);

  // Track custom events
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };

  // Track conversions
  const trackConversion = (conversionId: string, value?: number, currency?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: currency || 'USD',
      });
    }
  };

  // Expose tracking functions globally for use in other components
  useEffect(() => {
    if (typeof window !== 'undefined') {
      (window as any).trackEvent = trackEvent;
      (window as any).trackConversion = trackConversion;
    }
  }, []);

  return null; // This component doesn't render anything
};

// Declare global types for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
    trackConversion: (conversionId: string, value?: number, currency?: string) => void;
  }
}

export default Analytics;