'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, parameters?: Record<string, any>) => void;
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
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
      });
    }
  }, []);

  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters,
      });
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