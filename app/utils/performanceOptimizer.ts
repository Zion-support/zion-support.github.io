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
  memory?: number;
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
      console.warn('Performance monitoring initialization failed:', error)
    }
  }

  /**
   * Measure render time using PerformanceObserver
   */
  private measureRenderTime(): void {
    if (typeof window === 'undefined') return;
    
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
      this.observers.push(observer);
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
    
    // Preload critical CSS and JS
    const criticalResources = [
      '/assets/index.css',
      '/assets/index.js'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Observe First Input Delay (FID)
   */
  private observeFID(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          console.log('FID:', entry);
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
    } catch (error) {
      console.error('Failed to observe FID:', error);
    }
  }

  /**
   * Observe Cumulative Layout Shift (CLS)
   */
  cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }

  /**
   * Generate comprehensive performance report
   */
  generateComprehensiveReport(): string {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();

    return `
Performance Report - Zion Tech Group Website
==========================================
Performance Score: ${score}/100
Load Time: ${metrics.loadTime.toFixed(2)}ms
Render Time: ${metrics.renderTime.toFixed(2)}ms
Memory Usage: ${(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB
Bundle Size: ${metrics.bundleSize}KB
Cache Hit Rate: ${metrics.cacheHitRate}%

Recommendations:
${score < 80 ? '- Consider optimizing images and enabling compression' : ''}
${metrics.loadTime > 2000 ? '- Implement lazy loading for better initial load time' : ''}
${metrics.memoryUsage > 30 * 1024 * 1024 ? '- Review memory usage and optimize components' : ''}
    `.trim();
  }

  /**
   * Optimize the entire application
   */
  optimize(): void {
    this.optimizeImages();
    this.enableCodeSplitting();
    this.enableCaching();
    
    if (process.env.NODE_ENV === 'development') { 
      console.log('Performance optimization completed'); 
      console.log(this.generateComprehensiveReport()); 
    }
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
export default PerformanceOptimizer;
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig };
