import React from 'react';

export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

export const AnalyticsContext = React.createContext<AnalyticsContextType>({
  trackEvent: () => {},
  trackPageView: () => {},
});