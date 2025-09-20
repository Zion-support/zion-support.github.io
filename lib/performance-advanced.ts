/**
 * Advanced performance monitoring and optimization utilities
 */

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  totalBlockingTime: number;
  speedIndex: number;
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeObservers();
    }
  }

  private initializeObservers() {
    // Core Web Vitals observer
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            this.handlePerformanceEntry(entry);
          }
        });

        observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
        this.observers.push(observer);
      } catch (error) {
        console.warn('Performance monitoring initialization failed:', error);
      }
    }
  }

  private handlePerformanceEntry(entry: PerformanceEntry) {
    switch (entry.entryType) {
      case 'paint':
        if (entry.name === 'first-contentful-paint') {
          this.metrics.firstContentfulPaint = entry.startTime;
        }
        break;
      case 'largest-contentful-paint':
        this.metrics.largestContentfulPaint = entry.startTime;
        break;
      case 'first-input':
        this.metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
        break;
      case 'layout-shift':
        if (!(entry as any).hadRecentInput) {
          this.metrics.cumulativeLayoutShift = (this.metrics.cumulativeLayoutShift || 0) + (entry as any).value;
        }
        break;
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public getPerformanceScore(): number {
    const metrics = this.getMetrics();
    let score = 100;

    // FCP scoring (0-100)
    if (metrics.firstContentfulPaint) {
      if (metrics.firstContentfulPaint > 3000) score -= 30;
      else if (metrics.firstContentfulPaint > 1800) score -= 15;
    }

    // LCP scoring (0-100)
    if (metrics.largestContentfulPaint) {
      if (metrics.largestContentfulPaint > 4000) score -= 30;
      else if (metrics.largestContentfulPaint > 2500) score -= 15;
    }

    // FID scoring (0-100)
    if (metrics.firstInputDelay) {
      if (metrics.firstInputDelay > 300) score -= 20;
      else if (metrics.firstInputDelay > 100) score -= 10;
    }

    // CLS scoring (0-100)
    if (metrics.cumulativeLayoutShift) {
      if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
      else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    }

    return Math.max(0, score);
  }

  public reportToAnalytics(metrics: Partial<PerformanceMetrics>) {
    // Report to Google Analytics or other analytics service
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'web_vitals', {
        event_category: 'Performance',
        event_label: 'Core Web Vitals',
        value: Math.round(this.getPerformanceScore()),
        custom_map: {
          fcp: metrics.firstContentfulPaint,
          lcp: metrics.largestContentfulPaint,
          fid: metrics.firstInputDelay,
          cls: metrics.cumulativeLayoutShift,
        },
      });
    }
  }

  public cleanup() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

export const performanceOptimizations = {
  // Image optimization
  optimizeImageLoading: () => {
    if (typeof window !== 'undefined') {
      // Lazy load images
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
    }
  },

  // Resource hints
  generateResourceHints: (urls: string[]) => {
    return urls.map(url => `<link rel="preconnect" href="${url}" crossorigin />`).join('\n');
  },

  // Critical CSS injection
  injectCriticalCSS: (css: string) => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.textContent = css;
      document.head.appendChild(style);
    }
  },

  // Service Worker registration
  registerServiceWorker: async (swPath: string) => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(swPath);
        console.log('Service Worker registered successfully:', registration);
        return registration;
      } catch (error) {
        console.error('Service Worker registration failed:', error);
      }
    }
  },

  // Bundle splitting optimization
  optimizeBundleSplitting: () => {
    // Dynamic imports for code splitting
    return {
      loadComponent: (componentPath: string) => import(componentPath),
      loadPage: (pagePath: string) => import(pagePath),
    };
  },
};

export const generatePerformanceReport = (metrics: Partial<PerformanceMetrics>) => {
  const score = new PerformanceMonitor().getPerformanceScore();
  
  return {
    timestamp: new Date().toISOString(),
    score,
    grade: score >= 90 ? 'A' : score >= 80 ? 'B' : score >= 70 ? 'C' : score >= 60 ? 'D' : 'F',
    metrics: {
      firstContentfulPaint: metrics.firstContentfulPaint,
      largestContentfulPaint: metrics.largestContentfulPaint,
      firstInputDelay: metrics.firstInputDelay,
      cumulativeLayoutShift: metrics.cumulativeLayoutShift,
    },
    recommendations: generatePerformanceRecommendations(metrics),
  };
};

export const generatePerformanceRecommendations = (metrics: Partial<PerformanceMetrics>): string[] => {
  const recommendations: string[] = [];

  if (metrics.firstContentfulPaint && metrics.firstContentfulPaint > 1800) {
    recommendations.push('Optimize critical rendering path and reduce server response time');
  }

  if (metrics.largestContentfulPaint && metrics.largestContentfulPaint > 2500) {
    recommendations.push('Optimize images and eliminate render-blocking resources');
  }

  if (metrics.firstInputDelay && metrics.firstInputDelay > 100) {
    recommendations.push('Reduce JavaScript execution time and optimize third-party scripts');
  }

  if (metrics.cumulativeLayoutShift && metrics.cumulativeLayoutShift > 0.1) {
    recommendations.push('Add size attributes to images and avoid dynamically injected content');
  }

  return recommendations;
};

export const createPerformanceBudget = () => {
  return {
    maxJSBundleSize: 250000, // 250KB
    maxCSSSize: 50000, // 50KB
    maxImageSize: 500000, // 500KB
    maxTotalPageSize: 1000000, // 1MB
    maxLoadTime: 3000, // 3 seconds
    maxFirstContentfulPaint: 1800, // 1.8 seconds
    maxLargestContentfulPaint: 2500, // 2.5 seconds
    maxFirstInputDelay: 100, // 100ms
    maxCumulativeLayoutShift: 0.1, // 0.1
  };
};