import React, { useEffect } from 'react';

// Declare gtag as a global variable
declare global {
  function gtag(...args: any[]): void;
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  timestamp?: number;
}

class Analytics {
  private static instance: Analytics;
  private events: AnalyticsEvent[] = [];

  static getInstance(): Analytics {
    if (!Analytics.instance) {
      Analytics.instance = new Analytics();
    }
    return Analytics.instance;
  }

  track(event: AnalyticsEvent): void {
    this.events.push({
      ...event,
      timestamp: Date.now()
    });

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }

    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(event);
    }
  }

  private sendToAnalytics(event: AnalyticsEvent): void {
    // Implement your analytics service integration here
    // Examples: Google Analytics, Mixpanel, Amplitude, etc.
    
    // Example Google Analytics 4 implementation:
    if (typeof gtag !== 'undefined') {
      gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value
      });
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }
}

// Hook for tracking page views
export const usePageView = (pageName: string) => {
  useEffect(() => {
    const analytics = Analytics.getInstance();
    analytics.track({
      action: 'page_view',
      category: 'navigation',
      label: pageName
    });
  }, [pageName]);
};

// Hook for tracking user interactions
export const useAnalytics = () => {
  const trackEvent = (event: AnalyticsEvent) => {
    const analytics = Analytics.getInstance();
    analytics.track(event);
  };

  const trackClick = (element: string, category: string = 'interaction') => {
    trackEvent({
      action: 'click',
      category,
      label: element
    });
  };

  const trackScroll = (section: string) => {
    trackEvent({
      action: 'scroll',
      category: 'engagement',
      label: section
    });
  };

  const trackFormSubmit = (formName: string) => {
    trackEvent({
      action: 'form_submit',
      category: 'conversion',
      label: formName
    });
  };

  const trackDownload = (fileName: string) => {
    trackEvent({
      action: 'download',
      category: 'engagement',
      label: fileName
    });
  };

  return {
    trackEvent,
    trackClick,
    trackScroll,
    trackFormSubmit,
    trackDownload
  };
};

export default Analytics;