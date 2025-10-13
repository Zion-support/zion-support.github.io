import { useState, useEffect, useCallback } from "react";

interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

interface UsePerformanceReturn {
  performanceData: PerformanceData;
  isMonitoring: boolean;
  startMonitoring: () => void;
  stopMonitoring: () => void;
  getPerformanceScore: () => number;
}

export const usePerformance = (): UsePerformanceReturn => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0,
  });
  const [isMonitoring, setIsMonitoring] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === "undefined") return;

    const startTime = performance.now();

    // Measure various performance metrics
    const loadTime = performance.timing?.loadEventEnd
      ? performance.timing.loadEventEnd - performance.timing.navigationStart
      : 0;

    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

    // Measure network latency (simplified)
    const networkLatency = performance.timing?.responseEnd
      ? performance.timing.responseEnd - performance.timing.requestStart
      : 0;

    const renderTime = performance.now() - startTime;

    setPerformanceData({
      loadTime,
      renderTime,
      memoryUsage,
      networkLatency,
    });
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measurePerformance();
  }, [measurePerformance]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const getPerformanceScore = useCallback(() => {
    // Calculate a performance score based on various metrics
    const { loadTime, renderTime, memoryUsage, networkLatency } =
      performanceData;

    let score = 100;

    // Penalize slow load times
    if (loadTime > 3000) score -= 30;
    else if (loadTime > 2000) score -= 20;
    else if (loadTime > 1000) score -= 10;

    // Penalize slow render times
    if (renderTime > 100) score -= 20;
    else if (renderTime > 50) score -= 10;

    // Penalize high memory usage
    if (memoryUsage > 50 * 1024 * 1024)
      score -= 20; // 50MB
    else if (memoryUsage > 25 * 1024 * 1024) score -= 10; // 25MB

    // Penalize high network latency
    if (networkLatency > 1000) score -= 20;
    else if (networkLatency > 500) score -= 10;

    return Math.max(0, Math.min(100, score));
  }, [performanceData]);

  useEffect(() => {
    if (isMonitoring) {
      const interval = setInterval(measurePerformance, 2000);
      return () => clearInterval(interval);
    }
  }, [isMonitoring, measurePerformance]);

  return {
    performanceData,
    isMonitoring,
    startMonitoring,
    stopMonitoring,
    getPerformanceScore,
  };
};
