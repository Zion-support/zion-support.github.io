import { useCallback, useEffect, useState, useRef } from 'react';

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

export const usePerformanceMonitor = (options: UsePerformanceMonitorOptions = {}) => {
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
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  const measureFPS = useCallback(() => {
    if (!isMonitoringFPS) return;

    frameCountRef.current++;
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTimeRef.current;

    if (deltaTime >= 1000) { // Update every second
      const fps = Math.round((frameCountRef.current * 1000) / deltaTime);
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;
    }

    requestAnimationFrame(measureFPS);
  }, [isMonitoringFPS]);

  const startMonitoring = useCallback(() => {
    setIsMonitoringFPS(true);
    lastTimeRef.current = performance.now();
    frameCountRef.current = 0;
    measureFPS();
  }, [measureFPS]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoringFPS(false);
  }, []);

  useEffect(() => {
    if (options.enabled) {
      startMonitoring();
      if (options.measureMemoryUsage) {
        const interval = setInterval(measureMemoryUsage, 1000);
        return () => clearInterval(interval);
      }
    } else {
      stopMonitoring();
    }
  }, [options.enabled, options.measureMemoryUsage, startMonitoring, stopMonitoring, measureMemoryUsage]);

  return {
    metrics,
    isMonitoringFPS,
    startMonitoring,
    stopMonitoring,
  };
};
