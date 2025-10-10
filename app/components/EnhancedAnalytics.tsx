'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, any>) => void;
  page: (name: string, properties?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
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
    if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: document.title,
        page_location: window.location.href,
      });

      (window as any).gtag = gtag;
    }
  }, []);

  const track = (event: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', event, properties);
    }
  };

  const page = (name: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_title: name,
        page_location: window.location.href,
        ...properties,
      });
    }
  };

  const identify = (userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        user_id: userId,
        ...traits,
      });
    }
  };

  const value: AnalyticsContextType = {
    track,
    page,
    identify,
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;