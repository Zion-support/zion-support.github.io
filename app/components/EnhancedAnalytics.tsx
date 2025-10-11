'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    // Track events (placeholder for actual analytics implementation)
    console.log('Analytics Event:', eventName, properties);
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    // Track page views
    console.log('Page View:', pageName, properties);
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }
  };

  useEffect(() => {
    // Initialize analytics
    trackPageView(document.title);
  }, []);

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
