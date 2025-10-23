import { useState, useEffect } from "react";

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
}

export const usePerformanceMetrics = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === "undefined") return;

      const navigation = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;
      const paintEntries = performance.getEntriesByType("paint");

      const fcp = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint",
      );
      const lcp = performance.getEntriesByType("largest-contentful-paint")[0];
      const cls = performance.getEntriesByType("layout-shift")[0];
      const fid = performance.getEntriesByType("first-input")[0];

      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp ? fcp.startTime : 0,
        largestContentfulPaint: lcp ? lcp.startTime : 0,
        cumulativeLayoutShift: cls
          ? (cls as unknown as { value: number }).value
          : 0,
        firstInputDelay: fid
          ? (fid as unknown as { processingStart: number }).processingStart -
            fid.startTime
          : 0,
      });
    };

    // Measure after page load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    return () => {
      window.removeEventListener("load", measurePerformance);
    };
  }, []);

  return metrics;
};
