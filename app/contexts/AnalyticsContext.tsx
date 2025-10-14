import React, { createContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPage: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsContextProviderProps {
  children: ReactNode;
}

export const AnalyticsContextProvider: React.FC<AnalyticsContextProviderProps> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, unknown>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', event, properties);
  };

  const trackPage = (page: string) => {
    // Page tracking implementation
    console.log('Analytics Page:', page);
  };

  const value = {
    trackEvent,
    trackPage,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};
