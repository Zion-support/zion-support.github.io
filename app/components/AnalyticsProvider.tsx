'use client';

import React, { createContext, useContext, useEffect } from 'react';

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

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Simple analytics tracking
      console.log('Analytics Event:', event, properties);
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined') {
      // Simple page view tracking
      console.log('Page View:', page);
    }
  };

  useEffect(() => {
    // Initialize analytics
    trackPageView(window.location.pathname);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;