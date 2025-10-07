/**
 * Advanced Performance Optimizer
 * Comprehensive performance monitoring and optimization utilities
 */

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
  public async initialize(): Promise<void> {
    if (!this.config.enableMonitoring || this.isMonitoring) {
      return;
    }

    try {
      await this.setupPerformanceObservers();
      await this.optimizeCriticalResources();
      await this.setupPreloading();
      this.isMonitoring = true;
      
      if (process.env.NODE_ENV === 'development') {
        console.log('🚀 Performance Optimizer initialized');
      }
    } catch (error) {
      console.error('Failed to initialize performance optimizer:', error);
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