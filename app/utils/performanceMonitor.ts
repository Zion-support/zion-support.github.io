// @ts-nocheck
/**
 * Advanced Performance Monitoring Utility
 * Tracks Core Web Vitals and custom metrics
 */

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  fmp?: number; // First Meaningful Paint
  customMetrics: Record<string, number>;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    customMetrics: {}
  };
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupWebVitals();
    this.setupCustomMetrics();
    this.setupResourceTiming();
  }

  private setupWebVitals(): void {
    // First Contentful Paint
    this.observePaint('first-contentful-paint', 'fcp');
    
    // Largest Contentful Paint
    this.observeLCP();
    
    // First Input Delay
    this.observeFID();
    
    // Cumulative Layout Shift
    this.observeCLS();
  }

  private observePaint(name: string, metricKey: 'fcp' | 'fmp'): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === name) {
            this.metrics[metricKey] = entry.startTime;
            this.logMetric(metricKey, entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${name}:`, error);
    }
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
        this.logMetric('lcp', lastEntry.startTime);
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
          if (fidEntry.processingStart && fidEntry.startTime) {
            const fid = fidEntry.processingStart - fidEntry.startTime;
            this.metrics.fid = fid;
            this.logMetric('fid', fid);
          }
        }
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FID:', error);
    }
  }

  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShift;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            this.metrics.cls = clsValue;
            this.logMetric('cls', clsValue);
          }
        }
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }
  }

  private setupCustomMetrics(): void {
    // Track Time to First Byte
    if (typeof window !== 'undefined' && window.performance && window.performance.timing) {
      const timing = window.performance.timing;
      const ttfb = timing.responseStart - timing.requestStart;
      this.metrics.ttfb = ttfb;
      this.logMetric('ttfb', ttfb);
    }
  }

  private setupResourceTiming(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          // Track resource loading times
          if (resourceEntry.duration > 1000) {
            this.trackCustomMetric(`slow_resource_${resourceEntry.name}`, resourceEntry.duration);
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe resource timing:', error);
    }
  }

  private logMetric(name: string, value: number): void {
    if (process.env['NODE_ENV'] === 'development') {
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`);
    }
  }

  trackCustomMetric(name: string, value: number): void {
    this.metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getScore(): number {
    const scores: number[] = [];
    
    // Score FCP
    if (this.metrics.fcp !== undefined) {
      if (this.metrics.fcp <= 1800) scores.push(100);
      else if (this.metrics.fcp <= 3000) scores.push(75);
      else if (this.metrics.fcp <= 4000) scores.push(50);
      else scores.push(25);
    }
    
    // Score LCP
    if (this.metrics.lcp !== undefined) {
      if (this.metrics.lcp <= 2500) scores.push(100);
      else if (this.metrics.lcp <= 4000) scores.push(75);
      else if (this.metrics.lcp <= 6000) scores.push(50);
      else scores.push(25);
    }
    
    // Score FID
    if (this.metrics.fid !== undefined) {
      if (this.metrics.fid <= 100) scores.push(100);
      else if (this.metrics.fid <= 300) scores.push(75);
      else if (this.metrics.fid <= 500) scores.push(50);
      else scores.push(25);
    }
    
    // Score CLS
    if (this.metrics.cls !== undefined) {
      if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(75);
      else if (this.metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }
    
    return scores.length > 0 
      ? scores.reduce((a, b) => a + b, 0) / scores.length 
      : 0;
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Create and export singleton instance
const performanceMonitor = new PerformanceMonitor();

export default performanceMonitor;
export { PerformanceMonitor };
export type { PerformanceMetrics };