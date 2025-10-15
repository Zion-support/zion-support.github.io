// Performance utilities for the Zion Tech Group website

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstContentfulPaint?: number;
  largestContentfulPaint?: number;
  cumulativeLayoutShift?: number;
  firstInputDelay?: number;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    domContentLoaded: 0
  };

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  measurePageLoad(): PerformanceMetrics {
    if (typeof window === 'undefined' || !window.performance) {
      return this.metrics;
    }

    const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigation) {
      this.metrics.loadTime = navigation.loadEventEnd - navigation.loadEventStart;
      this.metrics.domContentLoaded = navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart;
    }

    return this.metrics;
  }

  measureWebVitals(): Promise<PerformanceMetrics> {
    return new Promise((resolve) => {
      if (typeof window === 'undefined') {
        resolve(this.metrics);
        return;
      }

      // Load web-vitals library dynamically
      import('web-vitals').then(({ onCLS, onFCP, onLCP, onINP }) => {
        onFCP((metric) => {
          this.metrics.firstContentfulPaint = metric.value;
        });

        onLCP((metric) => {
          this.metrics.largestContentfulPaint = metric.value;
        });

        onCLS((metric) => {
          this.metrics.cumulativeLayoutShift = metric.value;
        });

        onINP((metric) => {
          this.metrics.firstInputDelay = metric.value;
        });

        // Resolve after a short delay to allow metrics to be collected
        setTimeout(() => resolve(this.metrics), 1000);
      }).catch(() => {
        resolve(this.metrics);
      });
    });
  }

  sendToAnalytics(metrics: PerformanceMetrics): void {
    if (typeof window === 'undefined') return;

    // Send to Google Analytics if available
    if ((window as any).gtag) {
      (window as any).gtag('event', 'performance_metrics', {
        event_category: 'Performance',
        load_time: Math.round(metrics.loadTime),
        dom_content_loaded: Math.round(metrics.domContentLoaded),
        first_contentful_paint: metrics.firstContentfulPaint ? Math.round(metrics.firstContentfulPaint) : null,
        largest_contentful_paint: metrics.largestContentfulPaint ? Math.round(metrics.largestContentfulPaint) : null,
        cumulative_layout_shift: metrics.cumulativeLayoutShift ? Math.round(metrics.cumulativeLayoutShift * 1000) : null,
        first_input_delay: metrics.firstInputDelay ? Math.round(metrics.firstInputDelay) : null,
      });
    }

    // Send to custom analytics endpoint
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/performance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...metrics,
          timestamp: Date.now(),
          userAgent: navigator.userAgent,
          url: window.location.href
        })
      }).catch(() => {
        // Silently fail if analytics endpoint is not available
      });
    }
  }
}

export const performanceUtils = {
  monitor: PerformanceMonitor.getInstance(),
  
  // Preload critical resources
  preloadCriticalResources(): void {
    if (typeof window === 'undefined') return;

    const criticalResources = [
      { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
      { href: '/og-image.jpg', as: 'image' },
      { href: '/logo.png', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === 'style') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  },

  // Optimize images
  optimizeImage(src: string, width?: number, height?: number): string {
    if (!src.startsWith('http')) return src;
    
    const params = new URLSearchParams();
    if (width) params.set('w', width.toString());
    if (height) params.set('h', height.toString());
    params.set('q', '80');
    params.set('f', 'auto');
    
    return `${src}?${params.toString()}`;
  },

  // Lazy load images
  lazyLoadImage(img: HTMLImageElement): void {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const image = entry.target as HTMLImageElement;
            if (image.dataset.src) {
              image.src = image.dataset.src;
              image.classList.remove('lazy');
              observer.unobserve(image);
            }
          }
        });
      });
      observer.observe(img);
    } else {
      // Fallback for older browsers
      img.src = img.dataset.src || '';
    }
  }
};
