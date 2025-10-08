/**
 * Comprehensive Monitoring Utility
 * Real-time application monitoring, performance tracking, and error reporting
 */

import React from 'react';
import { performanceConfig } from '../../performance.config';

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
    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      this.metrics.lcp = lastEntry.startTime;
      this.reportMetric('lcp', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntry[]) {
        const fidEntry = entry as PerformanceEntry & { processingStart: number };
        this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
        this.reportMetric('fid', this.metrics.fid);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntry[]) {
        const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number };
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
          this.metrics.cls = clsValue;
          this.reportMetric('cls', clsValue);
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
          this.reportMetric('fcp', entry.startTime);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB - Time to First Byte
    const ttfbObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntry[]) {
        const navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number };
        if (navEntry.responseStart > 0) {
          this.metrics.ttfb = navEntry.responseStart - navEntry.requestStart;
          this.reportMetric('ttfb', this.metrics.ttfb);
        }
      }
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });
  }

  private monitorLongTasks(): void {
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            this.reportMetric('long-task', entry.duration);
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    }
  }

  private monitorResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) { // Resources taking longer than 1s
            this.reportMetric('slow-resource', resourceEntry.duration, {
              name: resourceEntry.name,
              initiatorType: resourceEntry.initiatorType,
            });
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
    }
  }

  private setupErrorHandling(): void {
    // Global error handler
    window.addEventListener('error', (event) => {
      this.reportError({
        message: event.message,
        stack: event.error?.stack,
        component: 'global',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      this.reportError({
        message: event.reason?.message || 'Unhandled promise rejection',
        stack: event.reason?.stack,
        component: 'promise',
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      });
    });
  }

  private reportMetric(name: string, value: number, metadata?: Record<string, unknown>): void {
    // Send to analytics service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        ...metadata,
      });
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.log(`Performance Metric: ${name} = ${value}ms`, metadata);
    }
  }

  private reportError(error: ErrorReport): void {
    this.errors.push(error);
    
    // Keep only last 100 errors
    if (this.errors.length > 100) {
      this.errors.shift();
    }

    // Send to error reporting service
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false,
        custom_map: {
          stack: error.stack,
          component: error.component,
        },
      });
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.error('Error reported:', error);
    }
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get error reports
   */
  getErrors(): ErrorReport[] {
    return [...this.errors];
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    status: 'good' | 'needs-improvement' | 'poor';
    metrics: PerformanceMetrics;
    recommendations: string[];
  } {
    const recommendations: string[] = [];
    let status: 'good' | 'needs-improvement' | 'poor' = 'good';

    // Check LCP
    if (this.metrics.lcp) {
      if (this.metrics.lcp > 4000) {
        status = 'poor';
        recommendations.push('LCP is too high - optimize largest contentful paint');
      } else if (this.metrics.lcp > 2500) {
        status = status === 'good' ? 'needs-improvement' : status;
        recommendations.push('LCP could be improved - consider optimizing images and fonts');
      }
    }

    // Check FID
    if (this.metrics.fid) {
      if (this.metrics.fid > 300) {
        status = 'poor';
        recommendations.push('FID is too high - reduce JavaScript execution time');
      } else if (this.metrics.fid > 100) {
        status = status === 'good' ? 'needs-improvement' : status;
        recommendations.push('FID could be improved - consider code splitting and lazy loading');
      }
    }

    // Check CLS
    if (this.metrics.cls) {
      if (this.metrics.cls > 0.25) {
        status = 'poor';
        recommendations.push('CLS is too high - avoid layout shifts');
      } else if (this.metrics.cls > 0.1) {
        status = status === 'good' ? 'needs-improvement' : status;
        recommendations.push('CLS could be improved - reserve space for dynamic content');
      }
    }

    return {
      status,
      metrics: this.metrics,
      recommendations,
    };
  }

  /**
   * Clear all data
   */
  clearData(): void {
    this.metrics = {};
    this.errors = [];
  }
}

// Create singleton instance
export const monitoringService = new MonitoringService();

// Export convenience functions
export const getMetrics = () => monitoringService.getMetrics();
export const getErrors = () => monitoringService.getErrors();
export const getPerformanceSummary = () => monitoringService.getPerformanceSummary();
export const clearMonitoringData = () => monitoringService.clearData();

export default monitoringService;