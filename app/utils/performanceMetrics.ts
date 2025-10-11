// Performance metrics utilities
export interface PerformanceMetric {
  name: string;
  value: number;
  unit: string;
  timestamp: Date;
}

export interface PerformanceEntry {
  category: 'load' | 'runtime' | 'network' | 'memory' | 'custom';
  metadata?: Record<string, string>;
}

export interface WebVitalsMetrics {
  FCP?: number; // First Contentful Paint
  LCP?: number; // Largest Contentful Paint
  FID?: number; // First Input Delay
  CLS?: number; // Cumulative Layout Shift
  TTFB?: number; // Time to First Byte
  INP?: number; // Interaction to Next Paint
}

class PerformanceMetricsCollector {
  private metrics: PerformanceMetric[] = [];
  private webVitals: WebVitalsMetrics = {};

  constructor() {
    this.initializeWebVitals();
  }

  private initializeWebVitals(): void {
    if (typeof window === 'undefined') return;

    // Collect Web Vitals
    this.collectFCP();
    this.collectLCP();
    this.collectFID();
    this.collectCLS();
    this.collectTTFB();
  }

  private collectFCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            this.webVitals.FCP = fcpEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP collection failed:', error);
      }
    }
  }

  private collectLCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.webVitals.LCP = lastEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP collection failed:', error);
      }
    }
  }

  private collectFID(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEventTiming) => {
            this.webVitals.FID = entry.processingStart - entry.startTime;
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID collection failed:', error);
      }
    }
  }

  private collectCLS(): void {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: LayoutShift) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.webVitals.CLS = clsValue;
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS collection failed:', error);
      }
    }
  }

  private collectTTFB(): void {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.webVitals.TTFB = navigation.responseStart - navigation.requestStart;
      }
    }
  }

  addMetric(name: string, value: number, unit: string = 'ms'): void {
    this.metrics.push({
      name,
      value,
      unit,
      timestamp: new Date()
    });
  }

  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  getWebVitals(): WebVitalsMetrics {
    return { ...this.webVitals };
  }

  getMetricByName(name: string): PerformanceMetric | undefined {
    return this.metrics.find(metric => metric.name === name);
  }

  getAverageMetric(name: string): number {
    const metrics = this.metrics.filter(metric => metric.name === name);
    if (metrics.length === 0) return 0;
    
    const sum = metrics.reduce((acc, metric) => acc + metric.value, 0);
    return sum / metrics.length;
  }

  clearMetrics(): void {
    this.metrics = [];
  }

  exportMetrics(): string {
    return JSON.stringify({
      metrics: this.metrics,
      webVitals: this.webVitals
    }, null, 2);
  }
}

// Export singleton instance
export const performanceMetrics = new PerformanceMetricsCollector();

// Utility functions
export const trackMetric = (name: string, value: number, unit?: string): void => {
  performanceMetrics.addMetric(name, value, unit);
};

export const trackTiming = (name: string, startTime: number): void => {
  const endTime = performance.now();
  const duration = endTime - startTime;
  trackMetric(name, duration);
};

export const getWebVitals = (): WebVitalsMetrics => {
  return performanceMetrics.getWebVitals();
};

export const getMetrics = (): PerformanceMetric[] => {
  return performanceMetrics.getMetrics();
};

// Performance timing utilities
export const measurePerformance = <T>(name: string, fn: () => T): T => {
  const startTime = performance.now();
  const result = fn();
  const endTime = performance.now();
  
  trackMetric(name, endTime - startTime);
  return result;
};

export const measureAsyncPerformance = async <T>(name: string, fn: () => Promise<T>): Promise<T> => {
  const startTime = performance.now();
  const result = await fn();
  const endTime = performance.now();
  
  trackMetric(name, endTime - startTime);
  return result;
};