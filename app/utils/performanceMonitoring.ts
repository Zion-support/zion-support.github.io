// Performance monitoring utilities
export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

export interface CustomMetric {
  name: string;
  value: number;
}

export interface WebVitals {
  FCP?: PerformanceMetric; // First Contentful Paint
  LCP?: PerformanceMetric; // Largest Contentful Paint
  FID?: PerformanceMetric; // First Input Delay
  CLS?: PerformanceMetric; // Cumulative Layout Shift
  TTFB?: PerformanceMetric; // Time to First Byte
  INP?: PerformanceMetric; // Interaction to Next Paint
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private webVitals: WebVitals = {};
  private customMetrics: CustomMetric[] = [];

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.monitorFCP();
    this.monitorLCP();
    this.monitorFID();
    this.monitorCLS();
    this.monitorTTFB();
  }

  private monitorFCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
          if (fcpEntry) {
            this.webVitals.FCP = {
              name: 'FCP',
              value: fcpEntry.startTime,
              timestamp: Date.now()
            };
          }
        });
        observer.observe({ entryTypes: ['paint'] });
      } catch (error) {
        console.warn('FCP monitoring failed:', error);
      }
    }
  }

  private monitorLCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.webVitals.LCP = {
              name: 'LCP',
              value: lastEntry.startTime,
              timestamp: Date.now()
            };
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('LCP monitoring failed:', error);
      }
    }
  }

  private monitorFID(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEventTiming) => {
            this.webVitals.FID = {
              name: 'FID',
              value: entry.processingStart - entry.startTime,
              timestamp: Date.now()
            };
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('FID monitoring failed:', error);
      }
    }
  }

  private monitorCLS(): void {
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
          this.webVitals.CLS = {
            name: 'CLS',
            value: clsValue,
            timestamp: Date.now()
          };
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('CLS monitoring failed:', error);
      }
    }
  }

  private monitorTTFB(): void {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.webVitals.TTFB = {
          name: 'TTFB',
          value: navigation.responseStart - navigation.requestStart,
          timestamp: Date.now()
        };
      }
    }
  }

  addCustomMetric(name: string, value: number): void {
    this.customMetrics.push({ name, value });
  }

  getWebVitals(): WebVitals {
    return { ...this.webVitals };
  }

  getCustomMetrics(): CustomMetric[] {
    return [...this.customMetrics];
  }

  getAllMetrics(): PerformanceMetric[] {
    const allMetrics: PerformanceMetric[] = [];
    
    Object.values(this.webVitals).forEach(metric => {
      if (metric) allMetrics.push(metric);
    });
    
    this.customMetrics.forEach(metric => {
      allMetrics.push({
        name: metric.name,
        value: metric.value,
        timestamp: Date.now()
      });
    });
    
    return allMetrics;
  }

  clearMetrics(): void {
    this.customMetrics = [];
  }

  exportMetrics(): string {
    return JSON.stringify({
      webVitals: this.webVitals,
      customMetrics: this.customMetrics
    }, null, 2);
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Utility functions
export const addCustomMetric = (name: string, value: number): void => {
  performanceMonitor.addCustomMetric(name, value);
};

export const getWebVitals = (): WebVitals => {
  return performanceMonitor.getWebVitals();
};

export const getCustomMetrics = (): CustomMetric[] => {
  return performanceMonitor.getCustomMetrics();
};

export const getAllMetrics = (): PerformanceMetric[] => {
  return performanceMonitor.getAllMetrics();
};