'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

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
  const [analytics, setAnalytics] = useState({
    events: [] as Array<{ event: string; properties: Record<string, any>; timestamp: number }>,
    pageViews: [] as Array<{ page: string; timestamp: number }>,
    user: null as { id: string; properties: Record<string, any> } | null,
  });

  const trackEvent = (event: string, properties: Record<string, any> = {}) => {
    const newEvent = {
      event,
      properties,
      timestamp: Date.now(),
    };
    
    setAnalytics(prev => ({
      ...prev,
      events: [...prev.events, newEvent],
    }));

    // Send to analytics service (Google Analytics, Mixpanel, etc.)
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }
  };

  const trackPageView = (page: string) => {
    const newPageView = {
      page,
      timestamp: Date.now(),
    };
    
    setAnalytics(prev => ({
      ...prev,
      pageViews: [...prev.pageViews, newPageView],
    }));

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: page,
      });
    }
  };

  const setUser = (userId: string, properties: Record<string, any> = {}) => {
    setAnalytics(prev => ({
      ...prev,
      user: { id: userId, properties },
    }));

    // Send to analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: properties,
      });
    }
  };

  const value = {
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