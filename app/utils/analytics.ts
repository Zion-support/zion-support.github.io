// Analytics utility for tracking user interactions and performance metrics

export interface AnalyticsEvent {
  name: string;
  category: string;
  action: string;
  label?: string;
  value?: number;
  timestamp: number;
}

export interface UserProperties {
  userId?: string;
  sessionId?: string;
  deviceType?: string;
  browser?: string;
  os?: string;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  private userProperties: UserProperties = {};

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    // Initialize analytics tracking
    if (typeof window !== 'undefined') {
      this.trackPageView();
    }
  }

  // Track page views
  trackPageView(page?: string): void {
    const event: AnalyticsEvent = {
      name: 'page_view',
      category: 'navigation',
      action: 'view',
      label: page || window.location.pathname,
      timestamp: Date.now(),
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  // Track custom events
  trackEvent(name: string, category: string, action: string, label?: string, value?: number): void {
    const event: AnalyticsEvent = {
      name,
      category,
      action,
      label,
      value,
      timestamp: Date.now(),
    };
    
    this.events.push(event);
    this.sendToAnalytics(event);
  }

  // Track performance metrics
  trackPerformance(metric: string, value: number, label?: string): void {
    this.trackEvent('performance', 'metrics', metric, label, value);
  }

  // Track user interactions
  trackInteraction(element: string, action: string, label?: string): void {
    this.trackEvent('interaction', 'user_action', action, `${element}:${label}`);
  }

  // Set user properties
  setUserProperties(properties: UserProperties): void {
    this.userProperties = { ...this.userProperties, ...properties };
  }

  // Get analytics data
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
      (window as any).gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
      });
    }
  }
}

// Create analytics instance
const analytics = new Analytics();

export default analytics;