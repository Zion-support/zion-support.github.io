/**
 * Advanced performance optimization utilities
 * Provides comprehensive performance monitoring and optimization features
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRatio: number;
  errorRate: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
}

export class PerformanceOptimizer {
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
      cacheHitRatio: 0,
      errorRate: 0,
    };

    this.initializePerformanceMonitoring();
  }

  private initializePerformanceMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceLoading();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor errors
    this.observeErrors();
  }

  private observeWebVitals(): void {
    try {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.loadTime = lastEntry.startTime;
        this.reportMetric('LCP', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          this.reportMetric('FID', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        this.reportMetric('CLS', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    } catch (error) {
      console.warn('Performance monitoring initialization failed:', error);
    }
  }

  private observeResourceLoading(): void {
    const resourceObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'resource') {
          const resourceEntry = entry as PerformanceResourceTiming;
          this.analyzeResourcePerformance(resourceEntry);
        }
      });
    });
    resourceObserver.observe({ entryTypes: ['resource'] });
    this.observers.push(resourceObserver);
  }

  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
        this.reportMetric('Memory', this.metrics.memoryUsage);
      }, 5000);
    }
  }

  private observeErrors(): void {
    window.addEventListener('error', (event) => {
      this.metrics.errorRate += 1;
      this.reportError(event.error);
    });

    window.addEventListener('unhandledrejection', (event) => {
      this.metrics.errorRate += 1;
      this.reportError(event.reason);
    });
  }

  private analyzeResourcePerformance(entry: PerformanceResourceTiming): void {
    const loadTime = entry.responseEnd - entry.requestStart;
    const size = entry.transferSize || 0;
    
    // Report slow resources
    if (loadTime > 1000) {
      this.reportMetric('SlowResource', loadTime, {
        name: entry.name,
        size: size,
        type: entry.initiatorType,
      });
    }

    // Report large resources
    if (size > 1024 * 1024) { // 1MB
      this.reportMetric('LargeResource', size, {
        name: entry.name,
        loadTime: loadTime,
        type: entry.initiatorType,
      });
    }
  }

  private reportMetric(name: string, value: number, metadata?: any): void {
    if (process.env.NODE_ENV === 'development') {
      console.log(`📊 Performance Metric: ${name} = ${value}`, metadata);
    }

    // Send to analytics service in production
    if (typeof gtag !== 'undefined') {
      gtag('event', 'performance_metric', {
        metric_name: name,
        metric_value: value,
        ...metadata,
      });
    }
  }

  private reportError(error: Error): void {
    if (process.env.NODE_ENV === 'development') {
      console.error('🚨 Performance Error:', error);
    }

    // Send to error tracking service
    if (typeof gtag !== 'undefined') {
      gtag('event', 'exception', {
        description: error.message,
        fatal: false,
      });
    }
  }

  // Public methods for optimization
  public optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Lazy load images
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // Add responsive srcset if not present
      if (!img.srcset && img.src) {
        const src = img.src;
        const baseName = src.substring(0, src.lastIndexOf('.'));
        const extension = src.substring(src.lastIndexOf('.'));
        img.srcset = `${baseName}-320w${extension} 320w, ${baseName}-640w${extension} 640w, ${baseName}-1024w${extension} 1024w`;
        img.sizes = '(max-width: 320px) 320px, (max-width: 640px) 640px, 1024px';
      }
    });
  }

  public optimizeCSS(): void {
    // Remove unused CSS
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const sheet = styleSheets[i];
      try {
        const rules = sheet.cssRules || sheet.rules;
        if (rules) {
          // Analyze rule usage and remove unused ones
          this.analyzeCSSRules(rules);
        }
      } catch (e) {
        // Cross-origin stylesheet, skip
      }
    }
  }

  private analyzeCSSRules(rules: CSSRuleList): void {
    // Implementation for CSS optimization
    // This would analyze which CSS rules are actually being used
    // and remove unused ones
  }

  public preloadCriticalResources(): void {
    const criticalResources = [
      '/assets/css/main.css',
      '/assets/js/vendor.js',
      '/assets/js/main.js',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  public enableServiceWorker(): void {
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

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const lcp = this.metrics.loadTime;
    const fid = this.metrics.renderTime;
    const cls = this.metrics.cacheHitRatio;
    const memory = this.metrics.memoryUsage;

    // Calculate performance score based on Core Web Vitals
    let score = 100;

    // LCP scoring (0-100)
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 20;
    else if (lcp > 1000) score -= 10;

    // FID scoring (0-100)
    if (fid > 300) score -= 30;
    else if (fid > 100) score -= 20;
    else if (fid > 50) score -= 10;

    // CLS scoring (0-100)
    if (cls > 0.25) score -= 30;
    else if (cls > 0.1) score -= 20;
    else if (cls > 0.05) score -= 10;

    // Memory scoring (0-100)
    if (memory > 100) score -= 20;
    else if (memory > 50) score -= 10;

    return Math.max(0, score);
  }

  public cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export hook for React components
export const usePerformanceOptimizer = () => {
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>(
    performanceOptimizer.getMetrics()
  );
  const [score, setScore] = React.useState<number>(
    performanceOptimizer.getPerformanceScore()
  );

  React.useEffect(() => {
    const updateMetrics = () => {
      setMetrics(performanceOptimizer.getMetrics());
      setScore(performanceOptimizer.getPerformanceScore());
    };

    const interval = setInterval(updateMetrics, 5000);
    return () => clearInterval(interval);
  }, []);

  return { metrics, score, optimizer: performanceOptimizer };
};

/**
 * Performance Optimization Utility
 *
 * Provides tools for optimizing application performance including:
 * - Component lazy loading
 * - Image optimization
 * - Bundle size monitoring
 * - Memory leak detection
 * - Render performance tracking
 */

