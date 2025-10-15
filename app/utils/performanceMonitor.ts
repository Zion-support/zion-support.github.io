// Performance monitoring utilities
export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number> = new Map();

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  mark(name: string): void {
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(name);
    }
  }

  measure(name: string, startMark: string, endMark?: string): void {
    if (typeof performance !== 'undefined' && performance.measure) {
      try {
        performance.measure(name, startMark, endMark);
        const entries = performance.getEntriesByName(name, 'measure');
        if (entries.length > 0) {
          this.metrics.set(name, entries[0].duration);
        }
      } catch (error) {
        console.warn('Performance measure failed:', error);
      }
    }
  }

  getMetric(name: string): number | undefined {
    return this.metrics.get(name);
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics);
  }

  clearMetrics(): void {
    this.metrics.clear();
  }

  // Web Vitals monitoring
  observeWebVitals(): void {
    if (typeof window === 'undefined') return;

    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS((metric) => {
        this.metrics.set('CLS', metric.value);
        this.logMetric('CLS', metric);
      });

      onFCP((metric) => {
        this.metrics.set('FCP', metric.value);
        this.logMetric('FCP', metric);
      });

      onLCP((metric) => {
        this.metrics.set('LCP', metric.value);
        this.logMetric('LCP', metric);
      });

      onTTFB((metric) => {
        this.metrics.set('TTFB', metric.value);
        this.logMetric('TTFB', metric);
      });

      onINP((metric) => {
        this.metrics.set('INP', metric.value);
        this.logMetric('INP', metric);
      });
    });
  }

  private logMetric(name: string, metric: any): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}:`, metric);
    }
    
    // In production, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      // Send to analytics service
      this.sendToAnalytics(name, metric);
    }
  }

  private sendToAnalytics(_name: string, _metric: any): void {
    // Implement analytics service integration
    // Example: Google Analytics, DataDog, etc.
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();