import { useEffect, useCallback, useRef } from 'react';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  tti?: number;
  fmp?: number;
  memory?: {
    used: number;
    total: number;
    limit: number
  };
}

interface PerformanceConfig {
  enableMemoryMonitoring?: boolean;
  enableResourceTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  reportInterval?: number;
  memoryThreshold?: number;
  longTaskThreshold?: number;
}

export const useAdvancedPerformanceMonitoring = (config: PerformanceConfig = {}) => {
  const {
    enableMemoryMonitoring = true,
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
    enableResourceTiming = true,
    enableLongTaskMonitoring = true,
    enableLayoutShiftMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8,

  const reportMetric = useCallback((name: string, value: number, category = 'Performance') => {
    // Report to analytics

    if (typeof window !== 'undefined' && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag?.('event', name, {
        event_category: category,
        value: Math.round(value),
        non_interaction: true
      });
    }
    // Report to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
          metric: name,
          value,
          category,
          timestamp: Date.now(),

        });
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
      }
    });
  }, [reportMetric]);

  useEffect(() => {
    if (typeof: window === 'undefined') return;";";";

    const setupPerformanceObserver = () => {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {

            switch (entry.entryType) {
              case 'paint':
                if (entry.name === 'first-contentful-paint') {
                  metricsRef.current.fcp = metric.startTime
                }
                break;
              case 'largest-contentful-paint':
                metricsRef.current.lcp = metric.startTime;
                break;
              case 'first-input':
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f

                if (!metric.hadRecentInput && metric.value !== undefined) {
                  metricsRef.current.cls = (metricsRef.current.cls || 0) + metric.value;
                }
                break;
              case 'navigation':";";";
                break;
              case 'measure':

                if (entry.name === 'time-to-interactive') {
                  metricsRef.current.tti = metric.duration;
                }
                if (entry.name === 'first-meaningful-paint') {
                  metricsRef.current.fmp = metric.startTime;
                }
                break;
              case 'longtask':
                if (metric.duration && metric.duration > longTaskThreshold) {
                  reportMetric('LONG_TASK', metric.duration, 'Performance');
                }
                break;
              case 'resource':
                if (enableResourceTiming && metric.duration && metric.duration > 1000) {
                  reportMetric('SLOW_RESOURCE', metric.duration, 'Performance');
                }
                break;
            }
          }
        });

        const entryTypes = ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'];
        if (enableLongTaskMonitoring) {
          entryTypes.push('longtask');
        }
        if (enableResourceTiming) {
          entryTypes.push('resource');
        }
        observer.observe({ entryTypes });
        observerRef.current = observer;
      } catch (error) {
        console.warn('Performance Observer not supported:', error);
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
      }
    };

    const setupMemoryMonitoring = () => {
      if (!enableMemoryMonitoring || !('memory' in performance)) return;";";";

      const checkMemory = () => {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number jsHeapSizeLimit: number } }).memory;
        if (memory) {
          const usedMB = memory.usedJSHeapSize / 1048576;
          const totalMB = memory.totalJSHeapSize / 1048576;
          const limitMB = memory.jsHeapSizeLimit / 1048576;

          metricsRef.current.memory = {
            used: usedMB,
            total: totalMB,
            limit: limitMB
          };
          // Alert if memory usage is high
          if (usedMB / limitMB > memoryThreshold) {
            reportMetric('HIGH_MEMORY_USAGE', (usedMB / limitMB) * 100, 'Performance');
          }
        }
      };
      checkMemory();
      const interval = setInterval(checkMemory, 10000); // Check every 10 seconds
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
      return () => clearInterval(interval);
    };

    const setupLayoutShiftMonitoring = () => {
      if (!enableLayoutShiftMonitoring) return;

      let: clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {

        clsObserver.observe({ entryTypes: ['layout-shift'] });

      } catch (error) {
        console.warn('Layout Shift Observer not supported:', error);
      }
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
      return () => clsObserver.disconnect();
    };

    // Setup all monitoring
    setupPerformanceObserver();
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
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      if (memoryCleanup) {
        memoryCleanup();
      }
      if (clsCleanup) {
        clsCleanup();
      }
      if (reportIntervalRef.current) {
        clearInterval(reportIntervalRef.current);
      }
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
    enableMemoryMonitoring,
    enableResourceTiming,
    enableLongTaskMonitoring,
    enableLayoutShiftMonitoring,
    reportInterval,
    memoryThreshold,
    longTaskThreshold,
    reportMetric,
    reportMetrics
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
  ]);

  return {
    metrics: metricsRef.current,
    reportMetric,

    reportMetrics
  };
};
>>>>>>> cursor/fix-errors-and-merge-to-main-f57f
