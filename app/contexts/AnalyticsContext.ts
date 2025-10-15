import { createContext } from 'react';

export interface AnalyticsContextType {ursor/fix-errors-and-merge-to-main-234b
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string, properties?: Record<string, unknown>) => void;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);ursor/fix-errors-and-merge-to-main-234b
