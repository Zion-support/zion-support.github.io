'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    console.warn('useAnalytics must be used within an AnalyticsProvider');
    return null;
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    // Google Analytics tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', event, parameters);
    }
    
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event, parameters);
    }
  }, []);

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    // Google Analytics page view
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
    
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Page View:', pageName, parameters);
    }
  }, []);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    // Google Analytics user identification
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      });
    }
    
    // Console logging for development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Identify:', userId, traits);
    }
  }, []);

  const value: AnalyticsContextType = {
    track,
    page,
    identify
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;