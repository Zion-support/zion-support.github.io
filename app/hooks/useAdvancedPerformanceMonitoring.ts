import { useCallback, useEffect, useRef, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
}

interface PerformanceThresholds {
  fps: number;
  memoryUsage: number;
  loadTime: number;
  renderTime: number;
  networkLatency: number;
}

export const useAdvancedPerformanceMonitoring = (
  thresholds: PerformanceThresholds = {
    fps: 30,
    memoryUsage: 100,
    loadTime: 3000,
    renderTime: 16,
    networkLatency: 200
  }
) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
    networkLatency: 0
  });

  const [isMonitoring, setIsMonitoring] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(performance.now());
  const animationFrameRef = useRef<number>();

  const measureFPS = useCallback(() => {
    const now = performance.now();
    frameCountRef.current++;

    if (now - lastTimeRef.current >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / (now - lastTimeRef.current));
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = now;
    }

    if (isMonitoring) {
      animationFrameRef.current = requestAnimationFrame(measureFPS);
    }
  }, [isMonitoring]);

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

  const measureRenderTime = useCallback(() => {
    const start = performance.now();
    requestAnimationFrame(() => {
      const renderTime = performance.now() - start;
      setMetrics(prev => ({ ...prev, renderTime }));
    });
  }, []);

  const measureNetworkLatency = useCallback(async () => {
    const start = performance.now();
    try {
      await fetch('/api/ping', { method: 'HEAD' });
      const networkLatency = performance.now() - start;
      setMetrics(prev => ({ ...prev, networkLatency }));
    } catch (error) {
      console.warn('Network latency measurement failed:', error);
    }
  }, []);

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
    measureLoadTime();
    measureMemoryUsage();
    measureNetworkLatency();
  }, [measureLoadTime, measureMemoryUsage, measureNetworkLatency]);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
  }, []);

  useEffect(() => {
    if (isMonitoring) {
      measureFPS();
    }
  }, [isMonitoring, measureFPS]);

  useEffect(() => {
    const interval = setInterval(() => {
      measureMemoryUsage();
      measureRenderTime();
      measureNetworkLatency();
    }, 1000);

    return () => clearInterval(interval);
  }, [measureMemoryUsage, measureRenderTime, measureNetworkLatency]);

  const isPerformanceGood = Object.entries(metrics).every(([key, value]) => {
    const threshold = thresholds[key as keyof PerformanceThresholds];
    return value <= threshold;
  });

  return {
    metrics,
    isMonitoring,
    isPerformanceGood,
    startMonitoring,
    stopMonitoring
  };
};
