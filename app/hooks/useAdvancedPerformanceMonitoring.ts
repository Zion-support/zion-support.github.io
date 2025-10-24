import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  navigation: {
    loadTime: number;
    domContentLoaded: number;
    firstPaint: number;
    firstContentfulPaint: number;
  } | null;
}

interface PerformanceMonitoringOptions {
  enableWebVitals?: boolean;
  enableNavigationTiming?: boolean;
  enableResourceTiming?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNetworkMonitoring?: boolean;
  reportInterval?: number;
  onMetricsUpdate?: (metrics: PerformanceMetrics) => void;
}

export const useAdvancedPerformanceMonitoring = (options: PerformanceMonitoringOptions = {}) => {
  const {
    enableWebVitals = true,
    enableNavigationTiming = true,
    enableResourceTiming = false,
    enableMemoryMonitoring = false,
    enableNetworkMonitoring = false,
    reportInterval = 5000,
    onMetricsUpdate
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    navigation: null
  });

  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    metricsRef.current = { ...metricsRef.current, ...newMetrics };
    onMetricsUpdate?.(metricsRef.current);
  }, [onMetricsUpdate]);

  const measureWebVitals = useCallback(() => {
    if (!enableWebVitals || typeof window === 'undefined') return;

    // Load web-vitals library dynamically
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onFID, onTTFB }) => {
      onCLS((metric) => {
        updateMetrics({ cls: metric.value });
      });

      onFCP((metric) => {
        updateMetrics({ fcp: metric.value });
      });

      onLCP((metric) => {
        updateMetrics({ lcp: metric.value });
      });

      onFID((metric) => {
        updateMetrics({ fid: metric.value });
      });

      onTTFB((metric) => {
        updateMetrics({ ttfb: metric.value });
      });
    }).catch((error) => {
      if (process.env.NODE_ENV === 'development') {
        // Log to monitoring service instead of console
        // This could be replaced with a proper logging service
      }
    });
  }, [enableWebVitals, updateMetrics]);

  const measureNavigationTiming = useCallback(() => {
    if (!enableNavigationTiming || typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      const navigationMetrics = {
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        firstPaint: 0,
        firstContentfulPaint: 0
      };

      // Get paint timing
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-paint') {
          navigationMetrics.firstPaint = entry.startTime;
        } else if (entry.name === 'first-contentful-paint') {
          navigationMetrics.firstContentfulPaint = entry.startTime;
        }
      });

      updateMetrics({ navigation: navigationMetrics });
    }
  }, [enableNavigationTiming, updateMetrics]);

  const measureResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const resources = performance.getEntriesByType('resource');
    const resourceMetrics = {
      totalResources: resources.length,
      totalSize: 0,
      slowResources: 0,
      failedResources: 0
    };

    resources.forEach((resource) => {
      const resourceTiming = resource as PerformanceResourceTiming;
      resourceMetrics.totalSize += resourceTiming.transferSize || 0;
      
      if (resourceTiming.duration > 1000) {
        resourceMetrics.slowResources++;
      }
      
      if (resourceTiming.transferSize === 0 && resourceTiming.decodedBodySize > 0) {
        resourceMetrics.failedResources++;
      }
    });

    if (process.env.NODE_ENV === 'development') {
      // Log to monitoring service instead of console
      // This could be replaced with a proper logging service
    }
  }, [enableResourceTiming]);

  const measureMemoryUsage = useCallback(() => {
    if (!enableMemoryMonitoring || typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    const memoryMetrics = {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit
    };

    if (process.env.NODE_ENV === 'development') {
      // Log to monitoring service instead of console
      // This could be replaced with a proper logging service
    }
  }, [enableMemoryMonitoring]);

  const measureNetworkInfo = useCallback(() => {
    if (!enableNetworkMonitoring || typeof window === 'undefined' || !('connection' in navigator)) return;

    const connection = (navigator as any).connection;
    const networkInfo = {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    };

    if (process.env.NODE_ENV === 'development') {
      // Log to monitoring service instead of console
      // This could be replaced with a proper logging service
    }
  }, [enableNetworkMonitoring]);

  const startPerformanceObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            // Log to monitoring service instead of console
            // This could be replaced with a proper logging service
          }
        });
      });

      observer.observe({ entryTypes: ['measure', 'navigation', 'resource', 'paint'] });
      observerRef.current = observer;
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // Log to monitoring service instead of console
        // This could be replaced with a proper logging service
      }
    }
  }, []);

  const startPeriodicMonitoring = useCallback(() => {
    if (reportInterval <= 0) return;

    intervalRef.current = setInterval(() => {
      measureMemoryUsage();
      measureNetworkInfo();
      measureResourceTiming();
    }, reportInterval);
  }, [measureMemoryUsage, measureNetworkInfo, measureResourceTiming, reportInterval]);

  useEffect(() => {
    // Initial measurements
    measureWebVitals();
    measureNavigationTiming();
    measureResourceTiming();
    measureMemoryUsage();
    measureNetworkInfo();

    // Start observers and monitoring
    startPerformanceObserver();
    startPeriodicMonitoring();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [
    measureWebVitals,
    measureNavigationTiming,
    measureResourceTiming,
    measureMemoryUsage,
    measureNetworkInfo,
    startPerformanceObserver,
    startPeriodicMonitoring
  ]);

  const getCurrentMetrics = useCallback(() => metricsRef.current, []);

  const markPerformance = useCallback((name: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.mark(name);
    }
  }, []);

  const measurePerformance = useCallback((name: string, startMark: string, endMark?: string) => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      if (endMark) {
        performance.measure(name, startMark, endMark);
      } else {
        performance.measure(name, startMark);
      }
    }
  }, []);

  return {
    metrics: metricsRef.current,
    getCurrentMetrics,
    markPerformance,
    measurePerformance
  };
};
