/**
 * Advanced Performance Optimizer for Zion Tech Group Website
 * Provides comprehensive performance monitoring and optimization
 */

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  bundleSize: number;
  cacheHitRate: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  cumulativeLayoutShift: number;
  firstInputDelay: number;
  timeToInteractive: number;
}

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableCodeSplitting: boolean;
  enableImageOptimization: boolean;
  enableCaching: boolean;
  enableCompression: boolean;
  enablePrefetching: boolean;
  enableServiceWorker: boolean;
  enableResourceHints: boolean;
}

class AdvancedPerformanceOptimizer {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    bundleSize: 0,
    cacheHitRate: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    cumulativeLayoutShift: 0,
    firstInputDelay: 0,
    timeToInteractive: 0,
  };

  private config: OptimizationConfig = {
    enableLazyLoading: true,
    enableCodeSplitting: true,
    enableImageOptimization: true,
    enableCaching: true,
    enableCompression: true,
    enablePrefetching: true,
    enableServiceWorker: true,
    enableResourceHints: true,
  };

  constructor(config?: Partial<OptimizationConfig>) {
    this.config = { ...this.config, ...config };
    this.initializeAdvancedMonitoring();
  }

  /**
   * Initialize advanced performance monitoring
   */
  private initializeAdvancedMonitoring(): void {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    this.observeWebVitals();
    
    // Monitor resource loading
    this.observeResourceLoading();
    
    // Monitor memory usage
    this.observeMemoryUsage();
    
    // Monitor user interactions
    this.observeUserInteractions();
  }

  /**
   * Observe Core Web Vitals
   */
  private observeWebVitals(): void {
    // First Contentful Paint
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.firstContentfulPaint = entry.startTime;
        }
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.largestContentfulPaint = lastEntry.startTime;
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // Cumulative Layout Shift
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          this.metrics.cumulativeLayoutShift += (entry as any).value;
        }
      }
    }).observe({ entryTypes: ['layout-shift'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
      }
    }).observe({ entryTypes: ['first-input'] });
  }

  /**
   * Observe resource loading performance
   */
  private observeResourceLoading(): void {
    new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          this.metrics.loadTime = navEntry.loadEventEnd - navEntry.loadEventStart;
          this.metrics.timeToInteractive = navEntry.domInteractive - navEntry.fetchStart;
        }
      }
    }).observe({ entryTypes: ['navigation'] });
  }

  /**
   * Observe memory usage
   */
  private observeMemoryUsage(): void {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      this.metrics.memoryUsage = memory.usedJSHeapSize / 1024 / 1024; // MB
    }
  }

  /**
   * Observe user interactions
   */
  private observeUserInteractions(): void {
    let interactionCount = 0;
    const startTime = performance.now();

    const trackInteraction = () => {
      interactionCount++;
      if (interactionCount === 1) {
        this.metrics.timeToInteractive = performance.now() - startTime;
      }
    };

    ['click', 'keydown', 'touchstart'].forEach(event => {
      document.addEventListener(event, trackInteraction, { once: true });
    });
  }

  /**
   * Optimize images for better performance
   */
  optimizeImages(): void {
    if (!this.config.enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Lazy loading
      if (!img.loading) {
        img.loading = 'lazy';
      }

      // WebP format support
      if (this.supportsWebP() && !img.src.includes('.webp')) {
        const webpSrc = img.src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        img.src = webpSrc;
      }

      // Responsive images
      if (!img.sizes) {
        img.sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
      }
    });
  }

  /**
   * Enable code splitting
   */
  enableCodeSplitting(): void {
    if (!this.config.enableCodeSplitting) return;

    // Dynamic imports for route-based code splitting
    const routes = ['/about', '/contact', '/enterprise', '/services'];
    
    routes.forEach(route => {
      const link = document.querySelector(`a[href="${route}"]`);
      if (link) {
        link.addEventListener('mouseenter', () => {
          import(`../pages${route}/page.tsx`).catch(() => {
            // Handle import errors gracefully
          });
        });
      }
    });
  }

  /**
   * Enable caching strategies
   */
  enableCaching(): void {
    if (!this.config.enableCaching) return;

    // Service Worker registration
    if ('serviceWorker' in navigator && this.config.enableServiceWorker) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Cache API for static assets
    if ('caches' in window) {
      caches.open('static-v1').then(cache => {
        cache.addAll([
          '/',
          '/about',
          '/contact',
          '/enterprise',
          '/services'
        ]);
      });
    }
  }

  /**
   * Enable prefetching
   */
  enablePrefetching(): void {
    if (!this.config.enablePrefetching) return;

    // Prefetch critical resources
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Preload next page
    const nextPageLinks = document.querySelectorAll('a[href^="/"]');
    nextPageLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.href = (link as HTMLAnchorElement).href;
        document.head.appendChild(prefetchLink);
      });
    });
  }

  /**
   * Enable resource hints
   */
  enableResourceHints(): void {
    if (!this.config.enableResourceHints) return;

    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdn.jsdelivr.net'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical external resources
    const criticalDomains = [
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Check WebP support
   */
  private supportsWebP(): boolean {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }

  /**
   * Get comprehensive performance metrics
   */
  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  /**
   * Calculate performance score
   */
  getPerformanceScore(): number {
    const weights = {
      loadTime: 0.2,
      firstContentfulPaint: 0.25,
      largestContentfulPaint: 0.25,
      cumulativeLayoutShift: 0.15,
      firstInputDelay: 0.15
    };

    let score = 100;

    // Penalize slow load times
    if (this.metrics.loadTime > 3000) score -= 20;
    else if (this.metrics.loadTime > 2000) score -= 10;

    // Penalize slow FCP
    if (this.metrics.firstContentfulPaint > 1800) score -= 20;
    else if (this.metrics.firstContentfulPaint > 1200) score -= 10;

    // Penalize slow LCP
    if (this.metrics.largestContentfulPaint > 2500) score -= 20;
    else if (this.metrics.largestContentfulPaint > 2000) score -= 10;

    // Penalize high CLS
    if (this.metrics.cumulativeLayoutShift > 0.25) score -= 20;
    else if (this.metrics.cumulativeLayoutShift > 0.1) score -= 10;

    // Penalize high FID
    if (this.metrics.firstInputDelay > 300) score -= 20;
    else if (this.metrics.firstInputDelay > 100) score -= 10;

    return Math.max(0, Math.min(100, score));
  }

  /**
   * Generate performance report
   */
  generateReport(): string {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();

    return `
# Performance Report

## Overall Score: ${score}/100

## Core Web Vitals
- First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms
- Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(2)}ms
- Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(3)}
- First Input Delay: ${metrics.firstInputDelay.toFixed(2)}ms

## Performance Metrics
- Load Time: ${metrics.loadTime.toFixed(2)}ms
- Time to Interactive: ${metrics.timeToInteractive.toFixed(2)}ms
- Memory Usage: ${metrics.memoryUsage.toFixed(2)}MB
- Bundle Size: ${metrics.bundleSize.toFixed(2)}KB

## Recommendations
${this.getRecommendations()}
    `.trim();
  }

  /**
   * Get performance recommendations
   */
  private getRecommendations(): string {
    const recommendations = [];

    if (this.metrics.loadTime > 2000) {
      recommendations.push('- Optimize bundle size and enable code splitting');
    }

    if (this.metrics.firstContentfulPaint > 1200) {
      recommendations.push('- Optimize critical rendering path');
    }

    if (this.metrics.largestContentfulPaint > 2000) {
      recommendations.push('- Optimize images and lazy loading');
    }

    if (this.metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('- Fix layout shifts and reserve space for dynamic content');
    }

    if (this.metrics.firstInputDelay > 100) {
      recommendations.push('- Reduce JavaScript execution time');
    }

    if (this.metrics.memoryUsage > 50) {
      recommendations.push('- Optimize memory usage and clean up unused resources');
    }

    return recommendations.length > 0 ? recommendations.join('\n') : '- Performance is optimal';
  }

  /**
   * Run comprehensive optimization
   */
  optimize(): void {
    this.optimizeImages();
    this.enableCodeSplitting();
    this.enableCaching();
    this.enablePrefetching();
    this.enableResourceHints();
  }
}

// Export singleton instance
export const advancedPerformanceOptimizer = new AdvancedPerformanceOptimizer();
export default advancedPerformanceOptimizer;