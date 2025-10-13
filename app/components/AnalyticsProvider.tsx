import React, { createContext, useContext, useEffect, ReactNode } from "react";

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics if needed
    if (typeof window !== 'undefined') {
      console.log('Analytics initialized');
    }
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Send to Google Analytics if available
      if ((window as any).gtag) {
        (window as any).gtag('event', eventName, {
          event_category: 'User Interaction',
          ...properties,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, properties);
      }
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Send to Google Analytics if available
      if ((window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          ...properties,
        });
      }
      
      // Log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', pageName, properties);
      }
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
