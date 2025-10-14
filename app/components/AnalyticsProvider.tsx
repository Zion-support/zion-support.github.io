import React, { ReactNode } from 'react';
import { AnalyticsContext } from '../contexts/AnalyticsContext';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>): void => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Analytics Event:', eventName, properties);
    }
    // TODO: Implement actual analytics tracking
  };
  
  const trackPageView = (pageName: string): void => {
    console.warn('Page View:', pageName);
    // TODO: Implement actual page view tracking
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