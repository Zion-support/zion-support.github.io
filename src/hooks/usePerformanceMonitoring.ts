import { useState, useEffect, useCallback, useRef } from "react";

interface PerformanceEntry {
  name: string;
  duration: number;
  startTime: number;
  timestamp: number;
}

interface UsePerformanceMonitoringReturn {
  entries: PerformanceEntry[];
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  clearEntries: () => void;
  getAverageDuration: (name?: string) => number;
  getSlowestEntries: (limit?: number) => PerformanceEntry[];
}

export const usePerformanceMonitoring = (): UsePerformanceMonitoringReturn => {
  const [entries, setEntries] = useState<PerformanceEntry[]>([]);
  const [isMonitoring, setIsMonitoring] = useState(false);
  const observerRef = useRef<PerformanceObserver | null>(null);

  const addEntry = useCallback((entry: PerformanceEntry) => {
    setEntries((prev) => [...prev, entry].slice(-100)); // Keep last 100 entries
  }, []);

  const startMonitoring = useCallback(() => {
    if (typeof window === "undefined" || !("PerformanceObserver" in window))
      return;

    setIsMonitoring(true);

    try {
      const observer = new PerformanceObserver((list) => {
        const newEntries = list.getEntries().map((entry) => ({
          name: entry.name,
          duration: entry.duration,
          startTime: entry.startTime,
          timestamp: Date.now(),
        }));

        newEntries.forEach(addEntry);
      });

      // Observe different types of performance entries
      observer.observe({
        entryTypes: ["measure", "navigation", "resource", "paint"],
      });
      observerRef.current = observer;
    } catch (error) {
      console.warn("Performance monitoring not supported:", error);
    }
  }, [addEntry]);

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

  const getAverageDuration = useCallback(
    (name?: string) => {
      const filteredEntries = name
        ? entries.filter((entry) => entry.name === name)
        : entries;

      if (filteredEntries.length === 0) return 0;

      const totalDuration = filteredEntries.reduce(
        (sum, entry) => sum + entry.duration,
        0,
      );
      return totalDuration / filteredEntries.length;
    },
    [entries],
  );

  const getSlowestEntries = useCallback(
    (limit = 10) => {
      return [...entries]
        .sort((a, b) => b.duration - a.duration)
        .slice(0, limit);
    },
    [entries],
  );

  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return {
    entries,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    clearEntries,
    getAverageDuration,
    getSlowestEntries,
  };
};
