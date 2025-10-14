import React, { createContext, ReactNode } from 'react';'import { trackEvent, trackPageView } from '../utils/analytics';'
interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const value = {
    trackEvent,
    trackPageView,
  };
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
export default AnalyticsProvider;