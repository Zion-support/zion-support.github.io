import { useState, useEffect, useCallback } from 'react';
import { performanceOptimizer } from '../utils/performanceOptimizer';

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

  const optimize = useCallback(() => {
    performanceOptimizer.init();
    performanceOptimizer.optimizeImages();
    performanceOptimizer.enableLazyLoading();
    performanceOptimizer.preloadCriticalResources();
    
    const metrics = performanceOptimizer.getMetrics();
    const recommendations = performanceOptimizer.getRecommendations();
    
    setState(prev => ({
      ...prev,
      ...metrics,
      isOptimized: true,
      recommendations,
    }));
  }, []);

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

  const getMetrics = useCallback(() => {
    return { ...state };
  }, [state]);

  useEffect(() => {
    // Initialize performance monitoring on mount
    optimize();
    
    // Monitor performance metrics
    const interval = setInterval(() => {
      const metrics = performanceOptimizer.getMetrics();
      const recommendations = performanceOptimizer.getRecommendations();
      
      setState(prev => ({
        ...prev,
        ...metrics,
        recommendations,
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [optimize]);

  return {
    ...state,
    optimize,
    reset,
    getMetrics,
  };
}
