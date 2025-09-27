import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  };

  const trackPageView = (pagePath: string, pageTitle?: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  };

  const trackClick = (elementName: string, category: string = 'engagement') => {
    trackEvent({
      action: 'click',
      category,
      label: elementName,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackClick,
  };
};

// Global gtag declaration
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}