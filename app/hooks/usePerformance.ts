import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  memory?: {
    used: number;
    total: number;
    limit: number;
  };
}

interface UsePerformanceOptions {
  enableMemoryMonitoring?: boolean;
  enableResourceTiming?: boolean;
  reportInterval?: number;
  memoryThreshold?: number;
}

export const usePerformance = (options: UsePerformanceOptions = {}) => {
  const {
    enableMemoryMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({});
  const componentName = 'PerformanceMonitor';

  const reportMetric = useCallback((name: string, value: number) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric: name,
        value,
        custom_parameter: 'performance_monitoring'
      });
    }
  }, []);

  const checkMemory = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const memory = (performance as any).memory;
    if (memory) {
      const used = memory.usedJSHeapSize / 1024 / 1024; // MB
      const total = memory.totalJSHeapSize / 1024 / 1024; // MB
      const limit = memory.jsHeapSizeLimit / 1024 / 1024; // MB
      
      metricsRef.current.memory = { used, total, limit };
      
      if (used > limit * memoryThreshold) {
        console.warn(`High memory usage detected in ${componentName}`, {
          used: `${used.toFixed(2)}MB`,
          total: `${total.toFixed(2)}MB`,
          limit: `${limit.toFixed(2)}MB`,
          percentage: `${((used / limit) * 100).toFixed(2)}%`
        });
      }
    }
  }, [componentName, memoryThreshold]);

  useEffect(() => {
    if (!enableMemoryMonitoring) return;

    const interval = setInterval(checkMemory, reportInterval);
    return () => clearInterval(interval);
  }, [enableMemoryMonitoring, checkMemory, reportInterval]);

  return {
    metrics: metricsRef.current,
    reportMetric
  };
};

export default usePerformance;