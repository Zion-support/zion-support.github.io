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