'use client';
import { useState, useEffect } from 'react';

export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    // Performance monitoring logic
    setMetrics({ loadTime: 0, renderTime: 0 });
  }, []);

  return metrics;
};
