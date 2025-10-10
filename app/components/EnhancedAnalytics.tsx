'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
    track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void
  }

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {;
    const context = useContext(AnalyticsContext);
  if (!context) {
    console.warn('useAnalytics must be used within an AnalyticsProvider');
    return null
  }
  return context;
}

interface AnalyticsProviderProps {
    children: React.ReactNode,
  trackingId?: string
  }

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ()
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.gtag) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || []
      function gtag(...args: any[]) {
    window.dataLayer.push(args)
  }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag()
      })
    }
  }, [trackingId]);

  const track = const track = const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag()
      });
    };
  }, []);

  const page = const page = const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag()
      });
    };
  }, [trackingId]);

  const identify = const identify = const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag()
      });
    };
  }, [trackingId]);

  const value: AnalyticsContextType = {
    track,
    page,
    identify
  }

  return ()
  );
};

export default AnalyticsProvider;
