export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
  tti: number; // Time to Interactive
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeObservers();
  }

  private initializeObservers() {
    // Observe LCP
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { value: number };
          this.metrics.lcp = lastEntry.value;
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
        this.observers.push(lcpObserver);
      } catch (error) {
        console.warn('LCP observer not supported:', error);
      }

      // Observe FID
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const fidEntry = entry as PerformanceEntry & { processingStart: number; processingEnd: number };
            this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
        this.observers.push(fidObserver);
      } catch (error) {
        console.warn('FID observer not supported:', error);
      }

      // Observe CLS
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            const clsEntry = entry as PerformanceEntry & { value: number };
            if (!clsEntry.hadRecentInput) {
              clsValue += clsEntry.value;
            }
          });
          this.metrics.cls = clsValue;
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
        this.observers.push(clsObserver);
      } catch (error) {
        console.warn('CLS observer not supported:', error);
      }
    }

    // Measure TTFB
    this.measureTTFB();
    
    // Measure other metrics when page loads
    window.addEventListener('load', () => {
      this.measureLoadMetrics();
    });
  }

  private measureTTFB() {
    if ('performance' in window && 'timing' in window.performance) {
      const timing = window.performance.timing;
      this.metrics.ttfb = timing.responseStart - timing.navigationStart;
    }
  }

  private measureLoadMetrics() {
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      const paintEntries = window.performance.getEntriesByType('paint');
      
      // FCP
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.metrics.fcp = fcpEntry.startTime;
      }

      // FMP (approximation)
      const navigationEntry = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        this.metrics.fmp = navigationEntry.loadEventEnd - navigationEntry.navigationStart;
      }

      // TTI (approximation)
      this.metrics.tti = navigationEntry?.loadEventEnd - navigationEntry?.navigationStart || 0;
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public getScore(): number {
    const metrics = this.getMetrics();
    let score = 0;
    let count = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== undefined) {
      if (metrics.fcp <= 1800) score += 100;
      else if (metrics.fcp <= 3000) score += 80;
      else if (metrics.fcp <= 4000) score += 60;
      else if (metrics.fcp <= 5000) score += 40;
      else score += 20;
      count++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== undefined) {
      if (metrics.lcp <= 2500) score += 100;
      else if (metrics.lcp <= 4000) score += 80;
      else if (metrics.lcp <= 5000) score += 60;
      else if (metrics.lcp <= 6000) score += 40;
      else score += 20;
      count++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== undefined) {
      if (metrics.fid <= 100) score += 100;
      else if (metrics.fid <= 300) score += 80;
      else if (metrics.fid <= 500) score += 60;
      else if (metrics.fid <= 1000) score += 40;
      else score += 20;
      count++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== undefined) {
      if (metrics.cls <= 0.1) score += 100;
      else if (metrics.cls <= 0.25) score += 80;
      else if (metrics.cls <= 0.4) score += 60;
      else if (metrics.cls <= 0.6) score += 40;
      else score += 20;
      count++;
    }

    return count > 0 ? Math.round(score / count) : 0;
  }

  public reportMetrics(): void {
    const metrics = this.getMetrics();
    const score = this.getScore();
    
    console.log('Performance Metrics:', {
      ...metrics,
      score,
      timestamp: new Date().toISOString()
    });

    // Send to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'core_web_vitals',
        value: score,
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb
        }
      });
    }
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
let performanceMonitor: PerformanceMonitor | null = null;

export function getPerformanceMonitor(): PerformanceMonitor {
  if (!performanceMonitor) {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor;
}

export function cleanupPerformanceMonitor(): void {
  if (performanceMonitor) {
    performanceMonitor.cleanup();
    performanceMonitor = null;
  }
}