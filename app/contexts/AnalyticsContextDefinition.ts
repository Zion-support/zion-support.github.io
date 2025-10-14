// Analytics Context Definition
export interface AnalyticsContextType {
  trackEvent: (_event: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_page: string) => void;
}

export const defaultAnalyticsContext: AnalyticsContextType = {
  trackEvent: () => {},
  trackPageView: () => {},
<<<<<<< HEAD
};
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-71c6
