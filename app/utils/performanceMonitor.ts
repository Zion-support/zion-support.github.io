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
    if (this.isInitialized) return;
    
    this.observeCoreWebVitals();
    this.observeCustomMetrics();
    this.isInitialized = true;
  }

  private observeCoreWebVitals(): void {
    // First Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.fcp = entry.startTime;
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fcpObserver);
      } catch (e) {
        console.warn('FCP observer failed:', e);
      }
    }

    // Largest Contentful Paint
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.lcp = lastEntry.startTime;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (e) {
        console.warn('LCP observer failed:', e);
      }
    }

    // First Input Delay
    if ('PerformanceObserver' in window) {
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            this.metrics.fid = entry.processingStart - entry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (e) {
        console.warn('FID observer failed:', e);
      }
    }

    // Cumulative Layout Shift
    if ('PerformanceObserver' in window) {
      try {
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (e) {
        console.warn('CLS observer failed:', e);
      }
    }
  }

  private observeCustomMetrics(): void {
    // Time to First Byte
    if (performance.timing) {
      this.metrics.ttfb = performance.timing.responseStart - performance.timing.navigationStart;
    }

    // First Meaningful Paint
    if ('PerformanceObserver' in window) {
      try {
        const fmpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-meaningful-paint') {
              this.metrics.fmp = entry.startTime;
            }
          });
        });
        fmpObserver.observe({ entryTypes: ['paint'] });
        this.observers.push(fmpObserver);
      } catch (e) {
        console.warn('FMP observer failed:', e);
      }
    }
  }

  addCustomMetric(name: string, value: number): void {
    this.metrics.customMetrics[name] = value;
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getScore(): number {
    const scores: number[] = [];
    
    // FCP scoring (0-100)
    if (this.metrics.fcp !== undefined) {
      if (this.metrics.fcp <= 1800) scores.push(100);
      else if (this.metrics.fcp <= 3000) scores.push(80);
      else if (this.metrics.fcp <= 4000) scores.push(60);
      else scores.push(40);
    }
    
    // LCP scoring (0-100)
    if (this.metrics.lcp !== undefined) {
      if (this.metrics.lcp <= 2500) scores.push(100);
      else if (this.metrics.lcp <= 4000) scores.push(80);
      else if (this.metrics.lcp <= 6000) scores.push(60);
      else scores.push(40);
    }
    
    // FID scoring (0-100)
    if (this.metrics.fid !== undefined) {
      if (this.metrics.fid <= 100) scores.push(100);
      else if (this.metrics.fid <= 300) scores.push(80);
      else if (this.metrics.fid <= 500) scores.push(60);
      else scores.push(40);
    }
    
    // CLS scoring (0-100)
    if (this.metrics.cls !== undefined) {
      if (this.metrics.cls <= 0.1) scores.push(100);
      else if (this.metrics.cls <= 0.25) scores.push(80);
      else if (this.metrics.cls <= 0.4) scores.push(60);
      else scores.push(40);
    }
    
    return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
  }

  generateReport(): string {
    const score = this.getScore();
    const metrics = this.getMetrics();
    
    const report = [
      'Performance Report:',
      '==================',
      `Overall Score: ${score}/100`,
      '',
      'Core Web Vitals:',
      `- First Contentful Paint: ${metrics.fcp?.toFixed(2) || 'N/A'}ms`,
      `- Largest Contentful Paint: ${metrics.lcp?.toFixed(2) || 'N/A'}ms`,
      `- First Input Delay: ${metrics.fid?.toFixed(2) || 'N/A'}ms`,
      `- Cumulative Layout Shift: ${metrics.cls?.toFixed(3) || 'N/A'}`,
      `- Time to First Byte: ${metrics.ttfb?.toFixed(2) || 'N/A'}ms`,
      '',
      'Custom Metrics:'
    ];
    
    const customMetrics = Object.entries(metrics.customMetrics)
      .map(([key, value]) => `- ${key}: ${value.toFixed(2)}ms`);
    
    return report.concat(customMetrics).join('\n');
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

export const performanceMonitor = new PerformanceMonitor();
export default performanceMonitor;
