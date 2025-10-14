// Analytics Context Definition
export interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
}

export const defaultAnalyticsContext: AnalyticsContextType = {
  trackEvent: () => {},
  trackPageView: () => {},
<<<<<<< HEAD
};
=======
};
>>>>>>> cursor/fix-errors-and-merge-to-main-71c6
