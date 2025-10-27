import { useEffect, useState, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    networkLatency: 0
  });

  const measurePerformance = useCallback(() => {
    // Measure load time
    const loadTime = performance.now();
    
    // Measure memory usage
    let memoryUsage = 0;
    if ('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory;
      memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }

    setMetrics(prev => ({
      ...prev,
      loadTime,
      memoryUsage
    }));
  }, []);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  return {
    metrics,
    measurePerformance
  };
};