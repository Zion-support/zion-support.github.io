<<<<<<< HEAD
'use client';
/**;
 * Advanced Performance Monitoring Utility;
 * Tracks Core Web Vitals and custom metrics;
 */;
interface PerformanceMetrics {fcp?: number; // First Contentful Paint;}
  lcp?: number; // Largest Contentful Paint;
  fid?: number; // First Input Delay;
  cls?: number; // Cumulative Layout Shift;
  ttfb?: number; // Time to First Byte;
  fmp?: number; // First Meaningful Paint;
  customMetrics: Record<string, number>;
  customMetrics: Record<string, number>;</strin>
class PerformanceMonitor {}}private metrics: PerformanceMetrics = {,}customMetrics: {,}interface PerformanceMetrics {/* TODO: Fix JSX expression */,}}}
class PerformanceMonitor {/* TODO: Fix JSX expression */,}}s: {,}}
  private,;
  observers: PerformanceObserver[] = [],
  };
  init(): void {}}if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();,
    this.setupResourceTiming();
  init(): void {/* TODO: Fix JSX expression */}
  }
  /**
            if (entry.name === 'first-contentful-paint') {}private initializeObservers(): void {}}try {}}// Observe paint metrics;
      if ('PerformanceObserver' in window) {}// First Contentful Paint;
        this.observeEntry('paint', (entries) => {}entries.forEach((entry) => {}if (entry.name === 'first-contentful-paint') {}this.recordMetric('FCP', entry.startTime);
            }
// Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {)
    );
          const lastEntry = entries[entries.length - 1]);
          if (lastEntry) {
            this.recordMetric('LCP');
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            )}}
// First Input Delay;
        this.observeEntry('first-input', entries => {)
    );
          const firstInput = entries[0]);
              this.recordMetric('FCP', entry.startTime);
            }


        // Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {)
          const lastEntry = entries[entries.length - 1];)
          if (lastEntry) {
            this.recordMetric('LCP')
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            );
          }

        // First Input Delay;
        this.observeEntry('first-input', entries => {)
          const firstInput = entries[0];)
        // Largest Contentful Paint;}this.observeEntry('largest-contentful-paint', entries => {)}const lastEntry = entries[entries.length - 1]
          if (lastEntry) {}this.recordMetric();
              'LCP',;
        this.observeEntry('largest-contentful-paint', entries => {</div>
          const lastEntry = entries[entries.length - 1];
              (lastEntry as any).renderTime || (lastEntry as any).loadTime || lastEntry.startTime;
            );
          }
// First Input Delay;
        this.observeEntry('first-input', entries => {)}const firstInput = entries[0]
          if (firstInput && (firstInput as any).processingStart !== undefined) {}const fid = (firstInput as any).processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }
// Cumulative Layout Shift;
        this.observeEntry('layout-shift', (entries) => {let clsValue = 0;
            );
          }

        // First Input Delay
        this.observeEntry('first-input', entries => {</div>
          const firstInput = entries[0];
          if (firstInput && (firstInput as any).processingStart !== undefined) {}
            const fid = (firstInput as any).processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }

        // Cumulative Layout Shift;
            if (!(entry as any).hadRecentInput) {,;
        // Cumulative Layout Shift;}this.observeEntry('layout-shift', (entries) => {}let clsValue = 0;
          entries.forEach((entry: PerformanceEntry) => {,}if (!(entry as any).hadRecentInput) {}clsValue += (entry as any).value;
              clsValue += (entry as any).value;
            }

          if (clsValue > 0) {}
            this.recordMetric('CLS', clsValue);
  private initializeObservers(): void {/* TODO: Fix JSX expression */}
            }
          });
        });
        // Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {/* TODO: Fix JSX expression */}
          })
        });
        // First Input Delay;
        this.observeEntry('first-input', entries => {/* TODO: Fix JSX expression */}
          })
        });
        // Cumulative Layout Shift;
        this.observeEntry('layout-shift', (entries) => {/* TODO: Fix JSX expression */}
            }
          });
          if (clsValue > 0) {/* TODO: Fix JSX expression */}
          }

      }
    } catch (error) {}
      logger.error('Failed to initialize performance observers', error as Error);
        // Largest Contentful Paint;
        this.observeEntry('largest-contentful-paint', entries => {/* TODO: Fix JSX expression */,)}})
        })
        // First Input Delay;
        this.observeEntry('first-input', entries => {/* TODO: Fix JSX expression */,)}})
        })
        // Cumulative Layout Shift;
        this.observeEntry('layout-shift', (entries) => {/* TODO: Fix JSX expression */,}}
    } catch (error) {}logger.error('Failed to initialize performance observers', error as Error);
  private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {,}
    try {,}
      const observer = new PerformanceObserver((list) => {,;
        for (const entry of list.getEntries()) {,;
          if (entry.name === name) {,;
            (this.metrics as any)[metricKey] = entry.startTime;,}private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {,}}try {}}const observer = new PerformanceObserver((list) => {}for (const entry of list.getEntries()) {}if (entry.name === name) {}(this.metrics as any)[metricKey] = entry.startTime;
            (this.metrics as any)[metricKey] = entry.startTime;
            this.logMetric(metricKey as string, entry.startTime);
          }
        }

      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {}
      }
  private observeLCP(): void {}}try {}}const observer = new PerformanceObserver((list) => {}const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1]
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.logMetric('lcp', lastEntry.startTime);

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
  private observePaint(nam,;)
          this.metrics.fid = (entry as any).processingStart - entry.startTime;
          this.logMetric('fid', this.metrics.fid);
        }

      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
            clsValue += (entry as any).value;
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['paint'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeLCP(): void {/* TODO: Fix JSX expression */}
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeFID(): void {/* TODO: Fix JSX expression */}
        }
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private observeCLS(): void {/* TODO: Fix JSX expression */}
          }
        }
        this.metrics.cls = clsValue;
        this.logMetric('cls', clsValue);

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {}
      }
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['first-input'] ,})
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
  private observeCLS(): void {/* TODO: Fix JSX expression */,}}}
        }
        this.metrics.cls = clsValue;
        this.logMetric('cls', clsValue);
