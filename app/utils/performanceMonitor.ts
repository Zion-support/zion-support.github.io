/**
 * Performance Monitoring Utilities
 * Comprehensive performance tracking and optimization
 */

export interface PerformanceMetrics {
  fcp: number | null;
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  ttfb: number | null;
  fmp: number | null;
  si: number | null;
  tbt: number | null;
}

export interface PerformanceReport {
  metrics: PerformanceMetrics;
  timestamp: number;
  url: string;
  userAgent: string;
  connectionType?: string;
  deviceMemory?: number;
  hardwareConcurrency?: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {
    fcp: null,
    lcp: null,
    fid: null,
    cls: null,
    ttfb: null,
    fmp: null,
    si: null,
    tbt: null
  };
  private observers: PerformanceObserver[] = [];
  private reportQueue: PerformanceReport[] = [];

  private constructor() {
    this.initialize();
  }

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initialize(): void {
    if (typeof window === 'undefined') return;

    this.measureWebVitals();
    this.measureCustomMetrics();
    this.setupPerformanceObserver();
    this.trackResourceTiming();
    this.trackNavigationTiming();
  }

  private measureWebVitals(): void {
    if (typeof window === 'undefined') return;

    // First Contentful Paint (FCP)
    this.observePaint('first-contentful-paint', (entry) => {
      this.metrics.fcp = entry.startTime;
    });

    // Largest Contentful Paint (LCP)
    this.observeLCP();

    // First Input Delay (FID)
    this.observeFID();

    // Cumulative Layout Shift (CLS)
    this.observeCLS();

    // Time to First Byte (TTFB)
    this.measureTTFB();

    // First Meaningful Paint (FMP)
    this.measureFMP();

    // Speed Index (SI)
    this.measureSI();

    // Total Blocking Time (TBT)
    this.measureTBT();
  }

