<<<<<<< HEAD

const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);


=======
import { useEffect, useState } from "react";
import { PerformanceMetrics } from "../types";
export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isSupported, setIsSupported] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" |!("performance" in window)) {
      return;
    }
    setIsSupported(true);
    const measurePerformance = () => {
>>>>>>> origin/cursor/delete-old-data-records-6bba
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







=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: cls
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
      });
<<<<<<< HEAD



=======
import { useEffect, useState } from 'react',;
import { PerformanceMetrics } from '../types',;
export function usePerformanceMetrics() {;
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null),;
  const [isSupported, setIsSupported] = useState(false),;
  useEffect(() => {;
    if (typeof window === 'undefined' || !('performance' in window)) {;
      return;
>>>>>>> origin/cursor/delete-old-data-records-6bba
    }
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
<<<<<<< HEAD

  return { metrics, isSupported }


=======
  return { metrics, isSupported }
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
