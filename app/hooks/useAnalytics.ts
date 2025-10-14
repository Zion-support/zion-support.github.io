import { useContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

// This will be imported from AnalyticsProvider
let AnalyticsContext: React.Context<AnalyticsContextType | undefined>;

export const setAnalyticsContext = (context: React.Context<AnalyticsContextType | undefined>) => {
  AnalyticsContext = context;
};

export const useAnalytics = () => {
  if (!AnalyticsContext) {
    throw new Error('AnalyticsContext not set. Make sure to call setAnalyticsContext first.');
  }
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};