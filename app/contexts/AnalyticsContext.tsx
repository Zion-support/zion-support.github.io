'use client';

import React, { createContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (_eventName: string, _properties?: Record<string, unknown>) => void;
  trackPageView: (_pageName: string) => void;
  isLoaded: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize analytics
    setIsLoaded(true);
  }, []);

  const trackEvent = (_eventName: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', _eventName, _properties);
    }
    // Fallback to console for development
    console.log('Analytics Event:', _eventName, _properties);
  };

  const trackPageView = (_pageName: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: _pageName,
        page_location: window.location.href,
      });
    }
    // Fallback to console for development
    console.log('Page View:', _pageName);
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView, isLoaded }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export { AnalyticsContext };