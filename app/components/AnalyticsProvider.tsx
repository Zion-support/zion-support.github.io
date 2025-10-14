import React, { ReactNode, useCallback } from 'react';
import { AnalyticsContext, AnalyticsContextType } from '../contexts/AnalyticsContext';

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Analytics Event:', eventName, properties);
    }
    // TODO: Implement actual analytics tracking
  }, []);

  const trackPageView = useCallback((pageName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Page View:', pageName, properties);
    }
    // TODO: Implement actual page view tracking
  }, []);

  const identifyUser = useCallback((userId: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn('User identified:', userId, properties);
    }
    // TODO: Implement actual user identification
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    identifyUser,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;