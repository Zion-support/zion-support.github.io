'use client';

interface AnalyticsEvent {
  name: string;
  properties?: Record<string, any>;
  timestamp?: number;
}

class Analytics {
  private events: AnalyticsEvent[] = [];

  // Track an event
  track(eventName: string, properties?: Record<string, any>): void {
    const event: AnalyticsEvent = {
      name: eventName,
      properties,
      timestamp: Date.now(),
    };

    this.events.push(event);
    this.sendToAnalytics(event);
  }

  // Track page view
  pageView(pageName: string, properties?: Record<string, any>): void {
    this.track('page_view', {
      page_name: pageName,
      ...properties,
    });
  }

  // Track user action
  action(actionName: string, properties?: Record<string, any>): void {
    this.track('user_action', {
      action_name: actionName,
      ...properties,
    });
  }

  // Track performance metric
  performance(metricName: string, value: number, properties?: Record<string, any>): void {
    this.track('performance_metric', {
      metric_name: metricName,
      value,
      ...properties,
    });
  }

  // Get all events
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear events
  clearEvents(): void {
    this.events = [];
  }

  // Send to analytics service (implement based on your analytics provider)
  private sendToAnalytics(event: AnalyticsEvent): void {
    // Example implementation for Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event.name, event.properties);
    }

    // Example implementation for other analytics services
    if (typeof window !== 'undefined' && (window as any).analytics) {
      (window as any).analytics.track(event.name, event.properties);
    }
  }
}

// Export singleton instance
export const analytics = new Analytics();
export default analytics;