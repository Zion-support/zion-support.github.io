import { useCallback, useEffect, useState } from 'react';

interface UsePerformanceOptions {
  enabled?: boolean;
  threshold?: number;
  measureMemoryUsage?: boolean;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export const usePerformance = (options: UsePerformanceOptions = {}) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });
  
  const measureMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      setMetrics(prev => ({
        ...prev,
        memoryUsage: memory.usedJSHeapSize / 1024 / 1024 // Convert to MB
      }));
    }
  }, []);

  const init = useCallback(() => {
    if (options.enabled !== false) {
      measureMemoryUsage();
    }
  }, [options.enabled, measureMemoryUsage]);

  useEffect(() => {
    if (options.measureMemoryUsage) {
      measureMemoryUsage();
    }
  }, [measureMemoryUsage, options.measureMemoryUsage]);

  return {
    metrics,
    setMetrics,
    measureMemoryUsage,
    init
  };
};

export default usePerformance;