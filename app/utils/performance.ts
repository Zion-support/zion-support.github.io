export interface PerformanceMetrics {
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  private constructor() {}

  public static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  public startMonitoring(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // Monitor First Contentful Paint (FCP)
    this.observeMetric('paint', (entry) => {
      if (entry.name === 'first-contentful-paint') {
        this.metrics.fcp = entry.startTime;
        this.reportMetric('FCP', entry.startTime);
      }
    });

    // Monitor Largest Contentful Paint (LCP)
    this.observeMetric('largest-contentful-paint', (entry) => {
      this.metrics.lcp = entry.startTime;
      this.reportMetric('LCP', entry.startTime);
    });

    // Monitor First Input Delay (FID)
    this.observeMetric('first-input', (entry) => {
      const fidEntry = entry as any;
      this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
      this.reportMetric('FID', this.metrics.fid);
    });

    // Monitor Cumulative Layout Shift (CLS)
    this.observeMetric('layout-shift', (entry) => {
      const clsEntry = entry as any;
      if (!clsEntry.hadRecentInput) {
        this.metrics.cls = (this.metrics.cls || 0) + clsEntry.value;
        this.reportMetric('CLS', this.metrics.cls || 0);
      }
    });

    // Monitor Time to First Byte (TTFB)
    this.observeNavigationTiming();
  }

  private observeMetric(type: string, callback: (entry: PerformanceEntry) => void): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          callback(entry);
        }
      });
      
      observer.observe({ type, buffered: true });
      this.observers.push(observer);
    } catch (error) {
      console.warn(`Failed to observe ${type}:`, error);
    }
  }

  private observeNavigationTiming(): void {
    if ('performance' in window && 'getEntriesByType' in performance) {
      const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
      if (navigationEntries.length > 0) {
        const nav = navigationEntries[0];
        this.metrics.ttfb = nav.responseStart - nav.requestStart;
        this.reportMetric('TTFB', this.metrics.ttfb);
      }
    }
  }

  private reportMetric(name: string, value: number): void {
    // Log in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`Performance Metric - ${name}:`, value);
    }

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        name,
        value: Math.round(value),
        event_category: 'Web Vitals'
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions for performance optimization
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

export const lazyLoad = (callback: () => void, options?: IntersectionObserverInit): void => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    callback();
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        callback();
        observer.disconnect();
      }
    });
  }, options);

  // Observe the document body as a fallback
  observer.observe(document.body);
};

// Global error handler for unhandled errors
export const setupGlobalErrorHandlers = (): void => {
  // Handle unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled Promise Rejection:', event.reason);
  });

  // Handle uncaught errors
  window.addEventListener('error', (event) => {
    console.error('Uncaught Error:', event.error);
  });
};

export default PerformanceMonitor;