// Analytics utilities for tracking user interactions and performance

interface AnalyticsEvent {
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp?: number;
  custom_parameters?: Record<string, unknown>;
}

interface UserProperties {
  userId?: string;
  sessionId?: string;
  deviceType?: string;
  browser?: string;
  os?: string;
  location?: string;
  referrer?: string;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private userProperties: UserProperties = {};

  track(event: AnalyticsEvent): void {
    const eventWithTimestamp = {
      ...event,
      timestamp: event.timestamp || Date.now(),
    };
    
    this.events.push(eventWithTimestamp);
    console.log('Analytics event:', eventWithTimestamp);
  }

  identify(userId: string, properties?: Partial<UserProperties>): void {
    this.userProperties = {
      ...this.userProperties,
      userId,
      ...properties,
    };
    console.log('User identified:', this.userProperties);
  }

  page(name: string, properties?: Record<string, unknown>): void {
    this.track({
      category: 'Page',
      action: 'View',
      label: name,
      custom_parameters: properties,
    });
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }

  getUserProperties(): UserProperties {
    return { ...this.userProperties };
  }
}

export const analytics = new Analytics();

export const useAnalytics = () => {
  return {
    track: analytics.track.bind(analytics),
    identify: analytics.identify.bind(analytics),
    page: analytics.page.bind(analytics),
    getEvents: analytics.getEvents.bind(analytics),
    clearEvents: analytics.clearEvents.bind(analytics),
    getUserProperties: analytics.getUserProperties.bind(analytics),
  };
};

export default analytics;