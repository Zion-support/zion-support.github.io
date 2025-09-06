import { useEffect } from 'react';

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    // In a real application, you would send this to your analytics service
    console.log('Analytics Event:', event);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
  };

  const trackPageView = (page: string) => {
    console.log('Page View:', page);
    
    if (typeof gtag !== 'undefined') {
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: page,
        page_location: window.location.href
      });
    }
  };

  const trackClick = (element: string, category: string = 'engagement') => {
    trackEvent({
      action: 'click',
      category,
      label: element
    });
  };

  const trackScroll = (depth: number) => {
    trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: 'scroll_depth',
      value: depth
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackClick,
    trackScroll
  };
};