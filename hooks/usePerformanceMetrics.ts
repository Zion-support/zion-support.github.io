<<<<<<< HEAD
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
      const navigationEntries =
        window && window.performance.getEntriesByType("navigation");
      const navigation = navigationEntries[0] as PerformanceNavigationTiming;
<<<<<<< HEAD
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
=======
      const paintEntries = window && window.performance.getEntriesByType("paint");

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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const fid = fidEntries[0] as PerformanceEventTiming;
      setMetrics({
<<<<<<< HEAD
        loadTime: navigation.loadEventEnd - navigation.loadEventStart
        firstContentfulPaint: fcp ? fcp.startTime : 0
        largestContentfulPaint: lcp ? lcp.startTime : 0
        cumulativeLayoutShift: cls
        firstInputDelay: fid ? fid.processingStart - fid.startTime : 0
=======
        loadTime: navigation && navigation.loadEventEnd - navigation && navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp && fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp && lcp.startTime : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid && fid.processingStart - fid && fid.startTime : 0,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      });
    }
    // Wait for all performance entries to be available
    const timer = setTimeout(measurePerformance, 1000);
    return () => clearTimeout(timer);
  }, []);
  return { metrics, isSupported }
=======
import { useEffect, useState  } from './react';
import { PerformanceMetrics  } from '../types';
;
export /**
 * usePerformanceMetrics - Function description
 */
function usePerformanceMetrics() {
  const [metrics, set_metrics] = useState < PerformanceMetrics | null>(null);
  const [is_supported, setIsSupported] = useState (false);
;
  useEffect (() => {
    if () {) {
  $2
}
      return;
    }
    setIsSupported (true);
;
    const measure_performance = () =>: any {
      const navigation_entries =;
        window.performance.getEntriesByType ("navigation");
      const navigation = navigation_entries[0] as PerformanceNavigationTiming;
      const paint_entries = window.performance.getEntriesByType ("paint");
;
      const fcp = paint_entries.find (
        (entry) => entry.name === "first - contentful - paint",
      );
      const lcp_entries = window.performance.getEntriesByType (
        "largest - contentful - paint",
      );
      const lcp = lcp_entries[0] as PerformanceEntry;
;
      const cls_entries = window.performance.getEntriesByType ("layout - shift");
      const cls = cls_entries.reduce ((acc, entry) => {
        return acc + (entry as PerformanceEntry & { value: number }).value;
      }, 0);
;
      const fid_entries = window.performance.getEntriesByType ("first - input");
      const fid = fid_entries[0] as PerformanceEventTiming;
;
      set_metrics ({
        load_time: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.start_time : 0,
        largestContentfulPaint: lcp ? lcp.start_time : 0,
        cumulativeLayoutShift: cls,
        firstInputDelay: fid ? fid.processing_start - fid.start_time : 0,
      });
    }
;
    // Wait for all performance entries to be available;
    const timer = set_timeout (measure_performance, 1000);
;
    return () => clear_timeout (timer);
  }, []);
;
  return { metrics, is_supported }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}