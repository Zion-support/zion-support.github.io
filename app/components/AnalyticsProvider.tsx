import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Track event with Google Analytics or other analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, properties);
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    // Track page view with Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }
    
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, properties);
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics service
      console.log('Analytics initialized');
    }
  }, []);

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

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;