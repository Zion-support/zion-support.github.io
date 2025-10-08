/**
 * Performance Optimizer
 * Handles performance monitoring, optimization, and reporting
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  firstContentfulPaint: number;
}

class PerformanceOptimizer {
  private metrics: PerformanceMetrics;
  private observers: PerformanceObserver[];
  private isMonitoring: boolean;

  constructor() {
    this.metrics = {
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0,
      bundleSize: 0,
      cacheHitRate: 0,
      firstContentfulPaint: 0,
    };
    this.observers = [];
    this.isMonitoring = false;
  }

  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;

    this.monitorWebVitals();
    this.setupPerformanceObserver();
  }

  /**
   * Monitor Web Vitals
   */
  private monitorWebVitals(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      // Monitor First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.firstContentfulPaint = entry.startTime;
          }
        }
      });
      fcpObserver.observe({ entryTypes: ['paint'] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.error('Error setting up Web Vitals monitoring:', error);
    }
  }

  /**
   * Setup Performance Observer
   */
  private setupPerformanceObserver(): void {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            const navEntry = entry as PerformanceNavigationTiming;
            this.metrics.loadTime = navEntry.loadEventEnd - navEntry.fetchStart;
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'resource', 'measure'] });
      this.observers.push(observer);
      this.isMonitoring = true;
    } catch (error) {
      console.error('Error setting up Performance Observer:', error);
    }
  }

  /**
   * Get current metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Update metrics
   */
  updateMetrics(updates: Partial<PerformanceMetrics>): void {
    this.metrics = { ...this.metrics, ...updates };
  }

  /**
   * Calculate performance score
   */
  calculateScore(): number {
    let score = 100;

    // Deduct points for slow metrics
    if (this.metrics.loadTime > 3000) score -= 20;
    if (this.metrics.loadTime > 5000) score -= 30;
    if (this.metrics.firstContentfulPaint > 2000) score -= 15;
    if (this.metrics.firstContentfulPaint > 3000) score -= 25;

    return Math.max(0, score);
  }

  /**
   * Get performance score (alias for calculateScore)
   */
  getPerformanceScore(): number {
    return this.calculateScore();
  }

  /**
   * Optimize images
   */
  optimizeImages(): void {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }

  /**
   * Enable code splitting
   */
  enableCodeSplitting(): void {
    // Code splitting is handled by the bundler (Vite/Next.js)
    console.log('Code splitting is configured through bundler settings');
  }

  /**
   * Enable caching
   */
  enableCaching(): void {
    if (typeof window === 'undefined') return;

    // Service Worker registration for caching
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => console.log('Service Worker registered'))
        .catch((error) => console.error('Service Worker registration failed:', error));
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

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });
  }

  /**
   * Measure page load metrics
   */
  measurePageLoad(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return this.getMetrics();
  }

  /**
   * Report web vitals
   */
  reportWebVitals(metrics: PerformanceMetrics): void {
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (typeof value === 'number') {
          (window as unknown as { gtag: Function }).gtag('event', 'web_vitals', {
            metric_name: key,
            metric_value: value,
            metric_rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor',
          });
        }
      });
    }
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const score = this.calculateScore();
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
      console.log(this.generateReport());
    }
  }

  /**
   * Cleanup observers and resources
   */
  public cleanup(): void {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();
export default PerformanceOptimizer;
export { PerformanceOptimizer, type PerformanceMetrics };
