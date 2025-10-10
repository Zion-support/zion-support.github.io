'use client';

import { useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: {
    used: number;
    total: number;
    limit: number;
  } | null;
}

interface UsePerformanceMonitorReturn {
  metrics: PerformanceMetrics;
  resetMetrics: () => void;
}

export const usePerformanceMonitor = (): UsePerformanceMonitorReturn => {
  const metrics: PerformanceMetrics = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: null
  };

  const resetMetrics = useCallback(() => {
    // Reset metrics by clearing performance entries
    if (typeof window !== 'undefined' && 'performance' in window) {
      performance.clearMarks();
      performance.clearMeasures();
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            metrics.lcp = entry.startTime;
            break;
          case 'first-input':
            metrics.fid = (entry as PerformanceEventTiming).processingStart - entry.startTime;
            break;
          case 'layout-shift':
            metrics.cls = (entry as PerformanceEntry & { value: number }).value;
            break;
          case 'paint':
            if (entry.name === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            break;
          case 'navigation':
            metrics.ttfb = (entry as PerformanceNavigationTiming).responseStart - entry.startTime;
            break;
        }
      });
    });

    try {
      observer.observe({ 
        entryTypes: [
          'largest-contentful-paint', 
          'first-input', 
          'layout-shift', 
          'paint', 
          'navigation'
        ] 
      });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }

    // Monitor memory usage
    const handleMemoryUsage = () => {
      if ((performance as any).memory) {
        const memory = (performance as any).memory;
        metrics.memoryUsage = {
          used: Math.round(memory.usedJSHeapSize / 1024 / 1024),
          total: Math.round(memory.totalJSHeapSize / 1024 / 1024),
          limit: Math.round(memory.jsHeapSizeLimit / 1024 / 1024)
        };
        
        if (metrics.memoryUsage.used > metrics.memoryUsage.limit * 0.8) {
          console.warn('High memory usage detected:', metrics.memoryUsage);
        }
      }
    };

    // Set up monitoring
    const interval = setInterval(handleMemoryUsage, 5000);
    handleMemoryUsage(); // Initial check

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return {
    metrics,
    resetMetrics
  };
};

export default usePerformanceMonitor;