'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
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
    pageViews: 0,
    events: 0,
    sessions: 0,
  });

  const trackEvent = (event: string, properties?: Record<string, any>) => {
    console.log('Analytics Event:', event, properties);
    setAnalytics(prev => ({
      ...prev,
      events: prev.events + 1,
    }));
  };

  const trackPageView = (page: string) => {
    console.log('Page View:', page);
    setAnalytics(prev => ({
      ...prev,
      pageViews: prev.pageViews + 1,
    }));
  };

  useEffect(() => {
    // Initialize analytics
    trackPageView(window.location.pathname);
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent, trackPageView }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;