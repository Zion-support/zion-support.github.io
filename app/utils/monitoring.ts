'use client';
/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */
// Declare gtag function for Google Analytics
declare global {
  function gtag(...args: any[]): void;
}
<<<<<<< HEAD

=======
>>>>>>> origin/main
const performanceConfig = {
  monitoring: {
    enableLongTaskDetection: true,
    enableMemoryMonitoring: true,
    sampleRate: 0.1
  },
  webVitals: {
    lcp: { good: 2500, needsImprovement: 4000 },
    fid: { good: 100, needsImprovement: 300 },
    cls: { good: 0.1, needsImprovement: 0.25 },
    fcp: { good: 1800, needsImprovement: 3000 },
    ttfb: { good: 800, needsImprovement: 1800 },
    inp: { good: 200, needsImprovement: 500 }
  }
};
export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}
export interface ErrorReport {
<<<<<<< HEAD
  message: string
  stack?: string
  component?: string
  timestamp: number
  userAgent: string
  url: string
=======
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
  userAgent: string;
  url: string;
>>>>>>> origin/main
}
class MonitoringService {
<<<<<<< HEAD
  private metrics: PerformanceMetrics = {}
  private errors: ErrorReport[] = []
  private observer: PerformanceObserver | null = null

=======
  private metrics: PerformanceMetrics = {};
  private errors: ErrorReport[] = [];
  private isInitialized = false;
>>>>>>> origin/main
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring();
    }
  }
  private initializeMonitoring() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.setupPerformanceObserver();
    this.setupErrorHandling();
    this.setupLongTaskDetection();
  }
<<<<<<< HEAD

  private monitorWebVitals(): void {
    if ('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number }
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0
          this.reportMetric('lcp', this.metrics.lcp)
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // First Input Delay
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            this.metrics.fid = (entry as any).processingStart - entry.startTime
            this.reportMetric('fid', this.metrics.fid)
          })
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        // Cumulative Layout Shift
        let clsValue = 0
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceEntry) => {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              this.metrics.cls = clsValue
              this.reportMetric('cls', clsValue)
            }
          })
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // First Contentful Paint
        const fcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries()
          entries.forEach(entry => {
            this.metrics.fcp = entry.startTime
            this.reportMetric('fcp', entry.startTime)
          })
        })
        fcpObserver.observe({ entryTypes: ['paint'] })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Error setting up Web Vitals monitoring:', error)
      }
    }
  }

  private monitorLongTasks(): void {
    if ('PerformanceObserver' in window && performanceConfig.monitoring.enableLongTaskDetection) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // eslint-disable-next-line no-console
            console.log('Long task detected:', entry.duration)
          }
        })
        longTaskObserver.observe({ entryTypes: ['longtask'] })
      } catch (error) {
        // Long task API might not be available
        // eslint-disable-next-line no-console
        console.warn('Long task monitoring not available:', error)
      }
=======
  private setupPerformanceObserver() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.handlePerformanceEntry(entry);
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift', 'first-contentful-paint', 'navigation'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }
  private handlePerformanceEntry(entry: PerformanceEntry) {
    const name = entry.name;
    const value = entry.startTime;
    switch (entry.entryType) {
      case 'largest-contentful-paint':
        this.metrics.lcp = value;
        break;
      case 'first-input':
        this.metrics.fid = value;
        break;
      case 'layout-shift':
        if (!(entry as any).hadRecentInput) {
          this.metrics.cls = (this.metrics.cls || 0) + (entry as any).value;
        }
        break;
      case 'first-contentful-paint':
        this.metrics.fcp = value;
        break;
      case 'navigation':
        this.metrics.ttfb = value;
        break;
>>>>>>> origin/main
    }
    this.reportMetric(entry.entryType, value);
  }
