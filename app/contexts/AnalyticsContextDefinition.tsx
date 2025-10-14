// Analytics context type definitions

export interface AnalyticsContextDefinition {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

export const defaultAnalyticsContext: AnalyticsContextDefinition = {
  trackEvent: () => {},
  trackPageView: () => {},
};