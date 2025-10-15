/**
 * Performance monitoring and optimization utilities
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  delta: number;
  id: string;
  navigationType: string;
  timestamp: number;
}

export interface PerformanceConfig {
  enableWebVitals: boolean;
  enableResourceTiming: boolean;
  enableUserTiming: boolean;
  enableNavigationTiming: boolean;
  sampleRate: number;
  maxMetrics: number;
}

class PerformanceMonitor {
  private config: PerformanceConfig;
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableWebVitals: true,
      enableResourceTiming: true,
      enableUserTiming: true,
      enableNavigationTiming: true,
      sampleRate: 1.0,
      maxMetrics: 100,
      ...config
    };
  }

  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined' || !window.performance) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Performance API not available');
      }
      return;
    }

    this.setupWebVitals();
    this.setupResourceTiming();
    this.setupUserTiming();
    this.setupNavigationTiming();
  }

  /**
   * Setup Core Web Vitals monitoring
   */
  private setupWebVitals(): void {
    if (!this.config.enableWebVitals) return;

    // Only load web-vitals in production or when needed
    if (process.env.NODE_ENV === 'production') {
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
        onCLS((metric) => this.recordMetric(metric));
        onFCP((metric) => this.recordMetric(metric));
        onLCP((metric) => this.recordMetric(metric));
        onTTFB((metric) => this.recordMetric(metric));
        onINP((metric) => this.recordMetric(metric));
      }).catch((error) => {
        if (process.env.NODE_ENV === 'development') {
          console.warn('Failed to load web-vitals:', error);
        }
      });
    }
  }

  /**
   * Setup resource timing monitoring
   */
  private setupResourceTiming(): void {
    if (!this.config.enableResourceTiming) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'resource') {
            this.recordResourceTiming(entry as PerformanceResourceTiming);
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Resource timing not supported:', error);
      }
    }
  }

  /**
   * Setup user timing monitoring
   */
  private setupUserTiming(): void {
    if (!this.config.enableUserTiming) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            this.recordUserTiming(entry as PerformanceMeasure);
          }
        });
      });

      observer.observe({ entryTypes: ['measure'] });
      this.observers.push(observer);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('User timing not supported:', error);
      }
    }
  }

  /**
   * Setup navigation timing monitoring
   */
  private setupNavigationTiming(): void {
    if (!this.config.enableNavigationTiming) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'navigation') {
            this.recordNavigationTiming(entry as PerformanceNavigationTiming);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });
      this.observers.push(observer);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.warn('Navigation timing not supported:', error);
      }
    }
  }

  /**
   * Record a performance metric
   */
  private recordMetric(metric: any): void {
    if (Math.random() > this.config.sampleRate) return;

    const performanceMetric: PerformanceMetric = {
      name: metric.name,
      value: metric.value,
      delta: metric.delta,
      id: metric.id,
      navigationType: metric.navigationType,
      timestamp: Date.now()
    };

    this.metrics.push(performanceMetric);

    // Keep only the most recent metrics
    if (this.metrics.length > this.config.maxMetrics) {
      this.metrics = this.metrics.slice(-this.config.maxMetrics);
    }

    // Send to analytics
    this.sendToAnalytics(performanceMetric);
  }

  /**
   * Record resource timing
   */
  private recordResourceTiming(entry: PerformanceResourceTiming): void {
    const metric: PerformanceMetric = {
      name: 'resource',
      value: entry.duration,
      delta: entry.duration,
      id: entry.name,
      navigationType: 'navigate',
      timestamp: Date.now()
    };

    this.recordMetric(metric);
  }

  /**
   * Record user timing
   */
  private recordUserTiming(entry: PerformanceMeasure): void {
    const metric: PerformanceMetric = {
      name: 'user-timing',
      value: entry.duration,
      delta: entry.duration,
      id: entry.name,
      navigationType: 'navigate',
      timestamp: Date.now()
    };

    this.recordMetric(metric);
  }

  /**
   * Record navigation timing
   */
  private recordNavigationTiming(entry: PerformanceNavigationTiming): void {
    const loadTime = entry.loadEventEnd - entry.loadEventStart;
    const domContentLoaded = entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart;
    const firstPaint = entry.responseEnd - entry.requestStart;

    // Record load time
    this.recordMetric({
      name: 'navigation-load',
      value: loadTime,
      delta: loadTime,
      id: 'navigation-load',
      navigationType: entry.type,
      timestamp: Date.now()
    });

    // Record DOM content loaded time
    this.recordMetric({
      name: 'navigation-dom-content-loaded',
      value: domContentLoaded,
      delta: domContentLoaded,
      id: 'navigation-dom-content-loaded',
      navigationType: entry.type,
      timestamp: Date.now()
    });

    // Record first paint time
    this.recordMetric({
      name: 'navigation-first-paint',
      value: firstPaint,
      delta: firstPaint,
      id: 'navigation-first-paint',
      navigationType: entry.type,
      timestamp: Date.now()
    });
  }

  /**
   * Send metrics to analytics
   */
  private sendToAnalytics(metric: PerformanceMetric): void {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', metric.name, {
        event_category: 'Performance',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }

    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${metric.name}:`, metric.value);
    }
  }

  /**
   * Get all recorded metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  /**
   * Get metrics by name
   */
  getMetricsByName(name: string): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.name === name);
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    totalMetrics: number;
    averageLoadTime: number;
    averageFCP: number;
    averageLCP: number;
    averageCLS: number;
    slowestResources: Array<{ name: string; duration: number }>;
  } {
    const loadTimes = this.getMetricsByName('navigation-load').map(m => m.value);
    const fcpMetrics = this.getMetricsByName('FCP').map(m => m.value);
    const lcpMetrics = this.getMetricsByName('LCP').map(m => m.value);
    const clsMetrics = this.getMetricsByName('CLS').map(m => m.value);
    const resourceMetrics = this.getMetricsByName('resource');

    const slowestResources = resourceMetrics
      .sort((a, b) => b.value - a.value)
      .slice(0, 5)
      .map(m => ({ name: m.id, duration: m.value }));

    return {
      totalMetrics: this.metrics.length,
      averageLoadTime: loadTimes.length > 0 ? loadTimes.reduce((a, b) => a + b, 0) / loadTimes.length : 0,
      averageFCP: fcpMetrics.length > 0 ? fcpMetrics.reduce((a, b) => a + b, 0) / fcpMetrics.length : 0,
      averageLCP: lcpMetrics.length > 0 ? lcpMetrics.reduce((a, b) => a + b, 0) / lcpMetrics.length : 0,
      averageCLS: clsMetrics.length > 0 ? clsMetrics.reduce((a, b) => a + b, 0) / clsMetrics.length : 0,
      slowestResources
    };
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = [];
  }

  /**
   * Dispose of observers
   */
  dispose(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Create default performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions
export const measurePerformance = (name: string, fn: () => void): void => {
  if (typeof window !== 'undefined' && window.performance) {
    performance.mark(`${name}-start`);
    fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  } else {
    fn();
  }
};

export const measureAsyncPerformance = async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
  if (typeof window !== 'undefined' && window.performance) {
    performance.mark(`${name}-start`);
    const result = await fn();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    return result;
  } else {
    return await fn();
  }
};

export const getResourceTiming = (name: string): PerformanceResourceTiming | null => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const entries = performance.getEntriesByName(name, 'resource') as PerformanceResourceTiming[];
  return entries.length > 0 ? entries[0] : null;
};

export const getNavigationTiming = (): PerformanceNavigationTiming | null => {
  if (typeof window === 'undefined' || !window.performance) return null;
  
  const entries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
  return entries.length > 0 ? entries[0] : null;
};

export default PerformanceMonitor;