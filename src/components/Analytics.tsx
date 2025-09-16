import React, { useEffect } from 'react';

interface AnalyticsProps {
  eventName: string;
  eventData?: Record<string, any>;
}

const Analytics: React.FC<AnalyticsProps> = ({ eventName, eventData = {} }) => {
  useEffect(() => {
    // Track page views and events
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: window.location.pathname,
        ...eventData
      });
    }
  }, [eventName, eventData]);

  return null;
};

// Enhanced tracking functions
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
};

export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

export const trackContentEngagement = (contentType: string, contentId: string) => {
  trackEvent('content_view', 'engagement', `${contentType}_${contentId}`);
};

export default Analytics;
