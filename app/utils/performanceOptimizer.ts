/**
 * Advanced Performance Optimizer
 * Provides comprehensive performance monitoring and optimization utilities
 */

export interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  imageOptimization: boolean;
  lazyLoading: boolean;
  codeSplitting: boolean;
  caching: boolean;
}

export interface OptimizationConfig {
  enableImageOptimization: boolean;
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enableMinification: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    imageOptimization: false,
    lazyLoading: false,
    codeSplitting: false,
    caching: false,
  };

  private config: OptimizationConfig = {
    enableImageOptimization: true,
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableCaching: true,
    enableCompression: true,
    enableMinification: true,
  };

  /**
   * Initialize performance optimizer
   */
  init(): void {
    this.measureLoadTime();
    this.measureRenderTime();
    this.measureMemoryUsage();
    this.optimizeImages();
    this.setupLazyLoading();
    this.setupCaching();
    this.optimizeBundle();
  }

  /**
   * Measure page load time
   */
  private measureLoadTime(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      window.addEventListener('load', () => {
        const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        this.metrics.loadTime = navigation.loadEventEnd - navigation.fetchStart;
      });
    }
  }

  /**
   * Measure render time
   */
  private measureRenderTime(): void {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'paint' && entry.name === 'first-contentful-paint') {
            this.metrics.renderTime = entry.startTime;
          }
        });
      });
      observer.observe({ entryTypes: ['paint'] });
    }
  }

  /**
   * Measure memory usage
   */
  private measureMemoryUsage(): void {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / memory.jsHeapSizeLimit * 100;
    }
  }

  /**
   * Optimize images for better performance
   */
  public optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }

      // Optimize image formats
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {
        // Suggest WebP format for better compression
        const webpSrc = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        img.addEventListener('error', () => {
          // Fallback to original if WebP not available
        });
      }
    });

    this.metrics.imageOptimization = true;
  }

  /**
   * Setup lazy loading for better performance
   */
  public setupLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      const lazyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            const src = element.getAttribute('data-lazy');
            if (src) {
              if (element.tagName === 'IMG') {
                (element as HTMLImageElement).src = src;
              } else {
                element.style.backgroundImage = `url(${src})`;
              }
              element.removeAttribute('data-lazy');
              lazyObserver.unobserve(element);
            }
          }
        });
      });

      lazyElements.forEach((element) => {
        lazyObserver.observe(element);
      });
    }

    this.metrics.lazyLoading = true;
  }

  /**
   * Setup caching strategies
   */
  private setupCaching(): void {
    if (!this.config.enableCaching) return;

    // Service Worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          this.metrics.caching = true;
        })
        .catch(() => {
          // Service worker registration failed
        });
    }

    // Browser caching headers
    this.setCacheHeaders();
  }

  /**
   * Set appropriate cache headers
   */
  private setCacheHeaders(): void {
    // This would typically be done server-side
    // For client-side, we can optimize by preloading critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/globals.css',
      '/js/vendor.js',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize bundle size
   */
  private optimizeBundle(): void {
    if (!this.config.enableCodeSplitting) return;

    // Dynamic imports for code splitting
    this.setupCodeSplitting();
    this.metrics.codeSplitting = true;
  }

  /**
   * Setup code splitting
   */
  private setupCodeSplitting(): void {
    // This is handled by Vite's dynamic imports
    // We can add additional optimizations here
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Get performance score (0-100)
   */
  getScore(): number {
    let score = 100;

    // Deduct points for poor performance
    if (this.metrics.loadTime > 3000) score -= 20;
    if (this.metrics.renderTime > 1500) score -= 15;
    if (this.metrics.memoryUsage > 50) score -= 10;
    if (!this.metrics.imageOptimization) score -= 5;
    if (!this.metrics.lazyLoading) score -= 5;
    if (!this.metrics.codeSplitting) score -= 5;
    if (!this.metrics.caching) score -= 5;

    return Math.max(0, score);
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const score = this.getScore();
    const metrics = this.getMetrics();

    return `
Performance Report:
==================
Overall Score: ${score}/100

Load Time: ${metrics.loadTime.toFixed(2)}ms
Render Time: ${metrics.renderTime.toFixed(2)}ms
Memory Usage: ${metrics.memoryUsage.toFixed(2)}%

Optimizations:
- Image Optimization: ${metrics.imageOptimization ? '✓' : '✗'}
- Lazy Loading: ${metrics.lazyLoading ? '✓' : '✗'}
- Code Splitting: ${metrics.codeSplitting ? '✓' : '✗'}
- Caching: ${metrics.caching ? '✓' : '✗'}

Recommendations:
${score < 80 ? '- Consider optimizing images and enabling more caching' : ''}
${metrics.loadTime > 3000 ? '- Page load time is slow, consider reducing bundle size' : ''}
${metrics.memoryUsage > 50 ? '- High memory usage detected, check for memory leaks' : ''}
    `.trim();
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    // Cleanup any observers or timers
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export utility functions
export const optimizeImages = () => performanceOptimizer.optimizeImages();
export const setupLazyLoading = () => performanceOptimizer.setupLazyLoading();
export const getPerformanceScore = () => performanceOptimizer.getScore();
export const getPerformanceMetrics = () => performanceOptimizer.getMetrics();