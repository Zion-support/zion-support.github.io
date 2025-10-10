'use client';
import React, { createContext, useContext, useEffect, memo } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = memo(({ children }) => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters?: Record<string, any>) => void }).gtag;
      gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters?: Record<string, any>) => void }).gtag;
      gtag('event', 'page_view', {
        page_title: pageName,
        page_location: window.location.href,
      });
    }
  };

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Track initial page view
      trackPageView('Home Page');
    }
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
});

AnalyticsProvider.displayName = 'AnalyticsProvider';

export { AnalyticsProvider };