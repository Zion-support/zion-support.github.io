import { useCallback, useEffect, useState, useRef } from 'react';

interface UsePerformanceMonitorOptions {
  enabled?: boolean;
  threshold?: number;
  measureMemoryUsage?: boolean;
}

interface PerformanceData {
  fps: number;
  _memoryUsage: number;
  loadTime: number;
  renderTime: number;
}

export const usePerformanceMonitor = (options: UsePerformanceMonitorOptions = { /* No action needed */ }) => {
  const [metrics, setMetrics] = useState<PerformanceData>({
    fps: 0,
    _memoryUsage: 0,
    loadTime: 0,
    renderTime: 0,
  });
  const [isMonitoringFPS, setIsMonitoringFPS] = useState(false);
  const frameCountRef = useRef(0);
  const lastTimeRef = useRef(0);

const measureMemoryUsage = useCallback(() => {
    // Measure memory usage
    let _memoryUsage = 0;
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      if (memory) {
        _memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      }
    }
    return _memoryUsage;
}, []);

  const measurePerformance = useCallback(() => {
    // Measure performance metrics
    const startTime = performance.now();
    const _memoryUsage = measureMemoryUsage();
    
    // Try to get navigation timing if available, otherwise use performance.now()
    const loadTime = performance.timing ? 
      performance.timing.loadEventEnd - performance.timing.navigationStart : 
      performance.now();
    
    // Update metrics with performance data
    setMetrics(prev => ({
      ...prev,
      loadTime,
      _memoryUsage,
      renderTime: performance.now() - startTime
    }));
  }, [measureMemoryUsage]);

  const measureFPS = useCallback(() => {
    if (!isMonitoringFPS) return;

    frameCountRef.current++;
    const currentTime = performance.now();
    const deltaTime = currentTime - lastTimeRef.current;

    if (deltaTime >= 1000) {
      const fps = Math.round((frameCountRef.current * 1000) / deltaTime);
      setMetrics(prev => ({ ...prev, fps }));
      frameCountRef.current = 0;
      lastTimeRef.current = currentTime;
    }

    requestAnimationFrame(measureFPS);
  }, [isMonitoringFPS]);

  useEffect(() => {
    lastTimeRef.current = performance.now();
  }, []);

  useEffect(() => {
    if (options.enabled) {
      setIsMonitoringFPS(true);
      measureFPS();
      measurePerformance();
    }

    return () => {
      setIsMonitoringFPS(false);
    }
  }, [options.enabled, measureFPS, measurePerformance]);

  return {
    metrics,
    isMonitoringFPS,triggerPerformanceMeasurement: measurePerformance,
  }
}