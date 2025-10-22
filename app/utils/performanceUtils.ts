interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface PerformanceConfig {
  enableLogging: boolean;
  enableReporting: boolean;
  reportEndpoint?: string;
}

class PerformanceUtils {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[] = [];

  constructor(config: PerformanceConfig = { enableLogging: true, enableReporting: false }) {
    this.config = config;
    this.metrics = {
      loadTime: 0,
      firstContentfulPaint: 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
      timeToInteractive: 0,
    };

    this.initializeMetrics();
  }

  private initializeMetrics(): void {
    if (typeof window === 'undefined') return;

    // Measure load time
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now();
      this.logMetric('loadTime', this.metrics.loadTime);
    });

    // Measure Core Web Vitals
    this.measureCoreWebVitals();
  }

  private measureCoreWebVitals(): void {
    if (typeof window === 'undefined') return;

    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.firstContentfulPaint = entry.startTime;
          this.logMetric('firstContentfulPaint', entry.startTime);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });
    this.observers.push(fcpObserver);

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.largestContentfulPaint = entry.startTime;
        this.logMetric('largestContentfulPaint', entry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);

    // Cumulative Layout Shift
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          this.metrics.cumulativeLayoutShift += (entry as any).value;
          this.logMetric('cumulativeLayoutShift', this.metrics.cumulativeLayoutShift);
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(clsObserver);

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
        this.logMetric('firstInputDelay', this.metrics.firstInputDelay);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    this.observers.push(fidObserver);
  }

  private logMetric(name: string, value: number): void {
    if (this.config.enableLogging) {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    let score = 100;

    // FCP scoring (good: <1.8s, needs improvement: 1.8-3.0s, poor: >3.0s)
    if (this.metrics.firstContentfulPaint > 3000) score -= 20;
    else if (this.metrics.firstContentfulPaint > 1800) score -= 10;

    // LCP scoring (good: <2.5s, needs improvement: 2.5-4.0s, poor: >4.0s)
    if (this.metrics.largestContentfulPaint > 4000) score -= 20;
    else if (this.metrics.largestContentfulPaint > 2500) score -= 10;

    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (this.metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (this.metrics.cumulativeLayoutShift > 0.1) score -= 10;

    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (this.metrics.firstInputDelay > 300) score -= 20;
    else if (this.metrics.firstInputDelay > 100) score -= 10;

    return Math.max(0, score);
  }

  public async reportMetrics(): Promise<void> {
    if (!this.config.enableReporting || !this.config.reportEndpoint) return;

    try {
      await fetch(this.config.reportEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics: this.metrics,
          score: this.getPerformanceScore(),
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
    } catch (error) {
      console.error('Failed to report performance metrics:', error);
    }
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Create singleton instance
export const performanceUtils = new PerformanceUtils();

// Export class for custom instances
export { PerformanceUtils };
export type { PerformanceMetrics, PerformanceConfig };