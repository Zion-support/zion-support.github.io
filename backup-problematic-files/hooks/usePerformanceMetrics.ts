<<<<<<< HEAD


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" |!("performance" in window)) {
      return;
    }
    setIsSupported(true);
    const measurePerformance = () => {
      const navigationEntries =
        window.performance.getEntriesByType("navigation");
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
      const paintEntries = window.performance.getEntriesByType("paint");
      const fcp = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint"
      );
      const lcpEntries = window.performance.getEntriesByType(
        "largest-contentful-paint"
      );
      const lcp = lcpEntries[0] as PerformanceEntry;
      const clsEntries = window.performance.getEntriesByType("layout-shift");
      const cls = clsEntries.reduce((acc, entry) => {
        return acc + (entry as PerformanceEntry & { value: number }).value;
      }, 0);
      const fidEntries = window.performance.getEntriesByType("first-input");
      const fid = fidEntries[0] as PerformanceEventTiming;
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
:hooks/usePerformanceMetrics.ts

main:hooks/usePerformanceMetrics.ts
:backup-problematic-files/hooks/usePerformanceMetrics.ts
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: cls
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
      });
<<<<<<< HEAD

<<<<<<< HEAD
import { useEffect, useState } from 'react',;
import { PerformanceMetrics } from '../types',;
export function usePerformanceMetrics() {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),;
  const [isSupported, setIsSupported] = useState(false),;
  useEffect(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) {;
      return;

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
    }
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  return { metrics, isSupported }
<<<<<<< HEAD

}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
