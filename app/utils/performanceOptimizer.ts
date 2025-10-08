'use client';

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  memory?: number;
  navigation?: any;
}

interface PerformanceOptimizerConfig {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
  enableMonitoring: boolean;
}

class PerformanceOptimizer {
  private config: PerformanceOptimizerConfig;
  private metrics: PerformanceMetrics = {};
  private observers: PerformanceObserver[] = [];

  constructor(config: Partial<PerformanceOptimizerConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enablePreloading: true,
      enableCompression: true,
      enableCaching: true,
      enableMonitoring: true,
      ...config
    };

    if (this.config.enableMonitoring) {
      this.initMonitoring();
    }
  }

  init() {
    if (typeof window === 'undefined') return;

    if (this.config.enableLazyLoading) {
      this.lazyLoadImages();
    }

    if (this.config.enablePreloading) {
      this.preloadCriticalResources();
    }

    if (this.config.enableCaching) {
      this.setupCaching();
    }
  }

  private async initMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      if (this.config.enableMonitoring) {
        await this.setupPerformanceObservers();
        this.startMonitoring();
      }

      if (this.config.enableOptimization) {
        this.applyOptimizations();
      }
    } catch (error) {
      console.error('Failed to initialize performance optimizer:', error);
    }
  }

  /**
   * Setup performance observers for Core Web Vitals
   */
  private async setupPerformanceObservers(): Promise<void> {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    // First Contentful Paint (FCP)
    try {
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
        if (fcpEntry) {
          this.metrics.fcp = fcpEntry.startTime;
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.warn('FCP observer setup failed:', error);
    }

    // Largest Contentful Paint (LCP)
    try {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.metrics.lcp = lastEntry.startTime;
        }
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);
    } catch (error) {
      console.warn('LCP observer setup failed:', error);
    }

    // First Input Delay (FID)
    try {
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
      entries.forEach((entry: PerformanceEventTiming) => {
        if (entry.processingStart && entry.startTime) {
          this.metrics.fid = entry.processingStart - entry.startTime;
        }
      });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);
    } catch (error) {
      console.warn('FID observer setup failed:', error);
    }

    // Cumulative Layout Shift (CLS)
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      });
        this.metrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('CLS observer setup failed:', error);
    }

    // Time to First Byte (TTFB)
    try {
      const navigationObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceNavigationTiming) => {
          this.metrics.ttfb = entry.responseStart - entry.requestStart;
        });
      });
      navigationObserver.observe({ entryTypes: ['navigation'] });
      this.observers.push(navigationObserver);
    } catch (error) {
      console.warn('TTFB observer setup failed:', error);
    }
  }

  /**
   * Start performance monitoring
   */
  private startMonitoring(): void {
    if (this.isMonitoring) return;
    this.isMonitoring = true;

    // Monitor memory usage
    if (this.config.enableMonitoring) {
      setInterval(() => {
        this.checkMemoryUsage();
      }, 5000);
    }
  }

  /**
   * Apply performance optimizations
   */
  private applyOptimizations(): void {
    if (typeof window === 'undefined') return;

    // Lazy load images
    lazyLoadImages();

    // Preload critical resources
    preloadCriticalResources();

    // Optimize scroll performance
    optimizeScrollPerformance();

    // Optimize animations
    this.optimizeAnimations();

    // Optimize images
    this.optimizeImages();
  }

  /**
   * Optimize animations for better performance
   */
  private optimizeAnimations(): void {
    if (typeof document === 'undefined') return;

    const style = document.createElement('style');
    style.textContent = `
      * {
        will-change: auto;
      }
      
      .animate {
        will-change: transform, opacity;
      }
      
      .animate:hover {
        will-change: auto;
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Optimize images for better loading
   */
  private optimizeImages(): void {
    if (typeof document === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(observer);
  }

  private observeFCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
        }
      });
    });
    observer.observe({ entryTypes: ['paint'] });
    this.observers.push(observer);
  }

  private observeTTFB() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (entry.responseStart > 0) {
          this.metrics.ttfb = entry.responseStart - entry.requestStart;
        }
      });
    });
    observer.observe({ entryTypes: ['navigation'] });
    this.observers.push(observer);
  }

  private observeMemory() {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memory = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
    }
  }

  lazyLoadImages() {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img['src'] = src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach((img) => {
        const src = img.getAttribute('data-src');
        if (src) {
          (img as HTMLImageElement)['src'] = src;
          img.removeAttribute('data-src');
        }
      });
    }
  }

  preloadCriticalResources() {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
      '/js/critical.js'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  setupCaching() {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  getNavigationMetrics() {
    if (typeof window === 'undefined') return null;

    const navigation = performance.getEntriesByType('navigation')[0] as any;
    if (!navigation) return null;

    return {
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
      loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
      domInteractive: navigation.domInteractive - navigation.navigationStart,
      redirect: navigation.redirectEnd - navigation.redirectStart,
      dns: navigation.domainLookupEnd - navigation.domainLookupStart,
      tcp: navigation.connectEnd - navigation.connectStart,
      request: navigation.responseStart - navigation.requestStart,
      response: navigation.responseEnd - navigation.responseStart,
      processing: navigation.domComplete - navigation.responseEnd
    };
  }

  cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Create singleton instance
const performanceOptimizer = new PerformanceOptimizer();

// Export functions for backward compatibility
export const lazyLoadImages = () => performanceOptimizer.lazyLoadImages();
export const preloadCriticalResources = () => performanceOptimizer.preloadCriticalResources();
export const collectPerformanceMetrics = () => performanceOptimizer.getNavigationMetrics();

export { performanceOptimizer };
export default performanceOptimizer;
