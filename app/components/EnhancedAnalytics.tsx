'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
  trackPerformance: (metricName: string, value: number) => void;
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
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize analytics
  useEffect(() => {
    // Initialize Google Analytics or other analytics service
    if (typeof window !== 'undefined') {
      // Google Analytics 4 initialization
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
      setIsInitialized(true);
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!isInitialized) return;

    // Google Analytics event tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, {
        event_category: parameters?.category || 'general',
        event_label: parameters?.label,
        value: parameters?.value,
        ...parameters
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (!isInitialized) return;

    // Google Analytics page view tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, pagePath);
    }
  };

  const trackConversion = (conversionType: string, value?: number) => {
    if (!isInitialized) return;

    // Google Analytics conversion tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID/CONVERSION_ID',
        value: value,
        currency: 'USD',
        conversion_type: conversionType
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversion:', conversionType, value);
    }
  };

  const trackPerformance = (metricName: string, value: number) => {
    if (!isInitialized) return;

    // Google Analytics performance tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'timing_complete', {
        name: metricName,
        value: Math.round(value)
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metric:', metricName, value);
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion,
    trackPerformance
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;