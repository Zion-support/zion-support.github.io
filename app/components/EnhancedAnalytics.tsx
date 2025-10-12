'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
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
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [userProperties, setUserProperties] = useState<Record<string, any>>({});

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    // Track events with analytics service
    console.log('Analytics Event:', event, properties);
    
    // Here you would integrate with your analytics service
    // For example: gtag('event', event, properties);
  };

  const trackPageView = (page: string) => {
    console.log('Page View:', page);
    
    // Track page views
    // For example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: page });
  };

  const setUser = (id: string, properties?: Record<string, any>) => {
    setUserId(id);
    if (properties) {
      setUserProperties(properties);
    }
    
    // Set user properties in analytics service
    console.log('User Set:', id, properties);
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

export default AnalyticsProvider;
