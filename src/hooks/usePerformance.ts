import { useEffect, useRef, useState } from "react";

interface PerformanceMemory {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

interface PerformanceWithMemory extends Performance {
  memory?: PerformanceMemory;
}

interface PerformanceMetrics {
  renderTime: number | null;
  mountTime: number | null;
  updateCount: number;
  memoryUsage: number | null;
}

/**
 * Hook to monitor component performance
 */
export const usePerformance = (componentName: string) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    renderTime: null,
    mountTime: null,
    updateCount: 0,
    memoryUsage: null,
  });

  const renderStartTime = useRef<number>(0);
  const mountStartTime = useRef<number>(0);
  const updateCount = useRef<number>(0);

  useEffect(() => {
    // Mark mount start
    mountStartTime.current = performance.now();
    performance.mark(`${componentName}-mount-start`);

    return () => {
      // Measure mount time on unmount
      performance.mark(`${componentName}-mount-end`);
      performance.measure(
        `${componentName}-mount`,
        `${componentName}-mount-start`,
        `${componentName}-mount-end`,
      );
      const measure = performance.getEntriesByName(`${componentName}-mount`)[0];
      const mountTime = measure ? measure.duration : 0;
      setMetrics((prev) => ({ ...prev, mountTime }));
    };
  }, [componentName]);

  useEffect(() => {
    // Track updates
    updateCount.current += 1;
    setMetrics((prev) => ({ ...prev, updateCount: updateCount.current }));
  }, [setMetrics]);

  const startRender = () => {
    renderStartTime.current = performance.now();
    performance.mark(`${componentName}-render-start`);
  };

  const endRender = () => {
    performance.mark(`${componentName}-render-end`);
    performance.measure(
      `${componentName}-render`,
      `${componentName}-render-start`,
      `${componentName}-render-end`,
    );
    const measure = performance.getEntriesByName(`${componentName}-render`)[0];
    const renderTime = measure ? measure.duration : 0;
    setMetrics((prev) => ({ ...prev, renderTime }));
  };

  const getMemoryUsage = () => {
    if (
      "memory" in performance &&
      (performance as PerformanceWithMemory).memory
    ) {
      const memory = (performance as PerformanceWithMemory).memory!;
      return {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      };
    }
    return null;
  };

  const updateMemoryUsage = () => {
    const memory = getMemoryUsage();
    if (memory) {
      setMetrics((prev) => ({ ...prev, memoryUsage: memory.used }));
    }
  };

  return {
    metrics,
    startRender,
    endRender,
    updateMemoryUsage,
    getMemoryUsage,
  };
};

/**
 * Hook to monitor page load performance
 */
export const usePagePerformance = () => {
  const [pageMetrics, setPageMetrics] = useState({
    loadTime: null as number | null,
    domContentLoaded: null as number | null,
    firstContentfulPaint: null as number | null,
    largestContentfulPaint: null as number | null,
  });

  useEffect(() => {
    const updateMetrics = () => {
      if (typeof window === "undefined" || !window.performance) return;

      const navigation = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        setPageMetrics({
          loadTime: navigation.loadEventEnd - navigation.fetchStart,
          domContentLoaded:
            navigation.domContentLoadedEventEnd - navigation.fetchStart,
          firstContentfulPaint: null,
          largestContentfulPaint: null,
        });
      }

      // Get paint metrics
      const paintEntries = performance.getEntriesByType("paint");
      const fcpEntry = paintEntries.find(
        (entry) => entry.name === "first-contentful-paint",
      );
      if (fcpEntry) {
        setPageMetrics((prev) => ({
          ...prev,
          firstContentfulPaint: fcpEntry.startTime,
        }));
      }

      // Get LCP
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        setPageMetrics((prev) => ({
          ...prev,
          largestContentfulPaint: lastEntry.startTime,
        }));
      });

      observer.observe({ entryTypes: ["largest-contentful-paint"] });

      return () => observer.disconnect();
    };

    // Wait for page load
    if (document.readyState === "complete") {
      updateMetrics();
    } else {
      window.addEventListener("load", updateMetrics);
      return () => window.removeEventListener("load", updateMetrics);
    }
  }, []);

  return pageMetrics;
};

/**
 * Hook to track user interactions for performance insights
 */
export const useInteractionTracking = () => {
  const [interactions, setInteractions] = useState({
    clicks: 0,
    scrolls: 0,
    keyPresses: 0,
    touches: 0,
  });

  useEffect(() => {
    const trackClick = () =>
      setInteractions((prev) => ({ ...prev, clicks: prev.clicks + 1 }));
    const trackScroll = () =>
      setInteractions((prev) => ({ ...prev, scrolls: prev.scrolls + 1 }));
    const trackKeyPress = () =>
      setInteractions((prev) => ({ ...prev, keyPresses: prev.keyPresses + 1 }));
    const trackTouch = () =>
      setInteractions((prev) => ({ ...prev, touches: prev.touches + 1 }));

    document.addEventListener("click", trackClick);
    document.addEventListener("scroll", trackScroll, { passive: true });
    document.addEventListener("keydown", trackKeyPress);
    document.addEventListener("touchstart", trackTouch, { passive: true });

    return () => {
      document.removeEventListener("click", trackClick);
      document.removeEventListener("scroll", trackScroll);
      document.removeEventListener("keydown", trackKeyPress);
      document.removeEventListener("touchstart", trackTouch);
    };
  }, []);

  return interactions;
};
