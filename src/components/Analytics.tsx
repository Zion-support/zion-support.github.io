import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, properties?: Record<string, any>) => void;
  trackPageView: (pageName: string, properties?: Record<string, any>) => void;
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
    // Initialize Google Analytics
    const initGoogleAnalytics = () => {
      if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
        // Google Analytics 4
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'}`;
        document.head.appendChild(script);

        window.dataLayer = window.dataLayer || [];
        function gtag(...args: any[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', process.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX');
      }
    };

    initGoogleAnalytics();
  }, []);

  const trackEvent = (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', eventName, properties);
      }

      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', eventName, properties);
      }
    }
  };

  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
          page_title: pageName,
          page_location: window.location.href,
          ...properties
        });
      }

      // Console log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Page View:', pageName, properties);
      }
    }
  };

  const value = {
    trackEvent,
    trackPageView
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
