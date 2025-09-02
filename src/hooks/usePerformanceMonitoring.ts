import { useState, useEffect } from 'react';

export const usePerformanceMonitoring = () => {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    const startTime = performance.now();
    
    const measurePerformance = () => {
      const endTime = performance.now();
      const loadTime = endTime - startTime;
      
      if (performance.memory) {
        setMetrics({
          loadTime,
          renderTime: endTime - startTime,
          memoryUsage: performance.memory.usedJSHeapSize / 1024 / 1024
        });
      }
    };

    measurePerformance();
    
    return () => {
      measurePerformance();
    };
  }, []);

  return metrics;
};