import { useCallback, useEffect, useRef, useState } from 'react';

interface PerformanceData {
  fps: number;
  memoryUsage: number;
  loadTime: number;
}

export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
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
      setPerformanceData(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }
  }, []);

  const measureMemoryUsage = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024);
      setPerformanceData(prev => ({ ...prev, memoryUsage }));
    }
  }, []);

  const measureLoadTime = useCallback(() => {
    const loadTime = performance.now();
    setPerformanceData(prev => ({ ...prev, loadTime }));
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

  return performanceData;
};