'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
  trackConversion: (conversionType: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Google Analytics initialization
      if (typeof window !== 'undefined' && 'gtag' in window) {
        const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, any>) => void }).gtag;
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
      setIsInitialized(true);
    };

    initAnalytics();
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (!isInitialized) return;

    // Google Analytics event tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters?: Record<string, any>) => void }).gtag;
      gtag('event', eventName, parameters);
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (!isInitialized) return;

    // Google Analytics page view tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config?: Record<string, any>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
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
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters?: Record<string, any>) => void }).gtag;
      gtag('event', 'conversion', {
        send_to: 'GA_MEASUREMENT_ID/conversion_type',
        value: value,
        currency: 'USD',
      });
    }

    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Conversion:', conversionType, value);
    }
  };

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

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export default AnalyticsProvider;