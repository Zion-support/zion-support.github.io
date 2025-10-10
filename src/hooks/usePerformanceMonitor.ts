import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
}

interface PerformanceMonitorOptions {
  enableLogging?: boolean;
  enableReporting?: boolean;
  reportEndpoint?: string;
  sampleRate?: number;
}

export const usePerformanceMonitor = (options: PerformanceMonitorOptions = {}) => {
  const {
    enableLogging = process.env.NODE_ENV === 'development',
    enableReporting = false,
    reportEndpoint = '/api/performance',
    sampleRate = 0.1
  } = options;

  const log = useCallback((message: string, data?: any) => {
    if (enableLogging) {
      console.log(`[Performance Monitor] ${message}`, data);
    }
  }, [enableLogging]);

  const reportMetrics = useCallback(async (metrics: PerformanceMetrics) => {
    if (!enableReporting || Math.random() > sampleRate) return;

    try {
      await fetch(reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...metrics,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href,
        }),
      });
      log('Performance metrics reported successfully');
    } catch (error) {
      log('Failed to report performance metrics', error);
    }
  }, [enableReporting, reportEndpoint, sampleRate, log]);

  const measurePerformance = useCallback(() => {
    const metrics: PerformanceMetrics = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
    };

    // Measure page load time
    if (performance.timing) {
      metrics.loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    }

    // Measure Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            metrics.firstContentfulPaint = fcpEntry.startTime;
            log('First Contentful Paint', fcpEntry.startTime);
          }
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (error) {
        log('FCP observer error', error);
      }

      // Largest Contentful Paint
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.largestContentfulPaint = lastEntry.startTime;
          log('Largest Contentful Paint', lastEntry.startTime);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        log('LCP observer error', error);
      }

      // First Input Delay
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metrics.firstInputDelay = entry.processingStart - entry.startTime;
            log('First Input Delay', metrics.firstInputDelay);
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        log('FID observer error', error);
      }

      // Cumulative Layout Shift
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cumulativeLayoutShift = clsValue;
          log('Cumulative Layout Shift', clsValue);
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        log('CLS observer error', error);
      }
    }

    // Memory usage (if available)
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
      log('Memory usage', metrics.memoryUsage);
    }

    return metrics;
  }, [log]);

  const measureResourceTiming = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      const resourceObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const resource = entry as PerformanceResourceTiming;
          log('Resource loaded', {
            name: resource.name,
            duration: resource.duration,
            size: resource.transferSize,
            type: resource.initiatorType,
          });
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    } catch (error) {
      log('Resource timing observer error', error);
    }
  }, [log]);

  const measureLongTasks = useCallback(() => {
    if (!('PerformanceObserver' in window)) return;

    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          log('Long task detected', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      log('Long task observer error', error);
    }
  }, [log]);

  const measureNavigationTiming = useCallback(() => {
    if (!performance.timing) return;

    const timing = performance.timing;
    const navigationMetrics = {
      dns: timing.domainLookupEnd - timing.domainLookupStart,
      tcp: timing.connectEnd - timing.connectStart,
      request: timing.responseStart - timing.requestStart,
      response: timing.responseEnd - timing.responseStart,
      dom: timing.domContentLoadedEventEnd - timing.navigationStart,
      load: timing.loadEventEnd - timing.navigationStart,
    };

    log('Navigation timing', navigationMetrics);
    return navigationMetrics;
  }, [log]);

  useEffect(() => {
    // Start monitoring immediately
    measureResourceTiming();
    measureLongTasks();
    measureNavigationTiming();

    // Measure performance after page load
    const handleLoad = () => {
      setTimeout(() => {
        const metrics = measurePerformance();
        reportMetrics(metrics);
      }, 1000);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, [measurePerformance, measureResourceTiming, measureLongTasks, measureNavigationTiming, reportMetrics]);

  // Return utility functions for manual measurement
  return {
    measurePerformance,
    measureResourceTiming,
    measureLongTasks,
    measureNavigationTiming,
    reportMetrics,
  };
};

export default usePerformanceMonitor;