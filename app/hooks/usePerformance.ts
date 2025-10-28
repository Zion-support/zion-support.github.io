import { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';

interface PerformanceState {
  loadTime: number;
  renderTime: number;
  _memoryUsage: number;
  bundleSize: number;
  isOptimized: boolean;
  recommendations: string[];
}

interface PerformanceActions {
  optimize: () => void;
  reset: () => void;
  getMetrics: () => PerformanceState;
}

export const usePerformance = function usePerformance(): PerformanceState & PerformanceActions {
  const [state, setState] = useState<PerformanceState>({
    loadTime: 0,
    renderTime: 0,
    _memoryUsage: 0,
    bundleSize: 0,
    isOptimized: false,
    recommendations: [],
  });

  // Update performance metrics
  const updateMetrics = useCallback(() => {
    const metrics = performanceOptimizer.getMetrics();
    setState(prevState => ({
      ...prevState,
      loadTime: metrics.loadTime,
      renderTime: metrics.renderTime,
      _memoryUsage: metrics.memoryUsage,
      bundleSize: metrics.bundleSize,
      isOptimized: metrics.isOptimized,
      recommendations: metrics.recommendations,
    }));
  }, []);

  // Optimize performance
  const optimize = useCallback(() => {
    performanceOptimizer.optimize();
    updateMetrics();
  }, [updateMetrics]);

  // Reset metrics
  const reset = useCallback(() => {
    performanceOptimizer.reset();
    setState({
      loadTime: 0,
      renderTime: 0,
      _memoryUsage: 0,
      bundleSize: 0,
      isOptimized: false,
      recommendations: [],
    });
  }, []);

  // Get current metrics
  const getMetrics = useCallback((): PerformanceState => {
    const metrics = performanceOptimizer.getMetrics();
    return {
      loadTime: metrics.loadTime,
      renderTime: metrics.renderTime,
      _memoryUsage: metrics.memoryUsage,
      bundleSize: metrics.bundleSize,
      isOptimized: metrics.isOptimized,
      recommendations: metrics.recommendations,
    };
  }, []);

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