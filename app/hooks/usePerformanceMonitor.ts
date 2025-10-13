import { useState, useEffect } from 'react';

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      setMetrics({
        loadTime: endTime - startTime,
        renderTime: endTime - startTime,
        memoryUsage: (performance as any).memory?.usedJSHeapSize || 0
      });
    };

    measurePerformance();
  }, []);

  return metrics;
}