/**
 * Enhanced Performance Monitoring Utility
 * Tracks and reports performance metrics with Web Vitals support
 */

import React from 'react';
import { logger } from './logger';
import { analytics } from './analytics';

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface PerformanceThresholds {
  good: number;
  needsImprovement: number;
}

// Extended types for specific performance entry types
interface PerformancePaintTiming extends PerformanceEntry {
  name: 'first-paint' | 'first-contentful-paint';
}

interface LargestContentfulPaint extends PerformanceEntry {
  renderTime: number;
  loadTime: number;
  size: number;
  id: string;
  url: string;
  element: Element | null;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
  processingEnd: number;
  cancelable: boolean;
  target: EventTarget | null;
}

class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, PerformanceMetric[]> = new Map();
  private observers: PerformanceObserver[] = [];
  private isInitialized = false;

  private constructor() {
    if (typeof window !== 'undefined') {
      this.initialize();
    }
  }

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  private initialize(): void {
    if (this.isInitialized) return;

    try {
      this.observeWebVitals();
      this.observeLongTasks();
      this.observeResourceTiming();
      this.isInitialized = true;
      
      logger.info('Performance monitoring initialized');
    } catch (error) {
      logger.error('Failed to initialize performance monitoring', error as Error);
    }
  }

  private observeWebVitals(): void {
    // LCP - Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1] as LargestContentfulPaint;
      this.recordMetric('lcp', lastEntry.renderTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);

    // FID - First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEventTiming[]) {
        const fid = entry.processingStart - entry.startTime;
        this.recordMetric('fid', fid);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    this.observers.push(fidObserver);

    // CLS - Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntry[]) {
        const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number };
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
          this.recordMetric('cls', clsValue);
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(clsObserver);

    // FCP - First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformancePaintTiming[]) {
        if (entry.name === 'first-contentful-paint') {
          this.recordMetric('fcp', entry.startTime);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });
    this.observers.push(fcpObserver);

    // TTFB - Time to First Byte
    const ttfbObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries() as PerformanceEntry[]) {
        const navEntry = entry as PerformanceEntry & { responseStart: number; requestStart: number };
        if (navEntry.responseStart > 0) {
          const ttfb = navEntry.responseStart - navEntry.requestStart;
          this.recordMetric('ttfb', ttfb);
        }
      }
    });
    ttfbObserver.observe({ entryTypes: ['navigation'] });
    this.observers.push(ttfbObserver);
  }

  private observeLongTasks(): void {
    if ('PerformanceObserver' in window) {
      const longTaskObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            this.recordMetric('long-task', entry.duration);
          }
        }
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
      this.observers.push(longTaskObserver);
    }
  }

  private observeResourceTiming(): void {
    if ('PerformanceObserver' in window) {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          if (resourceEntry.duration > 1000) { // Resources taking longer than 1s
            this.recordMetric('slow-resource', resourceEntry.duration, {
              name: resourceEntry.name,
              initiatorType: resourceEntry.initiatorType,
            });
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    }
  }

  private recordMetric(name: string, value: number, metadata?: Record<string, unknown>): void {
    const rating = this.getRating(name, value);
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now(),
    };

    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }

    const metrics = this.metrics.get(name)!;
    metrics.push(metric);

    // Keep only last 100 measurements per metric
    if (metrics.length > 100) {
      metrics.shift();
    }

    // Send to analytics
    analytics.trackPerformance(name, value);

    // Log in development
    if (process.env['NODE_ENV'] === 'development') {
      console.log(`Performance Metric: ${name} = ${value}ms (${rating})`, metadata);
    }
  }

  private getRating(name: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds: Record<string, PerformanceThresholds> = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fcp: { good: 1800, needsImprovement: 3000 },
      ttfb: { good: 800, needsImprovement: 1800 },
      'long-task': { good: 50, needsImprovement: 100 },
      'slow-resource': { good: 1000, needsImprovement: 2000 },
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
   * Get metrics for a specific name
   */
  getMetrics(name?: string): PerformanceMetric[] | Map<string, PerformanceMetric[]> {
    if (name) {
      return this.metrics.get(name) || [];
    }
    return new Map(this.metrics);
  }

  /**
   * Get performance summary
   */
  getSummary(): {
    totalMetrics: number;
    averageRating: number;
    byRating: Record<string, number>;
    recommendations: string[];
  } {
    const allMetrics: PerformanceMetric[] = [];
    this.metrics.forEach(metrics => allMetrics.push(...metrics));

    const totalMetrics = allMetrics.length;
    const byRating: Record<string, number> = { good: 0, 'needs-improvement': 0, poor: 0 };
    
    allMetrics.forEach(metric => {
      byRating[metric.rating]++;
    });

    const ratingScores = { good: 3, 'needs-improvement': 2, poor: 1 };
    const averageRating = totalMetrics > 0 
      ? allMetrics.reduce((sum, metric) => sum + ratingScores[metric.rating], 0) / totalMetrics 
      : 0;

    const recommendations: string[] = [];
    
    // Generate recommendations based on poor metrics
    this.metrics.forEach((metrics, name) => {
      const poorCount = metrics.filter(m => m.rating === 'poor').length;
      if (poorCount > 0) {
        switch (name) {
          case 'lcp':
            recommendations.push('Optimize largest contentful paint - consider image optimization and critical CSS');
            break;
          case 'fid':
            recommendations.push('Reduce first input delay - minimize JavaScript execution time');
            break;
          case 'cls':
            recommendations.push('Fix cumulative layout shift - reserve space for dynamic content');
            break;
          case 'fcp':
            recommendations.push('Improve first contentful paint - optimize critical rendering path');
            break;
          case 'ttfb':
            recommendations.push('Reduce time to first byte - optimize server response time');
            break;
          case 'long-task':
            recommendations.push('Break up long tasks - use code splitting and async operations');
            break;
          case 'slow-resource':
            recommendations.push('Optimize slow resources - compress images and enable caching');
            break;
        }
      }
    });

    return {
      totalMetrics,
      averageRating: Math.round(averageRating * 100) / 100,
      byRating,
      recommendations,
    };
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
  }

  /**
   * Stop monitoring
   */
  stop(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isInitialized = false;
  }
}

// Create singleton instance
export const performanceMonitor = PerformanceMonitor.getInstance();

// Export convenience functions
export const getMetrics = (name?: string) => performanceMonitor.getMetrics(name);
export const getSummary = () => performanceMonitor.getSummary();
export const clearMetrics = () => performanceMonitor.clearMetrics();
export const stopMonitoring = () => performanceMonitor.stop();

export default performanceMonitor;