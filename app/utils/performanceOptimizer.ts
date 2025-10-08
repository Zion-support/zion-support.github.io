/**
 * Performance optimization utilities
 * Advanced Performance Optimizer with comprehensive monitoring and optimization utilities
 */

import { logger } from './logger';

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach((img) => imageObserver.observe(img));
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css',
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    // Add your scroll-based optimizations here
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Memory usage monitoring
export const getMemoryUsage = (): number | null => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  const memory = (performance as { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
  return memory.usedJSHeapSize / memory.totalJSHeapSize;
};

// Performance metrics collector
export const collectPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');
  
  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    memoryUsage: getMemoryUsage(),
  };
};

// Advanced Performance Optimizer
// Comprehensive performance monitoring and optimization utilities

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
}

interface PerformanceConfig {
  enableMonitoring: boolean;
  enableOptimization: boolean;
  enableReporting: boolean;
  sampleRate: number;
  maxRetries: number;
}

// LayoutShift interface for type safety
// interface LayoutShift extends PerformanceEntry {
//   value: number;
//   hadRecentInput: boolean;
// }

class PerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableMonitoring: true,
      enableOptimization: true,
      enableReporting: false,
      sampleRate: 1.0,
      maxRetries: 3,
      ...config,
    };
  }

  /**
   * Initialize performance monitoring
   */
  public async initialize(): Promise<void> {
    if (typeof window === 'undefined') return;

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
  }

  /**
   * Check memory usage and warn if high
   */
  private checkMemoryUsage(): void {
    const memoryUsage = getMemoryUsage();
    if (memoryUsage && memoryUsage > 0.8) {
      console.warn('High memory usage detected:', memoryUsage);
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  /**
   * Get performance score based on metrics
   */
  public getPerformanceScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // FCP scoring (0-2.5s is good)
    if (metrics.fcp && metrics.fcp > 2500) {
      score -= 20;
    }

    // LCP scoring (0-2.5s is good)
    if (metrics.lcp && metrics.lcp > 2500) {
      score -= 25;
    }

    // FID scoring (0-100ms is good)
    if (metrics.fid && metrics.fid > 100) {
      score -= 20;
    }

    // CLS scoring (0-0.1 is good)
    if (metrics.cls && metrics.cls > 0.1) {
      score -= 15;
    }

    // TTFB scoring (0-600ms is good)
    if (metrics.ttfb && metrics.ttfb > 600) {
      score -= 20;
    }

    return Math.max(0, score);
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
    logger.info('Lazy loading initialized for images', 'PerformanceOptimizer');
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

    logger.info('Critical resource hints added', 'PerformanceOptimizer');
  }

  /**
   * Measure page load metrics
   */
  measurePageLoad(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      ttfb: navigation.responseStart - navigation.requestStart,
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      fmp: this.metrics.fmp || 0,
    };
  }

  /**
   * Generate performance report
   */
  public generateReport(): object {
    const metrics = this.getMetrics();
    const score = this.getPerformanceScore();

    return {
      timestamp: new Date().toISOString(),
      metrics,
      score,
      recommendations: this.getRecommendations(),
    };
  }

  /**
   * Report web vitals
   */
  reportWebVitals(metrics: PerformanceMetrics): void {
    logger.performance('Web Vitals reported', metrics as unknown as Record<string, unknown>, 'PerformanceOptimizer');
    
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
   * Cleanup observers and resources
   * Get performance recommendations
   */
  private getRecommendations(): string[] {
    const recommendations: string[] = [];
    const metrics = this.getMetrics();

    if (metrics.fcp && metrics.fcp > 2500) {
      recommendations.push('Optimize First Contentful Paint by reducing render-blocking resources');
    }

    if (metrics.lcp && metrics.lcp > 2500) {
      recommendations.push('Optimize Largest Contentful Paint by optimizing images and fonts');
    }

    if (metrics.fid && metrics.fid > 100) {
      recommendations.push('Reduce First Input Delay by optimizing JavaScript execution');
    }

    if (metrics.cls && metrics.cls > 0.1) {
      recommendations.push('Reduce Cumulative Layout Shift by setting image dimensions');
    }

    if (metrics.ttfb && metrics.ttfb > 600) {
      recommendations.push('Improve Time to First Byte by optimizing server response');
    }

    return recommendations;
  }

  /**
   * Cleanup observers and stop monitoring
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig };
