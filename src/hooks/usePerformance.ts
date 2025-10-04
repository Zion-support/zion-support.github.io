import { useState, useEffect } from 'react';

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  timestamp: Date;
}

export const usePerformance = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    const measurePerformance = () => {
      const loadTime = performance.now();
      const memoryUsage = (performance as { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;
      
      setMetrics({
        loadTime,
        renderTime: 0,
        memoryUsage: memoryUsage / 1048576, // Convert to MB
        timestamp: new Date()
      });
    };

    measurePerformance();
  }, []);

  return metrics;
};

export default usePerformance;