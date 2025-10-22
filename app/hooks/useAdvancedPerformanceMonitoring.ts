import { useState, useEffect, useCallback } from 'react';

interface UseAdvancedPerformanceMonitoringOptions {
  enabled?: boolean;
  threshold?: number;
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  fps: number;
}

export const useAdvancedPerformanceMonitoring = (options: UseAdvancedPerformanceMonitoringOptions = {}) => {
  const [performance, setPerformance] = useState<number>(0);
  const [isMonitoring, setIsMonitoring] = useState<boolean>(false);
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    fps: 0,
  });

  const startMonitoring = useCallback(() => {
    setIsMonitoring(true);
  }, []);

  const stopMonitoring = useCallback(() => {
    setIsMonitoring(false);
  }, []);

  const resetMetrics = useCallback(() => {
    setMetrics({
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      fps: 0,
    });
  }, []);

  useEffect(() => {
    if (options.enabled !== false && typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        if (entries.length > 0) {
          setPerformance(entries[0].duration);
        }
      });
      
      observer.observe({ entryTypes: ['measure'] });
      
      return () => observer.disconnect();
    }
    return undefined;
  }, [options.enabled]);

  const measurePerformance = useCallback((name: string, fn: () => void) => {
    if (typeof window !== 'undefined' && 'performance' in window && window.performance.mark) {
      window.performance.mark(name + '-start');
      fn();
      window.performance.mark(name + '-end');
      window.performance.measure(name, name + '-start', name + '-end');
    }
  }, []);

  return {
    performance,
    isMonitoring,
    metrics,
    startMonitoring,
    stopMonitoring,
    resetMetrics,
    measurePerformance
  };
};