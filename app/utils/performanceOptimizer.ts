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
      console.warn('Performance API not fully supported:', error);
    }
  }
  lazyLoadImages() {
    if (typeof window === 'undefined') return

    const images = document.querySelectorAll('img[data-src]')

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

  private initMonitoring() {
    // Initialize web vitals monitoring
    this.initializeWebVitals();
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
export default PerformanceOptimizer;
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig };
