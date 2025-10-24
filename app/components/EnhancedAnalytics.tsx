<<<<<<< HEAD
'use client'
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: Record<string, unknown>) => void;
  identify: (userId: string, traits?: Record<string, unknown>) => void;
  page: (name: string, properties?: Record<string, unknown>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

=======
'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
interface AnalyticsContextType {
  trackEvent: (eventName: string, parameters?: Record<string, any>) => void;
  trackPageView: (page: string) => void;
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
<<<<<<< HEAD

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const track = (event: string, properties?: Record<string, unknown>) => {
    console.log('Analytics track:', event, properties);
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    console.log('Analytics identify:', userId, traits);
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    console.log('Analytics page:', name, properties);
  };

  return (
    <AnalyticsContext.Provider value={{ track, identify, page }}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
=======
interface AnalyticsProviderProps {
  children: React.ReactNode;
}
export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`;
      document.head.appendChild(script);
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
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (isLoaded && window.gtag) {
      window.gtag('event', eventName, parameters);
    }
  };
  const trackPageView = (page: string) => {
    if (isLoaded && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: page
      });
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
>>>>>>> origin/main
