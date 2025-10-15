import { useEffect, useRef, useCallback } from 'react';

interface UseEnhancedPerformanceOptions {
  enableMemoryMonitoring?: boolean;
  enableResourceTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  reportInterval?: number;
  memoryThreshold?: number;
}

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const {
    enableMemoryMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8
  } = options;

  const metricsRef = useRef<Record<string, any>>({});

  const reportMetric = useCallback((name: string, value: number) => {
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric: name,
        value,
        custom_parameter: 'enhanced_performance'
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
        console.warn('High memory usage detected', {
          used: `${used.toFixed(2)}MB`,
          total: `${total.toFixed(2)}MB`,
          limit: `${limit.toFixed(2)}MB`,
          percentage: `${((used / limit) * 100).toFixed(2)}%`
        });
      }
    }
  }, [memoryThreshold]);

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

export default useEnhancedPerformance;