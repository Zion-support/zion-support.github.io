import { useCallback, useEffect, useState } from 'react';

interface UsePerformanceOptions {
  measureRenderTime?: boolean;
  measureMemoryUsage?: boolean;
}

interface UsePerformanceReturn {
  performanceData: {
    renderTime: number;
    memoryUsage: number;
    fps: number;
  };
  measureRenderTime: (fn: () => void) => void;
  measureMemoryUsage: () => number;
}

export const usePerformance = (options: UsePerformanceOptions = {}): UsePerformanceReturn => {
  const [performanceData, setPerformanceData] = useState({
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });

  const measureRenderTime = useCallback((fn: () => void) => {
    const start = performance.now();
    fn();
    const end = performance.now();
    setPerformanceData(prev => ({
      ...prev,
      renderTime: end - start,
    }));
  }, []);

  const measureMemoryUsage = useCallback(() => {
    const memory = (performance as any).memory;
    if (memory) {
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024;
      setPerformanceData(prev => ({
        ...prev,
        memoryUsage,
      }));
      return memoryUsage;
    }
    return 0;
  }, []);

  useEffect(() => {
    if (options.measureMemoryUsage) {
      measureMemoryUsage();
    }
  }, [measureMemoryUsage, options.measureMemoryUsage]);

  return {
    performanceData,
    measureRenderTime,
    measureMemoryUsage,
  };
};

export default usePerformance;