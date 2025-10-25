<<<<<<< HEAD
import React, { createContext, useContext, useEffect, ReactNode } from "react"
declare global {
  interface Window {
=======
'use client';
>>>>>>> origin/main

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (_eventName: string, _parameters?: Record<string, unknown>) => void;
  trackPageView: (_pageName: string, _pagePath: string) => void;
}
<<<<<<< HEAD
const AnalyticsContext = createContext<AnalyticsContextType | undefined>(
  undefined
export const useAnalytics = () => {;
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error("useAnalytics must be used within an AnalyticsProvider")
  return context
=======

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

>>>>>>> origin/main
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
<<<<<<< HEAD
        window.gtag =
          window.gtag ||;
          function (...args: any[]) {
            (window.gtag as any).q = (window.gtag as any).q || []
            (window.gtag as any).q.push(args)
        window.gtag("js", new Date()
        window.gtag("config", process.env.REACT_APP_GA_MEASUREMENT_ID || "")}
  }, [])
  consttrackEvent= (
    eventName: string,
    parameters?: Record<string, unknown></string>
  ) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", eventName, parameters)}
  consttrackPageView= (pageName: string) => {if (type of windo w !=="undefined" && windo w.gtag) {
      window.gtag("config","GA_MEASUREMENT_ID", {
        page_title: pageName,
    page_location: window.location.href})}
  constvalue: AnalyticsContextType = {,
trackEvent,
=======

        // Initialize gtag
        const gtagFunction = function(...args: unknown[]) {
          const gtag = window as { gtag?: { q?: unknown[] } };
          gtag.gtag = gtag.gtag || { q: [] };
          gtag.gtag.q = gtag.gtag.q || [];
          gtag.gtag.q.push(args);
        };
        (window as { gtag?: unknown }).gtag = (window as { gtag?: unknown }).gtag || gtagFunction;
        window.gtag = window.gtag || gtagFunction;
        window.gtag('js', new Date());
        window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX');
      }
    }
  }, []);

  const trackEvent = (_eventName: string, _parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined') {
      // Google Analytics
      if ((window as unknown as { gtag: (..._args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', _eventName, _parameters);
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
      if ((window as unknown as { gtag: (..._args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (..._args: unknown[]) => void }).gtag('event', 'page_view', {
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
>>>>>>> origin/main
    trackPageView
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
<<<<<<< HEAD
  )
}
 AnalyticsProvider
  )
}
=======
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
>>>>>>> origin/main
