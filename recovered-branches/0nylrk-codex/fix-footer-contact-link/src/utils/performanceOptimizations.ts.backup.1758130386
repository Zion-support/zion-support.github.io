/**
 * Performance Optimization Utilities
 * Advanced performance monitoring and optimization tools
 */

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    this.initializeMonitoring();
  }

  private initializeMonitoring() {
    // Monitor Core Web Vitals
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.observeFCP();
    this.observeTTI();
  }

  private observeLCP() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          this.metrics.largestContentfulPaint = lastEntry.startTime;
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
        this.observers.push(observer);
      } catch (e) {
        console.warn('LCP monitoring not supported');
      }
    }
  }

  private observeFID() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            this.metrics.firstInputDelay = entry.processingStart - entry.startTime;
          }
        });
        observer.observe({ type: 'first-input', buffered: true });
        this.observers.push(observer);
      } catch (e) {
        console.warn('FID monitoring not supported');
      }
    }
  }

  private observeCLS() {
    if ('PerformanceObserver' in window) {
      try {
        let clsValue = 0;
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          this.metrics.cumulativeLayoutShift = clsValue;
        });
        observer.observe({ type: 'layout-shift', buffered: true });
        this.observers.push(observer);
      } catch (e) {
        console.warn('CLS monitoring not supported');
      }
    }
  }

  private observeFCP() {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.name === 'first-contentful-paint') {
              this.metrics.firstContentfulPaint = entry.startTime;
            }
          }
        });
        observer.observe({ type: 'paint', buffered: true });
        this.observers.push(observer);
      } catch (e) {
        console.warn('FCP monitoring not supported');
      }
    }
  }

  private observeTTI() {
    // Time to Interactive is calculated differently
    // This is a simplified version
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              this.metrics.timeToInteractive = navEntry.domInteractive - navEntry.fetchStart;
            }
          }
        });
        observer.observe({ type: 'navigation', buffered: true });
        this.observers.push(observer);
      } catch (e) {
        console.warn('TTI monitoring not supported');
      }
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    // Add memory usage if available
    if ('memory' in performance) {
      this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024;
    }

    // Add load time
    this.metrics.loadTime = performance.now();

    return { ...this.metrics };
  }

  public reportMetrics() {
    const metrics = this.getMetrics();
    console.group('🚀 Performance Metrics');
    console.log('Load Time:', metrics.loadTime?.toFixed(2) + 'ms');
    console.log('First Contentful Paint:', metrics.firstContentfulPaint?.toFixed(2) + 'ms');
    console.log('Largest Contentful Paint:', metrics.largestContentfulPaint?.toFixed(2) + 'ms');
    console.log('Cumulative Layout Shift:', metrics.cumulativeLayoutShift?.toFixed(3));
    console.log('First Input Delay:', metrics.firstInputDelay?.toFixed(2) + 'ms');
    console.log('Time to Interactive:', metrics.timeToInteractive?.toFixed(2) + 'ms');
    console.log('Memory Usage:', metrics.memoryUsage?.toFixed(2) + 'MB');
    console.groupEnd();

    // Send to analytics if available
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('event', 'performance_metrics', metrics);
    }
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export class ImageOptimizer {
  private static instance: ImageOptimizer;
  private intersectionObserver: IntersectionObserver | null = null;

  private constructor() {
    this.initializeLazyLoading();
  }

  public static getInstance(): ImageOptimizer {
    if (!ImageOptimizer.instance) {
      ImageOptimizer.instance = new ImageOptimizer();
    }
    return ImageOptimizer.instance;
  }

  private initializeLazyLoading() {
    if ('IntersectionObserver' in window) {
      this.intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              this.loadImage(img);
              this.intersectionObserver?.unobserve(img);
            }
          });
        },
        { rootMargin: '50px' }
      );
    }
  }

  private loadImage(img: HTMLImageElement) {
    const src = img.dataset.src;
    if (src) {
      img.src = src;
      img.removeAttribute('data-src');
      img.classList.add('loaded');
    }
  }

  public observeImage(img: HTMLImageElement) {
    if (this.intersectionObserver) {
      this.intersectionObserver.observe(img);
    } else {
      // Fallback for browsers without IntersectionObserver
      this.loadImage(img);
    }
  }

  public cleanup() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }
}

export class BundleOptimizer {
  public static preloadCriticalResources() {
    // Preload critical resources
    const criticalResources = [
      '/css/main.css',
      '/js/main.js',
      '/fonts/roboto.woff2'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  public static prefetchNextPageResources(route: string) {
    // Prefetch resources for likely next pages
    const prefetchRoutes = {
      '/': ['/blog', '/case-study'],
      '/blog': ['/', '/case-study'],
      '/case-study': ['/', '/blog']
    };

    const routesToPrefetch = prefetchRoutes[route as keyof typeof prefetchRoutes] || [];
    
    routesToPrefetch.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }

  public static optimizeThirdPartyScripts() {
    // Defer non-critical third-party scripts
    const scripts = document.querySelectorAll('script[src*="analytics"], script[src*="gtag"]');
    scripts.forEach(script => {
      script.defer = true;
      script.async = true;
    });
  }
}

export class MemoryOptimizer {
  private static cleanupTasks: (() => void)[] = [];

  public static registerCleanup(task: () => void) {
    this.cleanupTasks.push(task);
  }

  public static cleanup() {
    this.cleanupTasks.forEach(task => {
      try {
        task();
      } catch (e) {
        console.warn('Cleanup task failed:', e);
      }
    });
    this.cleanupTasks = [];
  }

  public static optimizeImages() {
    // Convert images to WebP if supported
    if (this.supportsWebP()) {
      const images = document.querySelectorAll('img[src$=".jpg"], img[src$=".png"]');
      images.forEach(img => {
        const webpSrc = img.src.replace(/\.(jpg|png)$/, '.webp');
        const webpImg = new Image();
        webpImg.onload = () => {
          img.src = webpSrc;
        };
        webpImg.src = webpSrc;
      });
    }
  }

  private static supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
}

// Initialize performance monitoring
export const performanceMonitor = new PerformanceMonitor();
export const imageOptimizer = ImageOptimizer.getInstance();

// Cleanup on page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    performanceMonitor.cleanup();
    imageOptimizer.cleanup();
    MemoryOptimizer.cleanup();
  });

  // Report metrics after page load
  window.addEventListener('load', () => {
    setTimeout(() => {
      performanceMonitor.reportMetrics();
    }, 2000);
  });
}