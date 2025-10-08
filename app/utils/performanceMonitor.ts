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

  private observePaint(name: string, metricKey: keyof PerformanceMetrics): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === name) {
            (this.metrics as any)[metricKey] = entry.startTime;
            this.logMetric(metricKey as string, entry.startTime);
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
          this.metrics.fid = (entry as any).processingStart - entry.startTime;
          this.logMetric('fid', this.metrics.fid);
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
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cls = clsValue;
        this.logMetric('cls', clsValue);
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }
  }

  private setupCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.logMetric('ttfb', this.metrics.ttfb);
    }

    // Page Load Time
    if (performance.timing) {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('pageLoadTime', loadTime);
    }

    // DOM Content Loaded
    if (performance.timing) {
      const domContentLoaded = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      this.addCustomMetric('domContentLoaded', domContentLoaded);
    }
  }

  private setupResourceTiming(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            this.analyzeResource(resourceEntry);
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe resources:', error);
    }
  }

  private analyzeResource(entry: PerformanceResourceTiming): void {
    const duration = entry.responseEnd - entry.startTime;
    const size = entry.transferSize || 0;
    
    // Track slow resources
    if (duration > 1000) {
      this.addCustomMetric(`slowResource_${entry.name}`, duration);
    }
    
    // Track large resources
    if (size > 100000) { // 100KB
      this.addCustomMetric(`largeResource_${entry.name}`, size);
    }
  }

  addCustomMetric(name: string, value: number): void {
    this.metrics.customMetrics[name] = value;
    this.logMetric(name, value);
  }

  private logMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${name}: ${value.toFixed(2)}ms`);
    }
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: Math.round(value),
        event_category: 'performance'
      });
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getScore(): number {
    const scores: number[] = [];
    
    // FCP scoring (0-100)
    if (this.metrics.fcp) {
      if (this.metrics.fcp <= 1800) scores.push(100);
      else if (this.metrics.fcp <= 3000) scores.push(75);
      else if (this.metrics.fcp <= 4000) scores.push(50);
      else scores.push(25);
    }
    
    // LCP scoring (0-100)
    if (this.metrics.lcp) {
      if (this.metrics.lcp <= 2500) scores.push(100);
      else if (this.metrics.lcp <= 4000) scores.push(75);
      else if (this.metrics.lcp <= 6000) scores.push(50);
      else scores.push(25);
    }
    
    // FID scoring (0-100)
    if (this.metrics.fid) {
      if (this.metrics.fid <= 100) scores.push(100);
      else if (this.metrics.fid <= 300) scores.push(75);
      else if (this.metrics.fid <= 500) scores.push(50);
      else scores.push(25);
    }
    
    // CLS scoring (0-100)
    if (this.metrics.cls) {
      if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(75);
      else if (this.metrics.cls <= 0.4) scores.push(50);
      else scores.push(25);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  generateReport(): string {
    const score = this.getScore();
    const metrics = this.getMetrics();
    
    return `
Performance Report:
- Score: ${score}/100
- Load Time: ${metrics.loadTime}ms
- First Paint: ${metrics.firstPaint}ms
- DOM Content Loaded: ${metrics.domContentLoaded}ms
- Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB

Generated: ${new Date().toLocaleString()}
    `;
  }
}

export default PerformanceMonitor;
