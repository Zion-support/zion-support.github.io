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
  const { enabled = true, threshold = 30, measureMemoryUsage = true } = options;
  
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
    if (!enabled) return;

    const now = performance.now();
    const delta = now - lastTimeRef.current;
    
    if (delta >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / delta);
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    } else {
      frameCountRef.current++;
    }
  }, [enabled]);

  const measureRenderTime = useCallback(() => {
    if (!enabled) return;

    const start = performance.now();
    requestAnimationFrame(() => {
      const renderTime = performance.now() - start;
      setMetrics(prev => ({ ...prev, renderTime }));
    });
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;

    const interval = setInterval(() => {
      measureFPS();
      if (measureMemoryUsage) {
        measureMemoryUsage();
      }
      measureRenderTime();
    }, 1000);

    return () => clearInterval(interval);
  }, [enabled, measureFPS, measureMemoryUsage, measureRenderTime]);

  const startMonitoring = useCallback(() => {
    setIsMonitoringFPS(true);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoringFPS(false);
  }, []);

  return {
    metrics,
    isMonitoringFPS,
    startMonitoring,
    stopMonitoring,
  };
};