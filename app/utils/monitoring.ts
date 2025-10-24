'use client';

export class PerformanceMonitor {
  private metrics: Record<string, number> = {};

  constructor() {
    if (typeof window !== 'undefined') {
      this.initPerformanceObserver();
    }
  }

  private initPerformanceObserver() {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            this.reportMetric('lcp', entry.startTime);
          } else if (entry.entryType === 'first-input') {
            this.reportMetric('fid', (entry as any).processingStart - entry.startTime);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }
  }

  private reportMetric(name: string, value: number) {
    this.metrics[name] = value;
    console.log(`Performance Metric - ${name}:`, value);
  }

  getMetrics() {
    return { ...this.metrics };
  }
}

export const performanceMonitor = new PerformanceMonitor();