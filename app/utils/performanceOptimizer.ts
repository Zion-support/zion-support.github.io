/**
 * Performance optimization utilities
 * Provides methods for optimizing application performance
 */

import { logger } from './logger';

interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  memory?: number;
  [key: string]: unknown;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.measureWebVitals();
    this.observeResourceTiming();
    this.observeLongTasks();
    this.setupMemoryMonitoring();

    logger.info('Performance monitoring initialized', 'PerformanceOptimizer');
  }

  /**
   * Measure Core Web Vitals
   */
  private measureWebVitals(): void {
    if (!('performance' in window)) return;

    // First Contentful Paint (FCP)
    this.observePaint('first-contentful-paint', 'fcp');

    // Largest Contentful Paint (LCP)
    this.observeLCP();

    // First Input Delay (FID)
    this.observeFID();

    // Cumulative Layout Shift (CLS)
    this.observeCLS();

    // Time to First Byte (TTFB)
    this.measureTTFB();
  }

  private observePaint(entryName: string, metricName: keyof PerformanceMetrics): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === entryName) {
          this.metrics[metricName] = entry.startTime;
          logger.performance(`${String(metricName).toUpperCase()} measured`, { [metricName]: entry.startTime });
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });
    this.observers.push(observer);
  }

  private observeLCP(): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      logger.performance('LCP measured', { lcp: lastEntry.startTime });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(observer);
  }

  private observeFID(): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input' && 'processingStart' in entry && 'startTime' in entry) {
          const fid = (entry as PerformanceEventTiming).processingStart - (entry as PerformanceEventTiming).startTime;
          this.metrics.fid = fid;
          logger.performance('FID measured', { fid });
        }
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
    this.observers.push(observer);
  }

  private observeCLS(): void {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'layout-shift' && 'hadRecentInput' in entry && 'value' in entry) {
          const layoutEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value;
            this.metrics.cls = clsValue;
            logger.performance('CLS measured', { cls: clsValue });
          }
        }
      });
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(observer);
  }

  private measureTTFB(): void {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      this.metrics.ttfb = ttfb;
      logger.performance('TTFB measured', { ttfb });
    }
  }

  /**
   * Observe resource timing for slow resources
   */
  private observeResourceTiming(): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const slowResources = entries.filter((entry) => entry.duration > 1000);
      
      if (slowResources.length > 0) {
        logger.warn('Slow resources detected', 'PerformanceOptimizer', {
          count: slowResources.length,
          resources: slowResources.map((r) => ({
            name: r.name,
            duration: r.duration,
            size: (r as PerformanceResourceTiming).transferSize,
          }))
        });
      }
    });

    observer.observe({ entryTypes: ['resource'] });
    this.observers.push(observer);
  }

  /**
   * Observe long tasks
   */
  private observeLongTasks(): void {
    if (!('PerformanceObserver' in window)) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          logger.warn('Long task detected', 'PerformanceOptimizer', {
            duration: entry.duration,
            startTime: entry.startTime,
          });
        }
      });
    });

    try {
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    } catch {
      logger.warn('Long task observation not supported', 'PerformanceOptimizer');
    }
  }

  /**
   * Setup memory monitoring
   */
  private setupMemoryMonitoring(): void {
    if (!('memory' in performance)) return;

    const checkMemory = () => {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory) {
        this.metrics.memory = memory.usedJSHeapSize;
        
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          logger.warn('High memory usage detected', 'PerformanceOptimizer', {
            used: memory.usedJSHeapSize,
            limit: memory.jsHeapSizeLimit,
            percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100,
          });
        }
      }
    };

    // Check memory every 30 seconds
    setInterval(checkMemory, 30000);
    checkMemory();
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const metrics = this.getMetrics();
    const report = Object.entries(metrics)
      .map(([key, value]) => `${key.toUpperCase()}: ${typeof value === 'number' ? `${value.toFixed(2)}ms` : 'N/A'}`)
      .join('\n');

    logger.info('Performance report generated', 'PerformanceOptimizer', { report });
    return report;
  }

  /**
   * Cleanup observers
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    logger.info('Performance monitoring cleaned up', 'PerformanceOptimizer');
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
