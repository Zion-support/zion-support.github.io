'use client'
import React, { createContext, useContext, useCallback, ReactNode } from 'react'

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, action: string, parameters?: Record<string, any>) => void }).gtag;
      gtag('event', event, parameters);
    }
    console.log('Analytics Event:', event, parameters);
  }, []);

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      const gtag = (window as { gtag: (command: string, pageName: string, parameters?: Record<string, any>) => void }).gtag;
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
    console.log('Analytics Page:', pageName, parameters);
  }, []);

  const value = {
    track,
    page
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;