import { createContext } from 'react';

interface AnalyticsContextType {
<<<<<<< HEAD
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
=======
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean;
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

<<<<<<< HEAD
export { AnalyticsContext };
export type { AnalyticsContextType };
=======
export type { AnalyticsContextType };
export { AnalyticsContext };
>>>>>>> cursor/fix-errors-and-merge-to-main-32ea
