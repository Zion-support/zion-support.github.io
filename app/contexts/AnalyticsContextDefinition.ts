// Analytics Context Definition;
export interface AnalyticsContextType {
  trackEvent: (even,
    t: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pag,
    e: string) => void;
}

export const defaultAnalyticsContext: AnalyticsContextType = {
  trackEvent: () => {},;
  trackPageView: () => {},;
};