  private observePaint(entryType: string, callback: (entry: PerformanceEntry) => void): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === entryType) {
            callback(entry);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe paint metrics:', error);
    }
  }

  private observeLCP(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe LCP:', error);
    }
  }

  private observeFID(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe FID:', error);
    }
  }

  private observeCLS(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value?: number };
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value || 0;
            this.metrics.cls = clsValue;
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to observe CLS:', error);
    }
  }

  private measureTTFB(): void {
    if (typeof performance === 'undefined') return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      }
    } catch (error) {
      console.warn('Failed to measure TTFB:', error);
    }
  }

  private measureFMP(): void {
    if (typeof performance === 'undefined') return;

    try {
      const paintEntries = performance.getEntriesByType('paint');
      const fmpEntry = paintEntries.find(entry => entry.name === 'first-meaningful-paint');
      if (fmpEntry) {
        this.metrics.fmp = fmpEntry.startTime;
      }
    } catch (error) {
      console.warn('Failed to measure FMP:', error);
    }
  }

  private measureSI(): void {
    if (typeof performance === 'undefined') return;

    try {
      // Simplified Speed Index calculation
      const paintEntries = performance.getEntriesByType('paint');
      const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.metrics.si = fcpEntry.startTime;
      }
    } catch (error) {
      console.warn('Failed to measure SI:', error);
    }
  }

  private measureTBT(): void {
    if (typeof performance === 'undefined') return;

    try {
      const longTasks = performance.getEntriesByType('longtask');
      let totalBlockingTime = 0;
      longTasks.forEach(task => {
        totalBlockingTime += task.duration - 50; // Subtract 50ms threshold
      });
      this.metrics.tbt = Math.max(0, totalBlockingTime);
    } catch (error) {
      console.warn('Failed to measure TBT:', error);
    }
  }

  private measureCustomMetrics(): void {
    if (typeof window === 'undefined') return;

    // Page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const loadTime = navigation.loadEventEnd - navigation.fetchStart;
        this.trackCustomMetric('page_load_time', loadTime);
      }
    });

    // DOM content loaded time
    document.addEventListener('DOMContentLoaded', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const domContentLoadedTime = navigation.domContentLoadedEventEnd - navigation.fetchStart;
        this.trackCustomMetric('dom_content_loaded_time', domContentLoadedTime);
      }
    });

    // Time to interactive
    this.measureTimeToInteractive();
  }

  private measureTimeToInteractive(): void {
    if (typeof window === 'undefined') return;

    let tti = 0;
    const longTasks = performance.getEntriesByType('longtask');
    
    if (longTasks.length > 0) {
      const lastLongTask = longTasks[longTasks.length - 1];
      tti = lastLongTask.startTime + lastLongTask.duration;
    } else {
      tti = performance.now();
    }

    this.trackCustomMetric('time_to_interactive', tti);
  }

  private setupPerformanceObserver(): void {
    if (!('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.trackResourceTiming(entry);
        }
      });
      observer.observe({ entryTypes: ['resource', 'navigation', 'paint', 'measure'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('Failed to setup performance observer:', error);
    }
  }

  private trackResourceTiming(entry?: PerformanceEntry): void {
    if (!entry) return;

    const resourceData = {
      name: entry.name,
      duration: entry.duration,
      startTime: entry.startTime,
      entryType: entry.entryType,
      size: 'transferSize' in entry ? (entry as any).transferSize : 0,
      cached: 'transferSize' in entry ? (entry as any).transferSize === 0 : false
    };

    this.trackCustomMetric('resource_timing', resourceData);
  }

  private trackNavigationTiming(): void {
    if (typeof performance === 'undefined') return;

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const timingData = {
          dns: navigation.domainLookupEnd - navigation.domainLookupStart,
          tcp: navigation.connectEnd - navigation.connectStart,
          ssl: navigation.secureConnectionStart > 0 ? navigation.connectEnd - navigation.secureConnectionStart : 0,
          ttfb: navigation.responseStart - navigation.requestStart,
          download: navigation.responseEnd - navigation.responseStart,
          domProcessing: navigation.domComplete - navigation.domLoading,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
          load: navigation.loadEventEnd - navigation.loadEventStart
        };

        this.trackCustomMetric('navigation_timing', timingData);
      }
    } catch (error) {
      console.warn('Failed to track navigation timing:', error);
    }
  }

  private trackCustomMetric(name: string, value: number | Record<string, unknown>): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public generateReport(): PerformanceReport {
    const report: PerformanceReport = {
      metrics: this.getMetrics(),
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      connectionType: this.getConnectionType(),
      deviceMemory: this.getDeviceMemory(),
      hardwareConcurrency: navigator.hardwareConcurrency
    };

    this.reportQueue.push(report);
    return report;
  }

  private getConnectionType(): string | undefined {
    if ('connection' in navigator) {
      return (navigator as any).connection?.effectiveType;
    }
    return undefined;
  }

  private getDeviceMemory(): number | undefined {
    if ('deviceMemory' in navigator) {
      return (navigator as any).deviceMemory;
    }
    return undefined;
  }

  public sendReport(): void {
    if (this.reportQueue.length === 0) return;

    const report = this.generateReport();
    
    // In production, send to analytics service
    if (process.env.NODE_ENV === 'production') {
      this.sendToAnalytics(report);
    }
  }

  private async sendToAnalytics(report: PerformanceReport): Promise<void> {
    try {
      // Example: Send to Google Analytics
      if ('gtag' in window) {
        (window as any).gtag('event', 'performance_metrics', {
          event_category: 'Performance',
          event_label: 'Web Vitals',
          value: Math.round(report.metrics.lcp || 0),
          custom_map: {
            fcp: report.metrics.fcp,
            lcp: report.metrics.lcp,
            fid: report.metrics.fid,
            cls: report.metrics.cls,
            ttfb: report.metrics.ttfb
          }
        });
      }
    } catch (error) {
      console.warn('Failed to send performance report:', error);
    }
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  public getPerformanceScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // LCP scoring (0-100)
    if (metrics.lcp !== null) {
      if (metrics.lcp > 4000) score -= 30;
      else if (metrics.lcp > 2500) score -= 20;
      else if (metrics.lcp > 1000) score -= 10;
    }

    // FID scoring (0-100)
    if (metrics.fid !== null) {
      if (metrics.fid > 300) score -= 30;
      else if (metrics.fid > 100) score -= 20;
      else if (metrics.fid > 50) score -= 10;
    }

    // CLS scoring (0-100)
    if (metrics.cls !== null) {
      if (metrics.cls > 0.25) score -= 30;
      else if (metrics.cls > 0.1) score -= 20;
      else if (metrics.cls > 0.05) score -= 10;
    }

    return Math.max(0, score);
  }
}

export default PerformanceMonitor;