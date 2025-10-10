import { useEffect, useCallback } from 'react';
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

interface PerformanceMetrics {
  CLS: number | null;
  FID: number | null;
  FCP: number | null;
  LCP: number | null;
  TTFB: number | null;
}

interface PerformanceMonitorOptions {
  reportToAnalytics?: boolean;
  reportToConsole?: boolean;
  customCallback?: (metric: any) => void;
}

export const usePerformanceMonitor = (options: PerformanceMonitorOptions = {}) => {
  const {
    reportToAnalytics = true,
    reportToConsole = false,
    customCallback
  } = options;

  const reportMetric = useCallback((metric: any) => {
    if (reportToConsole) {
      console.log('Performance Metric:', metric);
    }

    if (customCallback) {
      customCallback(metric);
    }

    if (reportToAnalytics && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  }, [reportToAnalytics, reportToConsole, customCallback]);

  useEffect(() => {
    // Core Web Vitals
    getCLS(reportMetric);
    getFID(reportMetric);
    getFCP(reportMetric);
    getLCP(reportMetric);
    getTTFB(reportMetric);

    // Additional performance monitoring
    if (typeof window !== 'undefined') {
      // Monitor long tasks
      if ('PerformanceObserver' in window) {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              reportMetric({
                name: 'Long Task',
                value: entry.duration,
                id: 'long-task',
                delta: entry.duration,
              });
            }
          }
        });

        try {
          longTaskObserver.observe({ entryTypes: ['longtask'] });
        } catch (e) {
          // Long task API not supported
        }

        // Monitor layout shifts
        const layoutShiftObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              reportMetric({
                name: 'Layout Shift',
                value: (entry as any).value,
                id: 'layout-shift',
                delta: (entry as any).value,
              });
            }
          }
        });

        try {
          layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          // Layout shift API not supported
        }
      }

      // Monitor memory usage
      if ('memory' in performance) {
        const checkMemory = () => {
          const memory = (performance as any).memory;
          if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
            reportMetric({
              name: 'High Memory Usage',
              value: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
              id: 'memory-usage',
              delta: memory.usedJSHeapSize / 1024 / 1024,
            });
          }
        };

        // Check memory every 30 seconds
        const memoryInterval = setInterval(checkMemory, 30000);
        return () => clearInterval(memoryInterval);
      }
    }
  }, [reportMetric]);

  return null;
};

export default usePerformanceMonitor;