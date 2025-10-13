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
  metrics: PerformanceMetrics | null;
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  resetMetrics: () => void;
}

export function usePerformanceMonitor(): UsePerformanceMonitorReturn {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const updateMetrics = useCallback((newMetrics: Partial<PerformanceMetrics>) => {
    setMetrics(prev => prev ? { ...prev, ...newMetrics } : newMetrics as PerformanceMetrics);
  }, []);

  const startMonitoring = useCallback(() => {
    if (typeof window === 'undefined' || observerRef.current) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();

      entries.forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            updateMetrics({ firstContentfulPaint: entry.startTime });
          }
        } else if (entry.entryType === 'largest-contentful-paint') {
          updateMetrics({ largestContentfulPaint: entry.startTime });
        } else if (entry.entryType === 'first-input') {
          updateMetrics({ firstInputDelay: (entry as any).processingStart - entry.startTime });
        } else if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            updateMetrics({
              cumulativeLayoutShift: (metrics?.cumulativeLayoutShift || 0) + layoutShiftEntry.value
            });
          }
        }
      });
    });

    try {
      observer.observe({
        entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift']
      });
      observerRef.current = observer;
      setIsMonitoring(true);
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }, [updateMetrics, metrics?.cumulativeLayoutShift]);

  const stopMonitoring = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
      setIsMonitoring(false);
    }
  }, []);

  const resetMetrics = useCallback(() => {
    setMetrics({
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
      timeToInteractive: 0
    });
  }, []);

  useEffect(() => {
    startMonitoring();
    return stopMonitoring;
  }, [startMonitoring, stopMonitoring]);

  return {
    metrics,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    resetMetrics
  };
}

export default usePerformanceMonitor;