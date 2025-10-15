// Advanced performance monitoring utilities

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
  totalBlockingTime: number;
  domContentLoaded: number;
  windowLoad: number;
}

export interface PerformanceThresholds {
  lcp: { good: number; needsImprovement: number };
  fid: { good: number; needsImprovement: number };
  cls: { good: number; needsImprovement: number };
  fcp: { good: number; needsImprovement: number };
  ttfb: { good: number; needsImprovement: number };
}

export const DEFAULT_THRESHOLDS: PerformanceThresholds = {
  lcp: { good: 2500, needsImprovement: 4000 },
  fid: { good: 100, needsImprovement: 300 },
  cls: { good: 0.1, needsImprovement: 0.25 },
  fcp: { good: 1800, needsImprovement: 3000 },
  ttfb: { good: 800, needsImprovement: 1800 },
};

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics | null = null;
  private observers: ((metrics: PerformanceMetrics) => void)[] = [];
  private isInitialized = false;

  private constructor() {}

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public init(): void {
    if (this.isInitialized || typeof window === 'undefined') {
      return;
    }

    this.isInitialized = true;
    this.measurePerformance();
  }

  private async measurePerformance(): Promise<void> {
    try {
      const metrics: Partial<PerformanceMetrics> = {};

      // Measure Core Web Vitals
      await this.measureCoreWebVitals(metrics);

      // Measure additional metrics
      this.measureAdditionalMetrics(metrics);

      this.metrics = metrics as PerformanceMetrics;
      this.notifyObservers();
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Error measuring performance:', error);
      }
    }
  }

  private async measureCoreWebVitals(metrics: Partial<PerformanceMetrics>): Promise<void> {
    return new Promise((resolve) => {
      let resolved = false;

      const resolveOnce = () => {
        if (!resolved) {
          resolved = true;
          resolve();
        }
      };

      // Import web-vitals dynamically
      import('web-vitals').then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
        onFCP((metric) => {
          metrics.firstContentfulPaint = metric.value;
          resolveOnce();
        });

        onLCP((metric) => {
          metrics.largestContentfulPaint = metric.value;
          resolveOnce();
        });

        onINP((metric) => {
          metrics.firstInputDelay = metric.value;
          resolveOnce();
        });

        onCLS((metric) => {
          metrics.cumulativeLayoutShift = metric.value;
          resolveOnce();
        });

        onTTFB((metric) => {
          metrics.timeToFirstByte = metric.value;
          resolveOnce();
        });

        // Resolve after a timeout to prevent hanging
        setTimeout(resolveOnce, 5000);
      }).catch(() => {
        resolveOnce();
      });
    });
  }

  private measureAdditionalMetrics(metrics: Partial<PerformanceMetrics>): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
      metrics.windowLoad = navigation.loadEventEnd - navigation.loadEventStart;
    }

    // Calculate Total Blocking Time
    const longTasks = performance.getEntriesByType('longtask');
    metrics.totalBlockingTime = longTasks.reduce((total, task) => {
      return total + Math.max(0, task.duration - 50);
    }, 0);
  }

  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  public subscribe(callback: (metrics: PerformanceMetrics) => void): () => void {
    this.observers.push(callback);
    
    // If metrics are already available, call the callback immediately
    if (this.metrics) {
      callback(this.metrics);
    }

    // Return unsubscribe function
    return () => {
      const index = this.observers.indexOf(callback);
      if (index > -1) {
        this.observers.splice(index, 1);
      }
    };
  }

  private notifyObservers(): void {
    if (this.metrics) {
      this.observers.forEach(callback => callback(this.metrics!));
    }
  }

  public getScore(metric: keyof PerformanceMetrics, value: number, thresholds: PerformanceThresholds = DEFAULT_THRESHOLDS): 'good' | 'needs-improvement' | 'poor' {
    const threshold = thresholds[metric as keyof PerformanceThresholds];
    if (!threshold) return 'poor';

    if (value <= threshold.good) return 'good';
    if (value <= threshold.needsImprovement) return 'needs-improvement';
    return 'poor';
  }

  public getOverallScore(thresholds: PerformanceThresholds = DEFAULT_THRESHOLDS): 'good' | 'needs-improvement' | 'poor' {
    if (!this.metrics) return 'poor';

    const scores = [
      this.getScore('largestContentfulPaint', this.metrics.largestContentfulPaint, thresholds),
      this.getScore('firstInputDelay', this.metrics.firstInputDelay, thresholds),
      this.getScore('cumulativeLayoutShift', this.metrics.cumulativeLayoutShift, thresholds),
    ];

    const poorCount = scores.filter(score => score === 'poor').length;
    const needsImprovementCount = scores.filter(score => score === 'needs-improvement').length;

    if (poorCount > 0) return 'poor';
    if (needsImprovementCount > 1) return 'needs-improvement';
    return 'good';
  }

  public sendToAnalytics(): void {
    if (!this.metrics || typeof window === 'undefined') return;

    // Send to Google Analytics if available
    if (window.gtag) {
      window.gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(this.metrics.largestContentfulPaint),
        custom_map: {
          'metric_1': this.metrics.firstContentfulPaint,
          'metric_2': this.metrics.largestContentfulPaint,
          'metric_3': this.metrics.firstInputDelay,
          'metric_4': this.metrics.cumulativeLayoutShift,
          'metric_5': this.metrics.timeToFirstByte,
        }
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomAnalytics();
  }

  private async sendToCustomAnalytics(): Promise<void> {
    try {
      // Replace with your analytics endpoint
      const analyticsEndpoint = '/api/analytics/performance';
      
      await fetch(analyticsEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          metrics: this.metrics,
          timestamp: new Date().toISOString(),
          url: window.location.href,
          userAgent: navigator.userAgent,
        }),
      });
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Failed to send performance metrics:', error);
      }
    }
  }
}

export const performanceMonitor = PerformanceMonitor.getInstance();

// Utility functions
export const formatMetricValue = (value: number, unit: string = 'ms'): string => {
  if (unit === 'ms') {
    return `${Math.round(value)}ms`;
  }
  return value.toFixed(3);
};

export const getScoreColor = (score: 'good' | 'needs-improvement' | 'poor'): string => {
  switch (score) {
    case 'good':
      return 'text-green-500';
    case 'needs-improvement':
      return 'text-yellow-500';
    case 'poor':
      return 'text-red-500';
    default:
      return 'text-gray-500';
  }
};

export const getScoreText = (score: 'good' | 'needs-improvement' | 'poor'): string => {
  switch (score) {
    case 'good':
      return 'Good';
    case 'needs-improvement':
      return 'Needs Improvement';
    case 'poor':
      return 'Poor';
    default:
      return 'Unknown';
  }
};

export default performanceMonitor;