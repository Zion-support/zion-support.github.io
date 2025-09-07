import { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
}

export default function Analytics({ trackingId = 'G-XXXXXXXXXX' }: AnalyticsProps) {
  useEffect(() => {
    // Google Analytics 4
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
      });

      // Track page views
      const trackPageView = () => {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
        });
      };

      // Track initial page view
      trackPageView();

      // Track route changes (for SPA)
      const handleRouteChange = () => {
        trackPageView();
      };

      // Listen for popstate events (back/forward navigation)
      window.addEventListener('popstate', handleRouteChange);

      return () => {
        window.removeEventListener('popstate', handleRouteChange);
      };
    }
  }, [trackingId]);

  return null;
}

// Track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Track conversions
export const trackConversion = (conversionId: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location: location || window.location.pathname,
  });
};

// Track scroll depth
export const trackScrollDepth = (depth: number) => {
  trackEvent('scroll_depth', {
    depth: depth,
    page: window.location.pathname,
  });
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds: number) => {
  trackEvent('time_on_page', {
    time_seconds: timeInSeconds,
    page: window.location.pathname,
  });
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}