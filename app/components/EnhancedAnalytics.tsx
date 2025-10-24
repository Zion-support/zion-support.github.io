'use client';

import React, { createContext, useContext, useEffect } from 'react';

declare global {
  interface Window {
    gtag: (..._args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

interface AnalyticsContextType {
  track: (_event: string, _properties?: Record<string, unknown>) => void;
  identify: (_userId: string, _traits?: Record<string, unknown>) => void;
  page: (_name: string, _properties?: Record<string, unknown>) => void;
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
        // Load Google Analytics script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'}`;
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        const gtagFunction = function(...args: unknown[]) {
          (window as { gtag: { q: unknown[] } }).gtag.q = (window as { gtag: { q: unknown[] } }).gtag.q || [];
          (window as { gtag: { q: unknown[] } }).gtag.q.push(args);
        };
        window.gtag = window.gtag || gtagFunction;
        window.gtag = window.gtag || gtagFunction;
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX');
      }
    }
  }, []);

  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('event', event, properties);
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', event, properties);
      }
    }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if (window.gtag) {
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
          user_id: userId,
          custom_map: traits
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Identify:', userId, traits);
      }
    }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
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

// Extend Window interface for TypeScript

export default AnalyticsProvider;