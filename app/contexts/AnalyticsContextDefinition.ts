import { createContext, useContext } from 'react';

  trackEvent: (event: string, properties?: Record<string, unknown>) => void;,
  trackPageView: (page: string) => void;},
export const defaultAnalyticsContext: AnalyticsContextType = {,

export interface AnalyticsContextType {
  trackEvent: (event: AnalyticsEvent) => void;
  trackPageView: (page: string) => void;
  setUserProperties: (properties: Record<string, any>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
