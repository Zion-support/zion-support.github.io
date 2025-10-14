<<<<<<< HEAD
// Analytics Context Definition,
export interface AnalyticsContextType {,

  trackEvent: (event: string, properties?: Record<string, unknown>) => void;,
  trackPageView: (page: string) => void;}
export const defaultAnalyticsContext: AnalyticsContextType = {,

  trackEvent: () => {},
  trackPageView: () => {},
};,
=======
// Analytics Context Definition:;
export interface AnalyticsContextType {;
trackEvent: (event: string, properties?: Record<string, unknown>) =>void:;
trackPageView: (page: string) =>void:
}
export const defaultAnalyticsContext: AnalyticsContextType = {;
trackEvent: () =>{},;
trackPageView: () =>{},
};

  </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-bd64
