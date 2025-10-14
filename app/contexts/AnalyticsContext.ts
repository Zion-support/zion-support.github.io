import { createContext } from 'react';

export interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
  setUser: (userId: string, properties?: Record<string, unknown>) => void;
}

export constAnalyticsContext= createContext<AnalyticsContextType | undefined>(undefined);