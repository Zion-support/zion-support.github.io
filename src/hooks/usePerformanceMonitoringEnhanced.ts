import { useState, useEffect, useCallback } from 'react';

interface EnhancedPerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  fps: number;
  renderTime: number;
  networkLatency: number;
}

export function usePerformanceMonitoringEnhanced() {
  const [metrics, setMetrics] = useState<EnhancedPerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0,
    renderTime: 0,
    networkLatency: 0
  });

  const updateMetrics = useCallback(() => {
    setMetrics({
      loadTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0, // eslint-disable-line @typescript-eslint/no-explicit-any
      fps: 60, // Placeholder
      renderTime: performance.now(),
      networkLatency: 0 // Placeholder
    });
  }, []);

  useEffect(() => {
    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, [updateMetrics]);

  return { metrics, updateMetrics };
}
