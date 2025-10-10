'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // Initialize analytics
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Initialize Google Analytics or other analytics tools
      console.log('Analytics initialized');
    }
  }, []);

  const trackEvent = useCallback((eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      console.log('Event tracked:', eventName, parameters);
      // Track event with analytics service
    }
  }, []);

  const trackPageView = useCallback((pageName: string, pagePath: string) => {
    if (typeof window !== 'undefined') {
      console.log('Page view tracked:', pageName, pagePath);
      // Track page view with analytics service
    }
  }, []);

  const trackConversion = useCallback((conversionId: string, value?: number) => {
    if (typeof window !== 'undefined') {
      console.log('Conversion tracked:', conversionId, value);
      // Track conversion with analytics service
    }
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;