<<<<<<< HEAD
import { createContext } from "react";

const AnalyticsContext = createContext({});

export default AnalyticsContext;
=======
import React, { createContext, useContext, ReactNode } from 'react';
import { AnalyticsContextType } from './AnalyticsContextDefinition';

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const trackEvent = (event: string, properties?: Record<string, unknown>) => {
    console.log('Analytics Event:', event, properties);
  };

  const trackPageView = (page: string) => {
    console.log('Page View:', page);
  };

  const value = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
}

export function useAnalytics() {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
}

export { AnalyticsContext };
>>>>>>> 920b944e8bba511baac66aab500eb63187cbfa13
