import { useState, useEffect, useCallback } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

interface UsePerformanceReturn {
  metrics: PerformanceMetrics;
  measureRenderTime: (componentName: string) => void;
  getMemoryUsage: () => number;
}

export const usePerformance = (): UsePerformanceReturn => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
  });

  const measureRenderTime = useCallback((componentName: string) => {
    const start = performance.now();
    
    return () => {
      const end = performance.now();
      const renderTime = end - start;
      
      setMetrics(prev => ({
        ...prev,
        renderTime: prev.renderTime + renderTime,
      }));
      
      console.log(`${componentName} rendered in ${renderTime.toFixed(2)}ms`);
    };
  }, []);

  const getMemoryUsage = useCallback(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      const memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
      
      setMetrics(prev => ({
        ...prev,
        memoryUsage,
      }));
      
      return memoryUsage;
    }
    return 0;
  }, []);

  useEffect(() => {
    // Measure initial load time
    const loadTime = performance.now();
    setMetrics(prev => ({ ...prev, loadTime }));

    // Get initial memory usage
    getMemoryUsage();
  }, [getMemoryUsage]);

  return {
    metrics,
    measureRenderTime,
    getMemoryUsage,
  };
};