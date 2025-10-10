// Performance utilities for optimizing React components and application performance;
export const debounce = <T extends (...args: any[]) => any>(
<<<<<<< HEAD
  func: T;
  wait: number;
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {,
=======
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {}
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {}
>>>>>>> origin/merge-error-fixes
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
<<<<<<< HEAD
  func: T;
  limit: number;
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {,
      func(...args),
      inThrottle = true;
=======
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {}
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {}
    if (!inThrottle) {}
      func(...args)
      inThrottle = true
>>>>>>> origin/merge-error-fixes
      setTimeout(() => (inThrottle = false), limit);}
    }
  };
};

export const memoize = <T extends (...args: any[]) => any>(fn: T): T => {}
  const cache = new Map();
  return ((...args: Parameters<T>) => {}
    const key = JSON.stringify(args);
<<<<<<< HEAD
    if (cache.has(key)) {,
=======
    if (cache.has(key)) {}
>>>>>>> origin/merge-error-fixes
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
<<<<<<< HEAD
=======
}
/**
 * Lazy load a component with dynamic import;
 */
export function lazyLoad<T extends React.ComponentType<unknown>>(
  importFunc: () => Promise<{ default: T }>,
<<<<<<< HEAD
  fallback?: React.ReactNode;
): React.LazyExoticComponent<T> {
=======
  fallback?: React.ReactNode
): React.LazyExoticComponent<T> {}
>>>>>>> origin/merge-error-fixes
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
<<<<<<< HEAD
  name: string;
  func: () => T | Promise<T>,
): Promise<{ result: T; duration: number }> {
=======
  name: string,
  func: () => T | Promise<T>
): Promise<{ result: T; duration: number }> {}
>>>>>>> origin/merge-error-fixes
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
<<<<<<< HEAD
  items: T[]
  operation: (item: T) => Promise<R>
  batchSize = 10;
): Promise<R[]> {,
  const results: R[] = [],
  for (let i = 0; i < items.length; i += batchSize) {,
=======
  items: T[],
  operation: (item: T) => Promise<R>,
  batchSize = 10
): Promise<R[]> {}
  const results: R[] = []
  for (let i = 0; i < items.length; i += batchSize) {}
>>>>>>> origin/merge-error-fixes
    const batch = items.slice(i, i + batchSize)
    const batchResults = await Promise.all(batch.map(operation))
    results.push(...batchResults);}
  }
  return results;
}
/**
 * Create a request animation frame loop;
 */
<<<<<<< HEAD
export function rafLoop(callback: (time: number) => boolean | void): () => void {
  let rafId: number;
  let running = true;
  function loop(time: number) {
    if (!running) return;
    const shouldContinue = callback(time),
    if (shouldContinue !== false) {,
=======
export function rafLoop(callback: (time: number) => boolean | void): () => void {}
  let rafId: number
  let running = true
  function loop(time: number) {}
    if (!running) return
    const shouldContinue = callback(time)
    if (shouldContinue !== false) {}
>>>>>>> origin/merge-error-fixes
      rafId = requestAnimationFrame(loop);}
    }
  }
  rafId = requestAnimationFrame(loop)
<<<<<<< HEAD
  return () => {
    running = false;
    if (rafId) {
=======
  return () => {}
    running = false
    if (rafId) {}
>>>>>>> origin/merge-error-fixes
      cancelAnimationFrame(rafId);}
    }
  }
}
/**
 * Idle callback wrapper;
 */
<<<<<<< HEAD
export function runWhenIdle(
  callback: () => void;
  options?: IdleRequestOptions;
): number {,
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {,
    return window.requestIdleCallback(callback, options);}
  }
  // Fallback for browsers that don't support requestIdleCallback;
  if (typeof window !== 'undefined') {
=======
export function runWhenIdle()
  callback: () => void,
  options?: IdleRequestOptions
): number {}
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {}
    return window.requestIdleCallback(callback, options);}
  }
  // Fallback for browsers that don't support requestIdleCallback
  if (typeof window !== 'undefined') {}
>>>>>>> origin/merge-error-fixes
    return (window as Window).setTimeout(callback, 1) as unknown as number;}
  }
  return 0;
}
/**
 * Cancel idle callback;
 */
