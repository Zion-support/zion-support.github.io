import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextContextType {
  trackEvent: (_event: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_page: string) => void;
}

const AnalyticsContextContext = createContext<AnalyticsContextContextType | undefined>(undefined);

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContextContext);
  if (!context) {
    throw new Error(`useAnalyticsContext must be used within a AnalyticsContextProvider`);
  }
  return context;
};

interface AnalyticsContextProviderProps {
  children: ReactNode;
}

export const AnalyticsContextProvider: React.FC<AnalyticsContextProviderProps> = ({ children }) => {
  const value = {
    trackEvent: (event: string, properties?: Record<string, unknown>) => {
      console.log('Analytics event:', event, properties);
    },
    trackPageView: (page: string) => {
      console.log('Page view:', page);
    }
  };

  return (
    <AnalyticsContextContext.Provider value={value}>
      {children}
    </AnalyticsContextContext.Provider>
  );
};