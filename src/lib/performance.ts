interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
  category: 'navigation' | 'paint' | 'layout' | 'interaction' | 'resource';
}

interface PerformanceObserver {
  observe: (options: { entryTypes: string[] }) => void;
  disconnect: () => void;
}

class PerformanceMonitor {
  private metrics: PerformanceMetric[] = [];
  private observers: PerformanceObserver[] = [];
  private isEnabled: boolean;

  constructor(enabled = true) {
    this.isEnabled = enabled && typeof window !== 'undefined';
    if (this.isEnabled) {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // Navigation timing
    try {
      const navObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.recordMetric('domContentLoaded', navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart, 'navigation');
            this.recordMetric('loadComplete', navEntry.loadEventEnd - navEntry.loadEventStart, 'navigation');
            this.recordMetric('domInteractive', navEntry.domInteractive - navEntry.navigationStart, 'navigation');
          }
        }
      });
      navObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navObserver);
    } catch (error) {
      console.warn('Navigation timing observer not supported:', error);
    }

    // Paint timing
    try {
      const paintObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'paint') {
            this.recordMetric(entry.name, entry.startTime, 'paint');
          }
        }
      });
      paintObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(paintObserver);
    } catch (error) {
      console.warn('Paint timing observer not supported:', error);
    }

    // Layout shift
    try {
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'layout-shift') {
            const clsEntry = entry as any;
            if (!clsEntry.hadRecentInput) {
              this.recordMetric('layoutShift', clsEntry.value, 'layout');
            }
          }
        }
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('Layout shift observer not supported:', error);
    }

    // First input delay
    try {
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'first-input') {
            const fidEntry = entry as any;
            this.recordMetric('firstInputDelay', fidEntry.processingStart - fidEntry.startTime, 'interaction');
          }
        }
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('First input delay observer not supported:', error);
    }

    // Resource timing
    try {
      const resourceObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            const resourceEntry = entry as PerformanceResourceTiming;
            this.recordMetric(`resource_${resourceEntry.name}`, resourceEntry.duration, 'resource');
          }
        }
      });
      resourceObserver.observe({ entryTypes: ['resource'] });
      this.observers.push(resourceObserver);
    } catch (error) {
      console.warn('Resource timing observer not supported:', error);
    }
  }

  private recordMetric(name: string, value: number, category: PerformanceMetric['category']) {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
      category,
    });
  }

  public getMetrics(): PerformanceMetric[] {
    return [...this.metrics];
  }

  public getMetricsByCategory(category: PerformanceMetric['category']): PerformanceMetric[] {
    return this.metrics.filter(metric => metric.category === category);
  }

  public getCoreWebVitals(): {
    lcp?: number;
    fid?: number;
    cls?: number;
    fcp?: number;
    ttfb?: number;
  } {
    const vitals: any = {};
    
    // Largest Contentful Paint
    const lcp = this.metrics.find(m => m.name === 'largest-contentful-paint');
    if (lcp) vitals.lcp = lcp.value;

    // First Input Delay
    const fid = this.metrics.find(m => m.name === 'firstInputDelay');
    if (fid) vitals.fid = fid.value;

    // Cumulative Layout Shift
    const cls = this.metrics.find(m => m.name === 'layoutShift');
    if (cls) vitals.cls = cls.value;

    // First Contentful Paint
    const fcp = this.metrics.find(m => m.name === 'first-contentful-paint');
    if (fcp) vitals.fcp = fcp.value;

    // Time to First Byte
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      vitals.ttfb = navigation.responseStart - navigation.requestStart;
    }

    return vitals;
  }

  public getPerformanceScore(): number {
    const vitals = this.getCoreWebVitals();
    let score = 100;

    // LCP scoring (good: <2.5s, needs improvement: 2.5-4s, poor: >4s)
    if (vitals.lcp) {
      if (vitals.lcp > 4000) score -= 30;
      else if (vitals.lcp > 2500) score -= 15;
    }

    // FID scoring (good: <100ms, needs improvement: 100-300ms, poor: >300ms)
    if (vitals.fid) {
      if (vitals.fid > 300) score -= 25;
      else if (vitals.fid > 100) score -= 10;
    }

    // CLS scoring (good: <0.1, needs improvement: 0.1-0.25, poor: >0.25)
    if (vitals.cls) {
      if (vitals.cls > 0.25) score -= 25;
      else if (vitals.cls > 0.1) score -= 10;
    }

    // FCP scoring (good: <1.8s, needs improvement: 1.8-3s, poor: >3s)
    if (vitals.fcp) {
      if (vitals.fcp > 3000) score -= 20;
      else if (vitals.fcp > 1800) score -= 10;
    }

    return Math.max(0, score);
  }

  public getPerformanceReport(): {
    score: number;
    vitals: ReturnType<PerformanceMonitor['getCoreWebVitals']>;
    metrics: PerformanceMetric[];
    summary: {
      totalMetrics: number;
      byCategory: Record<string, number>;
      averageLoadTime: number;
    };
  } {
    const vitals = this.getCoreWebVitals();
    const score = this.getPerformanceScore();
    
    const byCategory = this.metrics.reduce((acc, metric) => {
      acc[metric.category] = (acc[metric.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const loadTimeMetrics = this.metrics.filter(m => m.name === 'loadComplete');
    const averageLoadTime = loadTimeMetrics.length > 0 
      ? loadTimeMetrics.reduce((sum, m) => sum + m.value, 0) / loadTimeMetrics.length 
      : 0;

    return {
      score,
      vitals,
      metrics: this.metrics,
      summary: {
        totalMetrics: this.metrics.length,
        byCategory,
        averageLoadTime,
      },
    };
  }

  public clearMetrics(): void {
    this.metrics = [];
  }

  public disconnect(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }

  public isSupported(): boolean {
    return typeof window !== 'undefined' && 'PerformanceObserver' in window;
  }
}

// Create singleton instance
export const performanceMonitor = new PerformanceMonitor();

// Export convenience functions
export const getPerformanceMetrics = () => performanceMonitor.getMetrics();
export const getCoreWebVitals = () => performanceMonitor.getCoreWebVitals();
export const getPerformanceScore = () => performanceMonitor.getPerformanceScore();
export const getPerformanceReport = () => performanceMonitor.getPerformanceReport();
export const clearPerformanceMetrics = () => performanceMonitor.clearMetrics();

// Performance optimization utilities
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
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const requestIdleCallback = (callback: () => void, options?: { timeout?: number }) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);
  } else {
    return setTimeout(callback, 1);
  }
};

export const cancelIdleCallback = (id: number) => {
  if (typeof window !== 'undefined' && 'cancelIdleCallback' in window) {
    window.cancelIdleCallback(id);
  } else {
    clearTimeout(id);
  }
};

export default performanceMonitor;