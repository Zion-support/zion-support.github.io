// Analytics Context Definition
export interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
}

export const defaultAnalyticsContext: AnalyticsContextType = {
  trackEvent: (_event: string, _properties?: Record<string, unknown>) => {},
  trackPageView: (_page: string) => {},
};