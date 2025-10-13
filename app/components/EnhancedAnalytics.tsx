<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React, { useEffect } from 'react';

interface EnhancedAnalyticsProps {
  children: React.ReactNode;
  enableTracking?: boolean;
  enablePerformanceMonitoring?: boolean;
}

const EnhancedAnalytics: React.FC<EnhancedAnalyticsProps> = ({
  children,
  enableTracking = true,
  enablePerformanceMonitoring = true
}) => {
  useEffect(() => {
    if (enableTracking && typeof window !== 'undefined') {
      // Initialize analytics tracking
      console.log('Analytics initialized');
=======
'use client';
import React, { createContext, useContext, useEffect, useCallback } from 'react';

interface AnalyticsContextType {
  track: (event: string, parameters?: Record<string, any>) => void;
  page: (pageName: string, parameters?: Record<string, any>) => void;
  identify: (userId: string, traits?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | null>(null);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: React.ReactNode;
  trackingId?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  trackingId = 'G-XXXXXXXXXX'
}) => {
  // Initialize Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && trackingId) {
      // Load Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script['src'] = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href
      });
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
    }
  }, [enableTracking]);

<<<<<<< HEAD
<<<<<<< HEAD
  return <>{children}</>;
=======
  const track = (event: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "event",
          event,
          properties,
        );
      }

      // Custom analytics
      }
  };

  const identify = (userId: string, traits?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "config",
          process.env.REACT_APP_GA_ID,
          {
            user_id: userId,
            custom_map: traits,
          },
        );
      }

      // Custom analytics
      }
  };

  const page = (name: string, properties?: Record<string, unknown>) => {
    if (typeof window !== "undefined") {
      // Google Analytics
      if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        (window as unknown as { gtag: (...args: unknown[]) => void }).gtag(
          "event",
          "page_view",
          {
            page_title: name,
            page_location: window.location.href,
            ...properties,
          },
        );
      }

      // Custom analytics
      }
  };

=======
  const track = useCallback((event: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event, parameters);
    }
  }, []);

  const page = useCallback((pageName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        page_title: pageName,
        page_location: window.location.href,
        ...parameters
      });
    }
  }, [trackingId]);

  const identify = useCallback((userId: string, traits?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', trackingId, {
        user_id: userId,
        ...traits
      });
    }
  }, [trackingId]);

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
  const value: AnalyticsContextType = {
    track,
    identify,
    page,
<<<<<<< HEAD
=======
    identify
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
  };

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  );
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-03c6
};

<<<<<<< HEAD
export default EnhancedAnalytics;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
// Performance monitoring hook
export const usePerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        });
      });

      observer.observe({ 
        entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] 
      });

      return () => observer.disconnect();
    }
  }, []);
};

// Declare global gtag function
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
