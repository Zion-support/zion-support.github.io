/**
 * Enhanced Performance Monitoring Utility
 * Tracks and reports web vitals and custom performance metrics
 */

import { analytics } from './analytics';

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  rating?: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface WebVitalsMetrics {
  cls?: number;
  fid?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private webVitals: WebVitalsMetrics = {};
  private readonly thresholds = {
    cls: { good: 0.1, poor: 0.25 },
    fid: { good: 100, poor: 300 },
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    ttfb: { good: 800, poor: 1800 },
    inp: { good: 200, poor: 500 },
  };

  /**
   * Initialize performance monitoring
   */
  initialize(): void {
    if (typeof window === 'undefined') return;

    try {
      // Monitor Web Vitals
      this.observeWebVitals();

      // Monitor resource timing
      this.observeResourceTiming();

      // Monitor long tasks
      this.observeLongTasks();

      // Monitor paint timing
      this.observePaintTiming();
    } catch (error) {
      console.error('Performance monitoring initialization failed:', error);
    }
  }

  /**
   * Record a custom performance metric
   */
  recordMetric(name: string, value: number, unit: string = 'ms'): void {
    try {
      const metric: PerformanceMetric = {
        name,
        value,
        unit,
        timestamp: Date.now(),
      };

      this.metrics.set(name, metric);

      // Track in analytics
      analytics.trackTiming('performance', name, value, unit);

      // Log in development
      if (process.env['NODE_ENV'] === 'development') {
        console.log(`Performance: ${name} = ${value}${unit}`);
      }
    } catch (error) {
      console.error('Failed to record metric:', error);
    }
  }

  /**
   * Start a performance measurement
   */
  startMeasure(name: string): void {
    try {
      if ('performance' in window && 'mark' in performance) {
        performance.mark(`${name}-start`);
      }
    } catch (error) {
      console.error('Failed to start measure:', error);
    }
  }

  /**
   * End a performance measurement
   */
  endMeasure(name: string): number | null {
    try {
      if ('performance' in window && 'mark' in performance && 'measure' in performance) {
        performance.mark(`${name}-end`);
        const measure = performance.measure(
          name,
          `${name}-start`,
          `${name}-end`
        );
        const duration = measure?.duration || 0;
        this.recordMetric(name, duration);
        return duration;
      }
    } catch (error) {
      console.error('Failed to end measure:', error);
    }
    return null;
  }

  /**
   * Get all recorded metrics
   */
  getMetrics(): PerformanceMetric[] {
    return Array.from(this.metrics.values());
  }

  /**
   * Get web vitals metrics
   */
  getWebVitals(): WebVitalsMetrics {
    return { ...this.webVitals };
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
  }

  /**
   * Observe Web Vitals using PerformanceObserver
   */
  private observeWebVitals(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      // Largest Contentful Paint (LCP)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        const value = lastEntry.renderTime || lastEntry.loadTime;
        this.webVitals.lcp = value;
        this.recordMetric('LCP', value, 'ms');
      }).observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          const value = entry.processingStart - entry.startTime;
          this.webVitals.fid = value;
          this.recordMetric('FID', value, 'ms');
        });
      }).observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries() as any[]) {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        }
        this.webVitals.cls = clsValue;
        this.recordMetric('CLS', clsValue, 'score');
      }).observe({ entryTypes: ['layout-shift'] });
    } catch (error) {
      console.error('Failed to observe web vitals:', error);
    }
  }

  /**
   * Observe resource timing
   */
  private observeResourceTiming(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.initiatorType === 'script' || entry.initiatorType === 'link') {
            const duration = entry.responseEnd - entry.startTime;
            if (duration > 1000) {
              // Log slow resources
              console.warn(
                `Slow resource: ${entry.name} took ${duration.toFixed(2)}ms`
              );
            }
          }
        });
      }).observe({ entryTypes: ['resource'] });
    } catch (error) {
      console.error('Failed to observe resource timing:', error);
    }
  }

  /**
   * Observe long tasks
   */
  private observeLongTasks(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          console.warn(`Long task detected: ${entry.duration.toFixed(2)}ms`);
          this.recordMetric('long-task', entry.duration);
        });
      }).observe({ entryTypes: ['longtask'] });
    } catch (error) {
      // Long task API not supported, silently fail
    }
  }

  /**
   * Observe paint timing
   */
  private observePaintTiming(): void {
    try {
      if ('performance' in window && 'getEntriesByType' in performance) {
        const paintEntries = performance.getEntriesByType('paint');
        paintEntries.forEach((entry: any) => {
          if (entry.name === 'first-contentful-paint') {
            this.webVitals.fcp = entry.startTime;
            this.recordMetric('FCP', entry.startTime, 'ms');
          }
        });
      }
    } catch (error) {
      console.error('Failed to observe paint timing:', error);
    }
  }

  /**
   * Get rating for a metric
   */
  private getRating(
    metricName: keyof typeof this.thresholds,
    value: number
  ): 'good' | 'needs-improvement' | 'poor' {
    const threshold = this.thresholds[metricName];
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Initialize on import
if (typeof window !== 'undefined') {
  performanceMonitor.initialize();
}

// Export convenience functions
export const recordMetric = (name: string, value: number, unit?: string) =>
  performanceMonitor.recordMetric(name, value, unit);
export const startMeasure = (name: string) => performanceMonitor.startMeasure(name);
export const endMeasure = (name: string) => performanceMonitor.endMeasure(name);
export const getMetrics = () => performanceMonitor.getMetrics();
export const getWebVitals = () => performanceMonitor.getWebVitals();

export default performanceMonitor;