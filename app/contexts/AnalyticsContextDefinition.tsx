import React from 'react';

export interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
}

export const AnalyticsContext = React.createContext<AnalyticsContextType | undefined>(undefined);