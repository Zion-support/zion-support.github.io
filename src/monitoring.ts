// Performance monitoring setup

// Mock analytics object
const analytics = {
  trackPageView: (path: string) => {
    console.log('Page view:', path);
  },
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  },
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log('Analytics:', event, category, action, label, value);
  }
};

// Mock performance optimizer
const performanceOptimizer = {
  measurePageLoad: () => {
    return Promise.resolve({
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0
    });
  },
  lazyLoadImages: () => {
    console.log('Lazy loading images...');
  },
  reportWebVitals: (metrics: Record<string, number>) => {
    console.log('Web Vitals:', metrics);
  }
};

// Simple error handler
const errorHandler = {
  reportError: (error: Error, context?: string) => {
    console.error('Error reported:', error, context);
  }
};

// Performance monitoring class
class PerformanceMonitor {
  private startTime: number = 0;
  private metrics: Record<string, number> = {};

  startTiming(name: string) {
    this.startTime = performance.now();
    this.metrics[name] = this.startTime;
  }

  endTiming(name: string) {
    if (this.startTime > 0) {
      const duration = performance.now() - this.startTime;
      this.metrics[name] = duration;
      analytics.trackPerformance(name, duration);
      return duration;
    }
    return 0;
  }

  getMetrics() {
    return { ...this.metrics };
  }

  reset() {
    this.metrics = {};
    this.startTime = 0;
  }
}

// Global performance monitor instance
export const performanceMonitor = new PerformanceMonitor();

// Web Vitals monitoring
export const initWebVitals = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'largest-contentful-paint') {
          analytics.trackPerformance('LCP', entry.startTime);
        } else if (entry.entryType === 'first-input') {
          analytics.trackPerformance('FID', entry.processingStart - entry.startTime);
        } else if (entry.entryType === 'layout-shift') {
          const layoutShiftEntry = entry as PerformanceEntry & { value: number };
          analytics.trackPerformance('CLS', layoutShiftEntry.value);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }
};

// Error monitoring
export const initErrorMonitoring = () => {
  if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
      errorHandler.reportError(event.error, 'Global error');
    });

    window.addEventListener('unhandledrejection', (event) => {
      errorHandler.reportError(new Error(event.reason), 'Unhandled promise rejection');
    });
  }
};

// Initialize monitoring
export const initMonitoring = () => {
  initWebVitals();
  initErrorMonitoring();
  console.log('Performance monitoring initialized');
};

export { analytics, performanceOptimizer, errorHandler };