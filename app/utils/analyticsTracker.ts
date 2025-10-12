// Utility file: analyticsTracker

export interface AnalyticsEvent {
  name: string;
  properties?: Record<string, unknown>;
  timestamp?: number;
}

export class AnalyticsTracker {
  private events: AnalyticsEvent[] = [];

  track(event: AnalyticsEvent): void {
    const eventWithTimestamp = {
      ...event,
      timestamp: Date.now()
    };
    
    this.events.push(eventWithTimestamp);
    
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event.name, event.properties);
    }
  }

  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  clear(): void {
    this.events = [];
  }
}

export const analyticsTracker = new AnalyticsTracker();