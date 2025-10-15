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
  longTasks?: number;
  resourceTiming?: Record<string, number>;
}

interface PerformanceMonitoringOptions {
  enableMemoryMonitoring?: boolean;
  enableResourceTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  reportInterval?: number;
  memoryThreshold?: number;
  longTaskThreshold?: number;
}

export const useAdvancedPerformanceMonitoring = (options: PerformanceMonitoringOptions = {}) => {
  const {
    enableMemoryMonitoring = true,
    enableLayoutShiftMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8
  } = options;

  const metricsRef = useRef<PerformanceMetrics>({});
  const reportIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const reportMetric = useCallback((name: string, value: number) => {
    // Report to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric: name,
        value,
        custom_parameter: 'performance_monitoring'
      });
    }
  }, []);

  const reportMetrics = useCallback(() => {
    const metrics = metricsRef.current;
    Object.entries(metrics).forEach(([key, value]) => {
      if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (typeof subValue === 'number') {
            reportMetric(`${key.toUpperCase()}_${subKey.toUpperCase()}`, subValue);
          }
        });
      } else if (typeof value === 'number') {
        reportMetric(key.toUpperCase(), value);
      }
    });
  }, [reportMetric]);

  const setupPerformanceObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            const paintEntry = entry as PerformancePaintTiming;
            if (paintEntry.name === 'first-contentful-paint') {
              metricsRef.current.fcp = paintEntry.startTime;
            }
          } else if (entry.entryType === 'largest-contentful-paint') {
            const lcpEntry = entry as PerformanceEntry & {
              duration?: number;
              processingStart?: number;
              hadRecentInput?: boolean;
              value?: number;
            };
            if (lcpEntry.value !== undefined) {
              metricsRef.current.lcp = lcpEntry.value;
            }
          } else if (entry.entryType === 'first-input') {
            const fidEntry = entry as PerformanceEntry & {
              duration?: number;
              processingStart?: number;
              hadRecentInput?: boolean;
              value?: number;
            };
            if (fidEntry.processingStart && fidEntry.startTime) {
              metricsRef.current.fid = fidEntry.processingStart - fidEntry.startTime;
            }
          } else if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as PerformanceEntry & {
              duration?: number;
              processingStart?: number;
              hadRecentInput?: boolean;
              value?: number;
            };
            if (!clsEntry.hadRecentInput && clsEntry.value !== undefined) {
              metricsRef.current.cls = (metricsRef.current.cls || 0) + clsEntry.value;
            }
          } else if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            metricsRef.current.ttfb = navEntry.responseStart - navEntry.requestStart;
          }
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] });
      return () => observer.disconnect();
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
      return () => {};
    }
  }, []);

  const setupMemoryMonitoring = useCallback(() => {
    if (!enableMemoryMonitoring || typeof window === 'undefined') return;

    const checkMemory = () => {
      const memory = (performance as any).memory;
      if (memory) {
        const usedMB = memory.usedJSHeapSize / 1048576;
        const totalMB = memory.totalJSHeapSize / 1048576;
        const limitMB = memory.jsHeapSizeLimit / 1048576;
        
        metricsRef.current.memory = {
          used: usedMB,
          total: totalMB,
          limit: limitMB
        };

        if (usedMB / limitMB > memoryThreshold) {
          console.warn('High memory usage detected:', { usedMB, limitMB });
        }
      }
    };

    const interval = setInterval(checkMemory, 10000); // Check every 10 seconds
    return () => clearInterval(interval);
  }, [enableMemoryMonitoring, memoryThreshold]);

  const setupLayoutShiftMonitoring = useCallback(() => {
    if (!enableLayoutShiftMonitoring || typeof window === 'undefined') return;

    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const clsEntry = entry as PerformanceEntry & { value?: number };
        if (clsEntry.value !== undefined) {
          clsValue += clsEntry.value;
          metricsRef.current.cls = clsValue;
        }
      }
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      return () => clsObserver.disconnect();
    } catch (error) {
      console.warn('Layout Shift Observer not supported:', error);
      return () => {};
    }
  }, [enableLayoutShiftMonitoring]);

  useEffect(() => {
    // Setup all monitoring
    const performanceCleanup = setupPerformanceObserver();
    const memoryCleanup = setupMemoryMonitoring();
    const clsCleanup = setupLayoutShiftMonitoring();

    // Setup periodic reporting
    reportIntervalRef.current = setInterval(reportMetrics, reportInterval);

    // Report on page unload
    const handleBeforeUnload = () => {
      reportMetrics();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      if (performanceCleanup) performanceCleanup();
      if (memoryCleanup) memoryCleanup();
      if (clsCleanup) clsCleanup();
      if (reportIntervalRef.current) {
        clearInterval(reportIntervalRef.current);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [
    setupPerformanceObserver,
    setupMemoryMonitoring,
    setupLayoutShiftMonitoring,
    reportMetrics,
    reportInterval
  ]);

  return {
    metrics: metricsRef.current,
    reportMetric,
    reportMetrics
  };
};

export default useAdvancedPerformanceMonitoring;