<<<<<<< HEAD
export function cancelIdle(id: number): void {,
  if (typeof window !== 'undefined') {,
    if ('cancelIdleCallback' in window) {,
=======
export function cancelIdle(id: number): void {}
  if (typeof window !== 'undefined') {}
    if ('cancelIdleCallback' in window) {}
>>>>>>> origin/merge-error-fixes
      window.cancelIdleCallback(id);}
    } else {}
      (window as Window).clearTimeout(id);}
    }
  }
}
/**
 * Virtual scroll helper;
 */
<<<<<<< HEAD
export class VirtualScroller<T> {
  private itemHeight: number;
  private containerHeight: number;
  private items: T[],
  constructor(items: T[], itemHeight: number, containerHeight: number) {,
    this.items = items;
    this.itemHeight = itemHeight;
=======
export class VirtualScroller<T> {}
  private itemHeight: number
  private containerHeight: number
  private items: T[]
  constructor(items: T[], itemHeight: number, containerHeight: number) {}
    this.items = items
    this.itemHeight = itemHeight
>>>>>>> origin/merge-error-fixes
    this.containerHeight = containerHeight;}
  }
  getVisibleRange(scrollTop: number): { start: number; end: number; offsetY: number } {}
    const start = Math.floor(scrollTop / this.itemHeight)
    const end = Math.ceil((scrollTop + this.containerHeight) / this.itemHeight)
<<<<<<< HEAD
    const offsetY = start * this.itemHeight;
    return {
=======
    const offsetY = start * this.itemHeight
    return {}
>>>>>>> origin/merge-error-fixes
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
<<<<<<< HEAD
export function setupLazyImages(selector = 'img[data-src]')
  options?: IntersectionObserverInit;
): () => void {
  const images = document.querySelectorAll<HTMLImageElement>(selector)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.dataset['src']
        if (src) {
          img['src'] = src;
=======
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
>>>>>>> origin/merge-error-fixes
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
>>>>>>> origin/main
};

export const isInViewport = (element: Element): boolean => {}
  const rect = element.getBoundingClientRect();
  return(rect.top >= 0 &&)
    rect.left >= 0 &&)
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&,
    rect.right <= (window.innerWidth || document.documentElement.clientWidth),
  );
};

<<<<<<< HEAD
export const preloadImage = (src: string): Promise<void> => {,
  return new Promise((resolve, reject) => {
=======
export const preloadImage = (src: string): Promise<void> => {}
  return new Promise((resolve, reject) => {}
>>>>>>> origin/merge-error-fixes
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
<<<<<<< HEAD
  });
=======

>>>>>>> origin/main
};

<<<<<<< HEAD
export const preloadImages = async (srcs: string[]): Promise<void> => {,
=======
export const preloadImages = async (srcs: string[]): Promise<void> => {}
>>>>>>> origin/merge-error-fixes
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
<<<<<<< HEAD
  callback: (entries: IntersectionObserverEntry[]) => void;
  options?: IntersectionObserverInit;,
): IntersectionObserver => {,
  return new IntersectionObserver(callback, {)
    rootMargin: '50px'),
    threshold: 0.1),
    ...options;
=======
  callback: (entries: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit
): IntersectionObserver => {}
  return new IntersectionObserver(callback, {)}
    rootMargin: '50px',
    threshold: 0.1,
    ...options

>>>>>>> origin/merge-error-fixes
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

<<<<<<< HEAD
  if (deviceInfo.isMobile) {
    // Reduce animations and effects for mobile;
=======
  if (deviceInfo.isMobile) {}
    // Reduce animations and effects for mobile
>>>>>>> origin/merge-error-fixes
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    document.documentElement.style.setProperty('--transition-duration', '0.15s');
  }

  return deviceInfo;
};