observer.observe({entryTypes: ['layout-shift'] ,)})
      this.observers.push(observer);
    } catch (error) {}}
  }
  private setupCustomMetrics(): void {// Time to First Byte;}
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('ttfb', this.metrics.ttfb);
    }
    // Page Load Time;
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('ttfb', this.metrics.ttfb);
    }
    // Page Load Time
    if (performance.timing) {}
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }
    // DOM Content Loaded
    if (performance.timing) {}
      const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('domContentLoaded', domContentLoaded);
            const resourceEntry = entry as PerformanceResourceTiming;
            this.analyzeResource(resourceEntry);
          }
        }

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    const duration = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    // Track slow resources;
    if (duration > 1000) {,
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources;
    if (size > 100000) { // 100KB;
      this.addCustomMetric(`largeResource_${entry.name}`, size);
    }
    this.metrics.customMetrics[name] = value;,;
    this.logMetric(name, value)}}
  private logMetric(name: string, value: number): void {,}
    ,}if (process.env['NODE_ENV'] === 'development') {}ms`);
    this.logMetric(name, value);
  }
  private logMetric(name: string, value: number): void {,
    if (process.env['NODE_ENV'] === 'development') {}ms`);
    if (process.env['NODE_ENV'] === 'development') {}ms`);
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {(window as any).gtag('event', 'performance_metric', {);
        metric_name: name),
    // Track slow resources;}if (duration > 1000) {}this.addCustomMetric(`slowResource_${entry.name)}`, duration);
    }
    // Track large resources;
    if (size > 100000) {// 100KB}this.addCustomMetric(`largeResource_${entry.name)}`, size);
    }
  }
  addCustomMetric(name: string, value: number): void {,}}this.metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }
  private logMetric(name: string, value: number): void {,}}if (process.env['NODE_ENV'] === 'development') {}}ms`);
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {}(window as any).gtag('event', 'performance_metric', {)}metric_name: name,
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources
    if (size > 100000) { // 100KB}
      this.addCustomMetric(`largeResource_${entry.name}`, size);
=======
/**
 * Enhanced Performance Monitoring Utility
 * Tracks and reports performance metrics with Web Vitals support
 */

import { logger } from './logger';
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

// These interfaces are defined for future use but not currently used
// interface _PerformancePaintTiming extends PerformanceEntry {
//   name: 'first-paint' | 'first-contentful-paint';
// }

// interface _LargestContentfulPaint extends PerformanceEntry {
//   renderTime: number;
//   loadTime: number;
//   size: number;
//   id: string;
//   url: string;
//   element: Element | null;
// }

// interface _PerformanceEventTiming extends PerformanceEntry {
//   processingStart: number;
//   processingEnd: number;
//   cancelable: boolean;
//   target: EventTarget | null;
// }

// Extended types for specific performance entry types

// Performance entry types are handled inline where needed

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
        this.observeEntry('paint', (entries) => {
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.recordMetric('FCP', entry.startTime);
            }
          });
        });

        // Largest Contentful Paint
        this.observeEntry('largest-contentful-paint', (entries) => {

          if (lastEntry) {
            this.recordMetric('LCP', lastEntry.renderTime || lastEntry.loadTime || lastEntry.startTime);
          }
        });

        // First Input Delay
        this.observeEntry('first-input', (entries) => {

          if (firstInput && firstInput.processingStart !== undefined) {
            const fid = firstInput.processingStart - firstInput.startTime;
            this.recordMetric('FID', fid);
          }
        });

        // Cumulative Layout Shift
        this.observeEntry('layout-shift', (entries) => {
          let clsValue = 0;
          entries.forEach((entry: any) => {
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
      const observer = new PerformanceObserver((list) => {
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
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
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
        metadata: {
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
  private logMetric(name: string, value: number): void {}
    if (process.env['NODE_ENV'] === 'development') {}
      }ms`);
    }
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {}
      (window as any).gtag('event', 'performance_metric', {</div>
  getMetrics(): PerformanceMetrics {}}return {...this.metrics}}}
  getScore(): number {}}const scores = []
    return { ...this.metrics };
    const scores = [];
    // FCP scoring (0-100);
    if (this.metrics.fcp) {}if (this.metrics.fcp <= 1800) scores.push(100);
      else if (this.metrics.fcp <= 4000) scores.push(50);
      else scores.push(25);
    }
    // LCP scoring (0-100)
    if (this.metrics.lcp) {}
      if (this.metrics.lcp <= 2500) scores.push(100);
    // FID scoring (0-100)
    if (this.metrics.fid) {}
      if (this.metrics.fid <= 100) scores.push(100);
    // CLS scoring (0-100)
    if (this.metrics.cls) {}
      if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(75);
      else if (this.metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }
  generateReport(): string {}
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */}
      }
  }
  private setupCustomMetrics(): void {/* TODO: Fix JSX expression */}
    }
    // Page Load Time;
    if (performance.timing) {/* TODO: Fix JSX expression */}
    }
    // DOM Content Loaded;
    if (performance.timing) {/* TODO: Fix JSX expression */}
=======

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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
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
<<<<<<< HEAD
      });
      observer.observe({/* TODO: Fix JSX expression */})
  s: ['resource'] });
      this.observers.push(observer);
      observer.observe({/* TODO: Fix JSX expression */,)})
  s: ['resource'] ,})
      this.observers.push(observer);
    } catch (error) {/* TODO: Fix JSX expression */,}}
  }
  private analyzeResource(entr);
  y: PerformanceResourceTiming): void {/* TODO: Fix JSX expression */,}}this.addCustomMetric(`slowResource_${entry.name)}`, duration);
    }
    // Track large resources;
    if (size > 100000) {/* TODO: Fix JSX expression */,}`;
      this.addCustomMetric(`largeResource_${entry.name)}`, size);
    }
  }
  addCustomMetric(nam,;)
  e: string, valu);
  e: number): void {/* TODO: Fix JSX expression */,}}}
  private logMetric(nam,;)
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    // Track large resources;
    if (size > 100000) {/* TODO: Fix JSX expression */}`
      this.addCustomMetric(`largeResource_${entry.name}`, size);
  private logMetric(nam,
  e: string, valu)
  e: number): void {/* TODO: Fix JSX expression */}`
      }ms`);
    }
    // Send to analytics if available;
    if (typeof window !== 'undefined' && (window as any).gtag) {/* TODO: Fix JSX expression */}
      });
    }
  }
  getMetrics(): PerformanceMetrics {/* TODO: Fix JSX expression */}
    return { ...this.metrics };
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  generateReport(): string {
    const score = this.getScore();
    const metrics = this.getMetrics();
Metrics: ${JSON.stringify(metrics, null, 2</div>
    `;
  }


=======
        
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

    this.metrics.forEach((metric, name) => {
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
    this.observers.forEach((observer) => {
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
