'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoaded(true);
    }
  }, []);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (isLoaded && typeof window !== 'undefined') {
      // Track event with analytics service
      // In production, this would send to analytics service
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Analytics Event:', event, properties);
      }
    }
  };

  const trackPageView = (page: string) => {
    if (isLoaded && typeof window !== 'undefined') {
      // Track page view
      // Track page view
      // console.log('Page View:', page);
    }
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
};

export default AnalyticsProvider;