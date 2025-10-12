'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
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
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', process.env.REACT_APP_GA_ID);
      }
    }
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Custom analytics
      console.log('Analytics Event:', event, properties);
    }
  };

  const trackPageView = (page: string) => {
    if (!isInitialized) return;
    
    // Track page view (placeholder for actual analytics implementation)
    console.log('Analytics Page View:', page);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { page_path: page });
  };

  const setUser = (userId: string, properties?: Record<string, any>) => {
    if (!isInitialized) return;
    
    // Set user properties (placeholder for actual analytics implementation)
    console.log('Analytics Set User:', userId, properties);
    
    // Here you would integrate with your analytics service
    // Example: gtag('config', 'GA_MEASUREMENT_ID', { user_id: userId });
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
