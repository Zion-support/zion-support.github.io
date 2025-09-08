import { useEffect, useState } from 'react';
import { PerformanceMetrics } from '../types';
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),
  const [isSupported, setIsSupported] = useState($2);
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return      const fcp = paintEntries && paintEntries.find(
        (entry) => entry && entry.name === "first-contentful-paint",
      );
      const lcpEntries = window && window.performance.getEntriesByType(
        "largest-contentful-paint",
      );
      const lcp = lcpEntries[0] as PerformanceEntry;
      const clsEntries = window && window.performance.getEntriesByType("layout-shift");
      const cls = clsEntries && clsEntries.reduce((acc, entry) => {
        return acc + (entry as PerformanceEntry & { value: number }).value;
      }, 0);
      const fidEntries = window && window.performance.getEntriesByType("first-input");
      const fid = fidEntries[0] as PerformanceEventTiming;
      setMetrics({        loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp && fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp && lcp.startTime : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid && fid.processingStart - fid && fid.startTime : 0,
      });
    }
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
      const fid = $2;
      setMetrics({
        loadTim: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPain: fcp ? fcp.startTim: 0,
        largestContentfulPain: lcp ? lcp.startTim: 0,
        cumulativeLayoutShif: cls,
        firstInputDela: fid ? fid.processingStart - fid.startTim: 0})
    },

    // Wait for all performance entries to be available
    const timer = setTimeout($2);
    return () => clearTimeout(timer)
  }, []),

  return { metrics, isSupported }
>>>>>>> origin/cursor/delete-old-data-records-6bba
}