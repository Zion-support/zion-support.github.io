import { useEffect } from 'react';

// Google Analytics 4 implementation
export const useAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
      document.head.appendChild(script);

      // Initialize gtag
      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      (window as any).gtag = gtag;

      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
        page_title: pageTitle || document.title,
        page_location: pagePath
      });
    }
  };

  const trackClick = (elementId: string, category: string) => {
    trackEvent('click', {
      event_category: category,
      event_label: elementId,
      value: 1
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackClick
  };
};

// Hook for tracking page views
export const usePageView = (pageName: string) => {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView(window.location.pathname, pageName);
  }, [pageName, trackPageView]);
};