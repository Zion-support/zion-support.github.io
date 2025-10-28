/**
 * Performance Optimizer
 * Comprehensive performance monitoring and optimization utilities
 */

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
  enableCodeSplitting?: boolean;
  enableServiceWorker?: boolean;
}

export class PerformanceOptimizer {
  private options: OptimizationOptions;
  private metrics: PerformanceMetrics;

  constructor(options: OptimizationOptions = {}) {
    this.options = {
      enableImageOptimization: true,
      enableLazyLoading: true,
      enablePreloading: true,
      enableCaching: true,
      enableCompression: true,
      enableCodeSplitting: true,
      enableServiceWorker: true,
      ...options,
    };

    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      isOptimized: false,
      recommendations: [],
    };
  }

  // Measure current performance metrics
  public measurePerformance(): PerformanceMetrics {
    if (typeof window === 'undefined') {
      return this.metrics;
    }

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    
    const renderTime = performance.now();
    
    let memoryUsage = 0;
    if ('memory' in performance) {
      memoryUsage = (performance as any).memory.usedJSHeapSize / 1024 / 1024;
    }

    // Estimate bundle size (this would need to be calculated differently in a real app)
    const bundleSize = this.estimateBundleSize();

    this.metrics = {
      loadTime,
      renderTime,
      memoryUsage,
      bundleSize,
      isOptimized: this.checkOptimizationStatus(),
      recommendations: this.generateRecommendations(),
    };

    return this.metrics;
  }

  // Optimize images
  public optimizeImages(): void {
    if (!this.options.enableImageOptimization || typeof window === 'undefined') {
      return;
    }

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" if not already present
      if (this.options.enableLazyLoading && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }

  // Preload critical resources
  public preloadCriticalResources(): void {
    if (!this.options.enablePreloading || typeof window === 'undefined') {
      return;
    }

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"]');
    if (criticalCSS) {
      criticalCSS.setAttribute('rel', 'preload');
      criticalCSS.setAttribute('as', 'style');
      criticalCSS.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
    }

    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[href*="font"]');
    fontLinks.forEach((link) => {
      link.setAttribute('rel', 'preload');
      link.setAttribute('as', 'font');
      link.setAttribute('crossorigin', 'anonymous');
    });
  }

  // Enable service worker for caching
  public enableServiceWorker(): void {
    if (!this.options.enableServiceWorker || typeof window === 'undefined') {
      return;
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  // Generate performance recommendations
  private generateRecommendations(): string[] {
    const recommendations: string[] = [];

    if (this.metrics.loadTime > 3000) {
      recommendations.push('Consider optimizing bundle size and reducing initial load time');
    }

    if (this.metrics.memoryUsage > 50) {
      recommendations.push('High memory usage detected. Consider optimizing memory-intensive operations');
    }

    if (this.metrics.bundleSize > 1000) {
      recommendations.push('Large bundle size detected. Consider code splitting and tree shaking');
    }

    if (!this.options.enableLazyLoading) {
      recommendations.push('Enable lazy loading for images and non-critical resources');
    }

    if (!this.options.enableCaching) {
      recommendations.push('Enable caching strategies for better performance');
    }

    return recommendations;
  }

  // Check if the application is optimized
  private checkOptimizationStatus(): boolean {
    return (
      this.metrics.loadTime < 3000 &&
      this.metrics.memoryUsage < 50 &&
      this.metrics.bundleSize < 1000 &&
      (this.options.enableLazyLoading ?? true) &&
      (this.options.enableCaching ?? true)
    );
  }

  // Estimate bundle size (simplified)
  private estimateBundleSize(): number {
    if (typeof window === 'undefined') {
      return 0;
    }

    // This is a simplified estimation
    // In a real app, you'd use webpack-bundle-analyzer or similar tools
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;

    scripts.forEach((script) => {
      const src = script.getAttribute('src');
      if (src && !src.startsWith('http')) {
        // Estimate based on script count (very rough)
        totalSize += 100; // KB
      }
    });

    return totalSize;
  }

  // Get optimization score (0-100)
  public getOptimizationScore(): number {
    let score = 100;

    if (this.metrics.loadTime > 3000) score -= 20;
    if (this.metrics.memoryUsage > 50) score -= 15;
    if (this.metrics.bundleSize > 1000) score -= 15;
    if (!this.options.enableLazyLoading) score -= 10;
    if (!this.options.enableCaching) score -= 10;
    if (!this.options.enableCompression) score -= 10;
    if (!this.options.enableCodeSplitting) score -= 10;
    if (!this.options.enableServiceWorker) score -= 10;

    return Math.max(0, score);
  }

  // Run all optimizations
  public optimize(): void {
    this.measurePerformance();
    this.optimizeImages();
    this.preloadCriticalResources();
    this.enableServiceWorker();
  }
}

// Export a default instance
export const performanceOptimizer = new PerformanceOptimizer();