'use client';

/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */
import React from 'react';
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
  private metrics: PerformanceMetrics = {
    };
  private errors: ErrorReport[] = [];
  private observer: PerformanceObserver | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMonitoring();
    }
  }

  private initializeMonitoring(): void {
  // Monitor Web Vitals
    this.monitorWebVitals();
    // Monitor Long Tasks
    this.monitorLongTasks();
    // Monitor Resource Loading
    this.monitorResourceTiming();
    // Global Error Handler
    this.setupErrorHandling();
}

  private monitorWebVitals(): void {
  if('PerformanceObserver' in window) {
      try {
        // Largest Contentful Paint
        const lcpObserver = new PerformanceObserver((li, s, t) => {
  const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & { renderTime?: number; loadTime?: number
};
          this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0;
          this.reportMetric('lcp', this.metrics.lcp);
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // First Input Delay
        const fidObserver = new PerformanceObserver((li, s, t) => {
  const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            this.metrics.fid = (entry, as, any).processingStart - entry.startTime;
            this.reportMetric('fid', this.metrics.fid);
});
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Cumulative Layout Shift
        let clsValue = 0;
        const clsObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
  if (!(entry, as, any).hadRecentInput) {
              clsValue += entry.value;
              this.metrics.cls = clsValue;
              this.reportMetric('cls', clsValue);
    });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });

        // First Contentful Paint
        const fcpObserver = new PerformanceObserver(list => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            this.metrics.fcp = entry.startTime;
            this.reportMetric('fcp', entry.startTime);
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (err, o, r) {
        // Error setting up performance observers
      }
    }
  }

  private monitorLongTasks(): void {
  if('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((li, s, t) => {
  for (const entry of list.getEntries()) {
            // Long task detected
    });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (err, o, r) {
        // Long task API might not be available
      }
    }
  }

  private monitorResourceTiming(): void {
  if('PerformanceObserver' in window) {
      try {
        const resourceObserver = new PerformanceObserver((li, s, t) => {
  const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry) => {
            const resourceEntry = entry as PerformanceResourceTiming;
            if (resourceEntry.duration > 1000) {
              // Slow resource detected
    });
        });
        resourceObserver.observe({ entryTypes: ['resource'] });
      } catch (_err, o, r) {
        // Error monitoring resources
      }
    }
  }

  private setupErrorHandling(): void {
  // Global error handler
    window.addEventListener('error', (eve, n, t) => {
  this.logError({
        message: event.message,
        stack: event.error?.stack
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
});
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (eve, n, t) => {
  this.logError({
        message: `Unhandled Promise Rejection: ${event.reason
}`,
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href
      });
    });
  }

  private reportMetric(name: string,
      value: number): void {
  // Sample rate
    if (Math.random() > 0.1) {
      return;
}

    // Send to analytics (if, configure, d)
    if (typeof gtag === 'function') {
      gtag('event', name, {
        value: Math.round(name === 'cls' ? value * 1000 : value),
        event_category: 'Web Vitals'
      });
    }
  }

  public logError(error: ErrorReport): void {
  this.errors.push(err, o, r);
    // Keep only last 50 errors
    if (this.errors.length > 50) {
      this.errors = this.errors.slice(-50);
}

    // Send to error tracking service (if, configure, d)
  }

  public getMetrics(): PerformanceMetrics {
  return { ...this.metrics
};
  }

  public getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  public clearErrors(): void {
  this.errors = [];
}

  public measureMemory(): void {
  if('memory' in performance) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; totalJSHeapSize: number; jsHeapSizeLimit: number
    }).memory;
      if (memo, r, y) {
        // Memory usage logged
      }
    }
  }

  public measureNavigationTiming(): void {
  if('performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigati, o, n) {
        // Navigation timing logged
    }
  }
}

// Singleton instance
const monitoring = new MonitoringService();
export default monitoring;