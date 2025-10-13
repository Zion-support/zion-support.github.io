'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  setUser: (userId: string, properties?: Record<string, any>) => void;
  isEnabled: boolean;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Enable analytics in production or when explicitly enabled
    const shouldEnable = process.env.NODE_ENV === 'production' || 
                        (typeof window !== 'undefined' && localStorage.getItem('analytics-enabled') === 'true');
    setIsEnabled(shouldEnable);
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;

    try {
      // Track event with analytics service
      console.log('Analytics Event:', { eventName, properties });
      
      // Here you would integrate with your analytics service
      // Example: gtag('event', eventName, properties);
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  const trackPageView = (pageName: string) => {
    if (!isEnabled) return;

    try {
      // Track page view
      console.log('Analytics Page View:', pageName);
      
      // Here you would integrate with your analytics service
      // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_title: pageName });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  const setUser = (userId: string, properties?: Record<string, any>) => {
    if (!isEnabled) return;

    try {
      // Set user properties
      console.log('Analytics User:', { userId, properties });
      
      // Here you would integrate with your analytics service
      // Example: gtag('config', 'GA_MEASUREMENT_ID', { user_id: userId });
    } catch (error) {
      console.error('Error setting user:', error);
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    setUser,
    isEnabled
  };

  return (
    <AnalyticsContext.Provider value={value}>
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