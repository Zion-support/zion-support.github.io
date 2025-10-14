'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
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
      const gtag = (window as { gtag: (command: string, targetId: string, config?: any) => void }).gtag;
      
      // Configure Google Analytics
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
    if (typeof window === 'undefined') return;

    // Track with Google Analytics if available
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, eventName: string, parameters: any) => void }).gtag;
      gtag('event', eventName, parameters);
    }

    // Track with custom analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window === 'undefined') return;

    // Track with Google Analytics if available
    if ('gtag' in window) {
      const gtag = (window as { gtag: (command: string, targetId: string, config: any) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.origin + pagePath,
      });
    }

    // Track with custom analytics
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, pagePath);
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