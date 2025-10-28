import { useState, useEffect, useCallback } from 'react';
import { optimizePerformance } from '../utils/performanceOptimizer';

interface PerformanceState {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
}

export const usePerformance = () => {
  const [performanceState, setPerformanceState] = useState<PerformanceState>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
  });

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const startTime = performance.now();
    
    // Measure load time
    const loadTime = performance.timing ? 
      performance.timing.loadEventEnd - performance.timing.navigationStart : 0;

    // Measure render time
    const renderTime = performance.now() - startTime;

    // Measure memory usage (if available)
    const memoryUsage = (performance as any).memory ? 
      (performance as any).memory.usedJSHeapSize : 0;

    setPerformanceState({
      loadTime,
      renderTime,
      memoryUsage,
    });
  }, []);

  const optimize = useCallback(() => {
    optimizePerformance();
  }, []);

  const reset = useCallback(() => {
    setPerformanceState({
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
    });
  }, []);

  useEffect(() => {
    measurePerformance();
  }, [measurePerformance]);

  const getMetrics = useCallback(() => {
    return performanceState;
  }, [performanceState]);

  return {
    ...performanceState,
    measurePerformance,
    optimize,
    reset,
    getMetrics,
  };
};