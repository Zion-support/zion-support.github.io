import { useCallback, useState, useRef, useEffect } from 'react';

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
  const { enabled = true, threshold = 60, measureMemoryUsage = true } = options;
  
  const [performanceData, setPerformanceData] = useState<PerformanceData>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
  });

  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const animationFrameRef = useRef<number>();

  const measureFPS = useCallback(() => {
    if (!enabled) return;

    const now = performance.now();
    frameCountRef.current++;

    if (now - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
      setPerformanceData(prev => ({ ...prev, fps }));
      
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }

    animationFrameRef.current = requestAnimationFrame(measureFPS);
  }, [enabled]);

  const measureMemory = useCallback(() => {
    if (!measureMemoryUsage || typeof window === 'undefined' || !('memory' in performance)) {
      return;
    }

    const memory = (performance as any).memory;
    const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    setPerformanceData(prev => ({ ...prev, memoryUsage }));
  }, [measureMemoryUsage]);

  const measureLoadTime = useCallback(() => {
    if (typeof window === 'undefined') return;

    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setPerformanceData(prev => ({ ...prev, loadTime }));
  }, []);

  const measureRenderTime = useCallback(() => {
    if (typeof window === 'undefined') return;

    const renderTime = performance.now();
    setPerformanceData(prev => ({ ...prev, renderTime }));
  }, []);

  useEffect(() => {
    if (enabled) {
      measureFPS();
      measureLoadTime();
      measureRenderTime();
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [enabled, measureFPS, measureLoadTime, measureRenderTime]);

  useEffect(() => {
    if (measureMemoryUsage) {
      const interval = setInterval(measureMemory, 1000);
      return () => clearInterval(interval);
    }
  }, [measureMemoryUsage, measureMemory]);

  return {
    performanceData,
    isPerformanceGood: performanceData.fps >= threshold,
    measureFPS,
    measureMemory,
    measureLoadTime,
    measureRenderTime,
  };
};