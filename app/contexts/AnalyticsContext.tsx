import { createContext } from 'react-helmet-async';
export interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);