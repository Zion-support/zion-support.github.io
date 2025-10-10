'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
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
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    console.log('Analytics event:', eventName, parameters);
    // Add actual analytics tracking here
  };

  const trackPageView = (pageName: string) => {
    console.log('Page view:', pageName);
    // Add actual page view tracking here
  };

  useEffect(() => {
    // Initialize analytics
    console.log('Analytics initialized');
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsProvider };
export default AnalyticsProvider;