import React, { useEffect } from "react";

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

const PerformanceMonitor: React.FC = () => {
  useEffect(() => {
    const metrics: PerformanceMetrics = {
      lcp: null,
      fid: null,
      cls: null,
      fcp: null,
      ttfb: null,
    };

    // Measure Core Web Vitals
    const measureWebVitals = () => {
      // LCP - Largest Contentful Paint
      if ("PerformanceObserver" in window) {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          metrics.lcp = lastEntry.startTime;
        });

        try {
          lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
        } catch (e) {}

        // FID - First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            metrics.fid = entry.processingStart - entry.startTime;
          });
        });

        try {
          fidObserver.observe({ entryTypes: ["first-input"] });
        } catch (e) {}

        // CLS - Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          metrics.cls = clsValue;
        });

        try {
          clsObserver.observe({ entryTypes: ["layout-shift"] });
        } catch (e) {}

        // FCP - First Contentful Paint
        const fcpObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.name === "first-contentful-paint") {
              metrics.fcp = entry.startTime;
            }
          });
        });

        try {
          fcpObserver.observe({ entryTypes: ["paint"] });
        } catch (e) {}
      }

      // TTFB - Time to First Byte
      if ("performance" in window && "timing" in performance) {
        const timing = performance.timing;
        metrics.ttfb = timing.responseStart - timing.navigationStart;
      }

      // Send metrics to analytics after page load
      window.addEventListener("load", () => {
        setTimeout(() => {
          // Send to Google Analytics if available
          if (typeof window !== "undefined" && (window as any).gtag) {
            if (metrics.lcp !== null) {
              (window as any).gtag("event", "web_vitals", {
                event_category: "Performance",
                event_label: "LCP",
                value: Math.round(metrics.lcp),
              });
            }
            if (metrics.fid !== null) {
              (window as any).gtag("event", "web_vitals", {
                event_category: "Performance",
                event_label: "FID",
                value: Math.round(metrics.fid),
              });
            }
            if (metrics.cls !== null) {
              (window as any).gtag("event", "web_vitals", {
                event_category: "Performance",
                event_label: "CLS",
                value: Math.round(metrics.cls * 1000) / 1000,
              });
            }
          }

          // Log metrics for debugging
        }, 2000);
      });
    };

    measureWebVitals();

    // Monitor resource loading
    const monitorResources = () => {
      if ("PerformanceObserver" in window) {
        const resourceObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 1000) {
              // Log slow resources
            }
          });
        });

        try {
          resourceObserver.observe({ entryTypes: ["resource"] });
        } catch (e) {}
      }
    };

    monitorResources();

    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null;
};

export default PerformanceMonitor;
