'use client';
import React, { createContext, useContext, useEffect } from 'react';

interface AnalyticsContextType {
  track: (event: string, properties?: any) => void;
  page: (name: string, properties?: any) => void;
  identify: (userId: string, traits?: any) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    console.warn('useAnalytics must be used within an AnalyticsProvider');
    return null;
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  apiKey?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children, apiKey }) => {
  const track = (event: string, properties?: any) => {
    console.log('Analytics Event:', event, properties);
    // Implement actual analytics tracking here
  };

  const page = (name: string, properties?: any) => {
    console.log('Analytics Page:', name, properties);
    // Implement actual page tracking here
  };

  const identify = (userId: string, traits?: any) => {
    console.log('Analytics Identify:', userId, traits);
    // Implement actual user identification here
  };

<<<<<<< HEAD
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
=======
  useEffect(() => {
    // Initialize analytics
    if (apiKey) {
      console.log('Analytics initialized with API key:', apiKey);
    }
  }, [apiKey]);

  return (
    <AnalyticsContext.Provider value={{ track, page, identify }}>
      {children}
    </AnalyticsContext.Provider>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbe6
  );
};

const EnhancedAnalytics: React.FC = () => {
  const analytics = useAnalytics();

  useEffect(() => {
    if (analytics) {
      analytics.page('Home Page');
    }
  }, [analytics]);

  return null;
};

export default EnhancedAnalytics;