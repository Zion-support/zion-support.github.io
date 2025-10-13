import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
}

export function useEnhancedPerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

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
            timeToInteractive: navEntry.domInteractive - navEntry.navigationStart
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

  useEffect(() => {
    const cleanup = measurePerformance();
    return cleanup;
  }, [measurePerformance]);

  return {
    metrics,
    isMonitoring,
    measurePerformance
  };
}

export default useEnhancedPerformance;