/**
 * Advanced Performance Monitoring System
 * Tracks Core Web Vitals and custom performance metrics
 */

import { logger } from './logger';

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface WebVitals {
  FCP?: PerformanceMetric; // First Contentful Paint
  LCP?: PerformanceMetric; // Largest Contentful Paint
  FID?: PerformanceMetric; // First Input Delay
  CLS?: PerformanceMetric; // Cumulative Layout Shift
  TTFB?: PerformanceMetric; // Time to First Byte
  INP?: PerformanceMetric; // Interaction to Next Paint
}

export interface CustomMetric {
  name: string;
  value: number;
  unit: 'ms' | 'bytes' | 'count' | 'percentage';
  timestamp: number;
}

class PerformanceMonitoringService {
  private static instance: PerformanceMonitoringService;
  private webVitals: WebVitals = {};
  private customMetrics: CustomMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private maxMetrics = 1000;

  private constructor() {
    this.initializeObservers();
  }

  static getInstance(): PerformanceMonitoringService {
    if (!PerformanceMonitoringService.instance) {
      PerformanceMonitoringService.instance = new PerformanceMonitoringService();
    }
    return PerformanceMonitoringService.instance;
  }

  /**
   * Initialize performance observers
   */
  private initializeObservers(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    try {
      // Observe paint metrics (FCP)
      const paintObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.recordWebVital('FCP', entry.startTime);
          }
        });
      });
      paintObserver.observe({ type: 'paint', buffered: true });
      this.observers.push(paintObserver);

      // Observe LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.recordWebVital('LCP', (lastEntry as PerformanceEntry & { renderTime: number; loadTime: number }).renderTime || (lastEntry as PerformanceEntry & { renderTime: number; loadTime: number }).loadTime);
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      this.observers.push(lcpObserver);

      // Observe CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (!(entry as PerformanceEntry & { hadRecentInput: boolean }).hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value: number }).value;
            this.recordWebVital('CLS', clsValue);
          }
        });
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
      this.observers.push(clsObserver);

      // Observe FID
      const fidObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          this.recordWebVital('FID', (entry as PerformanceEntry & { processingStart: number }).processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
      this.observers.push(fidObserver);

      // Observe navigation timing for TTFB
      const navObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          const navEntry = entry as PerformanceNavigationTiming;
          this.recordWebVital('TTFB', navEntry.responseStart - navEntry.requestStart);
        });
      });
      navObserver.observe({ type: 'navigation', buffered: true });
      this.observers.push(navObserver);
    } catch (error) {
      logger.error('Failed to initialize performance observers', error);
    }
  }

  /**
   * Record a Web Vital metric
   */
  private recordWebVital(name: keyof WebVitals, value: number): void {
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now(),
    };

    this.webVitals[name] = metric;

    logger.info(`Web Vital: ${name}`, { value, rating });

    // Send to analytics
    this.sendToAnalytics(metric);
  }

  /**
   * Get rating for a Web Vital metric
   */
  private getRating(name: keyof WebVitals, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<keyof WebVitals, { good: number; poor: number }> = {
      FCP: { good: 1800, poor: 3000 },
      LCP: { good: 2500, poor: 4000 },
      FID: { good: 100, poor: 300 },
      CLS: { good: 0.1, poor: 0.25 },
      TTFB: { good: 800, poor: 1800 },
      INP: { good: 200, poor: 500 },
    };

    const threshold = thresholds[name];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Record a custom metric
   */
  recordCustomMetric(name: string, value: number, unit: CustomMetric['unit']): void {
    const metric: CustomMetric = {
      name,
      value,
      unit,
      timestamp: Date.now(),
    };

    this.customMetrics.push(metric);

    // Maintain max metrics limit
    if (this.customMetrics.length > this.maxMetrics) {
      this.customMetrics.shift();
    }

    logger.debug(`Custom Metric: ${name}`, { value, unit });
  }

  /**
   * Send metric to analytics service
   */
  private async sendToAnalytics(metric: PerformanceMetric): Promise<void> {
    try {
      if (typeof window !== 'undefined' && 'fetch' in window) {
        await fetch('/api/analytics/performance', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(metric),
        });
      }
    } catch (error) {
      logger.error('Failed to send metric to analytics', error);
    }
  }

  /**
   * Get all Web Vitals
   */
  getWebVitals(): WebVitals {
    return { ...this.webVitals };
  }

  /**
   * Get custom metrics
   */
  getCustomMetrics(): CustomMetric[] {
    return [...this.customMetrics];
  }

  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {
    const vitals = Object.values(this.webVitals);
    if (vitals.length === 0) return 0;

    const scores = vitals.map(metric => {
      switch (metric.rating) {
        case 'good': return 100;
        case 'needs-improvement': return 50;
        case 'poor': return 0;
        default: return 0;
      }
    });

    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }

  /**
   * Get performance summary
   */
  getSummary(): {
    score: number;
    webVitals: WebVitals;
    customMetrics: CustomMetric[];
    recommendations: string[];
  } {
    const score = this.getPerformanceScore();
    const recommendations: string[] = [];

    // Generate recommendations based on metrics
    if (this.webVitals.FCP && this.webVitals.FCP.rating !== 'good') {
      recommendations.push('Improve First Contentful Paint by optimizing critical rendering path');
    }
    if (this.webVitals.LCP && this.webVitals.LCP.rating !== 'good') {
      recommendations.push('Improve Largest Contentful Paint by optimizing images and server response');
    }
    if (this.webVitals.CLS && this.webVitals.CLS.rating !== 'good') {
      recommendations.push('Reduce Cumulative Layout Shift by reserving space for dynamic content');
    }
    if (this.webVitals.FID && this.webVitals.FID.rating !== 'good') {
      recommendations.push('Improve First Input Delay by reducing JavaScript execution time');
    }
    if (this.webVitals.TTFB && this.webVitals.TTFB.rating !== 'good') {
      recommendations.push('Improve Time to First Byte by optimizing server response time');
    }

    return {
      score,
      webVitals: this.webVitals,
      customMetrics: this.customMetrics,
      recommendations,
    };
  }

  /**
   * Measure function execution time
   */
  measureFunction<T>(name: string, fn: () => T): T {
    const start = performance.now();
    const result = fn();
    const duration = performance.now() - start;
    
    this.recordCustomMetric(`fn_${name}`, duration, 'ms');
    
    return result;
  }

  /**
   * Measure async function execution time
   */
  async measureAsyncFunction<T>(name: string, fn: () => Promise<T>): Promise<T> {
    const start = performance.now();
    const result = await fn();
    const duration = performance.now() - start;
    
    this.recordCustomMetric(`async_fn_${name}`, duration, 'ms');
    
    return result;
  }

  /**
   * Mark a custom performance mark
   */
  mark(name: string): void {
    if (typeof performance !== 'undefined' && 'mark' in performance) {
      performance.mark(name);
    }
  }

  /**
   * Measure between two marks
   */
  measure(name: string, startMark: string, endMark: string): number | null {
    if (typeof performance !== 'undefined' && 'measure' in performance) {
      try {
        performance.measure(name, startMark, endMark);
        const measure = performance.getEntriesByName(name, 'measure')[0];
        if (measure) {
          this.recordCustomMetric(name, measure.duration, 'ms');
          return measure.duration;
        }
      } catch (error) {
        logger.error('Failed to measure performance', error);
      }
    }
    return null;
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.webVitals = {};
    this.customMetrics = [];
  }

  /**
   * Disconnect all observers
   */
  disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceMonitoring = PerformanceMonitoringService.getInstance();
export default PerformanceMonitoringService;
