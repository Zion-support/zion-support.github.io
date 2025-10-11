'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string) => void;
  trackUser: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Initialize analytics
    const initAnalytics = () => {
      // Add analytics initialization code here
      setIsLoaded(true);
    };

    initAnalytics();
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (!isLoaded) return;

    // Track event with analytics service
    console.log('Analytics Event:', eventName, properties);
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, properties);
    }
  };

  const trackPageView = (pageName: string) => {
    if (!isLoaded) return;

    // Track page view
    console.log('Analytics Page View:', pageName);
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href
      });
    }
  };

  const trackUser = (userId: string, traits?: Record<string, any>) => {
    if (!isLoaded) return;

    // Track user identification
    console.log('Analytics User:', userId, traits);
    
    // Example: Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'GA_MEASUREMENT_ID', {
        user_id: userId,
        custom_map: traits
      });
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackUser
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;