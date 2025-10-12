'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
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
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userProperties, setUserProperties] = useState<Record<string, any>>({});

  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Track page view on mount
      trackPageView(window.location.pathname);
    }
  }, []);

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Send event to analytics service
      console.log('Analytics Event:', { event, properties, userId, userProperties });
      
      // Here you would integrate with your analytics service
      // Example: gtag('event', event, properties);
    }
  };

  const trackPageView = (page: string) => {
    if (typeof window !== 'undefined') {
      // Send page view to analytics service
      console.log('Page View:', { page, userId, userProperties });
      
      // Here you would integrate with your analytics service
      // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: page });
    }
  };

  const setUser = (newUserId: string, properties?: Record<string, any>) => {
    setUserId(newUserId);
    if (properties) {
      setUserProperties(properties);
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};