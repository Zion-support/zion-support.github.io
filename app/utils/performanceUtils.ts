// Performance utilities
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToFirstByte: number;
}

class PerformanceUtils {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    timeToFirstByte: 0
  };

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics(): void {
    if (typeof window === 'undefined') return;

    // Measure page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }
    });

    // Measure Core Web Vitals
    this.measureCoreWebVitals();
  }

  private measureCoreWebVitals(): void {
    // First Contentful Paint
    this.observePaint('first-contentful-paint', (entry) => {
      this.metrics.firstContentfulPaint = entry.startTime;
    });

    // Largest Contentful Paint
    this.observeLCP();

    // First Input Delay
    this.observeFID();

    // Cumulative Layout Shift
    this.observeCLS();

    // Time to First Byte
    this.measureTTFB();
  }

  private observePaint(entryType: string, callback: (entry: PerformanceEntry) => void): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(callback);
        });
        observer.observe({ entryTypes: [entryType] });
      } catch (error) {
        console.warn(`Failed to observe ${entryType}:`, error);
      }
    }
  }

  private observeLCP(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          if (lastEntry) {
            this.metrics.largestContentfulPaint = lastEntry.startTime;
          }
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (error) {
        console.warn('Failed to observe LCP:', error);
      }
    }
  }

  private observeFID(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: PerformanceEventTiming) => {
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          });
        });
        observer.observe({ entryTypes: ['first-input'] });
      } catch (error) {
        console.warn('Failed to observe FID:', error);
      }
    }
  }

  private observeCLS(): void {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry: LayoutShift) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          this.metrics.cumulativeLayoutShift = clsValue;
        });
        observer.observe({ entryTypes: ['layout-shift'] });
      } catch (error) {
        console.warn('Failed to observe CLS:', error);
      }
    }
  }

  private measureTTFB(): void {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.timeToFirstByte = navigation.responseStart - navigation.requestStart;
    }
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getMetricValue(metricName: keyof PerformanceMetrics): number {
    return this.metrics[metricName];
  }

  isMetricGood(metricName: keyof PerformanceMetrics): boolean {
    const value = this.metrics[metricName];
    
    switch (metricName) {
      case 'firstContentfulPaint':
        return value < 1800; // Good if < 1.8s
      case 'largestContentfulPaint':
        return value < 2500; // Good if < 2.5s
      case 'firstInputDelay':
        return value < 100; // Good if < 100ms
      case 'cumulativeLayoutShift':
        return value < 0.1; // Good if < 0.1
      case 'timeToFirstByte':
        return value < 600; // Good if < 600ms
      default:
        return true;
    }
  }

  exportMetrics(): string {
    return JSON.stringify(this.metrics, null, 2);
  }
}

// Export singleton instance
export const performanceUtils = new PerformanceUtils();

// Utility functions
export const getPerformanceMetrics = (): PerformanceMetrics => {
  return performanceUtils.getMetrics();
};

export const getMetricValue = (metricName: keyof PerformanceMetrics): number => {
  return performanceUtils.getMetricValue(metricName);
};

export const isMetricGood = (metricName: keyof PerformanceMetrics): boolean => {
  return performanceUtils.isMetricGood(metricName);
};

export const exportMetrics = (): string => {
  return performanceUtils.exportMetrics();
};