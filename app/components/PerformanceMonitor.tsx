'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

const PerformanceMonitor: React.FC = () => {
  const reportMetric = useCallback((name: string, value: number) => {
    // Send to analytics service in production
    if (process.env.NODE_ENV === 'production') {
      // Example: gtag('event', 'web_vitals', { name, value });
      console.log(`Performance Metric: ${name} = ${value}`);
    } else {
      console.log(`Performance Metric: ${name} = ${value}`);
    }
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          reportMetric('LCP', entry.startTime);
        } else if (entry.entryType === 'first-input') {
          reportMetric('FID', (entry as any).processingStart - entry.startTime);
        } else if (entry.entryType === 'layout-shift' && !(entry as any).hadRecentInput) {
          reportMetric('CLS', (entry as any).value);
        }
      }
    });

    // Monitor navigation timing
    const navigationObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          reportMetric('TTFB', navEntry.responseStart - navEntry.requestStart);
          reportMetric('FCP', navEntry.domContentLoadedEventEnd - navEntry.navigationStart);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      navigationObserver.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }

    // Monitor resource loading performance
    const resourceObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) { // Log slow resources
            console.warn(`Slow resource: ${resourceEntry.name} took ${resourceEntry.duration}ms`);
          }
        }
      }
    });

    try {
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.warn('Resource monitoring not supported:', error);
    }

    return () => {
      observer.disconnect();
      navigationObserver.disconnect();
      resourceObserver.disconnect();
    };
  }, [reportMetric]);

  // Monitor page visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        reportMetric('page_hidden', Date.now());
      } else {
        reportMetric('page_visible', Date.now());
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [reportMetric]);

  return null;
};

export default PerformanceMonitor;
