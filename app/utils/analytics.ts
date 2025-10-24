// Analytics utilities for tracking user interactions and performance

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp?: number;
  custom_parameters?: Record<string, unknown>;
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

  // Track custom events
  track(event: AnalyticsEvent): void {
    this.events.push({
      ...event,
      timestamp: Date.now()
    });

    // In production, you would send this to your analytics service
    if (process.env.NODE_ENV === "production") {
      console.log('Analytics event:', event);
    }
  }

  // Get all tracked events
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  // Clear all events
  clearEvents(): void {
    this.events = [];
  }
}

export default Analytics;
