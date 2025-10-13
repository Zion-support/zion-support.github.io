// Monitoring utility functions

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  errorCount: number;
}

export interface ErrorInfo {
  message: string;
  stack?: string;
  timestamp: Date;
  url: string;
  userAgent: string;
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    errorCount: 0,
  };

  private errors: ErrorInfo[] = [];

  init(): void {
    this.startPerformanceTracking();
    this.setupErrorHandling();
  }

  private startPerformanceTracking(): void {
    if (typeof window !== 'undefined' && window.performance) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
        this.metrics.renderTime = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      });
    }
  }

  private setupErrorHandling(): void {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.trackError({
          message: event.message,
          stack: event.error?.stack,
          timestamp: new Date(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        });
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.trackError({
          message: `Unhandled Promise Rejection: ${event.reason}`,
          timestamp: new Date(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        });
      });
    }
  }

  trackError(error: ErrorInfo): void {
    this.errors.push(error);
    this.metrics.errorCount++;
    
    // Send to monitoring service in production
    if (process.env.NODE_ENV === 'production') {
      this.sendToMonitoringService(error);
    }
  }

  private sendToMonitoringService(error: ErrorInfo): void {
    // Implementation for sending errors to monitoring service
    console.log('Error sent to monitoring service:', error);
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getErrors(): ErrorInfo[] {
    return [...this.errors];
  }

  reset(): void {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      errorCount: 0,
    };
    this.errors = [];
  }
}

export const performanceMonitor = new PerformanceMonitor();

export function initMonitoring(): void {
  performanceMonitor.init();
}

export function trackError(error: ErrorInfo): void {
  performanceMonitor.trackError(error);
}

export function getPerformanceMetrics(): PerformanceMetrics {
  return performanceMonitor.getMetrics();
}

export function getErrors(): ErrorInfo[] {
  return performanceMonitor.getErrors();
}

export default performanceMonitor;