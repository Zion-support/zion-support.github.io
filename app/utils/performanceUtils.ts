// Performance utility functions for monitoring and optimization

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

export interface PerformanceConfig {
  enableLogging?: boolean;
  enableAnalytics?: boolean;
  sampleRate?: number;
}

class PerformanceUtils {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    domContentLoaded: 0,
  };

  constructor(config: PerformanceConfig = {}) {
    this.config = {
      enableLogging: process.env.NODE_ENV === 'development',
      enableAnalytics: process.env.NODE_ENV === 'production',
      sampleRate: 1.0,
      ...config,
    };
  }

  // Measure page load performance
  measurePageLoad(): PerformanceMetrics {
    if (typeof window === 'undefined' || !window.performance) {
      return this.metrics;
    }

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    if (navigation) {
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    }

    if (this.config.enableLogging) {
      console.log('[Performance] Page Load Metrics:', this.metrics);
    }

    return this.metrics;
  }

  // Measure Core Web Vitals
  async measureWebVitals(): Promise<Partial<PerformanceMetrics>> {
    if (typeof window === 'undefined') {
      return {};
    }

    try {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');
      
      return new Promise((resolve) => {
        const vitals: Partial<PerformanceMetrics> = {};
        let completed = 0;
        const totalVitals = 5;

        const checkComplete = () => {
          completed++;
          if (completed === totalVitals) {
            resolve(vitals);
          }
        };

        onCLS((metric) => {
          vitals.cumulativeLayoutShift = metric.value;
          checkComplete();
        });

        onFCP((metric) => {
          vitals.firstContentfulPaint = metric.value;
          checkComplete();
        });

        onLCP((metric) => {
          vitals.largestContentfulPaint = metric.value;
          checkComplete();
        });

        onTTFB((metric) => {
          // TTFB is not part of our interface, but we can log it
          if (this.config.enableLogging) {
            console.log('[Performance] TTFB:', metric.value);
          }
          checkComplete();
        });

        onINP((metric) => {
          vitals.firstInputDelay = metric.value;
          checkComplete();
        });
      });
    } catch (error) {
      if (this.config.enableLogging) {
        console.warn('[Performance] Failed to load web-vitals:', error);
      }
      return {};
    }
  }

  // Optimize images for lazy loading
  optimizeImage(img: HTMLImageElement): void {
    if (!img.dataset.src) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLImageElement;
            target.src = target.dataset.src;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        });
      },
      { rootMargin: '50px' }
    );

    observer.observe(img);
  }

  // Preload critical resources
  preloadResource(href: string, as: string): void {
    if (typeof document === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }

  // Debounce function for performance
  debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Throttle function for performance
  throttle<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): (...args: Parameters<T>) => void {
    let inThrottle: boolean;
    
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  // Get performance score based on metrics
  getPerformanceScore(metrics: PerformanceMetrics): number {
    let score = 100;

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) score -= 30;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;
    }

    // FID scoring (0-100)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) score -= 30;
      else if (metrics.firstInputDelay > 100) score -= 15;
    }

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift) {
      if (metrics.cumulativeLayoutShift > 0.25) score -= 30;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 15;
    }

    return Math.max(0, score);
  }
}

// Export singleton instance
export const performanceUtils = new PerformanceUtils();

// Export individual functions for convenience
export const {
  measurePageLoad,
  measureWebVitals,
  optimizeImage,
  preloadResource,
  debounce,
  throttle,
  getPerformanceScore,
} = performanceUtils;
