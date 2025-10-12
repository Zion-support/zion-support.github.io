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
  const [isInitialized, setIsInitialized] = useState(false);

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
      setIsInitialized(true);
    }
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && isInitialized) {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event, properties);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && isInitialized) {
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: userId,
          custom_map: traits
        });
      }
      
      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Identify:', userId, traits);
      }
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && isInitialized) {
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_ID, {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Console log for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Page:', name, properties);
      }
    }
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

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}