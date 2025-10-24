'use client';
<<<<<<< HEAD

=======
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
export interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  inp?: number;
}
export interface ErrorReport {
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}
class MonitoringService {
  private metrics: PerformanceMetrics = {};
  private errors: ErrorReport[] = [];
<<<<<<< HEAD
  private observer: PerformanceObserver | null = null;

=======
  private isInitialized = false;
>>>>>>> origin/main
  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring();
    }
  }
<<<<<<< HEAD

  private initializeMonitoring(): void {
    // Monitor Web Vitals
    this.monitorWebVitals();
    
    // Monitor long tasks
    if (performanceConfig.monitoring.enableLongTaskDetection) {
      this.monitorLongTasks();
    }
    
    // Monitor memory usage
    if (performanceConfig.monitoring.enableMemoryMonitoring) {
      this.monitorMemoryUsage();
    }
    
    // Monitor errors
    this.monitorErrors();
  }

  private monitorWebVitals(): void {
    if (typeof window === 'undefined') return;

    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB, getINP }) => {
      getCLS((metric) => this.handleWebVital('cls', metric.value));
      getFID((metric) => this.handleWebVital('fid', metric.value));
      getFCP((metric) => this.handleWebVital('fcp', metric.value));
      getLCP((metric) => this.handleWebVital('lcp', metric.value));
      getTTFB((metric) => this.handleWebVital('ttfb', metric.value));
      getINP((metric) => this.handleWebVital('inp', metric.value));
    });
  }

  private handleWebVital(name: keyof PerformanceMetrics, value: number): void {
    this.metrics[name] = value;
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'web_vital', {
        metric_name: name,
        metric_value: value,
        metric_rating: this.getMetricRating(name, value)
      });
    }
  }

  private getMetricRating(name: keyof PerformanceMetrics, value: number): string {
    const config = performanceConfig.webVitals[name];
    if (!config) return 'unknown';
    
    if (value <= config.good) return 'good';
    if (value <= config.needsImprovement) return 'needs-improvement';
    return 'poor';
  }

  private monitorLongTasks(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      this.observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Long task threshold
            if (typeof gtag !== 'undefined') {
              gtag('event', 'long_task', {
                duration: entry.duration,
                start_time: entry.startTime
              });
            }
          }
        }
      });
      
      this.observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        // eslint-disable-next-line no-console
        console.warn('Long task monitoring not supported:', error);
      }
    }
  }

  private monitorMemoryUsage(): void {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    setInterval(() => {
      const memory = (performance as any).memory;
      if (memory) {
        if (typeof gtag !== 'undefined') {
          gtag('event', 'memory_usage', {
            used_js_heap_size: memory.usedJSHeapSize,
            total_js_heap_size: memory.totalJSHeapSize,
            js_heap_size_limit: memory.jsHeapSizeLimit
          });
        }
      }
    }, 30000); // Check every 30 seconds
  }

  private monitorErrors(): void {
    if (typeof window === 'undefined') return;

=======
  private initializeMonitoring() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.setupPerformanceObserver();
    this.setupErrorHandling();
    this.setupLongTaskDetection();
  }
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
    }
    this.reportMetric(entry.entryType, value);
  }
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
<<<<<<< HEAD
=======
        component: 'Promise',
>>>>>>> origin/main
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }
<<<<<<< HEAD

  private reportError(error: ErrorReport): void {
    this.errors.push(error);
    
    // Send to analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          component: error.component || 'unknown',
          stack: error.stack || 'no stack trace'
        }
      });
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
>>>>>>> origin/main
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
    this.errors = [];
  }

  public destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }
}

// Export singleton instance
export const monitoringService = new MonitoringService();

// Export utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, parameters);
  }
};

export const trackPageView = (page: string) => {
  if (typeof gtag !== 'undefined') {
    gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: page
    });
  }
};
=======
  public clearErrors() {
    this.errors = [];
  }
}
export const monitoringService = new MonitoringService();
export default monitoringService;
>>>>>>> origin/main
