import { createContext } from 'react';

<<<<<<< HEAD
export interface AnalyticsContextType {
=======
interface AnalyticsContextType {
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}

<<<<<<< HEAD
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
=======
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
>>>>>>> 8b3c36c8a79bdf97a6a44b765072850456aacdcd
