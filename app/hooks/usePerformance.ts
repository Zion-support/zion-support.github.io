import { useState, useCallback, useEffect } from 'react';
import PerformanceOptimizer from '../utils/performanceOptimizer';

interface PerformanceState {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  isOptimized: boolean;
  recommendations: string[];
}

interface PerformanceActions {
  optimize: () => void;
  reset: () => void;
  getMetrics: () => PerformanceState;
}

export function usePerformance(): PerformanceState & PerformanceActions {
  const [state, setState] = useState<PerformanceState>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    isOptimized: false,
    recommendations: [],
  });

  const optimizer = new PerformanceOptimizer();

  // Update performance metrics
  const updateMetrics = useCallback(() => {
    const metrics = optimizer.getMetrics();
    setState(prevState => ({
      ...prevState,
      ...metrics,
    }));
  }, [optimizer]);

  // Optimize performance
  const optimize = useCallback(() => {
    optimizer.optimize();
    updateMetrics();
  }, [optimizer, updateMetrics]);

  // Reset metrics
  const reset = useCallback(() => {
    setState({
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      isOptimized: false,
      recommendations: [],
    });
  }, []);

  // Get current metrics
  const getMetrics = useCallback(() => {
    return optimizer.getMetrics();
  }, [optimizer]);

  // Initialize performance monitoring
  useEffect(() => {
    // Initial metrics update
    updateMetrics();

    // Update metrics periodically
    const interval = setInterval(updateMetrics, 5000);

    // Cleanup
    return () => {
      clearInterval(interval);
    };
  }, [updateMetrics]);

  return {
    ...state,
    optimize,
    reset,
    getMetrics,
  };
}

export default usePerformance;