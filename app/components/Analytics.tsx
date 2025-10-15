import React, { useEffect } from 'react';

interface AnalyticsProps {
  trackingId?: string;
  enablePerformance?: boolean;
  enableUserBehavior?: boolean;
  enableErrorTracking?: boolean;
}

const Analytics: React.FC<AnalyticsProps> = ({
  trackingId = 'G-XXXXXXXXXX',
  enablePerformance = true,
  enableUserBehavior = true,
  enableErrorTracking = true
}) => {
  useEffect(() => {
    // Google Analytics 4
    if (typeof window !== 'undefined' && enableUserBehavior) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', trackingId, {
        page_title: document.title,
        page_location: window.location.href,
        send_page_view: true
      });
    }

    // Performance Monitoring
    if (enablePerformance && typeof window !== 'undefined') {
      const performanceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const metrics = {
              dns: navEntry.domainLookupEnd - navEntry.domainLookupStart,
              tcp: navEntry.connectEnd - navEntry.connectStart,
              ttfb: navEntry.responseStart - navEntry.requestStart,
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              load: navEntry.loadEventEnd - navEntry.loadEventStart,
              total: navEntry.loadEventEnd - navEntry.navigationStart
            };
            
            // Send to analytics
            if (window.gtag) {
              window.gtag('event', 'performance_metrics', {
                event_category: 'Performance',
                event_label: 'Page Load',
                value: Math.round(metrics.total),
                custom_map: {
                  dns_time: Math.round(metrics.dns),
                  tcp_time: Math.round(metrics.tcp),
                  ttfb: Math.round(metrics.ttfb),
                  dom_content_loaded: Math.round(metrics.domContentLoaded),
                  load_time: Math.round(metrics.load)
                }
              });
            }
          }
        }
      });

      performanceObserver.observe({ entryTypes: ['navigation'] });

      // Core Web Vitals
      const vitalsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            const lcp = entry as PerformanceEntry;
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'LCP',
                value: Math.round(lcp.startTime)
              });
            }
          }
          
          if (entry.entryType === 'first-input') {
            const fid = entry as PerformanceEntry;
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(fid.processingStart - fid.startTime)
              });
            }
          }
        }
      });

      vitalsObserver.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        
        if (window.gtag) {
          window.gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000)
          });
        }
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Error Tracking
    if (enableErrorTracking && typeof window !== 'undefined') {
      const handleError = (event: ErrorEvent) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            event_category: 'Error',
            event_label: event.message,
            description: `${event.filename}:${event.lineno}:${event.colno}`,
            fatal: false
          });
        }
      };

      const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
        if (window.gtag) {
          window.gtag('event', 'exception', {
            event_category: 'Error',
            event_label: 'Unhandled Promise Rejection',
            description: event.reason?.toString() || 'Unknown error',
            fatal: false
          });
        }
      };

      window.addEventListener('error', handleError);
      window.addEventListener('unhandledrejection', handleUnhandledRejection);

      return () => {
        window.removeEventListener('error', handleError);
        window.removeEventListener('unhandledrejection', handleUnhandledRejection);
      };
    }
  }, [trackingId, enablePerformance, enableUserBehavior, enableErrorTracking]);

  // Track page views
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname
      });
    }
  }, []);

  return null;
};

// Utility functions for manual tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackConversion = (conversionId: string, value?: number, currency?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: currency || 'USD'
    });
  }
};

export const trackCustomEvent = (eventName: string, eventCategory: string, eventLabel?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      event_category: eventCategory,
      event_label: eventLabel,
      value: value
    });
  }
};

// Declare global types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;