<<<<<<< HEAD
export const createPerformanceObserver = (callback: (entries: PerformanceEntry[]) => void) => {,
  if ('PerformanceObserver' in window) {,
=======
export const createPerformanceObserver = (callback: (entries: PerformanceEntry[]) => void) => {}
  if ('PerformanceObserver' in window) {}
>>>>>>> origin/merge-error-fixes
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

<<<<<<< HEAD
export const optimizeBundleSize = () => {
  // Dynamic imports for heavy components;
  const loadHeavyComponent = (componentName: string) => {,
    return import(`../components/${componentName}`).catch(() => {
=======
export const optimizeBundleSize = () => {}
  // Dynamic imports for heavy components
  const loadHeavyComponent = (componentName: string) => {}
    return import(`../components/${componentName}`).catch(() => {}
>>>>>>> origin/merge-error-fixes
      // return null;

  };

  return { loadHeavyComponent };
};

export const createLazyComponent = <T extends React.ComponentType<any>>(
  importFunc: () => Promise<{ default: T }>,
<<<<<<< HEAD
  fallback?: React.ReactNode;
) => {
=======
  fallback?: React.ReactNode
) => {}
>>>>>>> origin/merge-error-fixes
  const LazyComponent = React.lazy(importFunc);

  return (props: React.ComponentProps<T>) => (,
    <React.Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} />
    </React.Suspense>
  );
};

<<<<<<< HEAD
// Memory management utilities;
export const cleanupMemory = () => {
  if ('memory' in performance) {
=======
// Memory management utilities
export const cleanupMemory = () => {}
  if ('memory' in performance) {}
>>>>>>> origin/merge-error-fixes
    const memory = (performance as any).memory;
    // }
};

<<<<<<< HEAD
export const scheduleCleanup = () => {
  // Schedule cleanup every 5 minutes;
=======
export const scheduleCleanup = () => {}
  // Schedule cleanup every 5 minutes
>>>>>>> origin/merge-error-fixes
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
<<<<<<< HEAD
,
  constructor(config: Partial<PerformanceOptimizerConfig> = {}) {
    this.config = {
      enableImageOptimization: true;
      enableLazyLoading: true;
      enableCodeSplitting: true;
      enablePreloading: true;
      enableCaching: true;
=======

  constructor(config: Partial<PerformanceOptimizerConfig> = {}) {}
    this.config = {}
      enableImageOptimization: true,
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enablePreloading: true,
      enableCaching: true,
>>>>>>> origin/merge-error-fixes
      ...config,
    };
  }

  init(): void {}
    if (typeof window === 'undefined') return;

<<<<<<< HEAD
    // Initialize performance optimizations;
    if (this.config.enableImageOptimization) {
=======
    // Initialize performance optimizations
    if (this.config.enableImageOptimization) {}
>>>>>>> origin/merge-error-fixes
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

<<<<<<< HEAD
  private optimizeImages(): void {
    // Add image optimization logic here;
=======
  private optimizeImages(): void {}
    // Add image optimization logic here
>>>>>>> origin/merge-error-fixes
    const images = document.querySelectorAll('img');
    images.forEach((img) => {}
      if (!img.loading) {}
        img.loading = 'lazy';
      }

  }

<<<<<<< HEAD
  private setupLazyLoading(): void {
    // Setup intersection observer for lazy loading;
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
=======
  private setupLazyLoading(): void {}
    // Setup intersection observer for lazy loading
    if ('IntersectionObserver' in window) {}
      const observer = new IntersectionObserver((entries) => {}
        entries.forEach((entry) => {}
          if (entry.isIntersecting) {}
>>>>>>> origin/merge-error-fixes
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

<<<<<<< HEAD
  private setupPreloading(): void {
    // Preload critical resources;
=======
  private setupPreloading(): void {}
    // Preload critical resources
>>>>>>> origin/merge-error-fixes
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
    ];

    criticalResources.forEach((resource) => {}
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.endsWith('.woff2')) {}
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);

  }

<<<<<<< HEAD
  private setupCaching(): void {
    // Setup service worker for caching;
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed;
=======
  private setupCaching(): void {}
    // Setup service worker for caching
    if ('serviceWorker' in navigator) {}
      navigator.serviceWorker.register('/sw.js').catch(() => {}
        // Service worker registration failed

>>>>>>> origin/merge-error-fixes
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

<<<<<<< HEAD
    this.metrics = {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart;
=======
    this.metrics = {}
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
>>>>>>> origin/merge-error-fixes
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

<<<<<<< HEAD
  cleanup(): void {
    // Cleanup any performance monitoring;
=======
  cleanup(): void {}
    // Cleanup any performance monitoring
>>>>>>> origin/merge-error-fixes
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

<<<<<<< HEAD
// Utility functions;
export function lazyLoadImages(): void {
=======
// Utility functions
export function lazyLoadImages(): void {}
>>>>>>> origin/merge-error-fixes
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
    { href: '/css/critical.css', as: 'style' },
  ];

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
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');

  const firstContentfulPaint = paintEntries.find()
    (entry) => entry.name === 'first-contentful-paint'
  )?.startTime || 0;

<<<<<<< HEAD
  return {
    loadTime: navigation.loadEventEnd - navigation.loadEventStart;
=======
  return {}
    loadTime: navigation.loadEventEnd - navigation.loadEventStart,
>>>>>>> origin/merge-error-fixes
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
