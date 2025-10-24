'use client';
<<<<<<< HEAD

import { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

=======
import React, { createContext, useContext, useEffect, useState } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
}
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);
>>>>>>> origin/main
export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};
<<<<<<< HEAD

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // Initialize analytics
  useEffect(() => {
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
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Analytics Event: ', event, properties);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: userId,
          custom_map: traits
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Analytics Identify: ', userId, traits);
      }
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Analytics Page: ', name, properties);
      }
    }
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  };

=======
interface AnalyticsProviderProps {
  children: React.ReactNode;
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);
      script.onload = () => {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() {
          window.dataLayer.push(arguments);
        };
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID);
        setIsLoaded(true);
      };
    } else {
      setIsLoaded(true);
    }
  }, []);
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (isLoaded && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };
  const trackPageView = (page: string) => {
    if (isLoaded && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: page
      });
    }
  };
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };
>>>>>>> origin/main
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
<<<<<<< HEAD
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
=======
};
>>>>>>> origin/main
