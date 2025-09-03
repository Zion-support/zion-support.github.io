import React, { useEffect, useState } from "react";
type PerformanceMetrics = {
  firstContentfulPaintMs?: number;
};
export default function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  useEffect(() => {
    if (typeof window === "undefined" || !("performance" in window)) return;
    const entryHandler = (list: PerformanceObserverEntryList) => {
      for (const entry of list.getEntriesByName("first-contentful-paint")) {
        setMetrics({ firstContentfulPaintMs: Math.round((entry as PerformanceEntry).startTime) });
      }
    };
    try {
      const observer = new PerformanceObserver(entryHandler);
      observer.observe({ type: "paint", buffered: true } as PerformanceObserverInit);
      return () => observer.disconnect();
    } catch {
      // no-op
    }
  }, []);
  if (!metrics.firstContentfulPaintMs) return null;
  return (
    <div className="fixed bottom-2 right-2 text-xs bg-black/60 text-white px-2 py-1 rounded">
      FCP: {metrics.firstContentfulPaintMs} ms
    </div>
  );