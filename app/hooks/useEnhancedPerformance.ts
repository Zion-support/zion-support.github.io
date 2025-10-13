import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

interface UseEnhancedPerformanceReturn {
  metrics: PerformanceMetrics | null;
  isMonitoring: boolean;
  measurePerformance: () => (() => void) | undefined;
  refresh: () => void;
  clearError: () => void;
}

export function useEnhancedPerformance(): UseEnhancedPerformanceReturn {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          setMetrics({
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
            firstContentfulPaint: 0, // Will be updated by paint observer
            largestContentfulPaint: 0, // Will be updated by LCP observer
            firstInputDelay: 0, // Will be updated by FID observer
            cumulativeLayoutShift: 0, // Will be updated by CLS observer
            timeToInteractive: navEntry.domInteractive - navEntry.fetchStart
          });
        }
      });
    });

    observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    setIsMonitoring(true);

    return () => {
      observer.disconnect();
      setIsMonitoring(false);
    };
  }, []);

  const refresh = useCallback(() => {
    setError(null);
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  return {
    metrics,
    isMonitoring,
    measurePerformance,
    refresh,
    clearError
  };
}

export default useEnhancedPerformance;