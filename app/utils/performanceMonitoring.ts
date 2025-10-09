// Advanced performance monitoring utilities

export interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
  memoryUsage: number;
  performanceScore: number;
}

export interface PerformanceConfig {
  enableConsoleLogging?: boolean;
  enableReporting?: boolean;
  reportInterval?: number;
  enableWebVitals?: boolean;
  enableMemoryMonitoring?: boolean;
}

export class AdvancedPerformanceMonitor {
  private metrics: PerformanceMetrics = {
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null,
    memoryUsage: 0,
    performanceScore: 0,
  };

  private config: PerformanceConfig;
  private observers: PerformanceObserver[] = [];
  private reportInterval: NodeJS.Timeout | null = null;

  constructor(config: PerformanceConfig = {}) {
    this.config = {
      enableConsoleLogging: false,
      enableReporting: true,
      reportInterval: 5000,
      enableWebVitals: true,
      enableMemoryMonitoring: true,
      ...config,
    };
  }

  init() {
    if (typeof window === 'undefined') return;

    this.measureWebVitals();
    this.measureMemoryUsage();
    this.startPeriodicReporting();
  }

  private measureWebVitals() {
    if (!this.config.enableWebVitals || !('PerformanceObserver' in window)) return;

    // Measure LCP
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        this.metrics.lcp = lastEntry.startTime;
        this.calculatePerformanceScore();
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      this.log('LCP measurement failed:', error);
    }

    // Measure FID
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.calculatePerformanceScore();
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      this.log('FID measurement failed:', error);
    }

    // Measure CLS
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this.metrics.cls = clsValue;
            this.calculatePerformanceScore();
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      this.log('CLS measurement failed:', error);
    }

    // Measure FCP
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.calculatePerformanceScore();
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      this.log('FCP measurement failed:', error);
    }

    // Measure TTFB
    if (performance.timing) {
      const ttfb = performance.timing.responseStart - performance.timing.navigationStart;
      this.metrics.ttfb = ttfb;
      this.calculatePerformanceScore();
    }
  }

  private measureMemoryUsage() {
    if (!this.config.enableMemoryMonitoring || !('memory' in performance)) return;

    const updateMemoryUsage = () => {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    };

    updateMemoryUsage();
    setInterval(updateMemoryUsage, 1000);
  }

  private calculatePerformanceScore() {
    let score = 100;
    
    // LCP scoring (0-25 points)
    if (this.metrics.lcp !== null) {
      if (this.metrics.lcp <= 2500) score -= 0;
      else if (this.metrics.lcp <= 4000) score -= 5;
      else if (this.metrics.lcp <= 6000) score -= 10;
      else score -= 25;
    }
    
    // FID scoring (0-25 points)
    if (this.metrics.fid !== null) {
      if (this.metrics.fid <= 100) score -= 0;
      else if (this.metrics.fid <= 300) score -= 5;
      else if (this.metrics.fid <= 500) score -= 10;
      else score -= 25;
    }
    
    // CLS scoring (0-25 points)
    if (this.metrics.cls !== null) {
      if (this.metrics.cls <= 0.1) score -= 0;
      else if (this.metrics.cls <= 0.25) score -= 5;
      else if (this.metrics.cls <= 0.5) score -= 10;
      else score -= 25;
    }
    
    // FCP scoring (0-15 points)
    if (this.metrics.fcp !== null) {
      if (this.metrics.fcp <= 1800) score -= 0;
      else if (this.metrics.fcp <= 3000) score -= 3;
      else if (this.metrics.fcp <= 5000) score -= 7;
      else score -= 15;
    }
    
    // TTFB scoring (0-10 points)
    if (this.metrics.ttfb !== null) {
      if (this.metrics.ttfb <= 600) score -= 0;
      else if (this.metrics.ttfb <= 1000) score -= 2;
      else if (this.metrics.ttfb <= 2000) score -= 5;
      else score -= 10;
    }
    
    this.metrics.performanceScore = Math.max(0, score);
  }

  private startPeriodicReporting() {
    if (!this.config.enableReporting || !this.config.reportInterval) return;

    this.reportInterval = setInterval(() => {
      this.reportMetrics();
    }, this.config.reportInterval);
  }

  private reportMetrics() {
    if (this.config.enableConsoleLogging) {
      this.log('Performance Metrics:', this.metrics);
    }

    // Send to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        lcp: this.metrics.lcp,
        fid: this.metrics.fid,
        cls: this.metrics.cls,
        fcp: this.metrics.fcp,
        ttfb: this.metrics.ttfb,
        memory_usage: this.metrics.memoryUsage,
        performance_score: this.metrics.performanceScore,
      });
    }
  }

  private log(message: string, data?: any) {
    if (this.config.enableConsoleLogging) {
      console.log(`[PerformanceMonitor] ${message}`, data || '');
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getScore(): number {
    return this.metrics.performanceScore;
  }

  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    if (this.reportInterval) {
      clearInterval(this.reportInterval);
      this.reportInterval = null;
    }
  }
}

// Export singleton instance
export const performanceMonitor = new AdvancedPerformanceMonitor({
  enableConsoleLogging: process.env.NODE_ENV === 'development',
  enableReporting: true,
  reportInterval: 10000,
  enableWebVitals: true,
  enableMemoryMonitoring: true,
});