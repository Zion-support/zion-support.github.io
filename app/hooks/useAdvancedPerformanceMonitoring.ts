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
    limit: number;
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
    enableResourceTiming = true,
    enableLongTaskMonitoring = true,
    enableLayoutShiftMonitoring = true,
    reportInterval = 30000,
    memoryThreshold = 0.8,
    longTaskThreshold = 50,
  } = config;

  const metricsRef = useRef<PerformanceMetrics>({});
  const observerRef = useRef<PerformanceObserver | null>(null);
  const reportIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const reportMetric = useCallback((name: string, value: number, category = 'Performance', _metadata?: any) => {
    // Report to analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
<<<<<<< HEAD
      (window as any)['gtag']('event', name, {
=======
      (window as unknown as { gtag: (event: string, name: string, options: Record<string, unknown>) => void }).gtag('event', name, {
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-145c
        event_category: category,
        value: Math.round(value),
        non_interaction: true,
      });
    }

    // Report to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metric: name,
          value,
          category,
          timestamp: Date.now(),
          url: window.location.href,
        }),
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }

    // Log in development (commented out for production)
    // if (process.env.NODE_ENV === 'development') {
    //   console.log(`Performance Metric - ${name}:`, value);
    // }
  }, []);

  const reportMetrics = useCallback(() => {
    const metrics = metricsRef.current;
    
    Object.entries(metrics).forEach(([key, value]) => {
      if (typeof value === 'number' && !isNaN(value)) {
        reportMetric(key.toUpperCase(), value);
      } else if (typeof value === 'object' && value !== null) {
        Object.entries(value).forEach(([subKey, subValue]) => {
          if (typeof subValue === 'number' && !isNaN(subValue)) {
            reportMetric(`${key.toUpperCase()}_${subKey.toUpperCase()}`, subValue);
          }
        });
      }
    });
  }, [reportMetric]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const setupPerformanceObserver = () => {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
<<<<<<< HEAD
            const metric = entry as PerformanceEntry & { startTime: number; value?: number; hadRecentInput?: boolean };
=======
            const metric = entry as PerformanceEntry & { startTime?: number; value?: number };
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-145c
            
            switch (entry.entryType) {
              case 'paint':
                if (entry.name === 'first-contentful-paint') {
                  metricsRef.current.fcp = metric.startTime;
                }
                break;
              
              case 'largest-contentful-paint':
                metricsRef.current.lcp = metric.startTime;
                break;
              
              case 'first-input':
                metricsRef.current.fid = (metric as any).processingStart - metric.startTime;
                break;
              
              case 'layout-shift':
                if (!metric.hadRecentInput) {
                  metricsRef.current.cls = (metricsRef.current.cls || 0) + (metric.value || 0);
                }
                break;
              
              case 'navigation':
                metricsRef.current.ttfb = (metric as any).responseStart - (metric as any).requestStart;
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
                if (metric.duration > longTaskThreshold) {
                  reportMetric('LONG_TASK', metric.duration, 'Performance');
                }
                break;
              
              case 'resource':
                if (enableResourceTiming && metric.duration > 1000) {
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

      } catch {
        // console.warn('Performance Observer setup failed:', error);
      }
    };

    const setupMemoryMonitoring = () => {
      if (!enableMemoryMonitoring || !('memory' in performance)) return;

      const checkMemory = () => {
        const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
<<<<<<< HEAD
        if (memory) {
          const usedMB = memory.usedJSHeapSize / 1048576;
          const totalMB = memory.totalJSHeapSize / 1048576;
          const limitMB = memory.jsHeapSizeLimit / 1048576;
=======
        const usedMB = memory.usedJSHeapSize / 1048576;
        const totalMB = memory.totalJSHeapSize / 1048576;
        const limitMB = memory.jsHeapSizeLimit / 1048576;
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-145c

          metricsRef.current.memory = {
            used: usedMB,
            total: totalMB,
            limit: limitMB,
          };
          // Alert if memory usage is high
          if (usedMB / limitMB > memoryThreshold) {
            reportMetric('HIGH_MEMORY_USAGE', (usedMB / limitMB) * 100, 'Performance');
          }
        }
      };

      checkMemory();
      const interval = setInterval(checkMemory, 10000); // Check every 10 seconds
      
      return () => clearInterval(interval);
    };

    const setupLayoutShiftMonitoring = () => {
      if (!enableLayoutShiftMonitoring) return;

      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
<<<<<<< HEAD
          const metric = entry as PerformanceEntry & { value: number; hadRecentInput: boolean };
=======
          const metric = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-145c
          if (!metric.hadRecentInput) {
            clsValue += metric.value;
            metricsRef.current.cls = clsValue;
          }
        }
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch {
        // console.warn('Layout shift monitoring not supported:', error);
      }

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
    enableMemoryMonitoring,
    enableResourceTiming,
    enableLongTaskMonitoring,
    enableLayoutShiftMonitoring,
    reportInterval,
    memoryThreshold,
    longTaskThreshold,
<<<<<<< HEAD
=======
    reportMetrics,
>>>>>>> cursor/enhance-application-with-new-services-and-improvements-145c
    reportMetric,
  ]);

  return {
    metrics: metricsRef.current,
    reportMetric,
    reportMetrics,
  };
};