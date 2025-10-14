import { logger } from './logger';

interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  context?: Record<string, unknown>;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceTiming();
    
    // Monitor navigation timing
    this.observeNavigationTiming();
  }

  private observeWebVitals(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const metric = {
            name: entry.name,
            value: entry.startTime,
            timestamp: Date.now(),
            context: {
              entryType: entry.entryType,
              duration: entry.duration
            }
          };
          
          this.recordMetric(metric);
        }
      });

      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      logger.warn('Failed to initialize Web Vitals monitoring', { error: error.message });
    }
  }

  private observeResourceTiming(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          const metric = {
            name: `resource_${resourceEntry.name}`,
            value: resourceEntry.duration,
            timestamp: Date.now(),
            context: {
              type: resourceEntry.initiatorType,
              size: resourceEntry.transferSize,
              cached: resourceEntry.transferSize === 0
            }
          };
          
          this.recordMetric(metric);
        }
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      logger.warn('Failed to initialize resource timing monitoring', { error: error.message });
    }
  }

  private observeNavigationTiming(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const navEntry = entry as PerformanceNavigationTiming;
          const metrics = [
            {
              name: 'dom_content_loaded',
              value: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              timestamp: Date.now()
            },
            {
              name: 'load_complete',
              value: navEntry.loadEventEnd - navEntry.loadEventStart,
              timestamp: Date.now()
            },
            {
              name: 'first_byte',
              value: navEntry.responseStart - navEntry.requestStart,
              timestamp: Date.now()
            }
          ];

          metrics.forEach(metric => this.recordMetric(metric));
        }
      });

      observer.observe({ entryTypes: ['navigation'] });
      this.observers.push(observer);
    } catch (error) {
      logger.warn('Failed to initialize navigation timing monitoring', { error: error.message });
    }
  }

  private recordMetric(metric: PerformanceMetric): void {
    this.metrics.push(metric);
    
    // Log performance metrics
    logger.performance(metric.name, metric.value, metric.context);
    
    // Keep only last 100 metrics to prevent memory leaks
    if (this.metrics.length > 100) {
      this.metrics = this.metrics.slice(-100);
    }
  }

  // Manual performance measurement
  measure<T>(name: string, fn: () => T, context?: Record<string, unknown>): T {
    const start = performance.now();
    const result = fn();
    const duration = performance.now() - start;
    
    this.recordMetric({
      name,
      value: duration,
      timestamp: Date.now(),
      context
    });
    
    return result;
  }

  // Async performance measurement
  async measureAsync<T>(name: string, fn: () => Promise<T>, context?: Record<string, unknown>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const duration = performance.now() - start;
    
    this.recordMetric({
      name,
      value: duration,
      timestamp: Date.now(),
      context
    });
    
    return result;
  }

  // Get performance metrics
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  // Get metrics by name
  getMetricsByName(name: string): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.name === name);
  }

  // Get average performance for a metric
  getAveragePerformance(name: string): number {
    const metrics = this.getMetricsByName(name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  }

  // Clear metrics
  clearMetrics(): void {
    this.metrics = [];
  }

  // Cleanup observers
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();
export default performanceMonitor;
