/**
 * Performance optimization utilities for the Zion Tech Group website
 * Provides tools for monitoring and optimizing application performance
 */

import { logger } from './logger';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  ttfb?: number;
  fcp?: number;
  lcp?: number;
  fid?: number;
  cls?: number;
  fmp?: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

type PerformanceConfig = OptimizationConfig;

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

  private observers: IntersectionObserver[] = [];
  private isMonitoring = false;

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
    this.measureRenderTime();
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
   * Measure memory usage
   */
  private measureMemoryUsage(): void {
    if (typeof window === 'undefined' || !('memory' in window.performance)) return;

    const memory = (window.performance as Performance & {
      memory?: {
        usedJSHeapSize: number;
        totalJSHeapSize: number;
        jsHeapSizeLimit: number;
      };
    }).memory;
    if (memory) {
      this.metrics.memoryUsage = memory.usedJSHeapSize;
    }
  }

  /**
   * Optimize images for better performance
   */
  optimizeImages(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', 'Zion Tech Group content');
      }

      // Optimize image format
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {
        // Convert to WebP if supported
        if (this.supportsWebP()) {
          img.src = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        }
      }
    });
  }

  /**
   * Check if browser supports WebP
   */
  private supportsWebP(): boolean {
    if (typeof window === 'undefined') return false;
    
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  /**
   * Enable code splitting for better performance
   */
  enableCodeSplitting(): void {
    if (!this.config.enableCodeSplitting) return;

    // This would typically be handled by the bundler (Vite/Webpack)
    // Here we can add runtime optimizations
    if (process.env.NODE_ENV === 'development') { console.log('Code splitting enabled for better performance'); }
  }

  /**
   * Enable caching strategies
   */
  enableCaching(): void {
    if (!this.config.enableCaching) return;

    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    // Register service worker for caching
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        if (process.env.NODE_ENV === 'development') { console.log('Service Worker registered:', registration); }
      })
      .catch((error) => {
        if (process.env.NODE_ENV === 'development') { console.log('Service Worker registration failed:', error); }
      });
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
  getPerformanceScore(): number {
    let score = 100;

    // Deduct points for slow load times
    if (this.metrics.loadTime > 3000) score -= 20;
    else if (this.metrics.loadTime > 2000) score -= 10;

    // Deduct points for slow render times
    if (this.metrics.renderTime > 100) score -= 15;
    else if (this.metrics.renderTime > 50) score -= 5;

    // Deduct points for high memory usage
    if (this.metrics.memoryUsage > 50 * 1024 * 1024) score -= 15; // 50MB
    else if (this.metrics.memoryUsage > 30 * 1024 * 1024) score -= 5; // 30MB

    return Math.max(0, score);
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
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
    if (process.env.NODE_ENV === 'development') {
      console.log('Lazy loading initialized for images');
    }
  }

  /**
   * Add critical resource hints
   */
  addCriticalResourceHints(): void {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style' },
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });

<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {
      console.log('Critical resource hints added');
    }
  }

  /**
   * Measure page load metrics
   */
  measurePageLoad(): Partial<PerformanceMetrics> | null {
    if (typeof window === 'undefined' || !('performance' in window)) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      loadTime: this.metrics.loadTime,
      renderTime: this.metrics.renderTime,
      memoryUsage: this.metrics.memoryUsage,
      bundleSize: this.metrics.bundleSize,
      cacheHitRate: this.metrics.cacheHitRate,
      ttfb: navigation.responseStart - navigation.requestStart,
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      fmp: this.metrics.fmp || 0,
    };
  }
  }

  /**
   * Report web vitals
   */
  reportWebVitals(metrics: PerformanceMetrics): void {
<<<<<<< HEAD
    if (process.env.NODE_ENV === 'development') {
      console.log('Web Vitals reported:', metrics);
    }
=======
    logger.info('Web Vitals reported', { component: 'PerformanceOptimizer', metrics });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8ea
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (typeof value === 'number') {
          (window as unknown as { gtag: Function }).gtag('event', 'web_vitals', {
            metric_name: key,
            metric_value: value,
            metric_rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor'
          });
        }
      });
    }
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
      console.log(this.generateReport());
    }
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
export default PerformanceOptimizer;
export { PerformanceOptimizer, type PerformanceMetrics, type OptimizationConfig };
