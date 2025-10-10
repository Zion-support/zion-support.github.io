'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
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
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href,
        });
      }
    }
  }, []);

  const track = (event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('event', event, parameters);
      }

      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event, parameters);
      }
    }
  };

  const page = (pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('event', 'page_view', {
          page_title: pageName,
          page_location: window.location.href,
          ...parameters,
        });
      }

      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Page:', pageName, parameters);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics 4
      const gtag = (window as any).gtag;
      if (gtag) {
        gtag('config', 'GA_MEASUREMENT_ID', {
          user_id: userId,
          custom_map: traits,
        });
      }

      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Identify:', userId, traits);
      }
    }
  };

  const value: AnalyticsContextType = {
    track,
    page,
    identify,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};