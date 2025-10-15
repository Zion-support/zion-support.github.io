import { useEffect, useRef, useCallback, useState } from 'react';

interface PerformanceMetrics {
  cls: number;
  fcp: number;
  lcp: number;
  ttfb: number;
  inp: number;
  fid: number;
}

interface PerformanceData {
  metrics: Partial<PerformanceMetrics>;
  timestamp: number;
  url: string;
  userAgent: string;
}

interface UsePerformanceMonitoringOptions {
  enableWebVitals?: boolean;
  enableMemoryMonitoring?: boolean;
  enableNavigationTiming?: boolean;
  reportInterval?: number;
  onMetricsUpdate?: (data: PerformanceData) => void;
}

export const usePerformanceMonitoring = (options: UsePerformanceMonitoringOptions = {}) => {
  const {
    enableWebVitals = true,
    enableMemoryMonitoring = true,
    enableNavigationTiming = true,
    reportInterval = 30000, // 30 seconds
    onMetricsUpdate
  } = options;

  const [metrics, setMetrics] = useState<Partial<PerformanceMetrics>>({});
  const [isSupported, setIsSupported] = useState(false);
  const metricsRef = useRef<Partial<PerformanceMetrics>>({});
  const observerRef = useRef<PerformanceObserver | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check browser support
  useEffect(() => {
    const supported = 'PerformanceObserver' in window && 'performance' in window;
    setIsSupported(supported);
  }, []);

  // Web Vitals monitoring
  const initializeWebVitals = useCallback(async () => {
    if (!enableWebVitals || !isSupported) return;

    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP, onFID } = await import('web-vitals');
      
      const handleMetric = (metric: { name: string; value: number; delta?: number }) => {
        const metricName = metric.name.toLowerCase() as keyof PerformanceMetrics;
        metricsRef.current[metricName] = metric.value;
        
        setMetrics(prev => ({
          ...prev,
          [metricName]: metric.value
        }));

        // Report metrics
        if (onMetricsUpdate) {
          onMetricsUpdate({
            metrics: metricsRef.current,
            timestamp: Date.now(),
            url: window.location.href,
            userAgent: navigator.userAgent
          });
        }
      };

      onCLS(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
      onINP(handleMetric);
      onFID(handleMetric);
    } catch (error) {
      console.warn('Web Vitals not available:', error);
    }
  }, [enableWebVitals, isSupported, onMetricsUpdate]);

  // Memory monitoring
  const checkMemoryUsage = useCallback(() => {
    if (!enableMemoryMonitoring || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    const memoryData = {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    };

    // Alert if memory usage is high
    if (memoryData.used / memoryData.limit > 0.8) {
      console.warn('High memory usage detected:', memoryData);
    }

    return memoryData;
  }, [enableMemoryMonitoring]);

  // Navigation timing
  const getNavigationTiming = useCallback(() => {
    if (!enableNavigationTiming || !isSupported) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      totalTime: navigation.loadEventEnd - navigation.fetchStart,
      ttfb: navigation.responseStart - navigation.requestStart
    };
  }, [enableNavigationTiming, isSupported]);

  // Performance observer for additional metrics
  const initializePerformanceObserver = useCallback(() => {
    if (!isSupported) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            const timing = {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart
            };

            if (process.env.NODE_ENV === 'development') {
              console.log('Navigation timing:', timing);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
      observerRef.current = observer;
    } catch (error) {
      console.warn('Performance Observer failed:', error);
    }
  }, [isSupported]);

  // Periodic monitoring
  const startPeriodicMonitoring = useCallback(() => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      // Only check memory usage if enabled and supported
      if (enableMemoryMonitoring && 'memory' in performance) {
        checkMemoryUsage();
      }
      
      // Only get navigation timing if enabled and supported
      if (enableNavigationTiming && isSupported) {
        getNavigationTiming();
      }

      if (onMetricsUpdate) {
        onMetricsUpdate({
          metrics: metricsRef.current,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        });
      }
    }, reportInterval);
  }, [enableMemoryMonitoring, enableNavigationTiming, isSupported, checkMemoryUsage, getNavigationTiming, onMetricsUpdate, reportInterval]);

  // Initialize all monitoring
  useEffect(() => {
    if (!isSupported) return;

    initializeWebVitals();
    initializePerformanceObserver();
    startPeriodicMonitoring();

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isSupported, initializeWebVitals, initializePerformanceObserver, startPeriodicMonitoring]);

  // Expose performance data for debugging
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      (window as any).__performanceData = () => ({
        metrics: metricsRef.current,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        memory: checkMemoryUsage(),
        navigationTiming: getNavigationTiming()
      });
    }
  }, [checkMemoryUsage, getNavigationTiming]);

  return {
    metrics,
    isSupported,
    getMemoryUsage: checkMemoryUsage,
    getNavigationTiming,
    isHighMemoryUsage: () => {
      const memory = checkMemoryUsage();
      return memory ? memory.used / memory.limit > 0.8 : false;
    }
  };
};

export default usePerformanceMonitoring;