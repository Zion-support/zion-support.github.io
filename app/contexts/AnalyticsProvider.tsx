import React, { ReactNode, useCallback } from 'react';
import { AnalyticsContext, AnalyticsContextType } from './AnalyticsContext';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Event tracked:', eventName, properties);
    }
    // Add your analytics tracking logic here
  }, []);
  
  const trackPageView = useCallback((pageName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Page view tracked:', pageName, properties);
    }
    // Add your page view tracking logic here
  }, []);
  
  const setUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('User set:', userId, properties);
    }
    // Add your user identification logic here
  }, []);
  
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
    identifyUser: setUser,
  };
  
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};