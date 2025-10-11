// Monitoring utilities
interface PerformanceMetrics {
  fid: number;
  lcp: number;
  cls: number;
  fcp: number;
  ttfb: number;
}

interface ErrorReport {
  message: string;
  stack?: string;
  timestamp: number;
  userAgent: string;
  url: string;
}

class MonitoringService {
  private metrics: PerformanceMetrics = {
    fid: 0,
    lcp: 0,
    cls: 0,
    fcp: 0,
    ttfb: 0
  };
  private errors: ErrorReport[] = [];
  private observer: PerformanceObserver | null = null;

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor performance metrics
    if ('PerformanceObserver' in window) {
      this.observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          this.reportMetric(entry.name, entry.startTime);
        });
      });

      try {
        this.observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      } catch (error) {
        console.warn('Performance monitoring not supported:', error);
      }
    }

    // Monitor errors
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });

    // Monitor unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }

  private reportMetric(name: string, value: number): void {
    switch (name) {
      case 'fid':
        this.metrics.fid = value;
        break;
      case 'lcp':
        this.metrics.lcp = value;
        break;
      case 'cls':
        this.metrics.cls = value;
        break;
      case 'fcp':
        this.metrics.fcp = value;
        break;
      case 'ttfb':
        this.metrics.ttfb = value;
        break;
    }
  }

  private reportError(error: ErrorReport): void {
    this.errors.push(error);
    
    // Keep only last 100 errors
    if (this.errors.length > 100) {
      this.errors = this.errors.slice(-100);
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  getErrorCount(): number {
    return this.errors.length;
  }

  clearErrors(): void {
    this.errors = [];
  }

  destroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Export singleton instance
export const monitoring = new MonitoringService();

// Export utility functions
export const trackPerformance = (name: string): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
  }
};

export const startPerformanceMark = (name: string): void => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(`${name}-start`);
  }
};

export const getPerformanceMetrics = (): PerformanceMetrics => {
  return monitoring.getMetrics();
};

export const getErrorReports = (): ErrorReport[] => {
  return monitoring.getErrors();
};