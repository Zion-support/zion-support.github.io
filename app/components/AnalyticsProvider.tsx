'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
<<<<<<< HEAD
  trackEvent: (_eventName: string, _parameters?: Record<string, unknown>) => void;
=======
  trackEvent: (_eventName: string, _parameters?: Record<string, any>) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
  trackPageView: (_pageName: string, _pagePath: string) => void;
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
  children: ReactNode;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
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
<<<<<<< HEAD
        const gtagFunction = function(..._args: unknown[]) {
          ((window as unknown as { gtag: { q?: unknown[] } }).gtag.q = (window as unknown as { gtag: { q?: unknown[] } }).gtag.q || []).push(_args);
        };
        (window as unknown as { gtag: unknown }).gtag = (window as unknown as { gtag: unknown }).gtag || gtagFunction;
=======
        const gtagFunction = function(...args: any[]) {
          ((window as any).gtag.q = (window as any).gtag.q || []).push(args);
        };
        (window as any).gtag = (window as any).gtag || gtagFunction;
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
        window.gtag = window.gtag || gtagFunction;
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX');
      }
    }
  }, []);

<<<<<<< HEAD
  const trackEvent = (_eventName: string, _parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag: unknown }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', _eventName, _parameters);
=======
  const trackEvent = (_eventName: string, _parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as any).gtag) {
        (window as any).gtag('event', _eventName, _parameters);
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Event:', _eventName, _parameters);
      }
    }
  };

  const trackPageView = (_pageName: string, _pagePath: string) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
<<<<<<< HEAD
      if ((window as unknown as { gtag: unknown }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', 'page_view', {
=======
      if ((window as any).gtag) {
        (window as any).gtag('event', 'page_view', {
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
          page_title: _pageName,
          page_location: window.location.href,
          page_path: _pagePath
        });
      }
      
      // Custom analytics - only log in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Analytics Page View:', _pageName, _pagePath);
      }
    }
  };

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView
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
<<<<<<< HEAD
    dataLayer: unknown[];
    gtag: (..._args: unknown[]) => void;
=======
    dataLayer: any[];
    gtag: (..._args: any[]) => void;
>>>>>>> cursor/fix-errors-and-merge-to-main-70e6
  }
}

export default AnalyticsProvider;