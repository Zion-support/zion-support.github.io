/**
 * Advanced Performance Optimizer
 * Provides comprehensive performance monitoring and optimization utilities
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics;
  private config: OptimizationConfig;
  private observers: PerformanceObserver[] = [];

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
      cacheHitRate: 0,
    };

    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor page load performance
    this.observeNavigationTiming();
    
    // Monitor resource loading
    this.observeResourceTiming();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor Core Web Vitals
    this.observeWebVitals();
  }

  private observeNavigationTiming(): void {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          this.metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          this.metrics.renderTime = navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart;
        }
      });
    });

    observer.observe({ entryTypes: ['navigation'] });
    this.observers.push(observer);
  }

  private observeResourceTiming(): void {
    if (typeof window === 'undefined') return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          this.optimizeResourceLoading(resourceEntry);
        }
      });
    });

    observer.observe({ entryTypes: ['resource'] });
    this.observers.push(observer);
  }

  private observeMemoryUsage(): void {
    if (typeof window === 'undefined') return;

    const checkMemory = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        this.metrics.memoryUsage = memory.usedJSHeapSize / memory.totalJSHeapSize;
      }
    };

    setInterval(checkMemory, 5000);
    checkMemory();
  }

  private observeWebVitals(): void {
    if (typeof window === 'undefined') return;

    // LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(lcpObserver);

    // FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fidEntry = entry as PerformanceEntry & { processingStart?: number };
        if (fidEntry.processingStart) {
          console.log('FID:', fidEntry.processingStart - entry.startTime);
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });
    this.observers.push(fidObserver);

    // CLS (Cumulative Layout Shift)
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          console.log('CLS:', (entry as any).value);
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(clsObserver);
  }

  private optimizeResourceLoading(entry: PerformanceResourceTiming): void {
    // Implement resource-specific optimizations
    if (entry.name.includes('.js') || entry.name.includes('.css')) {
      this.optimizeBundleLoading(entry);
    } else if (entry.name.includes('.jpg') || entry.name.includes('.png') || entry.name.includes('.webp')) {
      this.optimizeImageLoading(entry);
    }
  }

  private optimizeBundleLoading(entry: PerformanceResourceTiming): void {
    if (entry.duration > 1000) {
      console.warn(`Slow bundle loading detected: ${entry.name} took ${entry.duration}ms`);
      // Implement code splitting or lazy loading
      this.suggestCodeSplitting(entry.name);
    }
  }

  private optimizeImageLoading(entry: PerformanceResourceTiming): void {
    if (entry.duration > 500) {
      console.warn(`Slow image loading detected: ${entry.name} took ${entry.duration}ms`);
      // Implement image optimization
      this.suggestImageOptimization(entry.name);
    }
  }

  private suggestCodeSplitting(resourceName: string): void {
    console.log(`Consider code splitting for: ${resourceName}`);
    // Implementation would involve dynamic imports
  }

  private suggestImageOptimization(imageName: string): void {
    console.log(`Consider optimizing image: ${imageName}`);
    // Implementation would involve WebP conversion, lazy loading, etc.
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Run all optimizations
   */
  public optimize(): void {
    this.optimizeImages();
    this.enableCaching();
    this.enableCompression();
  }

  /**
   * Start a performance mark
   */
  public startMark(markName: string): void {
    if (typeof performance !== 'undefined') {
      performance.mark(`${markName}-start`);
    }
  }

  /**
   * End a performance mark and return duration
   */
  public endMark(markName: string): number | null {
    if (typeof performance === 'undefined') return null;
    
    try {
      performance.mark(`${markName}-end`);
      const measure = performance.measure(
        markName,
        `${markName}-start`,
        `${markName}-end`
      );
      
      // Clean up marks
      performance.clearMarks(`${markName}-start`);
      performance.clearMarks(`${markName}-end`);
      performance.clearMeasures(markName);
      
      return measure.duration;
    } catch {
      return null;
    }
  }

  /**
   * Get overall performance score (0-100)
   */
  public getPerformanceScore(): number {
    const metrics = this.getMetrics();
    const scores: number[] = [];

    // Load time score (0-100)
    if (metrics.loadTime > 0) {
      const loadScore = Math.max(0, 100 - (metrics.loadTime / 50)); // 5s = 0 score
      scores.push(loadScore);
    }

    // Render time score
    if (metrics.renderTime > 0) {
      const renderScore = Math.max(0, 100 - (metrics.renderTime / 10)); // 1s = 0 score
      scores.push(renderScore);
    }

    // Memory usage score (assuming 100MB is threshold)
    if (metrics.memoryUsage > 0) {
      const memoryScore = Math.max(0, 100 - (metrics.memoryUsage / 1000000)); // 100MB = 0 score
      scores.push(memoryScore);
    }

    // Cache hit rate score
    if (metrics.cacheHitRate >= 0) {
      scores.push(metrics.cacheHitRate * 100);
    }

    // Return average score
    if (scores.length === 0) return 50; // Default if no metrics
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  }

  public optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Implement lazy loading
      if (this.config.enableLazyLoading) {
        img.loading = 'lazy';
      }

      // Add WebP support
      const src = img.src;
      if (src && !src.includes('.webp')) {
        const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        img.src = webpSrc;
        img.onerror = () => {
          img.src = src; // Fallback to original
        };
      }
    });
  }

  public enableCaching(): void {
    if (!this.config.enableCaching) return;

    // Implement service worker caching
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

  public enableCompression(): void {
    if (!this.config.enableCompression) return;

    // Implement compression for API responses
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const headers = new Headers(init?.headers);
      headers.set('Accept-Encoding', 'gzip, deflate, br');
      
      return originalFetch(input, {
        ...init,
        headers,
      });
    };
  }

  public generateReport(): string {
    const metrics = this.getMetrics();
    return `
Performance Report:
- Load Time: ${metrics.loadTime.toFixed(2)}ms
- Render Time: ${metrics.renderTime.toFixed(2)}ms
- Memory Usage: ${(metrics.memoryUsage * 100).toFixed(2)}%
- Bundle Size: ${metrics.bundleSize}KB
- Cache Hit Rate: ${(metrics.cacheHitRate * 100).toFixed(2)}%
    `.trim();
  }

  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export { PerformanceOptimizer, type PerformanceMetrics, type OptimizationConfig };
