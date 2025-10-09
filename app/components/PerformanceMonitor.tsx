import React, { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  renderTime: number;
  memoryUsage: number;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceMonitorProps {
  updateInterval?: number;
  enableConsoleLogging?: boolean;
}

const PerformanceMonitor: React.FC<PerformanceMonitorProps> = ({
  updateInterval = 5000,
  enableConsoleLogging = false
}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: 0,
    memoryUsage: 0,
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
  });

  const [, setPerformanceScore] = useState(0);

  useEffect(() => {
    const updateMetrics = () => {
      const currentMetrics: PerformanceMetrics = {
        renderTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
        lcp: null,
        fid: null,
        cls: null,
        fcp: null,
        ttfb: null,
      };

      // Measure Core Web Vitals
      if ('PerformanceObserver' in window) {
        try {
          // LCP - Largest Contentful Paint
          const lcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            currentMetrics.lcp = lastEntry.startTime;
          });
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

          // FID - First Input Delay
          const fidObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (entry.processingStart && entry.startTime) {
                currentMetrics.fid = entry.processingStart - entry.startTime;
              }
            });
          });
          fidObserver.observe({ entryTypes: ['first-input'] });

          // CLS - Cumulative Layout Shift
          let clsValue = 0;
          const clsObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry: any) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            currentMetrics.cls = clsValue;
          });
          clsObserver.observe({ entryTypes: ['layout-shift'] });

          // FCP - First Contentful Paint
          const fcpObserver = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
              if (entry.name === 'first-contentful-paint') {
                currentMetrics.fcp = entry.startTime;
              }
            });
          });
          fcpObserver.observe({ entryTypes: ['paint'] });

          // TTFB - Time to First Byte
          const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
          if (navigationEntries.length > 0) {
            const navEntry = navigationEntries[0];
            currentMetrics.ttfb = navEntry.responseStart - navEntry.requestStart;
          }

        } catch (error) {
          console.warn('Performance observer not supported:', error);
        }
      }

      setMetrics(currentMetrics);
      
      // Calculate performance score
      const score = calculatePerformanceScore(currentMetrics);
      setPerformanceScore(score);

      // Log metrics in development
      if (enableConsoleLogging && process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', currentMetrics);
        console.log('Performance Score:', score);
      }
    };

    // Initial metrics update
    updateMetrics();

    // Set up interval for continuous monitoring
    const interval = setInterval(updateMetrics, updateInterval);

    return () => {
      clearInterval(interval);
    };
  }, [updateInterval, enableConsoleLogging]);

  const calculatePerformanceScore = (currentMetrics: PerformanceMetrics): number => {
    let score = 100;

    // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
    if (currentMetrics.lcp !== null) {
      if (currentMetrics.lcp > 4000) score -= 20;
      else if (currentMetrics.lcp > 2500) score -= 10;
    }

    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (currentMetrics.fid !== null) {
      if (currentMetrics.fid > 300) score -= 20;
      else if (currentMetrics.fid > 100) score -= 10;
    }

    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (currentMetrics.cls !== null) {
      if (currentMetrics.cls > 0.25) score -= 20;
      else if (currentMetrics.cls > 0.1) score -= 10;
    }

    // FCP scoring (good: <1.8s, needs improvement: 1.8-3s, poor: >3s)
    if (currentMetrics.fcp !== null) {
      if (currentMetrics.fcp > 3000) score -= 15;
      else if (currentMetrics.fcp > 1800) score -= 8;
    }

    // TTFB scoring (good: <800ms, needs improvement: 800-1800ms, poor: >1800ms)
    if (currentMetrics.ttfb !== null) {
      if (currentMetrics.ttfb > 1800) score -= 15;
      else if (currentMetrics.ttfb > 800) score -= 8;
    }

    return Math.max(0, score);
  };

  const reportMetrics = useCallback((metrics: PerformanceMetrics, score: number) => {
    // This could be extended to send metrics to analytics services
    if (enableConsoleLogging && process.env.NODE_ENV === 'development') {
      console.log('Performance Report:', {
        metrics,
        score,
        timestamp: new Date().toISOString()
      });
    }
  }, [enableConsoleLogging]);

  // Report metrics when they change
  useEffect(() => {
    if (metrics.lcp !== null || metrics.fid !== null || metrics.cls !== null) {
      const score = calculatePerformanceScore(metrics);
      reportMetrics(metrics, score);
    }
  }, [metrics, reportMetrics]);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;