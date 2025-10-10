'use client';
import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { onCLS, onINP, onFCP, onLCP, onTTFB } from 'web-vitals';

interface AnalyticsContextType {
  trackEvent: (category: string, action: string, label?: string, value?: number) => void;
  trackPageView: (page: string) => void;
  trackConversion: (conversionId: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      // Track Core Web Vitals
      onCLS((metric) => {
        console.log('CLS:', metric);
      });

      onINP((metric) => {
        console.log('INP:', metric);
      });

      onFCP((metric) => {
        console.log('FCP:', metric);
      });

      onLCP((metric) => {
        console.log('LCP:', metric);
      });

      onTTFB((metric) => {
        console.log('TTFB:', metric);
      });
    }
  }, []);

  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Analytics Event:', { category, action, label, value });
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Page View:', page);
    }
  };

  const trackConversion = (conversionId: string, value?: number) => {
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      console.log('Conversion:', { conversionId, value });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackConversion
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};