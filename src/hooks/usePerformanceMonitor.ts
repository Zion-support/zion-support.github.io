import { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isMonitoring, setIsMonitoring] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "largest-contentful-paint") {
          setMetrics((prev) =>
            prev
              ? { ...prev, lcp: entry.startTime }
              : ({ lcp: entry.startTime } as PerformanceMetrics),
          );
        }
        if (entry.entryType === "first-input") {
          setMetrics((prev) =>
            prev
              ? {
                  ...prev,
                  fid: (entry as unknown).processingStart - entry.startTime,
                }
              : ({
                  fid: (entry as unknown).processingStart - entry.startTime,
                } as PerformanceMetrics),
          );
        }
        if (entry.entryType === "layout-shift") {
          setMetrics((prev) =>
            prev
              ? { ...prev, cls: (prev?.cls || 0) + ((entry as unknown).value || 0) }
              : ({ cls: (entry as unknown).value || 0 } as PerformanceMetrics),
          );
        }
      });
    });

    observer.observe({
      entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
    });

    // Measure FCP
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(
        (entry) => entry.name === "first-contentful-paint",
      );
      if (fcpEntry) {
        setMetrics((prev) =>
          prev
            ? { ...prev, fcp: fcpEntry.startTime }
            : ({ fcp: fcpEntry.startTime } as PerformanceMetrics),
        );
      }
    });
    fcpObserver.observe({ entryTypes: ["paint"] });

    setIsMonitoring(true);

    return () => {
      observer.disconnect();
      fcpObserver.disconnect();
    };
  }, []);

  return { metrics, isMonitoring };
};
