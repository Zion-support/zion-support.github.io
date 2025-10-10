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
  googleAnalyticsId?: string;
  enableDebug?: boolean;
}

const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({
  children,
  googleAnalyticsId,
  enableDebug = false
}) => {
  const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window === 'undefined') return;

    try {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('event', eventName, {
          event_category: parameters?.category || 'general',
          event_label: parameters?.label,
          value: parameters?.value,
          ...parameters
        });
      }

      // Custom analytics tracking
      if (enableDebug) {
        console.log('Analytics Event:', eventName, parameters);
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/event', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          event: eventName,
          parameters,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        if (enableDebug) {
          console.error('Analytics tracking error:', error);
        }
      });

    } catch (error) {
      if (enableDebug) {
        console.error('Analytics error:', error);
      }
    }
  };

  const trackPageView = (pageName: string, pagePath: string) => {
    if (typeof window === 'undefined') return;

    try {
      // Google Analytics 4
      if (window.gtag) {
        window.gtag('config', googleAnalyticsId || '', {
          page_title: pageName,
          page_location: window.location.href,
          page_path: pagePath
        });
      }

      if (enableDebug) {
        console.log('Page View:', pageName, pagePath);
      }

      // Send to custom analytics endpoint
      fetch('/api/analytics/pageview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          page: pageName,
          path: pagePath,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          referrer: document.referrer
        })
      }).catch(error => {
        if (enableDebug) {
          console.error('Page view tracking error:', error);
        }
      });

    } catch (error) {
      if (enableDebug) {
        console.error('Page view error:', error);
      }
    }
  };

  useEffect(() => {
    // Initialize Google Analytics
    if (googleAnalyticsId && typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', googleAnalyticsId, {
        page_title: document.title,
        page_location: window.location.href
      });
    }

    // Track initial page view
    trackPageView(document.title, window.location.pathname);

    // Track performance metrics
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (navigation) {
            trackEvent('page_performance', {
              load_time: navigation.loadEventEnd - navigation.loadEventStart,
              dom_content_loaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              first_paint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
              first_contentful_paint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0
            });
          }
        }, 1000);
      });
    }

  }, [googleAnalyticsId]);

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

export { AnalyticsProvider };
export default AnalyticsProvider;

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}