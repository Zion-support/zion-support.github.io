/**
 * Advanced Performance Monitoring Utility
 * Tracks various performance metrics and provides insights
 */

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}

export interface WebVitalsMetrics {
  CLS?: PerformanceMetric; // Cumulative Layout Shift
  FID?: PerformanceMetric; // First Input Delay
  FCP?: PerformanceMetric; // First Contentful Paint
  LCP?: PerformanceMetric; // Largest Contentful Paint
  TTFB?: PerformanceMetric; // Time to First Byte
  INP?: PerformanceMetric; // Interaction to Next Paint
}

class PerformanceMonitor {
  private metrics: WebVitalsMetrics = {};
  private customMetrics: Map<string, PerformanceMetric[]> = new Map();
  private navigationTiming: PerformanceNavigationTiming | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeWebVitals();
      this.captureNavigationTiming();
    }
  }

  /**
   * Initialize Web Vitals tracking
   */
  private initializeWebVitals(): void {
    // Using the web-vitals library would be ideal, but here's a manual approach
    if ('PerformanceObserver' in window) {
      // Observe LCP
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
            renderTime?: number;
            loadTime?: number;
          };
          
          const value = lastEntry.renderTime || lastEntry.loadTime || 0;
          this.metrics.LCP = this.createMetric('LCP', value, this.getRatingForLCP(value));
        });
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        console.warn('LCP observation not supported');
      }

      // Observe FID
      try {
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { processingStart?: number }) => {
            const value = entry.processingStart ? entry.processingStart - entry.startTime : 0;
            this.metrics.FID = this.createMetric('FID', value, this.getRatingForFID(value));
          });
        });
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.warn('FID observation not supported');
      }

      // Observe CLS
      try {
        let clsValue = 0;
        const clsObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEntry & { value?: number; hadRecentInput?: boolean }) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value || 0;
              this.metrics.CLS = this.createMetric('CLS', clsValue, this.getRatingForCLS(clsValue));
            }
          });
        });
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.warn('CLS observation not supported');
      }

      // Observe FCP
      try {
        const fcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.name === 'first-contentful-paint') {
              const value = entry.startTime;
              this.metrics.FCP = this.createMetric('FCP', value, this.getRatingForFCP(value));
            }
          });
        });
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        console.warn('FCP observation not supported');
      }
    }
  }

  /**
   * Capture navigation timing
   */
  private captureNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in window.performance) {
      const [navigation] = window.performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigation) {
        this.navigationTiming = navigation;
        
        // Calculate TTFB
        const ttfb = navigation.responseStart - navigation.requestStart;
        this.metrics.TTFB = this.createMetric('TTFB', ttfb, this.getRatingForTTFB(ttfb));
      }
    }
  }

  /**
   * Create a performance metric object
   */
  private createMetric(
    name: string,
    value: number,
    rating: 'good' | 'needs-improvement' | 'poor'
  ): PerformanceMetric {
    return {
      name,
      value: Math.round(value * 100) / 100,
      timestamp: Date.now(),
      rating,
    };
  }

  /**
   * Rating thresholds based on Web Vitals recommendations
   */
  private getRatingForLCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 2500) return 'good';
    if (value <= 4000) return 'needs-improvement';
    return 'poor';
  }

  private getRatingForFID(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 100) return 'good';
    if (value <= 300) return 'needs-improvement';
    return 'poor';
  }

  private getRatingForCLS(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 0.1) return 'good';
    if (value <= 0.25) return 'needs-improvement';
    return 'poor';
  }

  private getRatingForFCP(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 1800) return 'good';
    if (value <= 3000) return 'needs-improvement';
    return 'poor';
  }

  private getRatingForTTFB(value: number): 'good' | 'needs-improvement' | 'poor' {
    if (value <= 800) return 'good';
    if (value <= 1800) return 'needs-improvement';
    return 'poor';
  }

  /**
   * Track custom metric
   */
  trackCustomMetric(name: string, value: number): void {
    if (!this.customMetrics.has(name)) {
      this.customMetrics.set(name, []);
    }
    
    const metrics = this.customMetrics.get(name)!;
    metrics.push({
      name,
      value,
      timestamp: Date.now(),
      rating: 'good', // Custom metrics don't have standard ratings
    });

    // Keep only last 100 entries per metric
    if (metrics.length > 100) {
      metrics.shift();
    }
  }

  /**
   * Mark a custom timing point
   */
  mark(name: string): void {
    if ('performance' in window && 'mark' in window.performance) {
      window.performance.mark(name);
    }
  }

  /**
   * Measure time between two marks
   */
  measure(name: string, startMark: string, endMark: string): number | null {
    if ('performance' in window && 'measure' in window.performance) {
      try {
        window.performance.measure(name, startMark, endMark);
        const measures = window.performance.getEntriesByName(name, 'measure');
        if (measures.length > 0) {
          const value = measures[measures.length - 1].duration;
          this.trackCustomMetric(name, value);
          return value;
        }
      } catch (e) {
        console.warn(`Failed to measure ${name}:`, e);
      }
    }
    return null;
  }

  /**
   * Get all metrics
   */
  getMetrics(): WebVitalsMetrics {
    return { ...this.metrics };
  }

  /**
   * Get custom metrics
   */
  getCustomMetrics(name?: string): PerformanceMetric[] {
    if (name) {
      return this.customMetrics.get(name) || [];
    }
    return Array.from(this.customMetrics.values()).flat();
  }

  /**
   * Get navigation timing
   */
  getNavigationTiming(): PerformanceNavigationTiming | null {
    return this.navigationTiming;
  }

  /**
   * Get performance report
   */
  getReport(): {
    webVitals: WebVitalsMetrics;
    customMetrics: Record<string, PerformanceMetric[]>;
    navigationTiming: PerformanceNavigationTiming | null;
    summary: {
      totalMetrics: number;
      goodMetrics: number;
      needsImprovementMetrics: number;
      poorMetrics: number;
      score: number;
    };
  } {
    const allMetrics = Object.values(this.metrics);
    const goodMetrics = allMetrics.filter((m) => m?.rating === 'good').length;
    const needsImprovementMetrics = allMetrics.filter((m) => m?.rating === 'needs-improvement').length;
    const poorMetrics = allMetrics.filter((m) => m?.rating === 'poor').length;
    const totalMetrics = allMetrics.length;
    
    // Calculate score (0-100)
    const score = totalMetrics > 0
      ? Math.round((goodMetrics / totalMetrics) * 100)
      : 0;

    return {
      webVitals: this.getMetrics(),
      customMetrics: Object.fromEntries(this.customMetrics),
      navigationTiming: this.navigationTiming,
      summary: {
        totalMetrics,
        goodMetrics,
        needsImprovementMetrics,
        poorMetrics,
        score,
      },
    };
  }

  /**
   * Send metrics to analytics
   */
  sendToAnalytics(): void {
    const report = this.getReport();
    
    // Send to Google Analytics (if available)
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
      Object.entries(this.metrics).forEach(([name, metric]) => {
        if (metric) {
          (window as unknown as { gtag: Function }).gtag('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: name,
            value: Math.round(metric.value),
            metric_rating: metric.rating,
            non_interaction: true,
          });
        }
      });
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.group('📊 Performance Report');
      console.table(report.summary);
      console.log('Web Vitals:', report.webVitals);
      console.log('Custom Metrics:', report.customMetrics);
      console.groupEnd();
    }
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics = {};
    this.customMetrics.clear();
  }
}

// Singleton instance
const performanceMonitor = new PerformanceMonitor();

// Export convenience functions
export const trackMetric = (name: string, value: number) => 
  performanceMonitor.trackCustomMetric(name, value);

export const markTiming = (name: string) => 
  performanceMonitor.mark(name);

export const measureTiming = (name: string, start: string, end: string) => 
  performanceMonitor.measure(name, start, end);

export const getPerformanceReport = () => 
  performanceMonitor.getReport();

export const sendMetricsToAnalytics = () => 
  performanceMonitor.sendToAnalytics();

export default performanceMonitor;
