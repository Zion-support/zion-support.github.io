'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
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

  useEffect(() => {
    // Initialize analytics
    const initializeAnalytics = () => {
      // Track page load
      trackPageView(window.location.pathname);
    };

    initializeAnalytics();
  }, []);

  const trackEvent = (eventName: string, properties: Record<string, any> = {}) => {
    try {
      // Send event to analytics service
      console.log('Analytics Event:', { eventName, properties, userId, timestamp: new Date().toISOString() });
      
      // Here you would typically send to your analytics service
      // Example: analytics.track(eventName, { ...properties, userId });
    } catch (error) {
      console.error('Analytics tracking error:', error);
    }
  };

  const trackPageView = (pageName: string, properties: Record<string, any> = {}) => {
    try {
      console.log('Page View:', { pageName, properties, userId, timestamp: new Date().toISOString() });
      
      // Here you would typically send to your analytics service
      // Example: analytics.page(pageName, { ...properties, userId });
    } catch (error) {
      console.error('Analytics page tracking error:', error);
    }
  };

  const setUser = (newUserId: string, properties: Record<string, any> = {}) => {
    setUserId(newUserId);
    console.log('User Set:', { userId: newUserId, properties, timestamp: new Date().toISOString() });
    
    // Here you would typically identify the user with your analytics service
    // Example: analytics.identify(newUserId, properties);
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