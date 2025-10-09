// Performance monitoring utilities
export interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  navigationStart: number;
  domContentLoaded: number;
  loadComplete: number;
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeMetrics();
    this.setupObservers();
  }

  private initializeMetrics() {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.navigationStart = navigation.navigationStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.navigationStart;
      this.metrics.loadComplete = navigation.loadEventEnd - navigation.navigationStart;
      this.metrics.ttfb = navigation.responseStart - navigation.navigationStart;
    }
  }

  private setupObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // FCP Observer
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP observer not supported:', error);
    }

    // LCP Observer
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }

    // FID Observer
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'first-input') {
            this.metrics.fid = entry.processingStart - entry.startTime;
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }

    // CLS Observer
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
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

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public getScore(): number {
    const metrics = this.getMetrics();
    let score = 0;
    let count = 0;

    // FCP scoring (0-100)
    if (metrics.fcp !== null) {
      if (metrics.fcp <= 1800) score += 100;
      else if (metrics.fcp <= 3000) score += 80;
      else if (metrics.fcp <= 4000) score += 60;
      else score += 40;
      count++;
    }

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp <= 2500) score += 100;
      else if (metrics.lcp <= 4000) score += 80;
      else if (metrics.lcp <= 6000) score += 60;
      else score += 40;
      count++;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid <= 100) score += 100;
      else if (metrics.fid <= 300) score += 80;
      else if (metrics.fid <= 500) score += 60;
      else score += 40;
      count++;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls <= 0.1) score += 100;
      else if (metrics.cls <= 0.25) score += 80;
      else if (metrics.cls <= 0.4) score += 60;
      else score += 40;
      count++;
    }

    return count > 0 ? Math.round(score / count) : 0;
  }

  public logMetrics() {
    const metrics = this.getMetrics();
    const score = this.getScore();
    
    console.group('🚀 Performance Metrics');
    console.log('Overall Score:', score);
    console.log('FCP (First Contentful Paint):', metrics.fcp ? `${metrics.fcp.toFixed(2)}ms` : 'N/A');
    console.log('LCP (Largest Contentful Paint):', metrics.lcp ? `${metrics.lcp.toFixed(2)}ms` : 'N/A');
    console.log('FID (First Input Delay):', metrics.fid ? `${metrics.fid.toFixed(2)}ms` : 'N/A');
    console.log('CLS (Cumulative Layout Shift):', metrics.cls ? metrics.cls.toFixed(4) : 'N/A');
    console.log('TTFB (Time to First Byte):', metrics.ttfb ? `${metrics.ttfb.toFixed(2)}ms` : 'N/A');
    console.log('DOM Content Loaded:', metrics.domContentLoaded ? `${metrics.domContentLoaded.toFixed(2)}ms` : 'N/A');
    console.log('Load Complete:', metrics.loadComplete ? `${metrics.loadComplete.toFixed(2)}ms` : 'N/A');
    console.groupEnd();

    // Send to analytics
    this.sendToAnalytics(metrics, score);
  }

  private sendToAnalytics(metrics: Partial<PerformanceMetrics>, score: number) {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if ('gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'performance',
        event_label: 'core_web_vitals',
        custom_map: {
          fcp: metrics.fcp,
          lcp: metrics.lcp,
          fid: metrics.fid,
          cls: metrics.cls,
          ttfb: metrics.ttfb,
          score: score
        }
      });
    }

    // Custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics,
          score,
          timestamp: Date.now(),
          url: window.location.href,
          userAgent: navigator.userAgent
        })
      }).catch(error => {
        console.warn('Failed to send performance metrics:', error);
      });
    }
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
let performanceMonitor: PerformanceMonitor | null = null;

export const getPerformanceMonitor = (): PerformanceMonitor => {
  if (!performanceMonitor) {
    performanceMonitor = new PerformanceMonitor();
  }
  return performanceMonitor;
};

// Auto-log metrics after page load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      getPerformanceMonitor().logMetrics();
    }, 2000);
  });
}