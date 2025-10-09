
// Performance utilities for optimizing React components and application performance

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
// Performance utilities for optimizing React components and application performance;
export const debounce = <T extends (...arg,)
  s: any[]) => any>(fun,
  c: T,
  wai,
  t: number;)
): ((...arg,)
  s: Parameters<T>) => void) => {/* TODO: Fix JSX expression */}

  };
};

export const throttle = <T extends (...arg,)
  s: any[]) => any>(fun,
  c: T,
  limi,
  t: number;)
): ((...arg,)
  s: Parameters<T>) => void) => {/* TODO: Fix JSX expression */}
    }
  };
};

export const memoize = <T extends (...arg,)
  s: any[]) => any>(f,)
  n: T): T => {/* TODO: Fix JSX expression */}
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}
/**
 * Lazy load a component with dynamic import;
 */
export function lazyLoad<T extends React.ComponentType<unknown>>(importFun,)
  c: () => Promise<{/* TODO: Fix JSX expression */}
  t: T }>,
  fallback?: React.ReactNode;
): React.LazyExoticComponent<T> {/* TODO: Fix JSX expression */}
  }
  return LazyComponent;
}
/**
 * Measure function execution time;
 */

export async function measureTime<T>(nam,
  e: string,
  fun,)
  c: () => T | Promise<T></T>
): Promise<{/* TODO: Fix JSX expression */}
  n: number }> {/* TODO: Fix JSX expression */}
  if (process.env['NODE_ENV'] === 'development') { if (import.meta.env.DEV) { }ms`); } }

  return { result, duration };
}
/**
 * Batch async operations;
 */
export async function batchAsync<T, R>(item,
  s: T[],
  operatio,
  n: (ite,)
  m: T) => Promise<R>,
  batchSize = 10;
): Promise<R[]> {/* TODO: Fix JSX expression */}
  }
  return results;
}
/**
 * Create a request animation frame loop;
 */
export function rafLoop(callbac,
  k: (tim,)
  e: number) => boolean | void): () => void {/* TODO: Fix JSX expression */}
    }
  }
  rafId = requestAnimationFrame(loop);
  return () => {/* TODO: Fix JSX expression */}
    }
  };
}
/**
 * Idle callback wrapper;
 */
export function runWhenIdle(callbac,)
  k: () => void,
  options?: IdleRequestOptions;
): number {/* TODO: Fix JSX expression */}
  }
  // Fallback for browsers that don't support requestIdleCallback;
  if (typeof window !== 'undefined') {/* TODO: Fix JSX expression */}
  }
  return 0;
}
/**
 * Cancel idle callback;
 */
export function cancelIdle(i,)
  d: number): void {/* TODO: Fix JSX expression */}
    } else {/* TODO: Fix JSX expression */}
    }
  }
}
/**
 * Virtual scroll helper;
 */
export class VirtualScroller<T> {/* TODO: Fix JSX expression */}
  }
  getVisibleRange(scrollTo,)
  p: number): {/* TODO: Fix JSX expression */}
  Y: number } {/* TODO: Fix JSX expression */}
    };
  }
  getVisibleItems(scrollTo,)
  p: number): T[] {/* TODO: Fix JSX expression */}
    const { start, end } = this.getVisibleRange(scrollTop);
    return this.items.slice(start, end);
  }
  getTotalHeight(): number {/* TODO: Fix JSX expression */}
  }
}
/**
 * Image lazy loading helper;
 */
export function setupLazyImages(selector = 'img[data-src]',
  options?: IntersectionObserverInit;)
): () => void {/* TODO: Fix JSX expression */}
        }
      }
    });
  }, options);
  images.forEach((img) => observer.observe(img));
  return () => observer.disconnect();
}
/**
 * Preload critical resources;
 */
export function preloadResources(resource,
  s: Array<{/* TODO: Fix JSX expression */})
  s: string }>): void {/* TODO: Fix JSX expression */}
  resources.forEach(({ url, as }) => {/* TODO: Fix JSX expression */}
};

export const isInViewport = (elemen,)
  t: Element): boolean => {/* TODO: Fix JSX expression */}
};

export const preloadImage = (sr,)
  c: string): Promise<void> => {/* TODO: Fix JSX expression */}
  });
};

export const preloadImages = async (src,)
  s: string[]): Promise<void> => {/* TODO: Fix JSX expression */}
};

export const getImageDimensions = (sr,)
  c: string): Promise<{/* TODO: Fix JSX expression */}
  t: number }> => {/* TODO: Fix JSX expression */}
  t: img.naturalHeight });
    };
    img.onerror = reject;
    img.src = src;
  });
};

export const createIntersectionObserver = (callbac,
  k: (entrie,)
  s: IntersectionObserverEntry[]) => void,
  options?: IntersectionObserverInit;
): IntersectionObserver => {/* TODO: Fix JSX expression */}
  });
};

export const measurePerformance = (nam,
  e: string, f,)
  n: () => void): void => {/* TODO: Fix JSX expression */}`
    // console.log(`${name} took ${end - start} milliseconds`);
  } else {/* TODO: Fix JSX expression */}
  }
};

export const getDeviceInfo = () => {/* TODO: Fix JSX expression */}
  };
};

export const optimizeForDevice = () => {/* TODO: Fix JSX expression */}
  }
  
  return deviceInfo;
};

export const createPerformanceObserver = (callbac,
  k: (entrie,)
  s: PerformanceEntry[]) => void) => {/* TODO: Fix JSX expression */}
  s: ['measure', 'navigation', 'paint'] });
    return observer;
  }
  return null;
};

export const measureWebVitals = () => {/* TODO: Fix JSX expression */}
  vitals: Record<string, number> = {};
  
  const observer = createPerformanceObserver((entries) => {/* TODO: Fix JSX expression */}
        }
      } else if (entry.entryType === 'largest-contentful-paint') {/* TODO: Fix JSX expression */}
      }
    });
  });
  
  return {/* TODO: Fix JSX expression */}
  };
};

export const optimizeBundleSize = () => {/* TODO: Fix JSX expression */}`
    return import(`../components/${componentName}`).catch(() => {/* TODO: Fix JSX expression */}`
  component: ${componentName}`);
      return null;
    });
  };
  
  return { loadHeavyComponent };
};

export const createLazyComponent = <T extends React.ComponentType<any>>(importFun,)
  c: () => Promise<{/* TODO: Fix JSX expression */}
  t: T }>,
  fallback?: React.ReactNode;
) => {/* TODO: Fix JSX expression */}
    <React.Suspense fallback={fallback || <div>Loading...</div>}>
      <LazyComponent {...props} /></LazyComponent>
    </React.Suspense>
  );
};

// Memory management utilities;
export const cleanupMemory = () => {/* TODO: Fix JSX expression */}
    });
  }
};



/**
 * Performance Utilities
 * Provides performance monitoring, optimization, and metrics collection
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
export const scheduleCleanup = () => {/* TODO: Fix JSX expression */}
};`

