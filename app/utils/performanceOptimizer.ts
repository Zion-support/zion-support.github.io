/**
 * Performance optimization utilities for the Zion Tech Group website
 * Provides tools for monitoring and optimizing application performance
 */

// Simple logger for performance optimizer
const logger = {
  info: (message: string, context?: string) => console.log(`[INFO${context ? ' - ' + context : ''}]`, message),
  performance: (message: string, data: Record<string, unknown>, context?: string) => console.log(`[PERF${context ? ' - ' + context : ''}]`, message, data),
  error: (message: string, error: Error) => console.error('[ERROR]', message, error),
};

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  memory?: number;
  bundleSize: number;
  cacheHitRate: number;
  firstContentfulPaint?: number;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  fmp?: number;
  ttfb?: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

interface PerformanceConfig extends OptimizationConfig {}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
  };

  private config: OptimizationConfig = {
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
    enableCaching: true,
    enableCompression: true,
  };

  private observers: PerformanceObserver[] = [];
  private isMonitoring: boolean = false;

  constructor(config?: Partial<OptimizationConfig>) {
    this.config = { ...this.config, ...config };
    this.initializePerformanceMonitoring();
  }

  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor page load performance
    window.addEventListener('load', () => {
      this.measureLoadTime();
      this.measureMemoryUsage();
    });

    // Monitor render performance
    // this.measureRenderTime(); // Method not implemented yet
  }

  /**
   * Measure page load time
   */
  private measureLoadTime(): void {
    if (typeof window === 'undefined' || !window.performance) return;
    if (typeof window.performance.getEntriesByType !== 'function') return;

    try {
      const navigation = window.performance.getEntriesByType?.('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      }
    } catch (error) {
      console.warn('Performance API not fully supported:', error);
    }
  }
  lazyLoadImages() {
    if (typeof window === 'undefined') return

    const images = document.querySelectorAll('img[data-src]')

  /**
   * Measure render time
   */
  private measureRenderTime(): void {
    if (typeof window === 'undefined' || !window.performance) return;
    
    // Check if PerformanceObserver exists (may not be available in test environments)
    if (typeof PerformanceObserver === 'undefined') return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'measure') {
            this.metrics.renderTime = entry.duration;
          }
        });
      });

      observer.observe({ entryTypes: ['measure'] });
    } catch (error) {
      // PerformanceObserver may not support 'measure' entryType in some environments
    }
  }

  /**
   * Lazy load images for better performance
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return;
    
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.removeAttribute('data-src');
          imageObserver.unobserve(img);
        }
      });
    });
    
    images.forEach(img => imageObserver.observe(img));
  }

  /**
   * Optimize scroll performance
   */
  optimizeScroll(): void {
    if (typeof window === 'undefined') return;
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll optimization logic here
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (typeof window === 'undefined') return;
    
    const criticalResources = [
      '/fonts/critical.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });
  }

  /**
   * Observe First Input Delay
   */
  private observeFID(): void {
    if (typeof window === 'undefined') return;
    // FID observation logic would go here
  }

  /**
   * Observe Cumulative Layout Shift
   */
  private observeCLS(): void {
    if (typeof window === 'undefined') return;
    // CLS observation logic would go here
  }

  /**
   * Observe First Contentful Paint
   */
  private observeFCP(): void {
    if (typeof window === 'undefined') return;
    // FCP observation logic would go here
  }

  /**
   * Observe Time to First Byte
   */
  private observeTTFB(): void {
    if (typeof window === 'undefined') return;
    // TTFB observation logic would go here
  }

  /**
   * Observe memory usage
   */
  private observeMemory(): void {
    if (typeof window === 'undefined') return;
    // Memory observation logic would go here
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
export default PerformanceOptimizer;
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig };
