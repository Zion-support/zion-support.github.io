<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Performanceutils utility functions
export function performanceutils() {
  // Implementation here
  return null;
=======
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeMetrics();
  }

  private initializeMetrics(): void {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Measure page load time
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
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

  private observePaint(type: string, callback: (entry: PerformanceEntry,) => void): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === type) {
            callback(entry);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] ,});
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
      observer.observe({ entryTypes: ['largest-contentful-paint'] ,});
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
      observer.observe({ entryTypes: ['first-input'] ,});
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
      observer.observe({ entryTypes: ['layout-shift'] ,});
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

export const performanceMonitor = new PerformanceMonitor();

// Utility functions
export const measureFunction = <T extends (...args: any[]) => any>(
  fn: T,
  name?: string
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
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
  func: T,
  wait: number,
): T => {
  let timeout: NodeJS.Timeout;
<<<<<<< HEAD
  
  return ((...args: Parameters<T>) => {
=======
  return (...args: Parameters<T>) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  }) as T;
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): T => {
  let inThrottle: boolean;
<<<<<<< HEAD
  
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

export const preloadImage = (src: string,): Promise<void> => {
  return new Promise((resolve, reject) => {
=======
  return (...args: Parameters<T>) => {}
    if (!inThrottle) {}
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit);}
    }
  };
};

export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {}
  const cache = new Map();
  return ((...args: Parameters<T>) => {}
    const key = JSON.stringify(args);
    if (cache.has(key)) {}
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
/**
 * Lazy load a component with dynamic import;
 */
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
): React.LazyExoticComponent<T> {}
  const LazyComponent = React.lazy(importFunc)
  if (fallback) {}
    return LazyComponent;}
  }
  return LazyComponent;
}
/**
 * Measure function execution time;
 */
