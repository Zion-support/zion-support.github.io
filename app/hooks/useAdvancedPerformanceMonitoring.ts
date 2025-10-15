import { useEffect, useRef, useCallback } from 'react';

interface PerformanceMetrics {
  [key: string]: number;
}

interface PerformanceConfig {
  enableResourceTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  reportInterval?: number;
  memoryThreshold?: number;
}

export const useAdvancedPerformanceMonitoring = (config: PerformanceConfig = {}) => {
  const {
    enableResourceTiming = true,
    enableLongTaskMonitoring = true,
    enableLayoutShiftMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8,
  } = config;

  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);
  const reportIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const reportMetric = useCallback((name: string, value: number, category = 'Performance', metadata?: Record<string, unknown>) => {
    metricsRef.current[name] = value;
    
    // In a real app, you'd send this to your analytics service
    console.log(`Performance Metric: ${name}`, {
      value,
      category,
      timestamp: Date.now(),
      metadata
    });
  }, []);

  const startMonitoring = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Resource timing monitoring
    if (enableResourceTiming) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            reportMetric('resource_load_time', entry.duration, 'Resource');
          }
        });
      });
      
      observer.observe({ entryTypes: ['resource'] });
      observerRef.current = observer;
    }

    // Long task monitoring
    if (enableLongTaskMonitoring) {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          reportMetric('long_task_duration', entry.duration, 'LongTask');
        });
      });
      
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }

    // Layout shift monitoring
    if (enableLayoutShiftMonitoring) {
      const layoutShiftObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'layout-shift') {
            reportMetric('layout_shift_score', (entry as any).value, 'LayoutShift');
          }
        });
      });
      
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
    }

    // Memory monitoring
    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        
        if (memoryUsage > memoryThreshold) {
          reportMetric('high_memory_usage', memoryUsage, 'Memory');
        }
      }
    };

    // Set up periodic reporting
    reportIntervalRef.current = setInterval(() => {
      checkMemory();
    }, reportInterval);

  }, [enableResourceTiming, enableLongTaskMonitoring, enableLayoutShiftMonitoring, reportInterval, memoryThreshold, reportMetric]);

  const stopMonitoring = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    if (reportIntervalRef.current) {
      clearInterval(reportIntervalRef.current);
    }
  }, []);

  useEffect(() => {
    startMonitoring();
    return stopMonitoring;
  }, [startMonitoring, stopMonitoring]);

  return {
    metrics: metricsRef.current,
    reportMetric,
    startMonitoring,
    stopMonitoring
  };
};