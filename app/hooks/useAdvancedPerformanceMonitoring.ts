import { useCallback, useEffect, useRef } from 'react';

interface PerformanceMetrics {
  [key: string]: number | { [subKey: string]: number };
}

interface UseAdvancedPerformanceMonitoringOptions {
  enableResourceTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  reportInterval?: number;
  memoryThreshold?: number;
}

export const useAdvancedPerformanceMonitoring = (options: UseAdvancedPerformanceMonitoringOptions = {}) => {
  const {
    enableResourceTiming = true,
    enableLongTaskMonitoring = true,
    enableLayoutShiftMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);

  const reportMetric = useCallback((name: string, value: number) => {
    // Report to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric: name,
        value,
        timestamp: Date.now()
      });
    }
  }, []);

  const reportMetrics = useCallback(() => {
    const metrics = metricsRef.current;
    Object.entries(metrics).forEach(([key, value]) => {
      if (typeof value === 'number') {
        reportMetric(key, value);
      } else if (typeof value === 'object') {
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (typeof subValue === 'number') {
            reportMetric(`${key.toUpperCase()}_${subKey.toUpperCase()}`, subValue);
          }
        });
      }
    });
  }, [reportMetric]);

  const updateMetric = useCallback((key: string, value: number, subKey?: string) => {
    if (subKey) {
      if (!metricsRef.current[key]) {
        metricsRef.current[key] = {};
      }
      (metricsRef.current[key] as { [subKey: string]: number })[subKey] = value;
    } else {
      metricsRef.current[key] = value;
    }
  }, []);

  const monitorResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          updateMetric('resource_load_time', resourceEntry.duration);
          updateMetric('resource_size', resourceEntry.transferSize);
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    observerRef.current = observer;
  }, [enableResourceTiming, updateMetric]);

  const monitorLongTasks = useCallback(() => {
    if (!enableLongTaskMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'longtask') {
          updateMetric('long_task_duration', entry.duration);
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
  }, [enableLongTaskMonitoring, updateMetric]);

  const monitorLayoutShifts = useCallback(() => {
    if (!enableLayoutShiftMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            updateMetric('layout_shift_score', layoutShiftEntry.value);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }, [enableLayoutShiftMonitoring, updateMetric]);

  const monitorMemory = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    const usedMemory = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
    
    if (usedMemory > memoryThreshold) {
      updateMetric('memory_usage_high', usedMemory);
    }
    
    updateMetric('memory_usage', usedMemory);
  }, [memoryThreshold, updateMetric]);

  useEffect(() => {
    monitorResourceTiming();
    monitorLongTasks();
    monitorLayoutShifts();

    const interval = setInterval(() => {
      monitorMemory();
      reportMetrics();
    }, reportInterval);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(interval);
    };
  }, [monitorResourceTiming, monitorLongTasks, monitorLayoutShifts, monitorMemory, reportMetrics, reportInterval]);

  return {
    metrics: metricsRef.current,
    reportMetrics,
    updateMetric
  };
};

export default useAdvancedPerformanceMonitoring;