export async function measureTime<T>(
  name: string,
  func: () => T | Promise<T></T>
): Promise<{ result: T; duration: number }> {}
  const start = performance.now()
  const result = await func()
  const duration = performance.now() - start;}
  if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { }ms`); } }
  return { result, duration }
}
/**
 * Batch async operations;
 */
export async function batchAsync<T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  batchSize = 10
): Promise<R[]> {}
  const results: R[] = []
  for (let i = 0; i < items.length; i += batchSize) {}
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch.map(operation))
    results.push(...batchResults);}
  }
  return results;
}
/**
 * Create a request animation frame loop;
 */
export function rafLoop(callback: (time: number) => boolean | void): () => void {}
  let rafId: number
  let running = true
  function loop(time: number) {}
    if (!running) return
    const shouldContinue = callback(time)
    if (shouldContinue !== false) {}
      rafId = requestAnimationFrame(loop);}
    }
  }
  rafId = requestAnimationFrame(loop)
  return () => {}
    running = false
    if (rafId) {}
      cancelAnimationFrame(rafId);}
    }
  }
}
/**
 * Idle callback wrapper;
 */
export function runWhenIdle()
  callback: () => void,
  options?: IdleRequestOptions
): number {}
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {}
    return window.requestIdleCallback(callback, options);}
  }
  // Fallback for browsers that don't support requestIdleCallback
  if (typeof window !== 'undefined') {}
    return (window as Window).setTimeout(callback, 1) as unknown as number;}
  }
  return 0;
}
/**
 * Cancel idle callback;
 */
export function cancelIdle(id: number): void {}
  if (typeof window !== 'undefined') {}
    if ('cancelIdleCallback' in window) {}
      window.cancelIdleCallback(id);}
    } else {}
      (window as Window).clearTimeout(id);}
    }
  }
}
/**
 * Virtual scroll helper;
 */
export class VirtualScroller<T> {}
  private itemHeight: number
  private containerHeight: number
  private items: T[]
  constructor(items: T[], itemHeight: number, containerHeight: number) {}
    this.items = items
    this.itemHeight = itemHeight
    this.containerHeight = containerHeight;}
  }
  getVisibleRange(scrollTop: number): { start: number; end: number; offsetY: number } {}
    const start = Math.floor(scrollTop / this.itemHeight)
    const end = Math.ceil((scrollTop + this.containerHeight) / this.itemHeight)
    const offsetY = start * this.itemHeight
    return {}
      start: Math.max(0, start),
      end: Math.min(this.items.length, end),
      offsetY}
    }
  }
  getVisibleItems(scrollTop: number): T[] {}
    const { start, end } = this.getVisibleRange(scrollTop)
    return this.items.slice(start, end)
  }
  getTotalHeight(): number {}
    return this.items.length * this.itemHeight;}
  }
}
/**
 * Image lazy loading helper;
 */
export function setupLazyImages()
  selector = 'img[data-src]',
  options?: IntersectionObserverInit
): () => void {}
  const images = document.querySelectorAll<HTMLImageElement>(selector)
  const observer = new IntersectionObserver((entries) => {}
    entries.forEach((entry) => {}
      if (entry.isIntersecting) {}
        const img = entry.target as HTMLImageElement
        const src = img.dataset['src']
        if (src) {}
          img['src'] = src
          img.removeAttribute('data-src')
          observer.unobserve(img);}
        }
      }
    })
  }, options)
  images.forEach((img) => observer.observe(img))
  return () => observer.disconnect()
}
/**
 * Preload critical resources;
 */
export function preloadResources(resources: Array<{ url: string; as: string }>): void {}
  resources.forEach(({ url, as }) => {}
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = as;
    document.head.appendChild(link);
};

export const isInViewport = (element: Element): boolean => {}
  const rect = element.getBoundingClientRect();
  return(rect.top >= 0 &&)
    rect.left >= 0 &&)
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&,
    rect.right <= (window.innerWidth || document.documentElement.clientWidth));
};

export const preloadImage = (src: string): Promise<void> => {}
  return new Promise((resolve, reject) => {}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
<<<<<<< HEAD
  });
};

export const preloadImages = (srcs: string[]): Promise<void[]> => {
  return Promise.all(srcs.map(preloadImage));
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
=======

};

export const preloadImages = async (srcs: string[]): Promise<void> => {}
  await Promise.all(srcs.map(preloadImage));
};

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {}
  return new Promise((resolve, reject) => {}
    const img = new Image();
    img.onload = () => {}
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;

};

export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver => {}
  return new IntersectionObserver(callback, {)}
    rootMargin: '50px',
    threshold: 0.1,
    ...options

};

export const measurePerformance = (name: string, fn: () => void): void => {}
  if (process.env.NODE_ENV === 'development') {}
    const start = performance.now();
    fn();
    const end = performance.now();
    // } else {}
    fn();
  }
};

export const getDeviceInfo = () => {}
  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?=.*Mobile)/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;

  return {}
    isMobile,
    isTablet,
    isDesktop,
    userAgent;
  };
};

export const optimizeForDevice = () => {}
  const deviceInfo = getDeviceInfo();

  if (deviceInfo.isMobile) {}
    // Reduce animations and effects for mobile
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    document.documentElement.style.setProperty('--transition-duration', '0.15s');
  }

  return deviceInfo;
};

export const createPerformanceObserver = (callback: (entries: PerformanceEntry[]) => void) => {}
  if ('PerformanceObserver' in window) {}
    const observer = new PerformanceObserver(callback);
    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    return observer;
  }
  return null;
};

export const measureWebVitals = () => {}
  const vitals: Record<string, number> = {};

  const observer = createPerformanceObserver((entries) => {}
    entries.forEach((entry) => {}
      if (entry.entryType === 'paint') {}
        if (entry.name === 'first-contentful-paint') {}
          vitals.fcp = entry.startTime;
        }
      } else if (entry.entryType === 'largest-contentful-paint') {}
        vitals.lcp = entry.startTime;
      }


  return {}
    vitals,
    observer;
  };
};

export const optimizeBundleSize = () => {}
  // Dynamic imports for heavy components
  const loadHeavyComponent = (componentName: string) => {}
    return import(`../components/${componentName}`).catch(() => {}
      // return null;

  };

  return { loadHeavyComponent };
};

export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) => {}
  const LazyComponent = React.lazy(importFunc);

  return (props: React.ComponentProps<T>) => (,
    <React.Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

// Memory management utilities
export const cleanupMemory = () => {}
  if ('memory' in performance) {}
    const memory = (performance as any).memory;
    // }
};

export const scheduleCleanup = () => {}
  // Schedule cleanup every 5 minutes
  setInterval(cleanupMemory, 5 * 60 * 1000);
};

/**
 * Performance Utilities;
 * Provides performance monitoring, optimization, and metrics collection;
 */

export interface PerformanceMetrics {}
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  speedIndex: number;
  timeToInteractive: number;
}

export interface PerformanceOptimizerConfig {}
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enablePreloading: boolean;
  enableCaching: boolean;
}

class PerformanceOptimizer {}
  private config: PerformanceOptimizerConfig;
  private metrics: PerformanceMetrics | null = null;

  constructor(config: Partial<PerformanceOptimizerConfig> = {}) {}
    this.config = {}
      enableImageOptimization: true,
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enablePreloading: true,
      enableCaching: true,
      ...config};
  }

  init(): void {}
    if (typeof window === 'undefined') return;

    // Initialize performance optimizations
    if (this.config.enableImageOptimization) {}
      this.optimizeImages();
    }

    if (this.config.enableLazyLoading) {}
      this.setupLazyLoading();
    }

    if (this.config.enablePreloading) {}
      this.setupPreloading();
    }

    if (this.config.enableCaching) {}
      this.setupCaching();
    }
  }

  private optimizeImages(): void {}
    // Add image optimization logic here
    const images = document.querySelectorAll('img');
    images.forEach((img) => {}
      if (!img.loading) {}
        img.loading = 'lazy';
      }

  }

  private setupLazyLoading(): void {}
    // Setup intersection observer for lazy loading
    if ('IntersectionObserver' in window) {}
      const observer = new IntersectionObserver((entries) => {}
        entries.forEach((entry) => {}
          if (entry.isIntersecting) {}
            const element = entry.target as HTMLElement;
            if (element.dataset.src) {}
              element.style.backgroundImage = `url(${element.dataset.src})`;
              observer.unobserve(element);
            }
          }


      document.querySelectorAll('[data-src]').forEach((el) => {}
        observer.observe(el);

    }
  }

  private setupPreloading(): void {}
// Performance optimization utilities
export const performanceOptimizer = () => {
  // Performance optimization logic
  if (typeof window !== 'undefined') {
    // Preload critical resources
    const criticalResources = [
      '/src/main.tsx',
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);

  }
};

  private setupCaching(): void {}
    // Setup service worker for caching
    if ('serviceWorker' in navigator) {}
      navigator.serviceWorker.register('/sw.js').catch(() => {}
        // Service worker registration failed

    }
  }

  getMetrics(): PerformanceMetrics | null {}
    return this.metrics;
  }

  collectMetrics(): PerformanceMetrics | null {}
    if (typeof window === 'undefined' || !('performance' in window)) {}
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');

    const firstContentfulPaint = paintEntries.find()
      (entry) => entry.name === 'first-contentful-paint'
    )?.startTime || 0;

    const largestContentfulPaint = paintEntries.find()
      (entry) => entry.name === 'largest-contentful-paint'
    )?.startTime || 0;

    this.metrics = {}
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay: 0, // Would need to be measured separately;
      cumulativeLayoutShift: 0, // Would need to be measured separately;
      totalBlockingTime: 0, // Would need to be measured separately;
      speedIndex: 0, // Would need to be measured separately;
      timeToInteractive: navigation.domInteractive - navigation.navigationStart;
    };

    return this.metrics;
  }

  cleanup(): void {}
    // Cleanup any performance monitoring
    this.metrics = null;
  }
}

class PerformanceMonitor {}
  private metrics: PerformanceMetrics | null = null;
  private observers: PerformanceObserver[] = [];

  init(): void {}
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Monitor Core Web Vitals;
    this.observeLCP();
    this.observeFID();,
    this.observeCLS();
  }

  private observeLCP(): void {}
    if ('PerformanceObserver' in window) {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (this.metrics) {}
          this.metrics.largestContentfulPaint = lastEntry.startTime;
        }

      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    }
  }

  private observeFID(): void {}
    if ('PerformanceObserver' in window) {}
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries();
        entries.forEach((entry) => {}
          if (this.metrics) {}
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          }


      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    }
  }

  private observeCLS(): void {}
    if ('PerformanceObserver' in window) {}
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {}
        const entries = list.getEntries();
        entries.forEach((entry) => {}
          if (!(entry as any).hadRecentInput) {}
            clsValue += (entry as any).value;
          }

        if (this.metrics) {}
          this.metrics.cumulativeLayoutShift = clsValue;
        }

      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    }
  }

  getMetrics(): PerformanceMetrics | null {}
    return this.metrics;
  }

  getScore(): number {}
    if (!this.metrics) return 0;

    // Simple scoring algorithm based on Core Web Vitals;
    let score = 100;

    if (this.metrics.largestContentfulPaint > 4000) score -= 20;
    if (this.metrics.firstInputDelay > 300) score -= 20;
    if (this.metrics.cumulativeLayoutShift > 0.25) score -= 20;
    if (this.metrics.loadTime > 3000) score -= 20;
    if (this.metrics.timeToInteractive > 5000) score -= 20;

    return Math.max(0, score);
  }

  cleanup(): void {}
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics = null;
  }
}

// Utility functions
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
  // Performance monitoring logic
  if (typeof window !== 'undefined' && 'performance' in window) {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('Performance metric:', entry.name, entry.value);
      }
    });
    
    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
};

export const seoOptimizer = () => {
  // SEO optimization logic
  if (typeof window !== 'undefined') {
    // Add structured data
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

  return {}
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
    firstContentfulPaint,
    largestContentfulPaint: 0;
    firstInputDelay: 0;
    cumulativeLayoutShift: 0;
    totalBlockingTime: 0;
    speedIndex: 0;
    timeToInteractive: navigation.domInteractive - navigation.navigationStart;
  };
}

// Export instances;
export const performanceOptimizer = new PerformanceOptimizer();
export const performanceMonitor = new PerformanceMonitor();
export const accessibilityEnhancer = () => {
  // Accessibility enhancement logic
  if (typeof window !== 'undefined') {
    // Add skip navigation link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded';
    document.body.insertBefore(skipLink, document.body.firstChild);
  }
};

export const collectPerformanceMetrics = () => {
  // Collect performance metrics
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (navigation) {
          console.log('Page load time:', navigation.loadEventEnd - navigation.loadEventStart);
          console.log('DOM content loaded:', navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart);
        }
      }, 0);
    });
  }
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
=======
// Utility file: performanceUtils

export interface PerformanceData {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  networkLatency: number;
}

export class PerformanceUtils {
  measureLoadTime(): number {
    if (typeof window === 'undefined') return 0;
    return performance.now();
  }

  measureRenderTime(): Promise<number> {
    return new Promise((resolve) => {
      const start = performance.now();
      requestAnimationFrame(() => {
        const renderTime = performance.now() - start;
        resolve(renderTime);
      });
    });
  }

  measureMemoryUsage(): number {
    if (typeof window === 'undefined' || !('memory' in performance)) return 0;
    
    const memory = (performance as { memory?: { usedJSHeapSize: number } }).memory;
    return memory ? memory.usedJSHeapSize / 1024 / 1024 : 0; // Convert to MB
  }

  measureNetworkLatency(): Promise<number> {
    return new Promise((resolve) => {
      const start = performance.now();
      fetch('/api/ping', { method: 'HEAD' })
        .then(() => {
          const latency = performance.now() - start;
          resolve(latency);
        })
        .catch(() => {
          resolve(0);
        });
    });
  }

  async getPerformanceData(): Promise<PerformanceData> {
    const [renderTime, networkLatency] = await Promise.all([
      this.measureRenderTime(),
      this.measureNetworkLatency()
    ]);

    return {
      loadTime: this.measureLoadTime(),
      renderTime,
      memoryUsage: this.measureMemoryUsage(),
      networkLatency
    };
  }

  isPerformanceOptimized(data: PerformanceData): boolean {
    return (
      data.loadTime < 1000 && // Load time under 1 second
      data.renderTime < 16 && // Render time under 16ms (60fps)
      data.memoryUsage < 100 && // Memory usage under 100MB
      data.networkLatency < 200 // Network latency under 200ms
    );
  }
}

export const performanceUtils = new PerformanceUtils();
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
