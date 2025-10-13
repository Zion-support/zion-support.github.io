'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean;
}

export const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Enable analytics in production
    setIsEnabled(process.env.NODE_ENV === 'production');
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    // Track event with analytics service
    console.log('Analytics Event:', eventName, properties);
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;
    
    // Track page view
    console.log('Page View:', pageName);
  };

  const setUser = (userId: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;
    
    // Set user properties
    console.log('User Set:', userId, properties);
  };

  return (
    <AnalyticsContext.Provider value={{
      trackEvent,
      trackPageView,
      setUser,
      isEnabled
    }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};