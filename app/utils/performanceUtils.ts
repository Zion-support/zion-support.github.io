/**
 * Performance Utilities
 * Provides performance monitoring and optimization
 */

export interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  timeToInteractive: number;
  totalBlockingTime: number;
}

export interface PerformanceConfig {
  enableMonitoring: boolean;
  enableOptimization: boolean;
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
}

class PerformanceOptimizer {
  private config: PerformanceConfig;
  private metrics: PerformanceMetrics | null = null;
  private observer: PerformanceObserver | null = null;

  constructor(config: Partial<PerformanceConfig> = {}) {
    this.config = {
      enableMonitoring: true,
      enableOptimization: true,
      enableLazyLoading: true,
      enableImageOptimization: true,
      enableCodeSplitting: true,
      ...config
    };
  }

  /**
   * Initialize performance monitoring and optimization
   */
  public initialize(): void {
    if (typeof window === 'undefined') return;

    if (this.config.enableMonitoring) {
      this.setupPerformanceMonitoring();
    }

    if (this.config.enableOptimization) {
      this.optimizePerformance();
    }

    if (this.config.enableLazyLoading) {
      this.setupLazyLoading();
    }

    if (this.config.enableImageOptimization) {
      this.optimizeImages();
    }
  }

  /**
   * Setup performance monitoring
   */
  private setupPerformanceMonitoring(): void {
    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceTiming();
    
    // Monitor long tasks
    this.observeLongTasks();
  }

  /**
   * Observe Web Vitals
   */
  private observeWebVitals(): void {
    // First Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      this.metrics = {
        ...this.metrics,
        firstContentfulPaint: fcp.startTime
      } as PerformanceMetrics;
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      this.metrics = {
        ...this.metrics,
        largestContentfulPaint: lcp.startTime
      } as PerformanceMetrics;
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime;
        this.metrics = {
          ...this.metrics,
          firstInputDelay: fid
        } as PerformanceMetrics;
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      });
      this.metrics = {
        ...this.metrics,
        cumulativeLayoutShift: clsValue
      } as PerformanceMetrics;
    }).observe({ entryTypes: ['layout-shift'] });
  }

  /**
   * Observe resource timing
   */
  private observeResourceTiming(): void {
    this.observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          this.metrics = {
            ...this.metrics,
            loadTime: navEntry.loadEventEnd - navEntry.loadEventStart,
            timeToInteractive: navEntry.domInteractive - navEntry.navigationStart
          } as PerformanceMetrics;
        }
      });
    });

    this.observer.observe({ entryTypes: ['navigation', 'resource'] });
  }

  /**
   * Observe long tasks
   */
  private observeLongTasks(): void {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      let totalBlockingTime = 0;
      
      entries.forEach((entry) => {
        if (entry.duration > 50) {
          totalBlockingTime += entry.duration - 50;
        }
      });
      
      this.metrics = {
        ...this.metrics,
        totalBlockingTime
      } as PerformanceMetrics;
    }).observe({ entryTypes: ['longtask'] });
  }

  /**
   * Optimize performance
   */
  private optimizePerformance(): void {
    // Preload critical resources
    this.preloadCriticalResources();
    
    // Optimize fonts
    this.optimizeFonts();
    
    // Optimize CSS
    this.optimizeCSS();
    
    // Optimize JavaScript
    this.optimizeJavaScript();
  }

  /**
   * Preload critical resources
   */
  private preloadCriticalResources(): void {
    const criticalResources = [
      '/css/main.css',
      '/js/main.js',
      '/fonts/inter.woff2'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }

  /**
   * Optimize fonts
   */
  private optimizeFonts(): void {
    // Add font-display: swap to font faces
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'Inter';
        font-display: swap;
        src: url('/fonts/inter.woff2') format('woff2');
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Optimize CSS
   */
  private optimizeCSS(): void {
    // Remove unused CSS
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      const sheet = styleSheets[i];
      try {
        const rules = sheet.cssRules;
        // Basic CSS optimization could be added here
      } catch (e) {
        // Cross-origin stylesheets can't be accessed
      }
    }
  }

  /**
   * Optimize JavaScript
   */
  private optimizeJavaScript(): void {
    // Defer non-critical JavaScript
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }

  /**
   * Setup lazy loading
   */
  private setupLazyLoading(): void {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => {
      imageObserver.observe(img);
    });

    // Lazy load components
    const components = document.querySelectorAll('[data-lazy-component]');
    const componentObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const component = entry.target as HTMLElement;
          const componentName = component.dataset.lazyComponent;
          if (componentName) {
            this.loadComponent(componentName, component);
            componentObserver.unobserve(component);
          }
        }
      });
    });

    components.forEach((component) => {
      componentObserver.observe(component);
    });
  }

  /**
   * Load component dynamically
   */
  private async loadComponent(componentName: string, container: HTMLElement): Promise<void> {
    try {
      const module = await import(`../components/${componentName}`);
      const Component = module.default;
      
      if (typeof Component === 'function') {
        const element = document.createElement('div');
        container.appendChild(element);
        // Render component (this would need a proper React renderer)
      }
    } catch (error) {
      console.error(`Failed to load component ${componentName}:`, error);
    }
  }

  /**
   * Optimize images
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
      
      // Optimize image format
      if (img.src.includes('.jpg') || img.src.includes('.jpeg')) {
        // Suggest WebP format
        const webpSrc = img.src.replace(/\.(jpg|jpeg)$/i, '.webp');
        img.setAttribute('data-webp', webpSrc);
      }
    });
  }

  /**
   * Get performance metrics
   */
  public getMetrics(): PerformanceMetrics | null {
    return this.metrics;
  }

  /**
   * Generate performance report
   */
  public generateReport(): string {
    const metrics = this.metrics;
    if (!metrics) {
      return 'Performance metrics not available. Run analyzePerformance() first.';
    }

    return `
Performance Report
=================
Load Time: ${metrics.loadTime?.toFixed(2)}ms
First Contentful Paint: ${metrics.firstContentfulPaint?.toFixed(2)}ms
Largest Contentful Paint: ${metrics.largestContentfulPaint?.toFixed(2)}ms
First Input Delay: ${metrics.firstInputDelay?.toFixed(2)}ms
Cumulative Layout Shift: ${metrics.cumulativeLayoutShift?.toFixed(3)}
Time to Interactive: ${metrics.timeToInteractive?.toFixed(2)}ms
Total Blocking Time: ${metrics.totalBlockingTime?.toFixed(2)}ms

Performance Score: ${this.calculatePerformanceScore(metrics)}/100
    `;
  }

  /**
   * Calculate performance score
   */
  private calculatePerformanceScore(metrics: PerformanceMetrics): number {
    let score = 100;
    
    // FCP scoring
    if (metrics.firstContentfulPaint > 1800) score -= 20;
    else if (metrics.firstContentfulPaint > 1000) score -= 10;
    
    // LCP scoring
    if (metrics.largestContentfulPaint > 4000) score -= 20;
    else if (metrics.largestContentfulPaint > 2500) score -= 10;
    
    // FID scoring
    if (metrics.firstInputDelay > 300) score -= 20;
    else if (metrics.firstInputDelay > 100) score -= 10;
    
    // CLS scoring
    if (metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (metrics.cumulativeLayoutShift > 0.1) score -= 10;
    
    return Math.max(0, score);
  }

  /**
   * Cleanup
   */
  public cleanup(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}

// Export singleton instance
export const performanceOptimizer = new PerformanceOptimizer();

// Auto-initialize when DOM is ready
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      performanceOptimizer.initialize();
    });
  } else {
    performanceOptimizer.initialize();
  }
}