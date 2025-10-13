import { createContext } from 'react';

<<<<<<< HEAD
export interface AnalyticsContextType {
=======
interface AnalyticsContextType {
>>>>>>> cursor/fix-errors-and-merge-to-main-234b
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}

<<<<<<< HEAD
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
=======
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
>>>>>>> cursor/fix-errors-and-merge-to-main-234b
