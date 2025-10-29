import { useState, useEffect } from 'react';

export function usePerformanceMonitor() {
  const [performance, setPerformance] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Performance monitoring logic
    const start = window.performance.now();
    setPerformance(prev => ({
      ...prev,
      loadTime: start
    }));
  }, []);

  return performance;
}