// Analytics Context Definition
export interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
}

export const defaultAnalyticsContext: AnalyticsContextType = {
<<<<<<< HEAD
  trackEvent: () => {},
  trackPageView: () => {},
=======
  trackEvent: (_event: string, _properties?: Record<string, unknown>) => {},
  trackPageView: (_page: string) => {},
>>>>>>> d03fe0994f96ae1bf0091ebd7304a05d9dca49b7
};