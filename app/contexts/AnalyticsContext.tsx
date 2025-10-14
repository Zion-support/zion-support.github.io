import React, { createContext, useContext, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, unknown>) => void;
  trackPageView: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalyticsContext = () => {
  const context = useContext(AnalyticsContext);
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
      console.log('Analytics Event:', event, properties);
    },
    trackPageView: (page: string) => {
      console.log('Page View:', page);
    }
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
export { AnalyticsContext }
