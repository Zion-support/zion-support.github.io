interface PerformanceUtilsOptions {
  enableMetrics: boolean;
  enableMonitoring: boolean;
  sampleRate: number;
}

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  type: 'navigation' | 'paint' | 'measure' | 'custom';
}

class PerformanceUtils {
  private options: PerformanceUtilsOptions;

  constructor(options: PerformanceUtilsOptions = {
    enableMetrics: true,
    enableMonitoring: true,
    sampleRate: 1.0
  }) {
    this.options = options;
  }

  // Measure performance of a function
  measureFunction<T>(name: string, fn: () => T): T {
    if (!this.options.enableMetrics) {
      return fn();
    }

    const start = performance.now();
    const result = fn();
    const end = performance.now();
    
    this.recordMetric({
      name,
      value: end - start,
      timestamp: Date.now(),
      type: 'measure'
    });

    return result;
  }

  // Measure performance of an async function
  async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    if (!this.options.enableMetrics) {
      return fn();
    }

    const start = performance.now();
    const result = await fn();
    const end = performance.now();
    
    this.recordMetric({
      name,
      value: end - start,
      timestamp: Date.now(),
      type: 'measure'
    });

    return result;
  }

  // Get Web Vitals metrics
  getWebVitals(): PerformanceMetric[] {
    const metrics: PerformanceMetric[] = [];

    // First Contentful Paint
    const fcp = performance.getEntriesByName('first-contentful-paint')[0];
    if (fcp) {
      metrics.push({
        name: 'FCP',
        value: fcp.startTime,
        timestamp: Date.now(),
        type: 'paint'
      });
    }

    // Largest Contentful Paint
    const lcp = performance.getEntriesByType('largest-contentful-paint')[0];
    if (lcp) {
      metrics.push({
        name: 'LCP',
        value: lcp.startTime,
        timestamp: Date.now(),
        type: 'paint'
      });
    }

    return metrics;
  }

  // Record a custom metric
  recordMetric(metric: PerformanceMetric): void {
    if (!this.options.enableMetrics) return;

    // Only record if within sample rate
    if (Math.random() > this.options.sampleRate) return;

    // Store metric (could be sent to analytics service)
    console.log('Performance Metric:', metric);
  }

  // Get memory usage
  getMemoryUsage(): any {
    if ('memory' in performance) {
      return (performance as any).memory;
    }
    return null;
  }

  // Check if performance monitoring is supported
  isSupported(): boolean {
    return 'performance' in window && 'now' in performance;
  }
}

export const performanceUtils = new PerformanceUtils();
export default PerformanceUtils;