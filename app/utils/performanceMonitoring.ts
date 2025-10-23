'use client'
/**
* Performance Monitoring Service
* Advanced performance tracking and monitoring for web applications
*/

export interface PerformanceMetric {
  name: string;
  value: number;
  unit: 'ms' | 'bytes' | 'count' | 'percentage';
  timestamp: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export interface CustomMetric {
  name: string;
  value: number;
  unit: 'ms' | 'bytes' | 'count' | 'percentage';
  timestamp: number;
}

export interface WebVitals {
  FCP?: PerformanceMetric; // First Contentful Paint
  LCP?: PerformanceMetric; // Largest Contentful Paint
  FID?: PerformanceMetric; // First Input Delay
  CLS?: PerformanceMetric; // Cumulative Layout Shift
  TTFB?: PerformanceMetric; // Time to First Byte
  INP?: PerformanceMetric; // Interaction to Next Paint
}

class PerformanceMonitoringService {
  private static instance: PerformanceMonitoringService;
  private webVitals: WebVitals = {};
  private customMetrics: CustomMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private maxMetrics = 1000;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  static getInstance(): PerformanceMonitoringService {
    if (!PerformanceMonitoringService.instance) {
      PerformanceMonitoringService.instance = new PerformanceMonitoringService();
    }
    return PerformanceMonitoringService.instance;
  }

  private initializeObservers(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.webVitals.FCP = {
              name: 'FCP',
              value: entry.startTime,
              unit: 'ms',
              timestamp: Date.now(),
              rating: this.getRating('FCP', entry.startTime)
            };
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.webVitals.LCP = {
            name: 'LCP',
            value: lastEntry.startTime,
            unit: 'ms',
            timestamp: Date.now(),
            rating: this.getRating('LCP', lastEntry.startTime)
          };
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.webVitals.CLS = {
          name: 'CLS',
          value: clsValue,
          unit: 'score',
          timestamp: Date.now(),
          rating: this.getRating('CLS', clsValue)
        };
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.webVitals.FID = {
            name: 'FID',
            value: (entry as any).processingStart - entry.startTime,
            unit: 'ms',
            timestamp: Date.now(),
            rating: this.getRating('FID', (entry as any).processingStart - entry.startTime)
          };
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Time to First Byte
      const navigationObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.webVitals.TTFB = {
              name: 'TTFB',
              value: navEntry.responseStart - navEntry.fetchStart,
              unit: 'ms',
              timestamp: Date.now(),
              rating: this.getRating('TTFB', navEntry.responseStart - navEntry.fetchStart)
            };
          }
        }
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navigationObserver);

    } catch (error) {
      // console.error('Failed to initialize performance observers:', error);
    }
  }

  private getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = {
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      FID: { good: 100, poor: 300 },
      CLS: { good: 0.1, poor: 0.25 },
      TTFB: { good: 800, poor: 1800 }
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  recordCustomMetric(metric: CustomMetric): void {
    this.customMetrics.push(metric);
    if (this.customMetrics.length > this.maxMetrics) {
      this.customMetrics.shift();
    }
  }

  getWebVitals(): WebVitals {
    return { ...this.webVitals };
  }

  getCustomMetrics(): CustomMetric[] {
    return [...this.customMetrics];
  }

  getAllMetrics(): (PerformanceMetric | CustomMetric)[] {
    return [
      ...Object.values(this.webVitals).filter(Boolean) as PerformanceMetric[],
      ...this.customMetrics
    ];
  }

  getPerformanceScore(): number {
    const metrics = Object.values(this.webVitals).filter(Boolean) as PerformanceMetric[];
    if (metrics.length === 0) return 100;

    const scores = metrics.map(metric => {
      switch (metric.rating) {
        case 'good': return 100;
        case 'needs-improvement': return 60;
        case 'poor': return 20;
        default: return 50;
      }
    });

    return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
  }

  generateReport(): {
    webVitals: WebVitals;
    customMetrics: CustomMetric[];
    performanceScore: number;
    timestamp: number;
  } {
    return {
      webVitals: this.getWebVitals(),
      customMetrics: this.getCustomMetrics(),
      performanceScore: this.getPerformanceScore(),
      timestamp: Date.now()
    };
  }

  clearMetrics(): void {
    this.customMetrics = [];
    this.webVitals = {};
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
const monitoring = new PerformanceMonitoringService();
export default monitoring;