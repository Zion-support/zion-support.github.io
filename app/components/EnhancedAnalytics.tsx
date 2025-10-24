'use client';

import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
<<<<<<< HEAD
  track: (_event: string, _properties?: Record<string, unknown>) => void
  identify: (_userId: string, _traits?: Record<string, unknown>) => void
  page: (_name: string, _properties?: Record<string, unknown>) => void
=======
  track: (event: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
>>>>>>> 7731b4b6fd97e47e852139145bd07a5c5da22c6d
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
<<<<<<< HEAD
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', event, properties)
=======
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.log('Analytics Event: ', event, properties);
>>>>>>> 7731b4b6fd97e47e852139145bd07a5c5da22c6d
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
<<<<<<< HEAD
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
=======
      if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_ID, {
>>>>>>> 7731b4b6fd97e47e852139145bd07a5c5da22c6d
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
<<<<<<< HEAD
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.REACT_APP_GA_ID, {
=======
      if (window.gtag) {
        window.gtag('event', 'page_view', {
>>>>>>> 7731b4b6fd97e47e852139145bd07a5c5da22c6d
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

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default AnalyticsProvider;
