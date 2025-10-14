import { createContext } from 'react';

interface Analyticscontexttype {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

export constAnalyticsContext= createContext<AnalyticsContextType | undefined>(undefined);
