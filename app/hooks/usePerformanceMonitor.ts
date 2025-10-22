'use client';
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
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024, // Convert to MB
      }));
    }
  }, []);

  const init = useCallback(() => {
    if (options.enabled !== false) {
      setIsMonitoringFPS(true);
      measureMemoryUsage();
    }
  }, [options.enabled, measureMemoryUsage]);

  useEffect(() => {
    if (!isMonitoringFPS) return;

    const countFrames = () => {
      frameCountRef.current++;
      const currentTime = performance.now();
      if (currentTime - lastTimeRef.current >= 1000) {
        const fps = Math.round((frameCountRef.current * 1000) / (currentTime - lastTimeRef.current));
        setMetrics(prev => ({
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

  return {
    metrics,
    setMetrics,
    isMonitoringFPS,
    setIsMonitoringFPS,
    measureMemoryUsage,
    init,
  };
};

export default usePerformanceMonitor;