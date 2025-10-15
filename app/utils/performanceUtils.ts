interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

interface PerformanceConfig {
  enableWebVitals: boolean;
  enableResourceTiming: boolean;
  enableNavigationTiming: boolean;
  sampleRate: number;
}

class PerformanceUtils {
  private config: PerformanceConfig = {
    enableWebVitals: true,
    enableResourceTiming: true,
    enableNavigationTiming: true,
    sampleRate: 1.0
  };

  private metrics: PerformanceMetrics = {
    loadTime: 0,
    domContentLoaded: 0
  };

  constructor(config?: Partial<PerformanceConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;

    // Only initialize for a percentage of users based on sample rate
    if (Math.random() > this.config.sampleRate) return;

    this.measureNavigationTiming();
    this.measureResourceTiming();
    this.measureWebVitals();
  }

  /**
   * Get current performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Measure navigation timing
   */
  private measureNavigationTiming(): void {
    if (!this.config.enableNavigationTiming || typeof window === 'undefined') return;

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return;

    this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
    this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
  }

  /**
   * Measure resource timing
   */
  private measureResourceTiming(): void {
    if (!this.config.enableResourceTiming || typeof window === 'undefined') return;

    const resources = window.performance.getEntriesByType('resource');
    const totalSize = resources.reduce((total, resource) => {
      const transferSize = (resource as PerformanceResourceTiming).transferSize || 0;
      return total + transferSize;
    }, 0);

    // Store resource timing data
    this.storeMetric('resourceSize', totalSize);
  }

  /**
   * Measure Core Web Vitals
   */
  private measureWebVitals(): void {
    if (!this.config.enableWebVitals || typeof window === 'undefined') return;

    // Dynamically import web-vitals to reduce bundle size
    import('web-vitals').then(({ onCLS, onFCP, onLCP, onTTFB, onINP }) => {
      onCLS((metric) => {
        this.metrics.cumulativeLayoutShift = metric.value;
        this.storeMetric('CLS', metric.value);
      });

      onFCP((metric) => {
        this.metrics.firstContentfulPaint = metric.value;
        this.storeMetric('FCP', metric.value);
      });

      onLCP((metric) => {
        this.metrics.largestContentfulPaint = metric.value;
        this.storeMetric('LCP', metric.value);
      });

      onTTFB((metric) => {
        this.storeMetric('TTFB', metric.value);
      });

      onINP((metric) => {
        this.metrics.firstInputDelay = metric.value;
        this.storeMetric('INP', metric.value);
      });
    }).catch(() => {
      // Silently fail if web-vitals can't be loaded
    });
  }

  /**
   * Store metric for analysis
   */
  private storeMetric(name: string, value: number): void {
    if (process.env.NODE_ENV === 'development') {
      try {
        const existingData = JSON.parse(localStorage.getItem('performanceMetrics') || '[]');
        existingData.push({
          name,
          value,
          timestamp: new Date().toISOString(),
          url: window.location.href
        });
        localStorage.setItem('performanceMetrics', JSON.stringify(existingData.slice(-100))); // Keep last 100 entries
      } catch {
        // Ignore localStorage errors
      }
    }
  }

  /**
   * Check if performance is good based on thresholds
   */
  isPerformanceGood(): boolean {
    const { loadTime, domContentLoaded, firstContentfulPaint, largestContentfulPaint, cumulativeLayoutShift } = this.metrics;

    return (
      loadTime < 2000 && // Load time under 2 seconds
      domContentLoaded < 1500 && // DOM content loaded under 1.5 seconds
      (firstContentfulPaint === undefined || firstContentfulPaint < 1800) && // FCP under 1.8 seconds
      (largestContentfulPaint === undefined || largestContentfulPaint < 2500) && // LCP under 2.5 seconds
      (cumulativeLayoutShift === undefined || cumulativeLayoutShift < 0.1) // CLS under 0.1
    );
  }

  /**
   * Get performance score (0-100)
   */
  getPerformanceScore(): number {
    const { loadTime, domContentLoaded, firstContentfulPaint, largestContentfulPaint, cumulativeLayoutShift } = this.metrics;
    
    let score = 100;

    // Deduct points for poor performance
    if (loadTime > 2000) score -= 20;
    if (domContentLoaded > 1500) score -= 15;
    if (firstContentfulPaint && firstContentfulPaint > 1800) score -= 20;
    if (largestContentfulPaint && largestContentfulPaint > 2500) score -= 25;
    if (cumulativeLayoutShift && cumulativeLayoutShift > 0.1) score -= 20;

    return Math.max(0, score);
  }
}

// Export singleton instance
export const performanceUtils = new PerformanceUtils();

// Export class for custom instances
export { PerformanceUtils, type PerformanceMetrics, type PerformanceConfig };
