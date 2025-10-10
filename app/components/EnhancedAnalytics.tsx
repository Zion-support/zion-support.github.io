'use client';
import React, { createContext, useContext, useEffect, useCallback, ReactNode } from 'react';

interface AnalyticsEvent {
  event: string;
  category?: string;
  label?: string;
  value?: number;
  custom_parameters?: Record<string, any>;
}

interface AnalyticsContextType {
  trackEvent: (event: string, parameters?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = (): AnalyticsContextType => {
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
  // Initialize analytics tracking
  useEffect(() => {
    // Initialize Google Analytics if available
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = useCallback((event: string, parameters: Record<string, any> = {}) => {
    if (typeof window === 'undefined') return;

    // Google Analytics tracking
    if (window.gtag) {
      window.gtag('event', event, {
        event_category: parameters.category || 'general',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        ...parameters
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', { event, parameters });
    }
  }, []);

  const trackPageView = useCallback((page: string) => {
    if (typeof window === 'undefined') return;

    // Google Analytics page view
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: page
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', page);
    }
  }, []);

  const trackConversion = useCallback((conversionId: string, value: number = 0) => {
    if (typeof window === 'undefined') return;

    // Google Analytics conversion tracking
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: conversionId,
        value: value,
        currency: 'USD'
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversion:', { conversionId, value });
    }
  }, []);

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

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}