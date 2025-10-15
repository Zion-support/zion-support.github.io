export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  type: 'timing' | 'counter' | 'gauge';
}

export interface PerformanceMetricsConfig {
  enableResourceTiming?: boolean;
  enableNavigationTiming?: boolean;
  enableUserTiming?: boolean;
  enableLongTaskMonitoring?: boolean;
  enableLayoutShiftMonitoring?: boolean;
  reportInterval?: number;
}

export const performanceMetrics = {
  config: {
    enableResourceTiming: true,
    enableNavigationTiming: true,
    enableUserTiming: true,
    enableLongTaskMonitoring: true,
    enableLayoutShiftMonitoring: true,
    reportInterval: 30000
  } as PerformanceMetricsConfig,

  metrics: [] as PerformanceMetric[],
  observers: [] as PerformanceObserver[],

  // Initialize performance monitoring
  init: (config: PerformanceMetricsConfig = {}): void => {
    performanceMetrics.config = { ...performanceMetrics.config, ...config };
    performanceMetrics.startMonitoring();
  },

  // Start monitoring performance metrics
  startMonitoring: (): void => {
    if (typeof window === 'undefined') return;

    // Monitor resource timing
    if (performanceMetrics.config.enableResourceTiming) {
      const resourceObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            performanceMetrics.addMetric({
              name: 'resource_load_time',
              value: resourceEntry.duration,
              timestamp: Date.now(),
              type: 'timing'
            });
          }
        });
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      performanceMetrics.observers.push(resourceObserver);
    }

    // Monitor long tasks
    if (performanceMetrics.config.enableLongTaskMonitoring) {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'longtask') {
            performanceMetrics.addMetric({
              name: 'long_task_duration',
              value: entry.duration,
              timestamp: Date.now(),
              type: 'timing'
            });
          }
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      performanceMetrics.observers.push(longTaskObserver);
    }

    // Monitor layout shifts
    if (performanceMetrics.config.enableLayoutShiftMonitoring) {
      const layoutShiftObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'layout-shift') {
            const layoutShiftEntry = entry as any;
            if (!layoutShiftEntry.hadRecentInput) {
              performanceMetrics.addMetric({
                name: 'layout_shift_score',
                value: layoutShiftEntry.value,
                timestamp: Date.now(),
                type: 'gauge'
              });
            }
          }
        });
      });
      layoutShiftObserver.observe({ entryTypes: ['layout-shift'] });
      performanceMetrics.observers.push(layoutShiftObserver);
    }

    // Collect navigation timing
    if (performanceMetrics.config.enableNavigationTiming) {
      performanceMetrics.collectNavigationTiming();
    }

    // Set up periodic reporting
    setInterval(() => {
      performanceMetrics.reportMetrics();
    }, performanceMetrics.config.reportInterval);
  },

  // Add a custom metric
  addMetric: (metric: PerformanceMetric): void => {
    performanceMetrics.metrics.push(metric);
  },

  // Collect navigation timing metrics
  collectNavigationTiming: (): void => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return;

    const metrics = [
      { name: 'dom_content_loaded', value: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart },
      { name: 'load_complete', value: navigation.loadEventEnd - navigation.loadEventStart },
      { name: 'dom_interactive', value: navigation.domInteractive - navigation.navigationStart },
      { name: 'first_paint', value: navigation.domContentLoadedEventEnd - navigation.navigationStart }
    ];

    metrics.forEach(({ name, value }) => {
      performanceMetrics.addMetric({
        name,
        value,
        timestamp: Date.now(),
        type: 'timing'
      });
    });
  },

  // Get metrics by name
  getMetrics: (name?: string): PerformanceMetric[] => {
    if (name) {
      return performanceMetrics.metrics.filter(metric => metric.name === name);
    }
    return [...performanceMetrics.metrics];
  },

  // Get average value for a metric
  getAverageValue: (name: string): number => {
    const metrics = performanceMetrics.getMetrics(name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  },

  // Get latest value for a metric
  getLatestValue: (name: string): number | null => {
    const metrics = performanceMetrics.getMetrics(name);
    if (metrics.length === 0) return null;
    
    const latest = metrics.reduce((latest, current) => 
      current.timestamp > latest.timestamp ? current : latest
    );
    return latest.value;
  },

  // Clear all metrics
  clearMetrics: (): void => {
    performanceMetrics.metrics = [];
  },

  // Report metrics to analytics
  reportMetrics: (): void => {
    if (typeof window === 'undefined' || !(window as any).gtag) return;

    const metrics = performanceMetrics.getMetrics();
    metrics.forEach(metric => {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: metric.name,
        metric_value: metric.value,
        metric_type: metric.type,
        timestamp: metric.timestamp
      });
    });
  },

  // Stop monitoring
  stopMonitoring: (): void => {
    performanceMetrics.observers.forEach(observer => observer.disconnect());
    performanceMetrics.observers = [];
  }
};

export default performanceMetrics;