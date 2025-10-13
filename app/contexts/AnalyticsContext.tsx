import { createContext } from 'react';
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record</string><string, unknown>) => void;
}
export const AnalyticsContext = createContext</string><AnalyticsContextType | undefined>(undefined);