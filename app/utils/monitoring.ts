'use client';
<<<<<<< HEAD

=======
>>>>>>> origin/main
/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */
<<<<<<< HEAD

=======
>>>>>>> origin/main
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
<<<<<<< HEAD

=======
>>>>>>> origin/main
export interface ErrorReport {
  message: string;
  stack?: string;
  component?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}
<<<<<<< HEAD

=======
>>>>>>> origin/main
class MonitoringService {
  private metrics: PerformanceMetrics = {};
  private errors: ErrorReport[] = [];
  private isInitialized = false;
<<<<<<< HEAD

  constructor() {
    this.initialize();
  }

  private initialize() {
    if (typeof window === 'undefined') return;
    
    this.isInitialized = true;
    this.setupPerformanceObserver();
    this.setupErrorHandlers();
    this.setupWebVitals();
  }

  private setupPerformanceObserver() {
    if (!this.isInitialized) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'longtask') {
            this.trackLongTask(entry);
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('Performance Observer not supported:', error);
    }
  }

  private setupErrorHandlers() {
    if (!this.isInitialized) return;

    // Global error handler
=======
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

    // Unhandled promise rejection handler
=======
>>>>>>> origin/main
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: `Unhandled Promise Rejection: ${event.reason}`,
        stack: event.reason?.stack,
        component: 'Promise',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }
<<<<<<< HEAD

  private setupWebVitals() {
    if (!this.isInitialized) return;

    // Import web-vitals dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB, getINP }) => {
      getCLS((metric) => this.recordMetric('cls', metric.value));
      getFID((metric) => this.recordMetric('fid', metric.value));
      getFCP((metric) => this.recordMetric('fcp', metric.value));
      getLCP((metric) => this.recordMetric('lcp', metric.value));
      getTTFB((metric) => this.recordMetric('ttfb', metric.value));
      getINP((metric) => this.recordMetric('inp', metric.value));
    }).catch(() => {
      console.warn('Web Vitals not available');
    });
  }

  private recordMetric(name: keyof PerformanceMetrics, value: number) {
    this.metrics[name] = value;
    this.evaluateMetric(name, value);
  }

  private evaluateMetric(name: keyof PerformanceMetrics, value: number) {
    const thresholds = performanceConfig.webVitals[name];
    if (!thresholds) return;

    let status = 'poor';
    if (value <= thresholds.good) {
      status = 'good';
    } else if (value <= thresholds.needsImprovement) {
      status = 'needs-improvement';
    }

    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'web_vital', {
        metric_name: name,
        metric_value: value,
        metric_status: status
      });
    }
  }

  private trackLongTask(entry: PerformanceEntry) {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'long_task', {
        duration: entry.duration,
        start_time: entry.startTime
      });
    }
  }

  public reportError(error: ErrorReport) {
    this.errors.push(error);
    
    // Send to analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          component: error.component,
          stack: error.stack
        }
      });
    }

    // In production, send to error monitoring service
    if (process.env.NODE_ENV === 'production') {
      this.sendToErrorService(error);
    }
  }

  private async sendToErrorService(error: ErrorReport) {
    try {
      await fetch('/api/errors', {
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
>>>>>>> origin/main
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
<<<<<<< HEAD
        body: JSON.stringify(error),
      });
    } catch (err) {
      console.error('Failed to send error to monitoring service:', err);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  public clearMetrics() {
    this.metrics = {};
  }

=======
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
>>>>>>> origin/main
  public clearErrors() {
    this.errors = [];
  }
}
<<<<<<< HEAD

// Export singleton instance
export const monitoringService = new MonitoringService();

// Export utility functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPageView = (page: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: page
    });
  }
};

export const reportError = (error: ErrorReport) => {
  monitoringService.reportError(error);
};
=======
export const monitoringService = new MonitoringService();
export default monitoringService;
>>>>>>> origin/main
