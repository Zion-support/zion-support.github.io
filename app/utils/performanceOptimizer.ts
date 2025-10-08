// // 'use client'; // Removed for Vite compatibility // Removed for Vite compatibility

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
  memory?: number;
  navigation?: unknown;
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
  private marks: Map<string, number> = new Map();

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

  startMark(markName: string): void {
    if (typeof window === 'undefined') return;
    const timestamp = performance.now();
    this.marks.set(markName, timestamp);
    if ('mark' in performance) {
      performance.mark(markName);
    }
  }

  endMark(markName: string): number {
    if (typeof window === 'undefined') return 0;
    const startTime = this.marks.get(markName);
    if (!startTime) return 0;
    
    const duration = performance.now() - startTime;
    this.marks.delete(markName);
    
    if ('measure' in performance && 'mark' in performance) {
      try {
        performance.measure(`${markName}-duration`, markName);
      } catch (_error) {
        // Ignore measure errors
      }
    }
    
    return duration;
  }

  private initMonitoring() {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      // Monitor Core Web Vitals
      this.observeLCP();
      this.observeFID();
      this.observeCLS();
      this.observeFCP();
      this.observeTTFB();
      this.observeMemory();
    } catch (error) {
       
      console.warn('Performance monitoring initialization failed:', error);
    }
  }

  private observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.lcp = lastEntry.startTime;
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch (_error) {
      // Ignore if not supported
    }
  }

  private observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch (_error) {
      // Ignore if not supported
    }
  }

  private observeCLS() {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        this.metrics.cls = clsValue;
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch (_error) {
      // Ignore if not supported
    }
  }

  private observeFCP() {
    try {
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
    } catch (_error) {
      // Ignore if not supported
    }
  }

  private observeTTFB() {
    try {
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
    } catch (_error) {
      // Ignore if not supported
    }
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
              img.src = src;
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
          (img as HTMLImageElement).src = src;
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
    this.marks.clear();
  }
}

// Create singleton instance
const performanceOptimizer = new PerformanceOptimizer();

// Export functions for backward compatibility
export const lazyLoadImages = () => performanceOptimizer.lazyLoadImages();
export const preloadCriticalResources = () => performanceOptimizer.preloadCriticalResources();
export const collectPerformanceMetrics = () => performanceOptimizer.getNavigationMetrics();

export { performanceOptimizer };
