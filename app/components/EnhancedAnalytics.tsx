'use client'
import React, { createContext, useContext, useCallback } from 'react'

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
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    // Track custom events
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, {
        event_category: 'engagement',
        event_label: properties?.label || eventName,
        value: properties?.value || 0,
        ...properties
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, properties);
    }
  }, []);

  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    // Track page views
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }

    // Console log for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, properties);
    }
  }, []);

  const value = {
    trackEvent,
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default AnalyticsProvider;