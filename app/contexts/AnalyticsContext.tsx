import { createContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);