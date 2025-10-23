<<<<<<< HEAD
"use client";
import { useCallback, useEffect, useState, useRef } from "react";
interface UsePerformanceMonitorOptions {
  enabled?: boolean;
  threshold?: number;
  measureMemoryUsage?: boolean;
}

interface PerformanceData {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
}

export const usePerformanceMonitor = (
  options: UsePerformanceMonitorOptions = {},
) => {
  const [metrics, setMetrics] = useState<PerformanceData>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
  });

  const [isMonitoringFPS, setIsMonitoringFPS] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== "undefined" && "memory" in performance) {
      const memory = (performance as { memory?: { usedJSHeapSize: number } })
        .memory;
      if (memory) {
        setMetrics((prev) => ({
          ...prev,
          memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
        }));
      }
    }
  }, []);

  const init = useCallback(() => {
    if (options.enabled !== false) {
      setIsMonitoringFPS(true);
      measureMemoryUsage();
=======
import { useEffect, useCallback } from "react";

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export const usePerformanceMonitor = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === "undefined" || !("performance" in window)) {
      return null;
    }

    const navigation = performance.getEntriesByType(
      "navigation",
    )[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType("paint");

    const metrics: PerformanceMetrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint:
        paintEntries.find((entry) => entry.name === "first-contentful-paint")
          ?.startTime || 0,
      largestContentfulPaint: 0,
      firstInputDelay: 0,
      cumulativeLayoutShift: 0,
    };

    // Measure LCP
    if ("PerformanceObserver" in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        metrics.largestContentfulPaint = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
    }

    // Measure FID
    if ("PerformanceObserver" in window) {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          metrics.firstInputDelay = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });
    }

    // Measure CLS
    if ("PerformanceObserver" in window) {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.cumulativeLayoutShift = clsValue;
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    }

    return metrics;
  }, []);

  const logPerformanceMetrics = useCallback(() => {
    const metrics = measurePerformance();
    if (metrics) {
      if (process.env.NODE_ENV === "development") {
        // console.log('Performance Metrics:', {
        //   'Load Time': `${metrics.loadTime.toFixed(2)}ms`,
        //   'First Contentful Paint': `${metrics.firstContentfulPaint.toFixed(2)}ms`,
        //   'Largest Contentful Paint': `${metrics.largestContentfulPaint.toFixed(2)}ms`,
        //   'First Input Delay': `${metrics.firstInputDelay.toFixed(2)}ms`,
        //   'Cumulative Layout Shift': metrics.cumulativeLayoutShift.toFixed(4)
        // });
      }
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
    }
  }, [options.enabled, measureMemoryUsage]);

  useEffect(() => {
    if (!isMonitoringFPS) return;

    const countFrames = () => {
      frameCountRef.current++;
      const currentTime = performance.now();

      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round(
          (frameCountRef.current * 1000) / (currentTime - lastTimeRef.current),
        );
        setMetrics((prev) => ({
          ...prev,
          fps,
        }));
        frameCountRef.current = 0;
        lastTimeRef.current = currentTime;
      }
      requestAnimationFrame(countFrames);
    };

    requestAnimationFrame(countFrames);
  }, [isMonitoringFPS]);

  useEffect(() => {
    if (options.measureMemoryUsage) {
      measureMemoryUsage();
    }
  }, [measureMemoryUsage, options.measureMemoryUsage]);

  // Monitor Core Web Vitals
  useEffect(() => {
    if (typeof window === "undefined") return;

    const monitorWebVitals = () => {
      if ("performance" in window) {
        const navigation = performance.getEntriesByType(
          "navigation",
        )[0] as PerformanceNavigationTiming;
        if (navigation) {
          const loadTime = navigation.loadEventEnd - navigation.loadEventStart;
          setMetrics((prev) => ({
            ...prev,
            loadTime,
          }));
        }
      }
    };

    // Run monitoring after page load
    if (document.readyState === "complete") {
      monitorWebVitals();
    } else {
      window.addEventListener("load", monitorWebVitals);
    }

    return () => {
      window.removeEventListener("load", monitorWebVitals);
    };
  }, []);

  return {
<<<<<<< HEAD
    metrics,
    setMetrics,
    isMonitoringFPS,
    setIsMonitoringFPS,
    measureMemoryUsage,
    init,
  };
};

export default usePerformanceMonitor;
=======
    measurePerformance,
    logPerformanceMetrics,
  };
};
>>>>>>> 2edfbde844889cb288bd5d222501597528dc3630
