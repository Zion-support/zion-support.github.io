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
    trackEvent: (_event: string, _properties?: Record<string, unknown>) => {
      console.log('Analytics event:', _event, _properties);
    },
    trackPageView: (_page: string) => {
      console.log('Page view:', _page);
    }
  };

  return (
    <div><AnalyticsContext.Provider value={value}></AnalyticsContext></div>)
      { children }
    </AnalyticsContext.Provider>;
  );
export { AnalyticsContext }
