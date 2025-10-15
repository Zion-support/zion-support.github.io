import { createContext } from 'react';

<<<<<<< HEAD
interface AnalyticsContextType {
=======
export interface AnalyticsContextType {ursor/fix-errors-and-merge-to-main-234b
>>>>>>> main
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}

<<<<<<< HEAD
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
=======
export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);ursor/fix-errors-and-merge-to-main-234b
>>>>>>> main
