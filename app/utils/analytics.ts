import React from 'react';

// Analytics utilities for tracking user interactions and performance

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp?: number;
  custom_parameters?: Record<string, any>;
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
    const eventWithTimestamp = {
      ...event,
      timestamp: Date.now()
    };
    
    this.events.push(eventWithTimestamp);
    
    // In a real implementation, you would send this to your analytics service
    console.log('Analytics Event:', eventWithTimestamp);
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }
}

export const useAnalytics = () => {
  const analytics = Analytics.getInstance();

  const trackPageView = (page: string, title: string) => {
    analytics.track({
      category: 'Page View',
      action: 'View',
      label: page,
      custom_parameters: { title }
    });
  };

  const trackClick = (category: string, action: string, label?: string) => {
    analytics.track({
      category,
      action: 'Click',
      label
    });
  };

  const trackCustomEvent = (event: Omit<AnalyticsEvent, 'timestamp'>) => {
    analytics.track(event);
  };

  return {
    trackPageView,
    trackClick,
    trackCustomEvent
  };
};

export default Analytics;