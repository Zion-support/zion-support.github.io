'use client';

import React, { createContext, useContext, useEffect } from 'react';

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
        function gtag(...args: unknown[]) {
          window.dataLayer.push(args);
        }
        gtag('js', new Date());
        gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX');
      }
    }
  }, []);

  const track = (_event: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
<<<<<<< HEAD
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', _event, _properties);
=======
      if (window.gtag) {
        window.gtag('event', event, properties);
>>>>>>> cursor/fix-errors-and-merge-to-main-a33a
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event: ', _event, _properties);
      }
    }
  };

  const identify = (_userId: string, _traits?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
<<<<<<< HEAD
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX', {
          user_id: _userId,
          custom_map: _traits
=======
      if (window.gtag) {
        window.gtag('config', process.env.REACT_APP_GA_ID, {
          user_id: userId,
          custom_map: traits
>>>>>>> cursor/fix-errors-and-merge-to-main-a33a
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Identify: ', _userId, _traits);
      }
    }
  };

  const page = (_name: string, _properties?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
<<<<<<< HEAD
      if ((window as unknown as { gtag?: (..._args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', 'page_view', {
          page_title: _name,
=======
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_title: name,
>>>>>>> cursor/fix-errors-and-merge-to-main-a33a
          page_location: window.location.href,
          ..._properties
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Page: ', _name, _properties);
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
    dataLayer: unknown[];
    gtag: (..._args: unknown[]) => void;
  }
}

export default AnalyticsProvider;
