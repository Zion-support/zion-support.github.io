"use client";

import { useEffect } from 'react';

const Analytics: React.FC = () => {
  useEffect(() => {
    // Initialize Google Analytics or other analytics services
    if (typeof window !== 'undefined') {
      // Google Analytics 4 initialization
      const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;
      
      if (GA_TRACKING_ID) {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA_TRACKING_ID, {
          page_title: document.title,
          page_location: window.location.href,
        });
      }

      // Track page views
      const trackPageView = () => {
        if (window.gtag) {
          window.gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname,
          });
        }
      };

      // Track initial page view
      trackPageView();

      // Track route changes (for SPA navigation)
      const handleRouteChange = () => {
        trackPageView();
      };

      // Listen for popstate events (back/forward navigation)
      window.addEventListener('popstate', handleRouteChange);

      // Track custom events
      const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
        if (window.gtag) {
          window.gtag('event', eventName, parameters);
        }
      };

      // Expose tracking function globally for use in components
      (window as any).trackEvent = trackEvent;

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, []);

  return null;
};

export default Analytics;