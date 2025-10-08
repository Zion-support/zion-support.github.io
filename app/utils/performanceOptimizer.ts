/**
 * Performance Optimization Utility
 * Provides tools for measuring and optimizing application performance
 */

// Type definitions for PerformanceObserver entries
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
}

export interface PerformanceMark {
  name: string;
  startTime: number;
  duration?: number;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetric[] = [];
  private marks: Map<string, PerformanceMark> = new Map();

  constructor() {
    this.initializePerformanceObserver();
  }

  private initializePerformanceObserver(): void {
    if (typeof window === 'undefined') return;

    // Observe Web Vitals
    if ('PerformanceObserver' in window) {
      try {
        // Observe Largest Contentful Paint (LCP)
        const lcpObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.recordMetric('LCP', entry.startTime, this.getRating('lcp', entry.startTime));
          }
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

        // Observe First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const fidEntry = entry as PerformanceEventTiming;
            const fid = fidEntry.processingStart - fidEntry.startTime;
            this.recordMetric('FID', fid, this.getRating('fid', fid));
          }
        });
        fidObserver.observe({ entryTypes: ['first-input'] });

        // Observe Cumulative Layout Shift (CLS)
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as LayoutShift).hadRecentInput) {
              clsValue += (entry as LayoutShift).value;
            }
          }
          this.recordMetric('CLS', clsValue, this.getRating('cls', clsValue));
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('Performance Observer setup failed:', error);
      }
    }
  }

  private getRating(metric: string, value: number): 'good' | 'needs-improvement' | 'poor' {
    const thresholds = {
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 },
    };

    const threshold = thresholds[metric as keyof typeof thresholds];
    if (!threshold) return 'good';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  public recordMetric(name: string, value: number, rating: 'good' | 'needs-improvement' | 'poor'): void {
    const metric: PerformanceMetric = {
      name,
      value,
      rating,
      timestamp: Date.now(),
    };

    this.metrics.push(metric);

    // Send to analytics
    if (
      typeof window !== 'undefined' &&
      (window as { gtag?: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag
    ) {
      (window as unknown as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'web_vitals', {
        event_category: 'Web Vitals',
        event_label: name,
        value: Math.round(value),
        metric_rating: rating,
      });
    }
  }

  public startMark(name: string): void {
    this.marks.set(name, {
      name,
      startTime: performance.now(),
    });
  }

  public endMark(name: string): number | null {
    const mark = this.marks.get(name);
    if (!mark) return null;

    const duration = performance.now() - mark.startTime;
    mark.duration = duration;

    // Log long operations
    if (duration > 1000) {
      console.warn(`Long operation detected: ${name} took ${duration.toFixed(2)}ms`);
    }

    return duration;
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getMetricsSummary(): {
    total: number;
    good: number;
    needsImprovement: number;
    poor: number;
    averages: Record<string, number>;
  } {
    const summary = {
      total: this.metrics.length,
      good: 0,
      needsImprovement: 0,
      poor: 0,
      averages: {} as Record<string, number>,
    };

    const metricGroups: Record<string, number[]> = {};

    this.metrics.forEach((metric) => {
      // Count ratings
      if (metric.rating === 'good') summary.good++;
      else if (metric.rating === 'needs-improvement') summary.needsImprovement++;
      else summary.poor++;

      // Group for averages
      if (!metricGroups[metric.name]) {
        metricGroups[metric.name] = [];
      }
      metricGroups[metric.name].push(metric.value);
    });

    // Calculate averages
    Object.keys(metricGroups).forEach((key) => {
      const values = metricGroups[key];
      summary.averages[key] = values.reduce((a, b) => a + b, 0) / values.length;
    });

    return summary;
  }

  public clearMetrics(): void {
    this.metrics = [];
    this.marks.clear();
  }

  // Resource hints for performance optimization
  public prefetchResource(url: string): void {
    if (typeof document === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }

  public preloadResource(url: string, as: string): void {
    if (typeof document === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = as;
    document.head.appendChild(link);
  }

  public preconnect(url: string): void {
    if (typeof document === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = url;
    document.head.appendChild(link);
  }

  // Legacy compatibility methods
  public optimizeImages(): void {
    // Legacy method for backward compatibility
    console.log('Image optimization should be handled by build tools');
  }

  public optimize(): void {
    // Legacy method for backward compatibility
    // Trigger resource hints for common resources
    if (typeof window !== 'undefined') {
      this.preconnect('https://fonts.googleapis.com');
      this.preconnect('https://www.google-analytics.com');
    }
  }

  public getPerformanceScore(): number {
    // Calculate simple performance score based on metrics
    const summary = this.getMetricsSummary();
    if (summary.total === 0) return 100;

    const goodRatio = summary.good / summary.total;
    const needsImprovementRatio = summary.needsImprovement / summary.total;

    // Score calculation: good = 100%, needs improvement = 50%, poor = 0%
    return Math.round((goodRatio * 100 + needsImprovementRatio * 50));
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

export default performanceOptimizer;
