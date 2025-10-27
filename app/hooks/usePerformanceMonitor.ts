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
    
    frameCountRef.current++;
    
    if (delta >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / delta);
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }
    
    requestAnimationFrame(measureFPS);
  }, [enabled]);

  useEffect(() => {
    if (enabled) {
      setIsMonitoringFPS(true);
      measureFPS();
    } else {
      setIsMonitoringFPS(false);
    }
  }, [enabled, measureFPS]);

  useEffect(() => {
    if (measureMemoryUsage) {
      const interval = setInterval(measureMemoryUsage, 1000);
      return () => clearInterval(interval);
    }
  }, [measureMemoryUsage, measureMemoryUsage]);

  return {
    metrics,
    isMonitoringFPS,
    startMonitoring: () => setIsMonitoringFPS(true),
    stopMonitoring: () => setIsMonitoringFPS(false),
  };
};