<<<<<<< HEAD

  private monitorResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          entries.forEach((entry: PerformanceResourceTiming) => {
            if (entry.duration > 1000) {
              // eslint-disable-next-line no-console
              console.log('Slow resource:', entry.name, entry.duration)
            }
          })
        })
        resourceObserver.observe({ entryTypes: ['resource'] })
      } catch (error) {
        // eslint-disable-next-line no-console
        console.warn('Resource timing monitoring not available:', error)
      }
    }
  }

  private setupErrorHandling(): void {
    // Global error handler
=======
  private setupErrorHandling() {
    if (typeof window === 'undefined') return;
>>>>>>> origin/main
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        component: 'Global',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
    window.addEventListener('unhandledrejection', (event) => {
<<<<<<< HEAD
      this.logError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
=======
      this.reportError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        component: 'Promise',
>>>>>>> origin/main
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }
<<<<<<< HEAD

  private reportMetric(name: string, value: number): void {
    // Sample rate
    if (Math.random() > performanceConfig.monitoring.sampleRate) {
      return
    }

    const thresholds = performanceConfig.webVitals[name as keyof typeof performanceConfig.webVitals]
    if (thresholds) {
      const rating = value <= thresholds.good ? 'good' : value <= thresholds.needsImprovement ? 'needs-improvement' : 'poor'
      // eslint-disable-next-line no-console
      console.log(`Web Vital ${name}:`, value, `(${rating})`)
    }

    // Send to analytics (if configured)
    if (typeof gtag === 'function') {
      gtag('event', name, {
        value: Math.round(name === 'cls' ? value * 100 : value),
        event_category: 'Web Vitals'
      })
=======
  private setupLongTaskDetection() {
    if (typeof window === 'undefined' || !performanceConfig.monitoring.enableLongTaskDetection) return;
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              this.reportMetric('long-task', entry.duration);
            }
          }
        });
        observer.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.warn('Long task detection not supported:', error);
      }
>>>>>>> origin/main
    }
  }
  private reportMetric(type: string, value: number) {
    if (typeof window === 'undefined' || !window.gtag) return;
    try {
      window.gtag('event', 'performance_metric', {
        metric_type: type,
        metric_value: value,
        page_path: window.location.pathname
      });
    } catch (error) {
      console.warn('Failed to report metric:', error);
    }
  }
  public reportError(error: ErrorReport) {
    this.errors.push(error);
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', 'exception', {
          description: error.message,
          fatal: false,
          custom_map: {
            component: error.component,
            stack: error.stack
          }
        });
      } catch (e) {
        console.warn('Failed to report error to analytics:', e);
      }
    }
    // Send to external monitoring service if configured
    if (process.env.NEXT_PUBLIC_MONITORING_ENDPOINT) {
      this.sendToMonitoringService(error);
    }
  }
  private async sendToMonitoringService(error: ErrorReport) {
    try {
      await fetch(process.env.NEXT_PUBLIC_MONITORING_ENDPOINT!, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(error)
      });
    } catch (e) {
      console.warn('Failed to send error to monitoring service:', e);
    }
  }
  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
  public getErrors(): ErrorReport[] {
    return [...this.errors];
  }
<<<<<<< HEAD

  public clearErrors(): void {
    this.errors = []
  }

  public measureMemory(): void {
    if ('memory' in performance && performanceConfig.monitoring.enableMemoryMonitoring) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number } }).memory
      if (memory) {
        // eslint-disable-next-line no-console
        console.log('Memory usage:', {
          used: `${Math.round(memory.usedJSHeapSize / 1048576)}MB`,
          total: `${Math.round(memory.totalJSHeapSize / 1048576)}MB`,
          limit: `${Math.round(memory.jsHeapSizeLimit / 1048576)}MB`
        })
      }
    }
  }

  public measureNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigation) {
        // eslint-disable-next-line no-console
        console.log('Performance metrics:', {
          'DNS Lookup': `${Math.round(navigation.domainLookupEnd - navigation.domainLookupStart)}ms`,
          'TCP Connect': `${Math.round(navigation.connectEnd - navigation.connectStart)}ms`,
          'TTFB': `${Math.round(navigation.responseStart - navigation.requestStart)}ms`,
          'Download': `${Math.round(navigation.responseEnd - navigation.responseStart)}ms`,
          'DOM Interactive': `${Math.round(navigation.domInteractive - navigation.fetchStart)}ms`,
          'DOM Complete': `${Math.round(navigation.domComplete - navigation.fetchStart)}ms`,
          'Load Complete': `${Math.round(navigation.loadEventEnd - navigation.fetchStart)}ms`
        })
      }
    }
  }
}

// Singleton instance
const monitoring = new MonitoringService()
export default monitoring
=======
  public clearErrors() {
    this.errors = [];
  }
}
export const monitoringService = new MonitoringService();
export default monitoringService;
>>>>>>> origin/main
