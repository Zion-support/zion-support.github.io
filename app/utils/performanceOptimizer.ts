/**
 * Performance optimization utilities
 */

import { logger } from './logger';

// Debounce function for performance optimization
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Throttle function for performance optimization
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

// Lazy load images with intersection observer
export const lazyLoadImages = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach((img) => imageObserver.observe(img));
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  const criticalResources = [
    '/fonts/inter.woff2',
    '/css/critical.css',
  ];

  criticalResources.forEach((resource) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = resource.endsWith('.css') ? 'style' : 'font';
    if (resource.endsWith('.woff2')) {
      link.crossOrigin = 'anonymous';
    }
    document.head.appendChild(link);
  });
};

// Optimize scroll performance
export const optimizeScrollPerformance = () => {
  if (typeof window === 'undefined') return;

  let ticking = false;

  const updateScrollPosition = () => {
    // Add your scroll-based optimizations here
    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  };

  window.addEventListener('scroll', requestTick, { passive: true });
};

// Memory usage monitoring
export const getMemoryUsage = (): number | null => {
  if (typeof window === 'undefined' || !('memory' in performance)) {
    return null;
  }

  const memory = (performance as { memory: { usedJSHeapSize: number; totalJSHeapSize: number } }).memory;
  return memory.usedJSHeapSize / memory.totalJSHeapSize;
};

// Performance metrics collector
export const collectPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !('performance' in window)) {
    return null;
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paintEntries = performance.getEntriesByType('paint');
  
  return {
    loadTime: navigation.loadEventEnd - navigation.fetchStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    firstContentfulPaint: paintEntries.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    memoryUsage: getMemoryUsage(),
  };
};

interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
  fmp: number; // First Meaningful Paint
}

interface PerformanceConfig {
  enableMonitoring: boolean;
  enableOptimization: boolean;
  enableReporting: boolean;
  sampleRate: number;
  maxRetries: number;
}

// LayoutShift interface for type safety
// interface LayoutShift extends PerformanceEntry {
//   value: number;
//   hadRecentInput: boolean;
// }

class PerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];
  private isMonitoring = false;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableMonitoring: true,
      enableOptimization: true,
      enableReporting: true,
      sampleRate: 1.0,
      maxRetries: 3,
      ...config,
    };
  }

  /**
   * Initialize performance monitoring
   */
  public init(): void {
    if (typeof window === 'undefined') return;

    this.measureWebVitals();
    this.setupPerformanceObservers();

    console.log('Performance monitoring initialized');
  }

  /**
   * Measure Core Web Vitals
   */
  private measureWebVitals(): void {
    if (!('performance' in window)) return;

    // First Contentful Paint (FCP)
    this.observePaint('first-contentful-paint', 'fcp');

    // Largest Contentful Paint (LCP)
    this.observeLCP();

    // First Input Delay (FID)
    this.observeFID();

    // Cumulative Layout Shift (CLS)
    this.observeCLS();

    // Time to First Byte (TTFB)
    this.measureTTFB();
  }

  private observePaint(entryName: string, metricName: keyof PerformanceMetrics): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.name === entryName) {
          this.metrics[metricName] = entry.startTime;
          console.log(`${String(metricName).toUpperCase()} measured:`, entry.startTime);
        }
      });
    });

    observer.observe({ entryTypes: ['paint'] });
    this.observers.push(observer);
  }

  private observeLCP(): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
      console.log('LCP measured:', lastEntry.startTime);
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
    this.observers.push(observer);
  }

  private observeFID(): void {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'first-input' && 'processingStart' in entry && 'startTime' in entry) {
          const fid = (entry as PerformanceEventTiming).processingStart - (entry as PerformanceEventTiming).startTime;
          this.metrics.fid = fid;
          console.log('FID measured:', fid);
        }
      });
    });

    observer.observe({ entryTypes: ['first-input'] });
    this.observers.push(observer);
  }

  private observeCLS(): void {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'layout-shift' && 'hadRecentInput' in entry && 'value' in entry) {
          const layoutEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
          if (!layoutEntry.hadRecentInput) {
            clsValue += layoutEntry.value;
            this.metrics.cls = clsValue;
            console.log('CLS measured:', clsValue);
          }
        }
      });
    });

    observer.observe({ entryTypes: ['layout-shift'] });
    this.observers.push(observer);
  }

  private measureTTFB(): void {
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart;
      this.metrics.ttfb = ttfb;
      console.log('TTFB measured:', ttfb);
    }
  }

  /**
   * Setup performance observers for Core Web Vitals
   */
  private async setupPerformanceObservers(): Promise<void> {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return;
    }

    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcpEntry = entries.find(entry => entry.name === 'first-contentful-paint');
      if (fcpEntry) {
        this.metrics.fcp = fcpEntry.startTime;
        this.reportMetric('fcp', fcpEntry.startTime);
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (lastEntry) {
        this.metrics.lcp = lastEntry.startTime;
        this.reportMetric('lcp', lastEntry.startTime);
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        if (entry.entryType === 'first-input') {
          const fidEntry = entry as PerformanceEventTiming;
          this.metrics.fid = fidEntry.processingStart - fidEntry.startTime;
          this.reportMetric('fid', fidEntry.processingStart - fidEntry.startTime);
        }
      });
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        const clsEntry = entry as PerformanceEntry & { hadRecentInput?: boolean; value: number };
        if (!clsEntry.hadRecentInput) {
          clsValue += clsEntry.value;
          this.metrics.cls = clsValue;
          this.reportMetric('cls', clsValue);
        }
      });
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte (TTFB)
    const navigationObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const navEntry = entries[0] as PerformanceNavigationTiming;
      if (navEntry) {
        this.metrics.ttfb = navEntry.responseStart - navEntry.fetchStart;
        this.reportMetric('ttfb', navEntry.responseStart - navEntry.fetchStart);
      }
    });
    navigationObserver.observe({ entryTypes: ['navigation'] });

    this.observers.push(fcpObserver, lcpObserver, fidObserver, clsObserver, navigationObserver);
  }

  /**
   * Optimize critical resources
   */
  private async optimizeCriticalResources(): Promise<void> {
    if (!this.config.enableOptimization || typeof document === 'undefined') {
      return;
    }

    // Preload critical fonts
    this.preloadFonts();
    
    // Optimize images
    this.optimizeImages();
    
    // Setup resource hints
    this.setupResourceHints();
    
    // Optimize third-party scripts
    this.optimizeThirdPartyScripts();
  }

  /**
   * Preload critical fonts
   */
  private preloadFonts(): void {
    const criticalFonts = [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ];

    criticalFonts.forEach(fontUrl => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = fontUrl;
      link.as = 'style';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize images with lazy loading and responsive loading
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Setup resource hints for better performance
   */
  private setupResourceHints(): void {
    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      Object.entries(hint).forEach(([key, value]) => {
        link.setAttribute(key, value as string);
      });
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize third-party scripts loading
   */
  private optimizeThirdPartyScripts(): void {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[data-defer]');
    scripts.forEach(script => {
      script.setAttribute('defer', '');
    });
  }

  /**
   * Setup preloading for critical resources
   */
  private async setupPreloading(): Promise<void> {
    const criticalResources = [
      '/app/main.tsx',
      '/sw.js',
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = resource;
      document.head.appendChild(link);
    });
  }

  /**
   * Report performance metrics
   */
  private reportMetric(name: string, value: number): void {
    if (!this.config.enableReporting) {
      return;
    }

    // Only report in production or when explicitly enabled
    if (process.env.NODE_ENV === 'production' || this.config.enableReporting) {
      // Send to analytics service
      if (typeof window !== 'undefined' && 'gtag' in window) {
        (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'performance_metric', {
          event_category: 'Performance',
          event_label: name,
          value: Math.round(value),
        });
      }

      // Log in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`📊 Performance Metric - ${name}: ${value}ms`);
      }
    }
  }

  /**
   * Get current performance metrics
   */
  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  /**
   * Get performance score based on Core Web Vitals
   */
  public getPerformanceScore(): number {
    const { fcp, lcp, fid, cls } = this.metrics;
    let score = 100;

    // FCP scoring (0-100)
    if (fcp) {
      if (fcp > 3000) score -= 30;
      else if (fcp > 1800) score -= 20;
      else if (fcp > 1000) score -= 10;
    }

    // LCP scoring (0-100)
    if (lcp) {
      if (lcp > 4000) score -= 30;
      else if (lcp > 2500) score -= 20;
      else if (lcp > 1200) score -= 10;
    }

    // FID scoring (0-100)
    if (fid) {
      if (fid > 300) score -= 20;
      else if (fid > 100) score -= 10;
    }

    // CLS scoring (0-100)
    if (cls) {
      if (cls > 0.25) score -= 20;
      else if (cls > 0.1) score -= 10;
    }

    return Math.max(0, score);
  }

  /**
   * Lazy load images for better performance
   */
  lazyLoadImages(): void {
    if (typeof window === 'undefined') return;

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
    logger.info('Lazy loading initialized for images', 'PerformanceOptimizer');
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

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      document.head.appendChild(link);
    });

    logger.info('Critical resource hints added', 'PerformanceOptimizer');
  }

  /**
   * Measure page load metrics
   */
  measurePageLoad(): PerformanceMetrics | null {
    if (typeof window === 'undefined' || !('performance' in window)) return null;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    if (!navigation) return null;

    return {
      ttfb: navigation.responseStart - navigation.requestStart,
      fcp: this.metrics.fcp || 0,
      lcp: this.metrics.lcp || 0,
      fid: this.metrics.fid || 0,
      cls: this.metrics.cls || 0,
      fmp: this.metrics.fmp || 0,
    };
  }

  /**
   * Report web vitals
   */
  reportWebVitals(metrics: PerformanceMetrics): void {
    logger.performance('Web Vitals reported', metrics as unknown as Record<string, unknown>, 'PerformanceOptimizer');
    
    // Send to analytics if available
    if (typeof window !== 'undefined' && (window as { gtag?: Function }).gtag) {
      Object.entries(metrics).forEach(([key, value]) => {
        if (typeof value === 'number') {
          (window as unknown as { gtag: Function }).gtag('event', 'web_vitals', {
            metric_name: key,
            metric_value: value,
            metric_rating: value < 100 ? 'good' : value < 300 ? 'needs-improvement' : 'poor'
          });
        }
      });
    }
  }

  /**
   * Cleanup observers and resources
   */
  public cleanup(): void {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    this.isMonitoring = false;
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Export class for custom instances
export { PerformanceOptimizer, type PerformanceMetrics, type PerformanceConfig };
