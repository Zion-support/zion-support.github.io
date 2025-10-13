import { useState, useEffect } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  memoryUsage: number;
  fps: number;
}

export function usePerformanceMonitoring() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    memoryUsage: 0,
    fps: 0
  });

  useEffect(() => {
    const updateMetrics = () => {
      setMetrics({
        loadTime: performance.now(),
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0, // eslint-disable-line @typescript-eslint/no-explicit-any
        fps: 60 // Placeholder
      });
    };

    updateMetrics();
    const interval = setInterval(updateMetrics, 1000);
    return () => clearInterval(interval);
  }, []);

  return metrics;
}
