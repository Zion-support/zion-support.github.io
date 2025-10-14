import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      console.log('Analytics Event:', event, properties);
      // Add your analytics tracking logic here
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined') {
      console.log('Page View:', page);
      // Add your page view tracking logic here
    }
  };

  const value = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };