/**
 * Performance optimization utility
 * Provides tools for measuring and improving application performance
 */

interface PerformanceMetrics {
  fcp?: number; // First Contentful Paint
  lcp?: number; // Largest Contentful Paint
  fid?: number; // First Input Delay
  cls?: number; // Cumulative Layout Shift
  ttfb?: number; // Time to First Byte
  [key: string]: number | undefined;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics = {};

  /**
   * Get web vitals metrics
   */
  getMetrics(): PerformanceMetrics {
    if (typeof window === 'undefined' || !window.performance) {
      return this.metrics;
    }

    try {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.requestStart;
      }

      // Get paint metrics
      const paintEntries = performance.getEntriesByType('paint');
      paintEntries.forEach((entry) => {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.fcp = entry.startTime;
        }
      });

      // Get LCP using PerformanceObserver
      if (typeof PerformanceObserver !== 'undefined') {
        try {
          const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1] as any;
            this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
          });
          observer.observe({ entryTypes: ['largest-contentful-paint'] });
        } catch {
          // PerformanceObserver may not be supported
        }
      }
    } catch (error) {
      console.error('[PerformanceOptimizer] Failed to get metrics:', error);
    }

    return this.metrics;
  }

  /**
   * Calculate performance score (0-100)
   */
  getPerformanceScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // Penalize slow metrics
    if (metrics.fcp && metrics.fcp > 2500) score -= 20;
    else if (metrics.fcp && metrics.fcp > 1800) score -= 10;

    if (metrics.lcp && metrics.lcp > 4000) score -= 20;
    else if (metrics.lcp && metrics.lcp > 2500) score -= 10;

    if (metrics.ttfb && metrics.ttfb > 800) score -= 15;
    else if (metrics.ttfb && metrics.ttfb > 600) score -= 5;

    if (metrics.cls && metrics.cls > 0.25) score -= 15;
    else if (metrics.cls && metrics.cls > 0.1) score -= 5;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Optimize images by adding lazy loading
   */
  optimizeImages(): void {
    if (typeof document === 'undefined') return;

    try {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    } catch (error) {
      console.error('[PerformanceOptimizer] Failed to optimize images:', error);
    }
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(urls: string[]): void {
    if (typeof document === 'undefined') return;

    urls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      
      // Determine resource type from URL
      if (url.endsWith('.css')) {
        link.as = 'style';
      } else if (url.match(/\.(js|mjs)$/)) {
        link.as = 'script';
      } else if (url.match(/\.(woff|woff2|ttf|otf)$/)) {
        link.as = 'font';
        link.crossOrigin = 'anonymous';
      } else if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) {
        link.as = 'image';
      }

      document.head.appendChild(link);
    });
  }

  /**
   * Measure function execution time
   */
  measureExecution<T>(name: string, fn: () => T): T {
    const start = performance.now();
    try {
      return fn();
    } finally {
      const duration = performance.now() - start;
      console.log(`[PerformanceOptimizer] ${name} took ${duration.toFixed(2)}ms`);
    }
  }

  /**
   * Debounce function calls
   */
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  /**
   * Throttle function calls
   */
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean = false;

    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }
}

export const performanceOptimizer = new PerformanceOptimizer();
export default performanceOptimizer;