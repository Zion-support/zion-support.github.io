'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, parameters?: Record<string, any>) => void;
  trackConversion: (conversionName: string, value?: number, currency?: string) => void;
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

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ('gtag' in window) {
      (window as any).gtag('event', eventName, {
        event_category: parameters.category || 'General',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, parameters: Record<string, any> = {}) => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ('gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, parameters);
    }
  };

  const trackConversion = (conversionName: string, value?: number, currency: string = 'USD') => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ('gtag' in window) {
      (window as any).gtag('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID',
        event_category: 'Conversion',
        event_label: conversionName,
        value: value || 0,
        currency: currency
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversion:', conversionName, { value, currency });
    }
  };

  const contextValue: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};