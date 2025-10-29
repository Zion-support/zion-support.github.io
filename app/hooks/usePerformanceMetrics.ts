import { useState, useEffect } from 'react';

export function usePerformanceMetrics() {
  const [metrics, setMetrics] = useState({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0
  });

  useEffect(() => {
    // Performance monitoring logic
    const start = performance.now();
    setMetrics(prev => ({
      ...prev,
      loadTime: start
    }));
  }, []);

  return metrics;
}