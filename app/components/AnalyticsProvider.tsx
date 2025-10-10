'use client';

import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (pageName: string, pagePath: string) => void;
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
  trackingId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children, 
  trackingId = 'GA_TRACKING_ID' 
}) => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', eventName, parameters);
    }
    
    // Fallback to console logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', eventName, parameters);
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('config', trackingId, {
        page_title: pageName,
        page_location: pagePath,
      });
    }
    
    // Fallback to console logging in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Page View:', pageName, pagePath);
    }
  };

  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && trackingId) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        }
        (window as any).gtag = gtag;
        gtag('js', new Date());
        gtag('config', trackingId);
      };
    }
  }, [trackingId]);

  const value: AnalyticsContextType = {
    trackEvent,
    trackPageView,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;