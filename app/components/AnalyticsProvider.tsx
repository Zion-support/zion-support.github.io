import React, { createContext, useContext, useEffect, ReactNode } from 'react';

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
    // Initialize analytics
    const initAnalytics = () => {
      // Google Analytics 4 initialization
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // This would typically initialize GA4, GTM, or other analytics
        console.log('Analytics initialized');
      }
    };

    initAnalytics();
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Track custom events
      console.log('Event tracked:', eventName, properties);
      
      // This would typically send to analytics service
      if (process.env.NODE_ENV === 'production') {
        // gtag('event', eventName, properties);
      }
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Track page views
      console.log('Page view tracked:', pageName, properties);
      
      // This would typically send to analytics service
      if (process.env.NODE_ENV === 'production') {
        // gtag('config', 'GA_MEASUREMENT_ID', {
        //   page_title: pageName,
        //   page_location: window.location.href,
        //   ...properties
        // });
      }
    }
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
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
