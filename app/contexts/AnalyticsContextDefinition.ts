// Analytics Context Definition
export interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
  trackError: (error: Error, context?: string) => void;
  isEnabled: boolean;
}

export const defaultAnalyticsContext: AnalyticsContextType = {
  trackEvent: () => {},
  trackPageView: () => {},
  trackConversion: () => {},
  trackError: () => {},
  isEnabled: false,
};