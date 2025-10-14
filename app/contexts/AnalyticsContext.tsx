import { createContext } from 'react';

interface Analyticscontexttype {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

export const Analyticscontext=createContext<AnalyticsContextType | undefined>(undefined);