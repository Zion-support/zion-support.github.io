'use client';
<<<<<<< HEAD
import { createContext, useContext, useEffect} from 'react';
import { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
    <>
  track: (event: string, properties?: Record<string, any />) => void;
  identify: (userId: string, traits?: Record<string, any />) => void;
  page: (name: string, properties?: Record<string, any />) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined />(undefined);
=======

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
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

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

<<<<<<< HEAD
export const AnalyticsProvider: React.FC<AnalyticsProviderProps /> = ({ children }) => {
=======
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
>>>>>>> origin/main
  useEffect(() => {
    // Initialize analytics
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (process.env.NODE_ENV === 'production') {
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_GA_ID}`;
        document.head.appendChild(script);

        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
<<<<<<< HEAD
          window.dataLayer.push(args);
=======
          (window as any).dataLayer.push(args);
>>>>>>> origin/main
        }
        gtag('js', new Date());
        gtag('config', process.env.REACT_APP_GA_ID);
      }
    }
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
<<<<<<< HEAD
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Custom analytics
      console.log('Analytics Event: ', event, properties);
=======
      if ((window as any).gtag) {
        (window as any).gtag('event', event, properties);
      }
      
      // Custom analytics
      console.log('Analytics Event:', event, properties);
>>>>>>> origin/main
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: userId,
          custom_map: traits
        });
      }
      
      // Custom analytics
<<<<<<< HEAD
      console.log('Analytics Identify: ', userId, traits);
=======
      console.log('Analytics Identify:', userId, traits);
>>>>>>> origin/main
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
          page_title: name,
          page_location: window.location.href,
          ...properties
        });
      }
      
      // Custom analytics
<<<<<<< HEAD
      console.log('Analytics Page: ', name, properties);
=======
      console.log('Analytics Page:', name, properties);
>>>>>>> origin/main
    }
  };

  const value: AnalyticsContextType = {
    track,
    identify,
    page
  };

  return (
<<<<<<< HEAD
    <AnalyticsContext.Provider const value = {value} />
=======
    <AnalyticsContext.Provider value={value}>
>>>>>>> origin/main
      {children}
    </AnalyticsContext.Provider>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
<<<<<<< HEAD
    dataLayer: any[];,
  gtag: (...args: any[]) => void;
  }
}
    </>
=======
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
>>>>>>> origin/main
