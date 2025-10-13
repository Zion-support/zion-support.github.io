// analyticsTracker - Analytics utilities

export interface AnalyticsEvent {
  name: string;
  properties: Record<string, any>;
  timestamp: number;
}

export function trackEvent(event: AnalyticsEvent): void {
  console.log('Tracking event:', event);
}

export function trackPageView(page: string): void {
  console.log('Tracking page view:', page);
}
