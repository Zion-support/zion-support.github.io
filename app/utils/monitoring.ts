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
          this.metrics[entry.name] = entry.startTime;
        }
      });

      observer.observe({ entryTypes: ['measure', 'navigation'] });
    }
  }

  getMetrics() {
    return { ...this.metrics };
  }

  clearMetrics() {
    this.metrics = {};
  }
}

export const performanceMonitor = new PerformanceMonitor();