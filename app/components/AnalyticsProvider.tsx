

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
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
const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics service
      console.log('Analytics initialized');
    }
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Track event with analytics service
      console.log('Event tracked:', eventName, properties);
      
      // Example: Google Analytics
      if ('gtag' in window) {
        (window as any).gtag('event', eventName, properties);
      }
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Track page view with analytics service
      console.log('Page view tracked:', pageName, properties);
      
      // Example: Google Analytics
      if ('gtag' in window) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          ...properties
        });
      }
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};


export default AnalyticsProvider;
