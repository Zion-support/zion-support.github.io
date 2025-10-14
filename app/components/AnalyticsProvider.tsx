'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
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
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties);
    }
    // TODO: Implement actual analytics tracking
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, pagePath);
    }
    // TODO: Implement actual page view tracking
  };

  useEffect(() => {
    // Initialize analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics initialized');
    }
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <>
      <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};