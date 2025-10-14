import React, { createContext, useContext, ReactNode } from 'react';
import { AnalyticsContextType } from './AnalyticsContextDefinition';

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Analytics tracking implementation
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPageView = (page: string) => {
    // Page view tracking implementation
    console.log('Page View:', page);
  };

  const setUser = (userId: string, properties?: Record<string, any>) => {
    // User tracking implementation
    console.log('Set User:', userId, properties);
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView, setUser }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };