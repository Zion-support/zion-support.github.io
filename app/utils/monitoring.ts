'use client';

/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */

// Declare gtag function for Google Analytics
declare global {
  function gtag(...args: any[]): void;
}

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
  private isInitialized = false;

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

    // Unhandled promise rejection handler
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
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
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

  public clearErrors() {
    this.errors = [];
  }
}

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