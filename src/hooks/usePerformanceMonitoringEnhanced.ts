import { useState, useEffect, useCallback, useRef } from "react";

interface EnhancedPerformanceEntry {
  name: string;
  duration: number;
  startTime: number;
  timestamp: number;
  type: string;
  size?: number;
  url?: string;
}

interface PerformanceMetrics {
  totalEntries: number;
  averageDuration: number;
  slowestEntry: EnhancedPerformanceEntry | null;
  fastestEntry: EnhancedPerformanceEntry | null;
  memoryUsage: number;
  fps: number;
}

interface UsePerformanceMonitoringEnhancedReturn {
  entries: EnhancedPerformanceEntry[];
  metrics: PerformanceMetrics;
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  clearEntries: () => void;
  getEntriesByType: (type: string) => EnhancedPerformanceEntry[];
  getPerformanceReport: () => string;
}

export const usePerformanceMonitoringEnhanced =
  (): UsePerformanceMonitoringEnhancedReturn => {
    const [entries, setEntries] = useState<EnhancedPerformanceEntry[]>([]);
    const [isMonitoring, setIsMonitoring] = useState(false);
    const observerRef = useRef<PerformanceObserver | null>(null);
    const fpsRef = useRef<number>(0);
    const frameCountRef = useRef<number>(0);
    const lastTimeRef = useRef<number>(0);

    const addEntry = useCallback((entry: EnhancedPerformanceEntry) => {
      setEntries((prev) => [...prev, entry].slice(-200)); // Keep last 200 entries
    }, []);

    const measureFPS = useCallback(() => {
      const now = performance.now();
      frameCountRef.current++;

      if (now - lastTimeRef.current >= 1000) {
        fpsRef.current = Math.round(
          (frameCountRef.current * 1000) / (now - lastTimeRef.current),
        );
        frameCountRef.current = 0;
        lastTimeRef.current = now;
      }

      requestAnimationFrame(measureFPS);
    }, []);

    const startMonitoring = useCallback(() => {
      if (typeof window === "undefined" || !("PerformanceObserver" in window))
        return;

      setIsMonitoring(true);
      measureFPS();

      try {
        const observer = new PerformanceObserver((list) => {
          const newEntries = list.getEntries().map((entry) => ({
            name: entry.name,
            duration: entry.duration,
            startTime: entry.startTime,
            timestamp: Date.now(),
            type: entry.entryType,
            size: (entry as any).transferSize || (entry as any).encodedBodySize,
            url: (entry as any).name,
          }));

          newEntries.forEach(addEntry);
        });

        // Observe all available entry types
        observer.observe({
          entryTypes: [
            "measure",
            "navigation",
            "resource",
            "paint",
            "largest-contentful-paint",
            "first-input",
            "layout-shift",
            "longtask",
          ],
        });
        observerRef.current = observer;
      } catch (error) {
        console.warn(
          "Enhanced performance monitoring not fully supported:",
          error,
        );
      }
    }, [addEntry, measureFPS]);

    const stopMonitoring = useCallback(() => {
      setIsMonitoring(false);

      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    }, []);

    const clearEntries = useCallback(() => {
      setEntries([]);
    }, []);

    const getEntriesByType = useCallback(
      (type: string) => {
        return entries.filter((entry) => entry.type === type);
      },
      [entries],
    );

    const getPerformanceReport = useCallback(() => {
      if (entries.length === 0) return "No performance data available";

      const totalDuration = entries.reduce(
        (sum, entry) => sum + entry.duration,
        0,
      );
      const averageDuration = totalDuration / entries.length;
      const slowestEntry = entries.reduce(
        (max, entry) => (entry.duration > max.duration ? entry : max),
        entries[0],
      );
      const fastestEntry = entries.reduce(
        (min, entry) => (entry.duration < min.duration ? entry : min),
        entries[0],
      );

      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      return `
Performance Report:
- Total Entries: ${entries.length}
- Average Duration: ${averageDuration.toFixed(2)}ms
- Slowest Entry: ${slowestEntry?.name} (${slowestEntry?.duration.toFixed(2)}ms)
- Fastest Entry: ${fastestEntry?.name} (${fastestEntry?.duration.toFixed(2)}ms)
- Memory Usage: ${(memoryUsage / 1024 / 1024).toFixed(2)}MB
- FPS: ${fpsRef.current}
    `.trim();
    }, [entries]);

    const metrics: PerformanceMetrics = {
      totalEntries: entries.length,
      averageDuration:
        entries.length > 0
          ? entries.reduce((sum, entry) => sum + entry.duration, 0) /
            entries.length
          : 0,
      slowestEntry:
        entries.length > 0
          ? entries.reduce(
              (max, entry) => (entry.duration > max.duration ? entry : max),
              entries[0],
            )
          : null,
      fastestEntry:
        entries.length > 0
          ? entries.reduce(
              (min, entry) => (entry.duration < min.duration ? entry : min),
              entries[0],
            )
          : null,
      memoryUsage: (performance as any).memory?.usedJSHeapSize || 0,
      fps: fpsRef.current,
    };

    useEffect(() => {
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }, []);

    return {
      entries,
      metrics,
      isMonitoring,
      startMonitoring,
      stopMonitoring,
      clearEntries,
      getEntriesByType,
      getPerformanceReport,
    };
  };
