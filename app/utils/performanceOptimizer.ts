/**
 * Performance optimization utilities
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

/**
 * Performance optimizer class
 */
export class PerformanceOptimizer {
  private config: OptimizationConfig;
  private metrics: PerformanceMetrics;

  constructor(config: Partial<OptimizationConfig> = {}) {
    this.config = {
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableImageOptimization: true,
      enableCaching: true,
      enableCompression: true,
      ...config,
    };
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
    };
  }

  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;

    // Monitor page load time
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now();
    });

    // Monitor memory usage
    if ('memory' in performance) {
      this.metrics.memoryUsage = (performance as any).memory.usedJSHeapSize;
    }

    // Monitor bundle size
    this.metrics.bundleSize = this.getBundleSize();
  }

  /**
   * Get current bundle size
   */
  private getBundleSize(): number {
    if (typeof window === 'undefined') return 0;
    
    const scripts = document.querySelectorAll('script[src]');
    let totalSize = 0;
    
    scripts.forEach(script => {
      const src = script.getAttribute('src');
      if (src && src.includes('assets/')) {
        // Estimate size based on script name
        totalSize += 50000; // Average estimate
      }
    });
    
    return totalSize;
  }

  /**
   * Get performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Optimize images
   */
  optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }

  /**
   * Enable lazy loading for components
   */
  enableLazyLoading(): void {
    if (!this.config.enableLazyLoading) return;

    // This would typically be handled by React.lazy() in components
    console.log('Lazy loading enabled');
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (typeof window === 'undefined') return;

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/app/styles/futuristic.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);
  }

  /**
   * Get optimization recommendations
   */
  getRecommendations(): string[] {
    const recommendations: string[] = [];
    
    if (this.metrics.loadTime > 3000) {
      recommendations.push('Consider optimizing bundle size - load time is over 3s');
    }
    
    if (this.metrics.memoryUsage > 50000000) {
      recommendations.push('High memory usage detected - consider optimizing components');
    }
    
    if (this.metrics.bundleSize > 1000000) {
      recommendations.push('Large bundle size - consider code splitting');
    }
    
    return recommendations;
  }
}

/**
 * Create a performance optimizer instance
 */
export function createPerformanceOptimizer(config?: Partial<OptimizationConfig>): PerformanceOptimizer {
  return new PerformanceOptimizer(config);
}

/**
 * Default performance optimizer instance
 */
export const performanceOptimizer = createPerformanceOptimizer();
