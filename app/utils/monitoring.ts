'use client';

export class PerformanceMonitor {
  private metrics: Record<string, number> = {};

  constructor() {
    this.setupWebVitals();
    this.setupLongTaskMonitoring();
    this.setupResourceTiming();
    this.setupErrorHandling();
  }

  private setupWebVitals() {
    if (typeof window !== 'undefined') {
      if ('PerformanceObserver' in window) {
        try {
          // LCP
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              this.reportMetric('lcp', entry.startTime);
            }
          }).observe({ entryTypes: ['largest-contentful-paint'] });

          // FID
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              this.reportMetric('fid', (entry as any).processingStart - entry.startTime);
            }
          }).observe({ entryTypes: ['first-input'] });

          // CLS
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              this.reportMetric('cls', (entry as any).value);
            }
          }).observe({ entryTypes: ['layout-shift'] });

          // FCP
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              this.reportMetric('fcp', entry.startTime);
            }
          }).observe({ entryTypes: ['paint'] });
        } catch (error) {
          console.error('Error setting up Web Vitals monitoring:', error);
        }
      }
    }
  }

  private setupLongTaskMonitoring() {
    if (typeof window !== 'undefined') {
      if ('PerformanceObserver' in window) {
        try {
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              console.log('Long task detected:', entry);
            }
          }).observe({ entryTypes: ['longtask'] });
        } catch (error) {
          console.warn('Long task monitoring not available:', error);
        }
      }
    }
  }

  private setupResourceTiming() {
    if (typeof window !== 'undefined') {
      if ('PerformanceObserver' in window) {
        try {
          new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              console.log('Resource loaded:', entry);
            }
          }).observe({ entryTypes: ['resource'] });
        } catch (error) {
          console.warn('Resource timing monitoring not available:', error);
        }
      }
    }
  }

  private setupErrorHandling() {
    if (typeof window !== 'undefined') {
      window.addEventListener('error', (event) => {
        this.logError('JavaScript Error', event.error);
      });

      window.addEventListener('unhandledrejection', (event) => {
        this.logError('Unhandled Promise Rejection', event.reason);
      });
    }
  }

  private reportMetric(name: string, value: number) {
    this.metrics[name] = value;
    
    const thresholds = {
      lcp: { good: 2500, needsImprovement: 4000 },
      fid: { good: 100, needsImprovement: 300 },
      cls: { good: 0.1, needsImprovement: 0.25 },
      fcp: { good: 1800, needsImprovement: 3000 },
    };

    const threshold = thresholds[name as keyof typeof thresholds];
    if (threshold) {
      const rating = value <= threshold.good ? 'good' : value <= threshold.needsImprovement ? 'needs-improvement' : 'poor';
      
      if (typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'web_vitals', {
          'event_category': 'Web Vitals',
          'event_label': name,
          'value': Math.round(name === 'cls' ? value * 1000 : value),
          'custom_map': { 'metric_rating': rating },
        });
      }
    }
  }

  private logError(message: string, error: any) {
    console.error('Error logged:', message, error);
    
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'exception', {
        'description': error?.message || message,
        'fatal': false,
      });
    }
  }

  public getMemoryUsage() {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory usage:', {
        used: memory.usedJSHeapSize,
        total: memory.totalJSHeapSize,
        limit: memory.jsHeapSizeLimit,
      });
    }
  }

  public getPerformanceMetrics() {
    if (typeof window !== 'undefined' && 'performance' in window && 'getEntriesByType' in performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      console.log('Performance metrics:', {
        'DNS Lookup': navigation.domainLookupEnd - navigation.domainLookupStart,
        'TCP Connect': navigation.connectEnd - navigation.connectStart,
        'TTFB': navigation.responseStart - navigation.requestStart,
        'Download': navigation.responseEnd - navigation.responseStart,
        'DOM Interactive': navigation.domInteractive - navigation.fetchStart,
        'DOM Complete': navigation.domComplete - navigation.fetchStart,
        'Load Complete': navigation.loadEventEnd - navigation.fetchStart,
      });
    }
  }
}

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}