import { createContext } from 'react';

<<<<<<< HEAD
interface AnalyticsContextType {
=======
export interface AnalyticsContextType {
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}

<<<<<<< HEAD
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
=======
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
>>>>>>> cursor/fix-errors-and-merge-to-main-c832
