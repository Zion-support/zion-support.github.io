import { useState, useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface UsePerformanceMonitorReturn {
  metrics: PerformanceMetrics;
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  resetMetrics: () => void;
}

export function usePerformanceMonitor(): UsePerformanceMonitorReturn {
  const [isMonitoring, setIsMonitoring] = useState(false);
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToInteractive: 0
  });

  const [metrics, setMetrics] = useState<PerformanceMetrics>(metricsRef.current);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const updateMetrics = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      metricsRef.current.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    }

    // Get Core Web Vitals
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    if (fcpEntry) {
      metricsRef.current.firstContentfulPaint = fcpEntry.startTime;
    }

    // LCP would need to be measured with a PerformanceObserver
    const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
    if (lcpEntries.length > 0) {
      metricsRef.current.largestContentfulPaint = lcpEntries[lcpEntries.length - 1].startTime;
    }

    setMetrics({ ...metricsRef.current });
  }, []);

  const startMonitoring = useCallback(() => {
    if (typeof window === 'undefined' || isMonitoring) return;

    setIsMonitoring(true);

    // Monitor LCP
    if ('PerformanceObserver' in window) {
      try {
        observerRef.current = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metricsRef.current.largestContentfulPaint = lastEntry.startTime;
          setMetrics({ ...metricsRef.current });
        });
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('PerformanceObserver not supported:', error);
      }
    }

    // Monitor FID
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            metricsRef.current.firstInputDelay = entry.processingStart - entry.startTime;
            setMetrics({ ...metricsRef.current });
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID monitoring not supported:', error);
      }
    }

    // Monitor CLS
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          metricsRef.current.cumulativeLayoutShift = clsValue;
          setMetrics({ ...metricsRef.current });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS monitoring not supported:', error);
      }
    }

    updateMetrics();
  }, [isMonitoring, updateMetrics]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
  }, []);

  const resetMetrics = useCallback(() => {
    metricsRef.current = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0
    };
    setMetrics({ ...metricsRef.current });
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      startMonitoring();
    }

    return () => {
      stopMonitoring();
    };
  }, [isMonitoring, startMonitoring, stopMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    resetMetrics
  };
}

export default usePerformanceMonitor;