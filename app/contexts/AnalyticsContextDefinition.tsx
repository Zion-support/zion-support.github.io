import { createContext } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
export type { AnalyticsContextType };