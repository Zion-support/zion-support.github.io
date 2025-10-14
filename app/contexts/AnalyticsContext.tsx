import { createContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

export constAnalyticsContext= createContext<AnalyticsContextType | undefined>(undefined);