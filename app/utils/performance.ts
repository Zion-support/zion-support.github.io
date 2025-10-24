<<<<<<< HEAD
// Performance monitoring utilities
import React from "react"

export class PerformanceMonitor {
  private static instance: PerformanceMonitor
  private metrics: Map<string, number> = new Map()

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor()
    }
    return PerformanceMonitor.instance
  }

  startTiming(label: string): void {
    if (typeof window !== "undefined" && "performance" in window) {
      performance.mark(`${label}-start`)
    }
  }

  endTiming(label: string): number {
    if (typeof window !== "undefined" && "performance" in window) {
      performance.mark(`${label}-end`)
      performance.measure(label, `${label}-start`, `${label}-end`)
      const measure = performance.getEntriesByName(label)[0]
      const duration = measure ? measure.duration : 0
      this.metrics.set(label, duration)
      return duration
    }
    return 0
  }

  getMetric(label: string): number | undefined {
    return this.metrics.get(label)
  }

  getAllMetrics(): Record<string, number> {
    return Object.fromEntries(this.metrics)
  }

  clearMetrics(): void {
    this.metrics.clear()
  }

  // Web Vitals monitoring
  measureWebVitals(): void {
    if (typeof window === "undefined") return

    // Largest Contentful Paint
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      const lastEntry = entries[entries.length - 1]
      this.metrics.set("LCP", lastEntry.startTime)
    }).observe({ entryTypes: ["largest-contentful-paint"] })

    // First Input Delay
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        // Use processingStart if available, otherwise calculate from startTime
        const processingStart = (entry as { processingStart?: number }).processingStart || entry.startTime
        this.metrics.set("FID", processingStart - entry.startTime)
      })
    }).observe({ entryTypes: ["first-input"] })

    // Cumulative Layout Shift
    let clsValue = 0
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries()
      entries.forEach((entry) => {
        if (!(entry as { hadRecentInput?: boolean }).hadRecentInput) {
          clsValue += (entry as { value?: number }).value || 0
        }
      })
      this.metrics.set("CLS", clsValue)
    }).observe({ entryTypes: ["layout-shift"] })
  }
}

// Hook for React components
export function usePerformanceMonitor() {
  const monitor = PerformanceMonitor.getInstance()
  return {
    startTiming: monitor.startTiming.bind(monitor),
    endTiming: monitor.endTiming.bind(monitor),
    getMetric: monitor.getMetric.bind(monitor),
    getAllMetrics: monitor.getAllMetrics.bind(monitor)
  }
}

// Utility function to measure component render time
export function measureComponentRender(componentName: string) {
  return function <T extends React.ComponentType<unknown>>(WrappedComponent: T): T {
    return ((props: unknown) => {
      const monitor = PerformanceMonitor.getInstance()
      React.useEffect(() => {
        monitor.startTiming(`${componentName}-render`)
        return () => {
<<<<<<< HEAD
          monitor.endTiming(`${componentName}-render`)}});
      return React.createElement(WrappedComponent, props)}) as T}}
=======
/**
 * Performance optimization utilities
 */

export interface PerformanceMetrics {
  cls?: number;
  fcp?: number;
  lcp?: number;
  ttfb?: number;
  inp?: number;
}

export class PerformanceTracker {
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeTracking();
  }

  private initializeTracking(): void {
    if (typeof window === 'undefined') return;

    // Track Core Web Vitals
    this.trackWebVitals();
    
    // Track navigation timing
    this.trackNavigationTiming();
    
    // Track resource loading
    this.trackResourceTiming();
  }

  private async trackWebVitals(): Promise<void> {
    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
      
      const handleMetric = (metric: { name: string; value: number }) => {
        this.metrics[metric.name.toLowerCase() as keyof PerformanceMetrics] = metric.value;
        
        if (process.env.NODE_ENV === 'development') {
          // Log in development for debugging
          console.log(`Performance metric ${metric.name}:`, metric.value);
        }
        
        // Send to analytics in production
        if (process.env.NODE_ENV === 'production') {
          this.sendToAnalytics(metric);
        }
      };
      
      onCLS(handleMetric);
      onFCP(handleMetric);
      onLCP(handleMetric);
      onTTFB(handleMetric);
      onINP(handleMetric);
    } catch (error) {
      // Silently fail if web-vitals is not available
      if (process.env.NODE_ENV === 'development') {
        console.warn('Web Vitals tracking failed:', error);
      }
    }
  }

  private trackNavigationTiming(): void {
    if (!('performance' in window)) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          
          if (process.env.NODE_ENV === 'development') {
            console.log('Navigation timing:', {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart
            });
          }
        }
      }
    });
    
    observer.observe({ entryTypes: ['navigation'] });
    this.observers.push(observer);
  }

  private trackResourceTiming(): void {
    if (!('performance' in window)) return;

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          
          // Track slow resources
          if (resourceEntry.duration > 1000) {
            if (process.env.NODE_ENV === 'development') {
              console.warn('Slow resource detected:', {
                name: resourceEntry.name,
                duration: resourceEntry.duration,
                size: resourceEntry.transferSize
              });
            }
          }
        }
      }
    });
    
    observer.observe({ entryTypes: ['resource'] });
    this.observers.push(observer);
  }

  private sendToAnalytics(metric: { name: string; value: number }): void {
    // Implement analytics service integration
    // Example: Google Analytics, Mixpanel, etc.
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metric', {
        metric_name: metric.name,
        metric_value: metric.value,
        event_category: 'Performance'
      });
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Singleton instance
let performanceTracker: PerformanceTracker | null = null;

export const getPerformanceTracker = (): PerformanceTracker => {
  if (!performanceTracker) {
    performanceTracker = new PerformanceTracker();
  }
  return performanceTracker;
};

// Utility functions
export const preloadResource = (href: string, as: string, crossorigin?: string): void => {
  if (typeof document === 'undefined') return;

  // Check if already preloaded
  const existingLink = document.querySelector(`link[href="${href}"]`);
  if (existingLink) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.href = href;
  link.as = as;
  if (crossorigin) {
    link.crossOrigin = crossorigin;
  }
  
  link.onerror = () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`Failed to preload resource: ${href}`);
    }
  };
  
  document.head.appendChild(link);
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to preload image: ${src}`));
    img.src = src;
  });
};

export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

export const throttle = <T extends (...args: unknown[]) => unknown>(
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
>>>>>>> cursor/fix-errors-and-merge-to-main-e66e
=======
          monitor.endTiming(`${componentName}-render`)
        }
      })
      return React.createElement(WrappedComponent, props)
    }) as T
  }
}
>>>>>>> 1c3bcb5bf864
