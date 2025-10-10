// Performance utilities for optimizing React components and application performance

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
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit);}
    }
  };
};

export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {
  const cache = new Map();
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
/**
 * Lazy load a component with dynamic import
 */
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
): React.LazyExoticComponent<T> {
  const LazyComponent = React.lazy(importFunc)
  if (fallback) {
    return LazyComponent;}
  }
  return LazyComponent
}
/**
 * Measure function execution time
 */
export async function measureTime<T>(
  name: string,
  func: () => T | Promise<T>
): Promise<{ result: T; duration: number }> {
  const start = performance.now()
  const result = await func()
  const duration = performance.now() - start;}
  if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { }ms`); } }
  return { result, duration }
}
/**
 * Batch async operations
 */
export async function batchAsync<T, R>(
  items: T[],
  operation: (item: T) => Promise<R>,
  batchSize = 10
): Promise<R[]> {
  const results: R[] = []
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch.map(operation))
    results.push(...batchResults);}
  }
  return results
}
/**
 * Create a request animation frame loop
 */
export function rafLoop(callback: (time: number) => boolean | void): () => void {
  let rafId: number
  let running = true
  function loop(time: number) {
    if (!running) return
    const shouldContinue = callback(time)
    if (shouldContinue !== false) {
      rafId = requestAnimationFrame(loop);}
    }
  }
  rafId = requestAnimationFrame(loop)
  return () => {
    running = false
    if (rafId) {
      cancelAnimationFrame(rafId);}
    }
  }
}
/**
 * Idle callback wrapper
 */
export function runWhenIdle(
  callback: () => void,
  options?: IdleRequestOptions
): number {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    return window.requestIdleCallback(callback, options);}
  }
  // Fallback for browsers that don't support requestIdleCallback
  if (typeof window !== 'undefined') {
    return (window as Window).setTimeout(callback, 1) as unknown as number;}
  }
  return 0
}
/**
 * Cancel idle callback
 */
export function cancelIdle(id: number): void {
  if (typeof window !== 'undefined') {
    if ('cancelIdleCallback' in window) {
      window.cancelIdleCallback(id);}
    } else {
      (window as Window).clearTimeout(id);}
    }
  }
}
/**
 * Virtual scroll helper
 */
export class VirtualScroller<T> {
  private itemHeight: number
  private containerHeight: number
  private items: T[]
  constructor(items: T[], itemHeight: number, containerHeight: number) {
    this.items = items
    this.itemHeight = itemHeight
    this.containerHeight = containerHeight;}
  }
  getVisibleRange(scrollTop: number): { start: number; end: number; offsetY: number } {
    const start = Math.floor(scrollTop / this.itemHeight)
    const end = Math.ceil((scrollTop + this.containerHeight) / this.itemHeight)
    const offsetY = start * this.itemHeight
    return {
      start: Math.max(0, start),
      end: Math.min(this.items.length, end),
      offsetY}
    }
  }
  getVisibleItems(scrollTop: number): T[] {}
    const { start, end } = this.getVisibleRange(scrollTop)
    return this.items.slice(start, end)
  }
  getTotalHeight(): number {
    return this.items.length * this.itemHeight;}
  }
}
/**
 * Image lazy loading helper
 */
export function setupLazyImages(
  selector = 'img[data-src]',
  options?: IntersectionObserverInit
): () => void {
  const images = document.querySelectorAll<HTMLImageElement>(selector)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement
        const src = img.dataset['src']
        if (src) {
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
 * Preload critical resources
 */
export function preloadResources(resources: Array<{ url: string; as: string }>): void {}
  resources.forEach(({ url, as }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = as;
    document.head.appendChild(link);
};

export const isInViewport = (element: Element): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadImages = async (srcs: string[]): Promise<void> => {
  await Promise.all(srcs.map(preloadImage));
};

export const getImageDimensions = (src: string): Promise<{ width: number; height: number }> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.naturalWidth, height: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};

export const createIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver => {
  return new IntersectionObserver(callback, {
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  });
};

export const measurePerformance = (name: string, fn: () => void): void => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    fn();
    const end = performance.now();
    // console.log(`${name} took ${end - start} milliseconds`);
  } else {
    fn();
  }
};

export const getDeviceInfo = () => {
  const userAgent = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent);
  const isTablet = /iPad|Android(?=.*Mobile)/i.test(userAgent);
  const isDesktop = !isMobile && !isTablet;
  
  return {
    isMobile,
    isTablet,
    isDesktop,
    userAgent
  };
};

export const optimizeForDevice = () => {
  const deviceInfo = getDeviceInfo();
  
  if (deviceInfo.isMobile) {
    // Reduce animations and effects for mobile
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    document.documentElement.style.setProperty('--transition-duration', '0.15s');
  }
  
  return deviceInfo;
};

export const createPerformanceObserver = (callback: (entries: PerformanceEntry[]) => void) => {
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver(callback);
    observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
    return observer;
  }
  return null;
};

export const measureWebVitals = () => {
  const vitals: Record<string, number> = {};
  
  const observer = createPerformanceObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.entryType === 'paint') {
        if (entry.name === 'first-contentful-paint') {
          vitals.fcp = entry.startTime;
        }
      } else if (entry.entryType === 'largest-contentful-paint') {
        vitals.lcp = entry.startTime;
      }
    });
  });
  
  return {
    vitals,
    observer
  };
};

export const optimizeBundleSize = () => {
  // Dynamic imports for heavy components
  const loadHeavyComponent = (componentName: string) => {
    return import(`../components/${componentName}`).catch(() => {
      // console.warn(`Failed to load component: ${componentName}`);
      return null;
    });
  };
  
  return { loadHeavyComponent };
};

export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
  fallback?: React.ReactNode
) => {
  const LazyComponent = React.lazy(importFunc);
  
  return (props: React.ComponentProps<T>) => (
    <React.Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

// Memory management utilities
export const cleanupMemory = () => {
  if ('memory' in performance) {
    const memory = (performance as any).memory;
    // console.log('Memory usage:', {
      used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
      total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB'
    });
  }
};

export const scheduleCleanup = () => {
  // Schedule cleanup every 5 minutes
  setInterval(cleanupMemory, 5 * 60 * 1000);
};
 */

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  speedIndex: number;
  timeToInteractive: number;
}

export interface PerformanceOptimizerConfig {
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enablePreloading: boolean;
  enableCaching: boolean;
}

class PerformanceOptimizer {
  private config: PerformanceOptimizerConfig;
  private metrics: PerformanceMetrics | null = null;

  constructor(config: Partial<PerformanceOptimizerConfig> = {}) {
    this.config = {
      enableImageOptimization: true,
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enablePreloading: true,
      enableCaching: true,
      ...config,
    };
  }

  init(): void {
    if (typeof window === 'undefined') return;

    // Initialize performance optimizations
    if (this.config.enableImageOptimization) {
      this.optimizeImages();
    }

    if (this.config.enableLazyLoading) {
      this.setupLazyLoading();
    }

    if (this.config.enablePreloading) {
      this.setupPreloading();
    }

    if (this.config.enableCaching) {
      this.setupCaching();
    }
  }

  private optimizeImages(): void {
    // Add image optimization logic here
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }

  private setupLazyLoading(): void {
    // Setup intersection observer for lazy loading
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            if (element.dataset.src) {
              element.style.backgroundImage = `url(${element.dataset.src})`;
              observer.unobserve(element);
            }
          }
        });
      });

      document.querySelectorAll('[data-src]').forEach((el) => {
        observer.observe(el);
      });
    }
  }

  private setupPreloading(): void {
    // Preload critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }

  private setupCaching(): void {
    // Setup service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed
      });
    }
  }

  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  collectMetrics(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');

    const firstContentfulPaint = paintEntries.find(
      (entry) => entry.name === 'first-contentful-paint'
    )?.startTime || 0;

    const largestContentfulPaint = paintEntries.find(
      (entry) => entry.name === 'largest-contentful-paint'
    )?.startTime || 0;

    this.metrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      firstContentfulPaint,
      largestContentfulPaint,
      firstInputDelay: 0, // Would need to be measured separately
      cumulativeLayoutShift: 0, // Would need to be measured separately
      totalBlockingTime: 0, // Would need to be measured separately
      speedIndex: 0, // Would need to be measured separately
      timeToInteractive: navigation.domInteractive - navigation.navigationStart,
    };

    return this.metrics;
  }

  cleanup(): void {
    // Cleanup any performance monitoring
    this.metrics = null;
  }
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics | null = null;
  private observers: PerformanceObserver[] = [];

  init(): void {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
  }

  private observeLCP(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (this.metrics) {
          this.metrics.largestContentfulPaint = lastEntry.startTime;
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    }
  }

  private observeFID(): void {
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (this.metrics) {
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    }
  }

  private observeCLS(): void {
    if ('PerformanceObserver' in window) {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        if (this.metrics) {
          this.metrics.cumulativeLayoutShift = clsValue;
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    }
  }

  getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  getScore(): number {
    if (!this.metrics) return 0;

    // Simple scoring algorithm based on Core Web Vitals
    let score = 100;
    
    if (this.metrics.largestContentfulPaint > 4000) score -= 20;
    if (this.metrics.firstInputDelay > 300) score -= 20;
    if (this.metrics.cumulativeLayoutShift > 0.25) score -= 20;
    if (this.metrics.loadTime > 3000) score -= 20;
    if (this.metrics.timeToInteractive > 5000) score -= 20;

    return Math.max(0, score);
  }

  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.metrics = null;
  }
}

// Utility functions
export function lazyLoadImages(): void {
  if (typeof window === 'undefined') return;

  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.classList.remove('lazy');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

export function preloadCriticalResources(): void {
  if (typeof window === 'undefined') return;

  const criticalResources = [
    { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
    { href: '/css/critical.css', as: 'style' },
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource.href;
    link.as = resource.as;
    if (resource.type) link.type = resource.type;
    if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
    document.head.appendChild(link);
  });
}

export function collectPerformanceMetrics(): PerformanceMetrics | null {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');

  const firstContentfulPaint = paintEntries.find(
    (entry) => entry.name === 'first-contentful-paint'
  )?.startTime || 0;

  return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
    firstContentfulPaint,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
    totalBlockingTime: 0,
    speedIndex: 0,
    timeToInteractive: navigation.domInteractive - navigation.navigationStart,
  };
}

// Export instances
export const performanceOptimizer = new PerformanceOptimizer();
export const performanceMonitor = new PerformanceMonitor();
