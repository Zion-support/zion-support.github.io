import { useCallback, useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0
  });

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());

  const measureFPS = useCallback(() => {
    const now = performance.now();
    frameCountRef.current++;

    if (now - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      setMetrics(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  const measureLoadTime = useCallback(() => {
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));
  }, []);

  useEffect(() => {
    measureLoadTime();
    measureMemoryUsage();

    const interval = setInterval(() => {
      measureFPS();
      measureMemoryUsage();
    }, 1000);

    return () => clearInterval(interval);
  }, [measureLoadTime, measureMemoryUsage, measureFPS]);

  return metrics;
};