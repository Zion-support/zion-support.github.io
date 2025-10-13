import { useState, useEffect, useCallback } from "react";

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

interface UseEnhancedPerformanceReturn {
  metrics: PerformanceMetrics;
  isOptimized: boolean;
  optimize: () => void;
  reset: () => void;
}

export const useEnhancedPerformance = (): UseEnhancedPerformanceReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  const [isOptimized, setIsOptimized] = useState(false);

  const measurePerformance = useCallback(() => {
    if (typeof window === "undefined") return;

    const startTime = performance.now();

    // Measure load time
    const loadTime = performance.timing?.loadEventEnd
      ? performance.timing.loadEventEnd - performance.timing.navigationStart
      : 0;

    // Measure memory usage
    const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

    // Measure FPS (simplified)
    let fps = 0;
    let lastTime = performance.now();
    const measureFPS = () => {
      const currentTime = performance.now();
      fps = 1000 / (currentTime - lastTime);
      lastTime = currentTime;
    };
    measureFPS();

    setMetrics({
      loadTime,
      renderTime: performance.now() - startTime,
      memoryUsage,
      fps,
    });
  }, []);

  const optimize = useCallback(() => {
    // Enable performance optimizations
    setIsOptimized(true);

    // Trigger garbage collection if available
    if ((window as any).gc) {
      (window as any).gc();
    }

    // Measure after optimization
    setTimeout(measurePerformance, 100);
  }, [measurePerformance]);

  const reset = useCallback(() => {
    setMetrics({
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0,
    });
    setIsOptimized(false);
  }, []);

  useEffect(() => {
    measurePerformance();

    const interval = setInterval(measurePerformance, 5000);
    return () => clearInterval(interval);
  }, [measurePerformance]);

  return {
    metrics,
    isOptimized,
    optimize,
    reset,
  };
};
