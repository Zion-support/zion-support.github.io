import { useEffect, useCallback, useRef } from 'react';

// Extend PerformanceEntry for FID
interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  target?: Node;
}

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  memoryUsage?: number;
}

export function usePerformanceMonitor() {
  const metricsRef = useRef<PerformanceMetrics>({
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0
  });

  const reportMetrics = useCallback((metrics: PerformanceMetrics) => {
    // Send metrics to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        load_time: metrics.loadTime,
        first_contentful_paint: metrics.firstContentfulPaint,
        largest_contentful_paint: metrics.largestContentfulPaint,
        first_input_delay: metrics.firstInputDelay,
        cumulative_layout_shift: metrics.cumulativeLayoutShift,
        memory_usage: metrics.memoryUsage
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('Performance Metrics:', metrics);
    }
  }, []);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    const firstContentfulPaint = paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0;
    
    // Measure LCP
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      metricsRef.current.largestContentfulPaint = lastEntry.startTime;
    });

    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure FID
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEventTiming;
        metricsRef.current.firstInputDelay = fidEntry.processingStart - fidEntry.startTime;
      });
    });

    fidObserver.observe({ entryTypes: ['first-input'] });

    // Measure CLS
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
      metricsRef.current.cumulativeLayoutShift = clsValue;
    });

    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      metricsRef.current.memoryUsage = memory.usedJSHeapSize;
    }

    // Update metrics
    metricsRef.current.loadTime = loadTime;
    metricsRef.current.firstContentfulPaint = firstContentfulPaint;

    // Report metrics after a delay to ensure all metrics are collected
    setTimeout(() => {
      reportMetrics(metricsRef.current);
    }, 2000);

    // Cleanup observers
    return () => {
      lcpObserver.disconnect();
      fidObserver.disconnect();
      clsObserver.disconnect();
    };
  }, [reportMetrics]);

  const measureCustomMetric = useCallback((name: string, startTime: number) => {
    const endTime = performance.now();
    const duration = endTime - startTime;

    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'custom_performance', {
        metric_name: name,
        duration: duration
      });
    }

    return duration;
  }, []);

  const measureAsyncOperation = useCallback(async <T>(
    name: string,
    operation: () => Promise<T>
  ): Promise<T> => {
    const startTime = performance.now();
    
    try {
      const result = await operation();
      measureCustomMetric(name, startTime);
      return result;
    } catch (error) {
      measureCustomMetric(`${name}_error`, startTime);
      throw error;
    }
  }, [measureCustomMetric]);

  const measureSyncOperation = useCallback(<T>(
    name: string,
    operation: () => T
  ): T => {
    const startTime = performance.now();
    
    try {
      const result = operation();
      measureCustomMetric(name, startTime);
      return result;
    } catch (error) {
      measureCustomMetric(`${name}_error`, startTime);
      throw error;
    }
  }, [measureCustomMetric]);

  const getPerformanceMetrics = useCallback(() => {
    return { ...metricsRef.current };
  }, []);

  const resetMetrics = useCallback(() => {
    metricsRef.current = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0
    };
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  return {
    measureCustomMetric,
    measureAsyncOperation,
    measureSyncOperation,
    getPerformanceMetrics,
    resetMetrics
  };
}