/**
 * Performance Reporter
 * Comprehensive performance monitoring and reporting
 */

import React from 'react';
import { logger } from './logger';

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface PerformanceReport {
  metrics: PerformanceMetric[];
  navigation?: PerformanceNavigationTiming;
  resources?: PerformanceResourceTiming[];
  timestamp: number;
  userAgent: string;
  url: string;
}

class PerformanceReporter {
  private metrics: PerformanceMetric[] = [];
  private reportingInterval?: NodeJS.Timeout;
  private isEnabled: boolean = false;

  /**
   * Initialize performance monitoring
   */
  init(config?: { enabled?: boolean; reportInterval?: number }): void {
    if (typeof window === 'undefined') {
      return;
    }

    this.isEnabled = config?.enabled ?? process.env['NODE_ENV'] === 'production';

    if (!this.isEnabled) {
      return;
    }

    // Monitor Core Web Vitals
    this.monitorWebVitals();

    // Monitor navigation timing
    this.monitorNavigationTiming();

    // Monitor resource timing
    this.monitorResourceTiming();

    // Start periodic reporting
    const interval = config?.reportInterval ?? 30000; // 30 seconds
    this.reportingInterval = setInterval(() => {
      this.reportMetrics();
    }, interval);
  }

  /**
   * Monitor Core Web Vitals
   */
  private monitorWebVitals(): void {
    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as PerformanceEntry;
      this.addMetric('lcp', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntry[]) {
        const fidEntry = entry as PerformanceEntry & { processingStart: number };
        const fid = fidEntry.processingStart - fidEntry.startTime;
        this.addMetric('fid', fid);
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
          this.addMetric('cls', clsValue);
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.addMetric('fcp', entry.startTime);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // TTFB - Time to First Byte
    const ttfbObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntry[]) {
        const navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number };
        if (navEntry.responseStart > 0) {
          const ttfb = navEntry.responseStart - navEntry.requestStart;
          this.addMetric('ttfb', ttfb);
        }
      }
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });
  }

  /**
   * Monitor navigation timing
   */
  private monitorNavigationTiming(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.addMetric('dom-content-loaded', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        this.addMetric('load-complete', navigation.loadEventEnd - navigation.loadEventStart);
        this.addMetric('dom-interactive', navigation.domInteractive - navigation.fetchStart);
      }
    });
  }

  /**
   * Monitor resource timing
   */
  private monitorResourceTiming(): void {
    if (typeof window === 'undefined') return;

    window.addEventListener('load', () => {
      const resources = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
      resources.forEach((resource) => {
        if (resource.duration > 1000) { // Resources taking longer than 1s
          this.addMetric('slow-resource', resource.duration, {
            name: resource.name,
            initiatorType: resource.initiatorType,
          });
        }
      });
    });
  }

  /**
   * Add a performance metric
   */
  private addMetric(name: string, value: number, metadata?: Record<string, unknown>): void {
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);

    // Keep only last 1000 metrics
    if (this.metrics.length > 1000) {
      this.metrics.shift();
    }

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.log(`Performance Metric: ${name} = ${value}ms (${rating})`, metadata);
    }
  }

  /**
   * Get rating for a metric
   */
  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, { good: number; needsImprovement: number }> = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fcp: { good: 1800, needsImprovement: 3000 },
      ttfb: { good: 800, needsImprovement: 1800 },
    };

    const threshold = thresholds[name];
    if (!threshold) {
      return 'good';
    }

    if (value <= threshold.good) {
      return 'good';
    } else if (value <= threshold.needsImprovement) {
      return 'needs-improvement';
    } else {
      return 'poor';
    }
  }

  /**
   * Report metrics to analytics service
   */
  private reportMetrics(): void {
    if (!this.isEnabled || this.metrics.length === 0) {
      return;
    }

    try {
      const report: PerformanceReport = {
        metrics: [...this.metrics],
        timestamp: Date.now(),
        userAgent: navigator.userAgent,
        url: window.location.href,
      };

      // Send to analytics service
      if ('gtag' in window) {
        (window as any).gtag('event', 'performance_report', {
          report_data: report,
        });
      }

      // Log in development
      if (process.env['NODE_ENV'] === 'development') {
        console.log('Performance Report:', report);
      }

      // Clear reported metrics
      this.metrics = [];
    } catch (error) {
      logger.error('Failed to report performance metrics', error as Error);
    }
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  /**
   * Get performance summary
   */
  getSummary(): {
    totalMetrics: number;
    goodMetrics: number;
    needsImprovementMetrics: number;
    poorMetrics: number;
    averageRating: number;
  } {
    const total = this.metrics.length;
    const good = this.metrics.filter(m => m.rating === 'good').length;
    const needsImprovement = this.metrics.filter(m => m.rating === 'needs-improvement').length;
    const poor = this.metrics.filter(m => m.rating === 'poor').length;

    const ratingScores = { good: 3, 'needs-improvement': 2, poor: 1 };
    const averageRating = total > 0 
      ? this.metrics.reduce((sum, m) => sum + ratingScores[m.rating], 0) / total 
      : 0;

    return {
      totalMetrics: total,
      goodMetrics: good,
      needsImprovementMetrics: needsImprovement,
      poorMetrics: poor,
      averageRating: Math.round(averageRating * 100) / 100,
    };
  }

  /**
   * Stop monitoring
   */
  stop(): void {
    if (this.reportingInterval) {
      clearInterval(this.reportingInterval);
      this.reportingInterval = undefined;
    }
    this.isEnabled = false;
  }

  /**
   * Clear all metrics
   */
  clear(): void {
    this.metrics = [];
  }
}

// Create singleton instance
export const performanceReporter = new PerformanceReporter();

// Export convenience functions
export const initPerformanceMonitoring = (config?: { enabled?: boolean; reportInterval?: number }) => 
  performanceReporter.init(config);
export const getPerformanceMetrics = () => performanceReporter.getMetrics();
export const getPerformanceSummary = () => performanceReporter.getSummary();
export const stopPerformanceMonitoring = () => performanceReporter.stop();
export const clearPerformanceMetrics = () => performanceReporter.clear();

export default performanceReporter;