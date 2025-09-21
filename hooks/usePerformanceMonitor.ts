import { useEffect, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
        const fid = performance.getEntriesByType('first-input')[0] as PerformanceEventTiming;

        setMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
        });
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);

  return metrics;
}