import { useState, useEffect } from 'react';

export function useEnhancedPerformance() {
  const [performance, setPerformance] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Basic performance monitoring
    const startTime = window.performance.now();
    
    const measurePerformance = () => {
      const endTime = window.performance.now();
      setPerformance({
        loadTime: endTime - startTime,
        renderTime: endTime - startTime,
        memoryUsage: (window.performance as any).memory?.usedJSHeapSize || 0
      });
    };

    measurePerformance();
  }, []);

  return performance;
}