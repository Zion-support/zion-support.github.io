'use client';
<<<<<<< HEAD

import React, { createContext, useContext, useEffect, useState } from 'react';

// Declare gtag function for Google Analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

=======
import React, { createContext, useContext, useEffect, useState } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
>>>>>>> origin/main
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
}
<<<<<<< HEAD

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

=======
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
  const [isLoaded, setIsLoaded] = useState(false);

=======
interface AnalyticsProviderProps {
  children: React.ReactNode;
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
>>>>>>> origin/main
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);
<<<<<<< HEAD

=======
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (isLoaded && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };
<<<<<<< HEAD

=======
>>>>>>> origin/main
  const trackPageView = (page: string) => {
    if (isLoaded && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: page
      });
    }
  };
<<<<<<< HEAD

=======
>>>>>>> origin/main
  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
  };
<<<<<<< HEAD

=======
>>>>>>> origin/main
  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};