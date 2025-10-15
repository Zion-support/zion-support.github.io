import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  cls?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
  fid?: number;
  tbt?: number;
}

interface PerformanceData {
  metrics: PerformanceMetrics;
  navigationTiming?: PerformanceNavigationTiming;
  resourceTiming?: PerformanceEntry[];
}

const PerformanceMonitor: React.FC = () => {
  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

  const handleMetric = useCallback((metric: any) => {
    const metricName = metric.name.toLowerCase() as keyof PerformanceMetrics;
    metricsRef.current[metricName] = metric.value;
    
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance metric ${metric.name}:`, metric.value);
    }
    
    // Store metrics for analytics
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      // analyticsService.track('performance_metric', { metric: metric.name, value: metric.value });
    }
  }, []);

  const captureNavigationTiming = useCallback(() => {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const navigationMetrics = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        domInteractive: navigation.domInteractive - navigation.fetchStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      };

      if (process.env.NODE_ENV === 'development') {
        console.log('Navigation timing:', navigationMetrics);
      }
    }
  }, []);

  useEffect(() => {
    // Monitor Core Web Vitals
    if (typeof window !== 'undefined') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP, onFID, onTBT }) => {
        onCLS(handleMetric);
        onFCP(handleMetric);
        onLCP(handleMetric);
        onTTFB(handleMetric);
        onINP(handleMetric);
        onFID(handleMetric);
        onTBT(handleMetric);
      }).catch(() => {
        // Silently fail if web-vitals is not available
      });
    }

    // Monitor performance metrics
    if ('performance' in window) {
      observerRef.current = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            captureNavigationTiming();
          }
        }
      });
      observerRef.current.observe({ entryTypes: ['navigation'] });
      
      // Capture navigation timing on load
      window.addEventListener('load', captureNavigationTiming);
    }

    // Cleanup function
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('load', captureNavigationTiming);
    };
  }, [handleMetric, captureNavigationTiming]);

  return null;
};

export default PerformanceMonitor;
