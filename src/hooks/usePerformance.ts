import { useEffect, useRef, useCallback } from 'react';
import { PerformanceMonitor, debounce, throttle } from '../utils/performance';

/**
 * Hook for performance monitoring and optimization
 */
export function usePerformance() {
  const monitor = PerformanceMonitor.getInstance();
  const observerRef = useRef<PerformanceObserver | null>(null);

  // Monitor Core Web Vitals
  useEffect(() => {
    if ('PerformanceObserver' in window) {
      observerRef.current = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            console.log('FID:', (entry as any).processingStart - entry.startTime);
          } else if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        });
      });

      try {
        observerRef.current.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported:', e);
      }
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Debounced function creator
  const createDebounced = useCallback(
    <T extends (...args: any[]) => any>(func: T, delay: number) => {
      return debounce(func, delay);
    },
    []
  );

  // Throttled function creator
  const createThrottled = useCallback(
    <T extends (...args: any[]) => any>(func: T, delay: number) => {
      return throttle(func, delay);
    },
    []
  );

  // Start timing
  const startTiming = useCallback((name: string) => {
    monitor.startTiming(name);
  }, [monitor]);

  // End timing
  const endTiming = useCallback((name: string) => {
    return monitor.endTiming(name);
  }, [monitor]);

  return {
    startTiming,
    endTiming,
    createDebounced,
    createThrottled,
    getMetrics: monitor.getMetrics.bind(monitor),
  };
}