import * as React from 'react';

export interface PerformanceMetrics {
  componentName: string;
  renderTime: number;
  mountTime: number;
  updateCount: number;
  memoryUsage: number;
  timestamp: Date;
}

export class PerformanceOptimizer {
  private metrics: Map<string, PerformanceMetrics[]> = new Map();
  private renderStartTimes: Map<string, number> = new Map();
  private observedComponents: Set<string> = new Set();

  /**
   * Start tracking a component render
   */
  startRender(componentName: string): void {
    this.renderStartTimes.set(componentName, performance.now());
    this.observedComponents.add(componentName);
  }

  /**
   * End tracking a component render and record metrics
   */
  endRender(componentName: string): void {
    const startTime = this.renderStartTimes.get(componentName);
    if (!startTime) return;

    const renderTime = performance.now() - startTime;
    const metrics: PerformanceMetrics = {
      componentName,
      renderTime,
      mountTime: renderTime,
      updateCount: this.getUpdateCount(componentName),
      memoryUsage: this.getMemoryUsage(),
      timestamp: new Date(),
    };

    this.recordMetrics(componentName, metrics);
    this.renderStartTimes.delete(componentName);
  }

  /**
   * Record performance metrics for a component
   */
  private recordMetrics(
    componentName: string,
    metrics: PerformanceMetrics,
  ): void {
    const existingMetrics = this.metrics.get(componentName) || [];
    existingMetrics.push(metrics);

    // Keep only last 100 metrics per component
    if (existingMetrics.length > 100) {
      existingMetrics.splice(0, existingMetrics.length - 100);
    }

    this.metrics.set(componentName, existingMetrics);
  }

  /**
   * Get update count for a component
   */
  private getUpdateCount(componentName: string): number {
    const existingMetrics = this.metrics.get(componentName) || [];
    return existingMetrics.length;
  }

  /**
   * Get current memory usage (if available)
   */
  private getMemoryUsage(): number {
    if ('memory' in performance) {
      return (performance as Performance & { memory?: { usedJSHeapSize: number } }).memory?.usedJSHeapSize || 0;
    }
    return 0;
  }

  /**
   * Get performance metrics for a component
   */
  getMetrics(componentName: string): PerformanceMetrics[] {
    return this.metrics.get(componentName) || [];
  }

  /**
   * Get all performance metrics
   */
  getAllMetrics(): Map<string, PerformanceMetrics[]> {
    return new Map(this.metrics);
  }

  /**
   * Get average render time for a component
   */
  getAverageRenderTime(componentName: string): number {
    const metrics = this.getMetrics(componentName);
    if (metrics.length === 0) return 0;

    const totalTime = metrics.reduce(
      (sum, metric) => sum + metric.renderTime,
      0,
    );
    return totalTime / metrics.length;
  }

