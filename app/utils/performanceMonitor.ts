/**
 * Enhanced Performance Monitoring Utility
 * Tracks and reports performance metrics with Web Vitals support
 */

import { _logger} from './logger';
import { analytics } from './analytics';

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface PerformanceThresholds {
  good: number;
  needsImprovement: number;
}

// Extended types for specific performance entry types
interface _PerformancePaintTiming extends PerformanceEntry {
  name: 'first-paint' | 'first-contentful-paint';
}

interface _LargestContentfulPaint extends PerformanceEntry {
  renderTime: number;
  loadTime: number;
  size: number;
  id: string;
  url: string;
  element: Element | null;
}

interface _PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target: EventTarget | null;
}

class PerformanceMonitor {
  private metrics: Map<string, PerformanceMetric> = new Map();
  private observers: PerformanceObserver[] = [];
  
  // Web Vitals thresholds (in milliseconds)
  private readonly thresholds: Record<string, PerformanceThresholds> = {
    FCP: { good: 1800, needsImprovement: 3000 },
    LCP: { good: 2500, needsImprovement: 4000 },
    FID: { good: 100, needsImprovement: 300 },
    CLS: { good: 0.1, needsImprovement: 0.25 },
    TTFB: { good: 800, needsImprovement: 1800 },
    INP: { good: 200, needsImprovement: 500 },
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
      this.setupNavigationTiming();
      this.setupResourceTiming();
    }
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    try {
      // Observe paint metrics
      if ('PerformanceObserver' in window) {
        // First Contentful Paint
        this.observeEntry('paint', (__entries) => {
          entries.forEach((__entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.recordMetric('FCP', entry.startTime);
            }
          });
        });

        // Largest Contentful Paint
        this.observeEntry('largest-contentful-paint', (__entries) => {
          const lastEntry = entries[entries.length - 1] as any;
          if (lastEntry) {
            this.recordMetric('LCP', lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime);
          }
        });

        // First Input Delay
        this.observeEntry('first-input', (__entries) => {
          const firstInput = entries[0] as any;
          if (firstInput && firstInput.processingStart !== undefined) {
            const fid = firstInput.processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }
        });

        // Cumulative Layout Shift
        this.observeEntry('layout-shift', (__entries) => {
          let clsValue = 0;
          entries.forEach((entry: unknown) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          if (clsValue > 0) {
            this.recordMetric('CLS', clsValue);
          }
        });
      }
    } catch (error) {
      logger.error('Failed to initialize performance observers', error as Error);
    }
  }

  /**
   * Observe specific performance entry types
   */
  private observeEntry(
    type: string,
    callback: (entries: PerformanceEntry[]) => void
  ): void {
    try {
      const observer = new PerformanceObserver((__list) => {
        callback(list.getEntries());
      });
      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      logger.debug(`Could not observe ${type}:`, { error });
    }
  }

  /**
   * Setup navigation timing metrics
   */
  private setupNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const [navigationEntry] = performance.getEntriesByType(
            'navigation'
          ) as PerformanceNavigationTiming[];
          
          if (navigationEntry) {
            // Time to First Byte
            const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
            this.recordMetric('TTFB', ttfb);

            // DOM Content Loaded
            const dcl = navigationEntry.domContentLoadedEventEnd - navigationEntry.fetchStart;
            this.recordMetric('DCL', dcl);

            // Load Complete
            const load = navigationEntry.loadEventEnd - navigationEntry.fetchStart;
            this.recordMetric('Load', load);

            // DNS Lookup
            const dns = navigationEntry.domainLookupEnd - navigationEntry.domainLookupStart;
            this.recordMetric('DNS', dns);

            // TCP Connection
            const tcp = navigationEntry.connectEnd - navigationEntry.connectStart;
            this.recordMetric('TCP', tcp);
          }
        }, 0);
      });
    }
  }

  /**
   * Setup resource timing tracking
   */
  private setupResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((__list) => {
          list.getEntries().forEach((__entry) => {
            if (entry.entryType === 'resource') {
              const resourceEntry = entry as PerformanceResourceTiming;
              this.trackResourceLoad(resourceEntry);
            }
          });
        });
        observer.observe({ entryTypes: ['resource'] });
        this.observers.push(observer);
      } catch (error) {
        logger.debug('Could not observe resource timing:', { error });
      }
    }
  }

  /**
   * Track individual resource load performance
   */
  private trackResourceLoad(entry: PerformanceResourceTiming): void {
    const duration = entry.duration;
    const type = this.getResourceType(entry.name);

    // Only track slow resources
    if (duration > 1000) {
      logger.warn('Slow resource load detected', {
        url: entry.name,
        duration,
        type,
        size: entry.transferSize,
      });

      analytics.trackEvent({
        action: 'slow_resource',
        category: 'performance',
        label: type,
        value: Math.round(duration),
        __metadata: {
          url: entry.name,
          size: entry.transferSize,
        },
      });
    }
  }

  /**
   * Get resource type from URL
   */
  private getResourceType(url: string): string {
    const extension = url.split('.').pop()?.toLowerCase();
    const typeMap: Record<string, string> = {
      js: 'script',
      css: 'style',
      jpg: 'image',
      jpeg: 'image',
      png: 'image',
      gif: 'image',
      svg: 'image',
      webp: 'image',
      woff: 'font',
      woff2: 'font',
      ttf: 'font',
      eot: 'font',
    };
    return typeMap[extension || ''] || 'other';
  }

  /**
   * Record a performance metric
   */
  recordMetric(name: string, value: number): void {
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now(),
    };

    this.metrics.set(name, metric);

    // Log the metric
    logger.perf(name, value, { rating });

    // Track in analytics
    analytics.trackPerformance(name, value, { rating });

    // Warn if performance is poor
    if (rating === 'poor') {
      logger.warn(`Poor ${name} performance detected`, { value, rating });
    }
  }

  /**
   * Get performance rating for a metric
   */
  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const threshold = this.thresholds[name];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Get all recorded metrics
   */
  getMetrics(): Map<string, PerformanceMetric> {
    return new Map(this.metrics);
  }

  /**
   * Get a specific metric
   */
  getMetric(name: string): PerformanceMetric | undefined {
    return this.metrics.get(name);
  }

  /**
   * Mark a custom timing point
   */
  mark(name: string): void {
    if ('performance' in window && 'mark' in performance) {
      performance.mark(name);
    }
  }

  /**
   * Measure time between two marks
   */
  measure(name: string, startMark: string, endMark?: string): number | undefined {
    if ('performance' in window && 'measure' in performance) {
      try {
        if (!endMark) {
          this.mark(`${startMark}-end`);
          endMark = `${startMark}-end`;
        }
        
        performance.measure(name, startMark, endMark);
        const measures = performance.getEntriesByName(name, 'measure');
        const lastMeasure = measures[measures.length - 1];
        
        if (lastMeasure) {
          this.recordMetric(name, lastMeasure.duration);
          return lastMeasure.duration;
        }
      } catch (error) {
        logger.error('Failed to measure performance', error as Error);
      }
    }
    return undefined;
  }

  /**
   * Time an async function
   */
  async timeAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const startMark = `${name}-start`;
    this.mark(startMark);
    
    try {
      const result = await fn();
      this.measure(name, startMark);
      return result;
    } catch (error) {
      this.measure(name, startMark);
      throw error;
    }
  }

  /**
   * Time a synchronous function
   */
  time<T>(name: string, fn: () => T): T {
    const startMark = `${name}-start`;
    this.mark(startMark);
    
    try {
      const result = fn();
      this.measure(name, startMark);
      return result;
    } catch (error) {
      this.measure(name, startMark);
      throw error;
    }
  }

  /**
   * Get performance report
   */
  getReport(): {
    metrics: Record<string, PerformanceMetric>;
    summary: {
      good: number;
      needsImprovement: number;
      poor: number;
    };
  } {
    const metricsObj: Record<string, PerformanceMetric> = {};
    const summary = { good: 0, needsImprovement: 0, poor: 0 };

    this.metrics.forEach((__metric, __name) => {
      metricsObj[name] = metric;
      summary[metric.rating === 'needs-improvement' ? 'needsImprovement' : metric.rating]++;
    });

    return { metrics: metricsObj, summary };
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics.clear();
    if ('performance' in window) {
      try {
        performance.clearMarks();
        performance.clearMeasures();
      } catch (error) {
        logger.debug('Could not clear performance marks:', { error });
      }
    }
  }

  /**
   * Disconnect all observers
   */
  disconnect(): void {
    this.observers.forEach((__observer) => {
      try {
        observer.disconnect();
      } catch (error) {
        logger.debug('Could not disconnect observer:', { error });
      }
    });
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export convenience functions
export const recordMetric = (name: string, value: number) =>
  performanceMonitor.recordMetric(name, value);
export const mark = (name: string) => performanceMonitor.mark(name);
export const measure = (name: string, startMark: string, endMark?: string) =>
  performanceMonitor.measure(name, startMark, endMark);
export const timeAsync = <T>(name: string, fn: () => Promise<T>) =>
  performanceMonitor.timeAsync(name, fn);
export const time = <T>(name: string, fn: () => T) =>
  performanceMonitor.time(name, fn);
export const getPerformanceReport = () => performanceMonitor.getReport();

export default performanceMonitor;