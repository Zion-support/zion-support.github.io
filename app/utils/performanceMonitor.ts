/**
 * Performance Monitor
 * Provides comprehensive performance monitoring utilities
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

class PerformanceMonitor {
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

  private observers: PerformanceObserver[] = [];

  /**
   * Initialize performance monitor
   */
  init(): void {
    this.measureLoadTime();
    this.measureRenderTime();
    this.measureMemoryUsage();
    this.setupWebVitals();
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
      this.observers.push(observer);
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
   * Setup Web Vitals monitoring
   */
  private setupWebVitals(): void {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.renderTime = entry.startTime;
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        // Store LCP metric
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(lcpObserver);

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Store FID metric
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });
      this.observers.push(fidObserver);

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          // Store CLS metric
        });
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(clsObserver);
    }
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
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Export singleton instance
export const performanceMonitor = new PerformanceMonitor();