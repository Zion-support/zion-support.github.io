import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

interface UsePerformanceMonitoringOptions {
  enableReporting?: boolean;
  enableLongTaskMonitoring?: boolean;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const usePerformanceMonitoring = (options: UsePerformanceMonitoringOptions = {}) => {
  const {
    enableReporting = true,
    enableLongTaskMonitoring = true,
    onMetricsUpdate
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({});
  const observersRef = useRef<PerformanceObserver[]>([]);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    metricsRef.current = { ...metricsRef.current, ...newMetrics };
    onMetricsUpdate?.(metricsRef.current);
  }, [onMetricsUpdate]);

  const measureWebVitals = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Measure First Contentful Paint (FCP)
    const fcpEntry = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcpEntry) {
      updateMetrics({ fcp: fcpEntry.startTime });
    }

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      updateMetrics({ lcp: lastEntry.startTime });
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    observersRef.current.push(lcpObserver);

    // Measure First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const processingStart = (entry as PerformanceEventTiming).processingStart;
        if (processingStart) {
          updateMetrics({ fid: processingStart - entry.startTime });
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    observersRef.current.push(fidObserver);

    // Measure Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
        if (!layoutShiftEntry.hadRecentInput && layoutShiftEntry.value) {
          clsValue += layoutShiftEntry.value;
        }
      });
      updateMetrics({ cls: clsValue });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    observersRef.current.push(clsObserver);

    // Measure Time to First Byte (TTFB)
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      updateMetrics({ ttfb: navigationEntry.responseStart - navigationEntry.requestStart });
    }
  }, [updateMetrics]);

  const measureLongTasks = useCallback(() => {
    if (!enableLongTaskMonitoring || typeof window === 'undefined') return;

    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
console.warn(`Long task detected: ${entry.duration}ms`, entry);
        }
      });
    });

    try {
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      observersRef.current.push(longTaskObserver);
    } catch {
      // Long task API not supported
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
console.warn('Long task monitoring not supported');
      }
    }
  }, [enableLongTaskMonitoring]);

  const reportMetrics = useCallback(() => {
    if (!enableReporting || typeof window === 'undefined') return;

    const metrics = metricsRef.current;
    
    // Report to analytics
    if ('gtag' in window) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (value !== undefined) {
          const gtag = (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag;
          gtag('event', 'web_vitals', {
            event_category: 'Performance',
            event_label: key.toUpperCase(),
            value: Math.round(value)
          });
        }
      });
    }

    // Report to console in development
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
console.log('Performance Metrics:', metrics);
    }
  }, [enableReporting]);

  useEffect(() => {
    measureWebVitals();
    measureLongTasks();

    // Report metrics after page load
    const reportTimer = setTimeout(reportMetrics, 2000);

    return () => {
      clearTimeout(reportTimer);
      observersRef.current.forEach(observer => observer.disconnect());
      observersRef.current = [];
    };
  }, [measureWebVitals, measureLongTasks, reportMetrics]);

  return {
    metrics: metricsRef.current,
    updateMetrics
  };
};