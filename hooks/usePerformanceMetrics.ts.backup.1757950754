<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { PerformanceMetrics } from '../types';
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
const paintEntries = window && window.performance.getEntriesByType("paint");
=======

      const paintEntries = window && window.performance.getEntriesByType("paint");

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      const fcp = paintEntries && paintEntries.find(
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
        loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp && fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp && lcp.startTime : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid && fid.processingStart - fid && fid.startTime : 0,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
      });
    }
    setIsSupported(true);
    const measurePerformance = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType('paint');
      const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      const lcp = performance.getEntriesByType('largest-contentful-paint')[0] as PerformanceEntry;
      const cls = performance.getEntriesByType('layout-shift').reduce((acc, entry) => {
        return acc + (entry as any).value
      }, 0);
      const fid = performance.getEntriesByType('first-input')[0] as PerformanceEventTiming;
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
      })
    };
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer)
  }, []);
  return { metrics, isSupported }
}