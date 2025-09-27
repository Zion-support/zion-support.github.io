import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export const useAnalytics = () => {
  useEffect(() => {
    // Initialize Google Analytics if gtag is available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      console.log('Analytics initialized');
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: any) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle
      });
    }
  };

  const trackClick = (elementId: string, category: string = 'engagement') => {
    trackEvent('click', {
      event_category: category,
      event_label: elementId,
      value: 1
    });
  };

  const trackConversion = (conversionId: string, value?: number) => {
    trackEvent('conversion', {
      event_category: 'conversion',
      event_label: conversionId,
      value: value || 1
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackClick,
    trackConversion
  };
};

export default useAnalytics;