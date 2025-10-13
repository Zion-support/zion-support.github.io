import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics initialized');
    }
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Track events in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Event tracked:', eventName, properties);
    }

    // In production, you would send this to your analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', eventName, properties);
      }
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    // Track page views in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page view tracked:', pageName, properties);
    }

    // In production, you would send this to your analytics service
    if (process.env.NODE_ENV === 'production') {
      // Example: Send to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: pageName,
          page_location: window.location.href,
          ...properties,
        });
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

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;