  /**
   * Get slowest components
   */
  getSlowestComponents(
    limit: number = 10,
  ): Array<{ componentName: string; averageTime: number }> {
    const results: Array<{ componentName: string; averageTime: number }> = [];

    for (const [componentName] of this.metrics) {
      const averageTime = this.getAverageRenderTime(componentName);
      results.push({ componentName, averageTime });
    }

    return results
      .sort((a, b) => b.averageTime - a.averageTime)
      .slice(0, limit);
  }

  /**
   * Check if a component is performing poorly
   */
  isComponentSlow(componentName: string, threshold: number = 16): boolean {
    const averageTime = this.getAverageRenderTime(componentName);
    return averageTime > threshold; // 16ms = 60fps threshold
  }

  /**
   * Get performance summary
   */
  getPerformanceSummary(): {
    totalComponents: number;
    slowComponents: number;
    averageRenderTime: number;
    memoryUsage: number;
  } {
    const allMetrics = Array.from(this.metrics.values()).flat();
    const slowComponents = Array.from(this.metrics.keys()).filter(name =>
      this.isComponentSlow(name),
    ).length;

    const totalRenderTime = allMetrics.reduce(
      (sum, metric) => sum + metric.renderTime,
      0,
    );
    const averageRenderTime =
      allMetrics.length > 0 ? totalRenderTime / allMetrics.length : 0;

    return {
      totalComponents: this.metrics.size,
      slowComponents,
      averageRenderTime,
      memoryUsage: this.getMemoryUsage(),
    };
  }

  /**
   * Clear all metrics
   */
  clearMetrics(): void {
    this.metrics.clear();
    this.renderStartTimes.clear();
    this.observedComponents.clear();
  }

  /**
   * Clear metrics for a specific component
   */
  clearComponentMetrics(componentName: string): void {
    this.metrics.delete(componentName);
    this.renderStartTimes.delete(componentName);
    this.observedComponents.delete(componentName);
  }

  /**
   * Export metrics as JSON
   */
  exportMetrics(): string {
    const exportData = {
      timestamp: new Date().toISOString(),
      summary: this.getPerformanceSummary(),
      components: Object.fromEntries(this.metrics),
    };

    return JSON.stringify(exportData, null, 2);
  }

  /**
   * Import metrics from JSON
   */
  importMetrics(jsonData: string): void {
    try {
      const data = JSON.parse(jsonData);
      if (data.components) {
        this.metrics = new Map(Object.entries(data.components));
      }
    } catch (error) {
      console.error('Failed to import metrics:', error);
    }
  }
}

// Global instance
export const performanceOptimizer = new PerformanceOptimizer();

// React HOC for performance tracking
export function withPerformanceTracking<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  componentName?: string,
) {
  const displayName =
    componentName ||
    WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component';

  const TrackedComponent = React.forwardRef<unknown, P>((props, ref) => {
    React.useEffect(() => {
      performanceOptimizer.startRender(displayName);

      return () => {
        performanceOptimizer.endRender(displayName);
      };
    });

    return React.createElement(WrappedComponent, { ...props, ref } as P);
  });

  TrackedComponent.displayName = `withPerformanceTracking(${displayName})`;

  return TrackedComponent;
}

// Hook for performance tracking
export function usePerformanceTracking(componentName: string) {
  React.useEffect(() => {
    performanceOptimizer.startRender(componentName);

    return () => {
      performanceOptimizer.endRender(componentName);
    };
  });
}

// Utility functions
export const performanceUtils = {
  /**
   * Debounce function for performance
   */
  debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number,
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  },

  /**
   * Throttle function for performance
   */
  throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number,
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  },

  /**
   * Check if component should re-render
   */
  shouldComponentUpdate<P extends object>(
    prevProps: P,
    nextProps: P,
    keys: (keyof P)[],
  ): boolean {
    return keys.some(key => prevProps[key] !== nextProps[key]);
  },

  /**
   * Memoize expensive calculations
   */
  memoize<T extends (...args: unknown[]) => unknown>(fn: T): T {
    const cache = new Map();
    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args);
      if (cache.has(key)) {
        return cache.get(key);
      }
      const result = fn(...args);
      cache.set(key, result);
      return result;
    }) as T;
  },
};

export default performanceOptimizer;
