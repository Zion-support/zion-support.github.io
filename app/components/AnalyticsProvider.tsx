import React, { createContext, useContext, useEffect, ReactNode } from "react";

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics services
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics if available
      if ((window as any).gtag) {
        console.log('Analytics initialized');
      }
    }
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Send to Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, properties);
      }
      
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, properties);
      }
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Send to Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', pageName, properties);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Send to analytics service
      if ((window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          user_id: userId,
          custom_map: traits
        });
      }
      
      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('User Identified:', userId, traits);
      }
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    identify
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export { AnalyticsProvider, useAnalytics };