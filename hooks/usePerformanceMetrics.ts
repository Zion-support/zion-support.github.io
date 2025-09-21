import { useEffect, useState } from 'react';

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return;
    }

    setIsSupported(true);

    const measurePerformance = () => {
      try {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        const paintEntries = performance.getEntriesByType('paint');
        const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
        const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) => {
          return acc + (entry as any).value;
        }, 0);
        const fid = performance.getEntriesByType('first-input')[0] as PerformanceEventTiming;

        setMetrics({
          loadTime: navigation.loadEventEnd - navigation.loadEventStart,
          firstContentfulPaint: fcp ? fcp.startTime : 0,
          largestContentfulPaint: lcp ? lcp.startTime : 0,
          cumulativeLayoutShift: cls,
          firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
        });
      } catch (error) {
        console.error('Error measuring performance:', error);
      }
    };

    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);

  return { metrics, isSupported };
}
// usePerformanceMetrics hook module
export {};
