import { useEffect, useState } from 'react';

interface PerformanceMetrics {
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
      const navigation = (performance as any).getEntriesByType('navigation')[0] as any;
      const paintEntries = (performance as any).getEntriesByType('paint');
      
      const fcp = paintEntries.find((entry: any) => entry.name === 'first-contentful-paint');
      const lcp = (performance as any).getEntriesByType('largest-contentful-paint')[0] as any;
      
      const cls = (performance as any).getEntriesByType('layout-shift').reduce((acc: number, entry: any) => {
        return acc + (entry.value || 0);
      }, 0);

      const fid = (performance as any).getEntriesByType('first-input')[0] as any;

      setMetrics({
        loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0,
      });
    };

    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);

    return () => clearTimeout(timer);
  }, []);

  return { metrics, isSupported };
}