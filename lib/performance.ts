/**
 * Performance monitoring utilities
 */

export interface PerformanceMetrics {
  name: string;
  startTime: number;
  endTime?: number;
  duration?: number;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetrics> = new Map();

  /**
   * Start timing a performance metric
   */
  start(name: string): void {
    if (typeof window !== 'undefined' && window.performance) {
      this.metrics.set(name, {
        name,
        startTime: window.performance.now(),
      });
    }
  }

  /**
   * End timing a performance metric
   */
  end(name: string): PerformanceMetrics | null {
    const metric = this.metrics.get(name);
    if (!metric) {
      return null;
    }

    if (typeof window !== 'undefined' && window.performance) {
      const endTime = window.performance.now();
      const duration = endTime - metric.startTime;
      const completedMetric: PerformanceMetrics = {
        ...metric,
        endTime,
        duration,
      };
      this.metrics.set(name, completedMetric);
      if (process.env.NODE_ENV === 'development') {
        // console.log(`Performance: ${name} took ${duration.toFixed(2)}ms`)
      }
      return completedMetric;
    }

    return null;
  }

  /**
   * Get all performance metrics
   */
  getAllMetrics(): PerformanceMetrics[] {
    return Array.from(this.metrics.values());
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics.clear();
  }

  /**
   * Measure a function's execution time
   */
  async measure<T>(name: string, fn: () => Promise<T>): Promise<T> {
    this.start(name);
    try {
      const result = await fn();
      this.end(name);
      return result;
    } catch (error) {
      this.end(name);
      throw error;
    }
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Web Vitals monitoring
export function reportWebVitals(metric: any) {
  if (process.env.NODE_ENV === 'development') {
    // console.log('Web Vitals:', metric)
  }

  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Send to analytics
    // analytics.track('web_vitals', metric)
  }
}

// Performance observer for Core Web Vitals
export function observeWebVitals() {
  if (typeof window === 'undefined') return;
  // Observe Largest Contentful Paint
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          reportWebVitals({
            name: entry.name,
            value: entry.startTime,
            id: entry.name,
          });
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (error) {
      // ignore unsupported environments
    }
  }
}