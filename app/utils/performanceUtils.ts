// Performance utilities for the application
;
export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

export class PerformanceMonitor {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  };

  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics(): void {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Measure page load time;
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    });

    // Measure Core Web Vitals;
    this.measureCoreWebVitals();
  }

  private measureCoreWebVitals(): void {
    // First Contentful Paint;
    this.observePaint('first-contentful-paint', (entry) => {
      this.metrics.firstContentfulPaint = entry.startTime;
    });

    // Largest Contentful Paint;
    this.observeLCP();

    // First Input Delay;
    this.observeFID();

    // Cumulative Layout Shift;
    this.observeCLS();
  }

  private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === type) {
            callback(entry);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('PerformanceObserver not supported:', error);
    }
  }

  private observeLCP(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }
  }

  private observeFID(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('FID observer not supported:', error);
    }
  }

  private observeCLS(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        }
        this.metrics.cumulativeLayoutShift = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('CLS observer not supported:', error);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getLoadTime(): number {
    return this.metrics.loadTime;
  }

  public getFirstContentfulPaint(): number {
    return this.metrics.firstContentfulPaint;
  }

  public getLargestContentfulPaint(): number {
    return this.metrics.largestContentfulPaint;
  }

  public getFirstInputDelay(): number {
    return this.metrics.firstInputDelay;
  }

  public getCumulativeLayoutShift(): number {
    return this.metrics.cumulativeLayoutShift;
  }

  public isPerformanceGood(): boolean {
    return (
      this.metrics.firstContentfulPaint < 1800 &&
      this.metrics.largestContentfulPaint < 2500 &&
      this.metrics.firstInputDelay < 100 &&
      this.metrics.cumulativeLayoutShift < 0.1;
    );
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions;
export function lazyLoadImages(): void {
// Utility functions;
export function lazyLoadImages(): void {}
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {}
    entries.forEach((entry) => {}
      if (entry.isIntersecting) {}
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }

  images.forEach((img) => imageObserver.observe(img));
}

export function preloadCriticalResources(): void {}
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/css/critical.css', as: 'style' }];

  criticalResources.forEach((resource) => {}
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);

}

export function collectPerformanceMetrics(): PerformanceMetrics | null {}
  if (typeof window === 'undefined' || !('performance' in window)) {}
    return null;
export const performanceMonitor = () => {
  // Performance monitoring logic;
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Core Web Vitals;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // eslint-disable-next-line no-console;
        console.log('Performance metric:', entry.name, entry.value);
      }
    });
    
    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    } catch (error) {
      // eslint-disable-next-line no-console;
      console.warn('Performance monitoring not supported:', error);
    }
  }
};

export const seoOptimizer = () => {
  // SEO optimization logic;
  if (typeof window !== 'undefined') {
    // Add structured data;
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com",
      "description": "Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services."
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }
};

  const firstContentfulPaint = paintEntries.find()
    (entry) => entry.name === 'first-contentful-paint'
  )?.startTime || 0;

  return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStart;
  return {}
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
    firstContentfulPaint,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    totalBlockingTime: 0,
    speedIndex: 0,
    timeToInteractive: navigation.domInteractive - navigation.navigationStart;
  };
}

// Export instances;
export const performanceOptimizer = new PerformanceOptimizer();
export const performanceMonitor = new PerformanceMonitor();

// Utility functions;
export const measureFunction = <T extends (...args: any[]) => any>(
  fn: T,
  name?: string;
): T => {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    
    if (name) {
      console.log(`${name} took ${end - start} milliseconds`);
    }
    
    return result;
  }) as T;
};

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number;
): T => {
  let timeout: NodeJS.Timeout;
  
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number;
): T => {
  let inThrottle: boolean;
  
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }) as T;
};

export const lazyLoad = (callback: () => void): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};