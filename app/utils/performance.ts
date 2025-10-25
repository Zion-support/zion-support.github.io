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