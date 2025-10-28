/**
 * Performance Optimizer
 * Comprehensive performance monitoring and optimization utilities
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  isOptimized: boolean;
  recommendations: string[];
}

export interface OptimizationOptions {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    isOptimized: false,
    recommendations: [],
  };

  private options: OptimizationOptions = {
    enableImageOptimization: true,
    enableLazyLoading: true,
    enablePreloading: true,
    enableCaching: true,
    enableCompression: true,
  };

  constructor(options?: OptimizationOptions) {
    if (options) {
      this.options = { ...this.options, ...options };
    }
    this.initializePerformanceMonitoring();
  }

  /**
   * Initialize performance monitoring
   */
  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor page load time
    window.addEventListener('load', () => {
      this.updateLoadTime();
      this.updateMemoryUsage();
      // this.generateRecommendations();
    });

    // Monitor performance entries
    if ('PerformanceObserver' in window) {
      const _observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.processPerformanceEntry(entry);
        }
      });
      _observer.observe({ entryTypes: ['navigation', 'resource', 'paint', 'measure'] });
    }
  }

  /**
   * Update load time metrics
   */
  private updateLoadTime(): void {
    const _navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (_navigation) {
      this.metrics.loadTime = _navigation.loadEventEnd - _navigation.fetchStart;
    }
  }

  /**
   * Update memory usage metrics
   */
  private updateMemoryUsage(): void {
    if ('memory' in performance) {
      const _memory = (performance as any).memory;
      this.metrics.memoryUsage = _memory.usedJSHeapSize / 1024 / 1024; // Convert to MB
    }
  }

  /**
   * Process performance entries
   */
  private processPerformanceEntry(entry: PerformanceEntry): void {
    if (entry.entryType === 'paint') {
      if (entry.name === 'first-contentful-paint') {
        this.metrics.renderTime = entry.startTime;
      }
    }
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Optimize images
   */
  optimizeImages(): void {
    if (!this.options.enableImageOptimization) return;

    const _images = document.querySelectorAll('img');
    _images.forEach((img) => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority="auto" for above-the-fold images
      if (this.isAboveTheFold(img)) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }

  /**
   * Check if element is above the fold
   */
  private isAboveTheFold(element: Element): boolean {
    const _rect = element.getBoundingClientRect();
    return _rect.top < window.innerHeight;
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (!this.options.enablePreloading) return;

    // Preload critical CSS
    const _criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (_criticalCSS) {
      _criticalCSS.setAttribute('rel', 'preload');
      _criticalCSS.setAttribute('as', 'style');
      _criticalCSS.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
    }

    // Preload critical fonts
    const _fontLinks = document.querySelectorAll('link[href*="font"]');
    _fontLinks.forEach((link) => {
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'font');
      link.setAttribute('type', 'font/woff2');
      link.setAttribute('crossorigin', 'anonymous');
    });
  }

  /**
   * Enable caching strategies
   */
  enableCaching(): void {
    if (!this.options.enableCaching) return;

    // Add cache headers for static assets
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => { /* empty */ })
        .catch(() => { /* empty */ });
    }
  }

  /**
   * Generate optimization recommendations
   */
  private generateRecommendations(): void {
    const recommendations: string[] = [];

    if (this.metrics.loadTime > 3000) {
      recommendations.push('Consider optimizing page load time. Current: ' + Math.round(this.metrics.loadTime) + 'ms');
    }

    if (this.metrics.memoryUsage > 100) {
      recommendations.push('High memory usage detected: ' + Math.round(this.metrics.memoryUsage) + 'MB');
    }

    if (this.metrics.renderTime > 1000) {
      recommendations.push('Consider optimizing render time. Current: ' + Math.round(this.metrics.renderTime) + 'ms');
    }

    // Check for unoptimized images
    const _images = document.querySelectorAll('img');
    const _unoptimizedImages = Array.from(_images).filter(img =>
      !img.hasAttribute('loading') || !img.hasAttribute('decoding')
    );

    if (_unoptimizedImages.length > 0) {
      recommendations.push(`${_unoptimizedImages.length} images need optimization (lazy loading, async decoding)`);
    }

    this.metrics.recommendations = recommendations;
  }

  /**
   * Apply all optimizations
   */
  optimize(): void {
    this.optimizeImages();
    this.preloadCriticalResources();
    this.enableCaching();
    this.generateRecommendations();
    this.metrics.isOptimized = true;
  }

  /**
   * Reset metrics
   */
  reset(): void {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      isOptimized: false,
      recommendations: [],
    };
  }

  /**
   * Get bundle size estimate
   */
  getBundleSize(): number {
    if (typeof window === 'undefined') return 0;

    const _scripts = document.querySelectorAll('script[src]');
    let _totalSize = 0;
    _scripts.forEach((script) => {
      const _src = script.getAttribute('src');
      if (_src && _src.includes('assets/')) {
        // Estimate size based on file name patterns
        _totalSize += 50; // Rough estimate in KB
      }
    });

    return _totalSize;
  }
}

// Create singleton instance
export const _performanceOptimizer = new PerformanceOptimizer();
export default _performanceOptimizer;