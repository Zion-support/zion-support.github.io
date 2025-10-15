import { useCallback, useEffect, useRef } from 'react';

interface PerformanceMonitorOptions {
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  enableResourceTiming?: boolean;
  reportInterval?: number;
}

export const usePerformanceMonitor = (options: PerformanceMonitorOptions = {}) => {
  const {
    enableLongTaskMonitoring = true,
    enableLayoutShiftMonitoring = true,
    enableResourceTiming = true,
    reportInterval = 30000
  } = options;

  const metricsRef = useRef<{
    longTasks: number[];
    layoutShifts: number[];
    resourceTimings: Array<{ name: string; duration: number; size: number }>;
  }>({
    longTasks: [],
    layoutShifts: [],
    resourceTimings: []
  });

  const observerRef = useRef<PerformanceObserver | null>(null);

  const reportMetrics = useCallback(() => {
    const metrics = metricsRef.current;
    
    // Report to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        long_tasks_count: metrics.longTasks.length,
        layout_shifts_count: metrics.layoutShifts.length,
        resource_count: metrics.resourceTimings.length,
        timestamp: Date.now()
      });
    }

    // Log metrics for debugging
    console.log('Performance Metrics:', metrics);
  }, []);

  const monitorLongTasks = useCallback(() => {
    if (!enableLongTaskMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'longtask') {
          metricsRef.current.longTasks.push(entry.duration);
        }
      });
    });

    observer.observe({ entryTypes: ['longtask'] });
    observerRef.current = observer;
  }, [enableLongTaskMonitoring]);

  const monitorLayoutShifts = useCallback(() => {
    if (!enableLayoutShiftMonitoring || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as any;
          if (!layoutShiftEntry.hadRecentInput) {
            metricsRef.current.layoutShifts.push(layoutShiftEntry.value);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['layout-shift'] });
  }, [enableLayoutShiftMonitoring]);

  const monitorResourceTiming = useCallback(() => {
    if (!enableResourceTiming || typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          metricsRef.current.resourceTimings.push({
            name: resourceEntry.name,
            duration: resourceEntry.duration,
            size: resourceEntry.transferSize || 0
          });
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
  }, [enableResourceTiming]);

  useEffect(() => {
    monitorLongTasks();
    monitorLayoutShifts();
    monitorResourceTiming();

    const interval = setInterval(reportMetrics, reportInterval);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(interval);
    };
  }, [monitorLongTasks, monitorLayoutShifts, monitorResourceTiming, reportMetrics, reportInterval]);

  return {
    metrics: metricsRef.current,
    reportMetrics
  };
};

export default usePerformanceMonitor;