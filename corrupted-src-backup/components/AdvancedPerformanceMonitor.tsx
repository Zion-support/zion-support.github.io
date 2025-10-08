import React, { useEffect, useState } from "react";

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}

export const AdvancedPerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({});
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only run in development
    if (process.env["NODE_ENV"] !== "development") return;

    const observer = new PerformanceObserver((list) => {
      const _entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === "largest-contentful-paint") {
          setMetrics((prev) => ({ ...prev, lcp: entry.startTime }));
        } else if (entry.entryType === "first-input") {
          setMetrics((prev) => ({
            ...prev,
            fid: (entry as any).processingStart - entry.startTime,
          }));
        } else if (
          entry.entryType === "layout-shift" &&
          !(entry as any).hadRecentInput
        ) {
          setMetrics((prev) => ({
            ...prev,
            cls: (prev.cls || 0) + (entry as any).value,
          }));
        }
      });
    });

    observer.observe({
      entryTypes: ["largest-contentful-paint", "first-input", "layout-shift"],
    });

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        setIsVisible((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      observer.disconnect();
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        background: "rgba(0, 0, 0, 0.8)",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        fontSize: "12px",
        zIndex: 9999,
        fontFamily: "monospace",
      }}
    >
      <h4>Performance Metrics</h4>
      <div>LCP: {metrics.lcp ? metrics.lcp.toFixed(2) + "ms" : "N/A"}</div>
      <div>FID: {metrics.fid ? metrics.fid.toFixed(2) + "ms" : "N/A"}</div>
      <div>CLS: {metrics.cls ? metrics.cls.toFixed(3) : "N/A"}</div>
      <div style={{ marginTop: "10px", fontSize: "10px" }}>
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default AdvancedPerformanceMonitor;
