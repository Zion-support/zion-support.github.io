import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function useAnalytics() {
  useEffect(() => {
    // Initialize analytics if needed
  }, []);

  const trackClick = (action: string, category: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', 'click', {
        event_category: category,
        event_label: action,
      });
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: page,
        page_location: window.location.href,
      });
    }
  };

  return {
    trackClick,
    trackPageView,
  };
}