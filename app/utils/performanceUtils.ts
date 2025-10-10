  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics(): void {
    if (typeof _window === 'undefined' || !('performance' in window)) return;

    // Measure page load time
    window.addEventListener('load', () => {
      const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
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
  }

  private observePaint(type: string, callback: (entry: PerformanceEntry) => void): void {
    if (typeof _window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const _observer = new PerformanceObserver((list) => {
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
    if (typeof _window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const _observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const _lastEntry = entries[entries.length - 1];
        this.metrics.largestContentfulPaint = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (error) {
      console.warn('LCP observer not supported:', error);
    }
  }

  private observeFID(): void {
    if (typeof _window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const _observer = new PerformanceObserver((list) => {
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
    if (typeof _window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      let _clsValue = 0;
      const _observer = new PerformanceObserver((list) => {
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
      this.metrics.cumulativeLayoutShift < 0.1
    );
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const _performanceMonitor = new PerformanceMonitor();

// Utility functions
export const _measureFunction = <T extends (...args: any[]) => any>(
  fn: T,
  name?: string
): T => {
  return ((...args: Parameters<T>) => {
    const start = performance.now();
    const _result = fn(...args);
    const _end = performance.now();
    
    if (name) {
      // console.log(...);
    }
    
    return result;
  }) as T;
};

export const _debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): T => {
  let timeout: NodeJS.Timeout;
  
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    _timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

export const _throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): T => {
  let inThrottle: boolean;
  
  return ((...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      _inThrottle = true;
      setTimeout(() => _inThrottle = false, limit);
    }
  }) as T;
};

export const _lazyLoad = (callback: () => void): void => {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
};

export const _preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const _preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};