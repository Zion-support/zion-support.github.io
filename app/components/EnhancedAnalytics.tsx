'use client';
import React, { createContext, useContext, useCallback } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
  trackUserAction: (action: string, properties?: Record<string, any>) => void;
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
  const trackEvent = useCallback((eventName: string, properties?: Record<string, any>) => {
    // Track custom events
    console.log('Analytics Event:', eventName, properties);
    
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', eventName, properties);
    }
  }, []);

  const trackPageView = useCallback((pageName: string, properties?: Record<string, any>) => {
    // Track page views
    console.log('Page View:', pageName, properties);
    
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: pageName,
        page_location: window.location.href,
        ...properties
      });
    }
  }, []);

  const trackUserAction = useCallback((action: string, properties?: Record<string, any>) => {
    // Track user actions
    console.log('User Action:', action, properties);
    
    // Send to analytics service
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'user_action', {
        action_name: action,
        ...properties
      });
    }
  }, []);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
    trackUserAction
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
