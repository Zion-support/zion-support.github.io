// Performance enhancer utility

export interface PerformanceEnhancerConfig {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
  enablePrefetching?: boolean;
  enableServiceWorker?: boolean;
  enableCriticalCSS?: boolean;
  enableResourceHints?: boolean;
}

export class PerformanceEnhancer {
  private config: Required<PerformanceEnhancerConfig>;

  constructor(config: PerformanceEnhancerConfig = {}) {
    this.config = {
      enableImageOptimization: true,
      enableLazyLoading: true,
      enableCodeSplitting: true,
      enableCaching: true,
      enableCompression: true,
      enablePrefetching: true,
      enableServiceWorker: true,
      enableCriticalCSS: true,
      enableResourceHints: true,
      ...config
    };

    this.initializeEnhancements();
  }

  /**
   * Initialize performance enhancements
   */
  private initializeEnhancements(): void {
    if (this.config.enableImageOptimization) {
      this.optimizeImages();
    }

    if (this.config.enableLazyLoading) {
      this.enableLazyLoading();
    }

    if (this.config.enableCaching) {
      this.enableCaching();
    }

    if (this.config.enablePrefetching) {
      this.enablePrefetching();
    }

    if (this.config.enableServiceWorker) {
      this.enableServiceWorker();
    }

    if (this.config.enableCriticalCSS) {
      this.enableCriticalCSS();
    }

    if (this.config.enableResourceHints) {
      this.enableResourceHints();
    }
  }

  /**
   * Optimize images
   */
  private optimizeImages(): void {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Add loading attribute for lazy loading
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding attribute for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority for above-the-fold images
      if (this.isAboveTheFold(img)) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }

  /**
   * Enable lazy loading
   */
  private enableLazyLoading(): void {
    // Use Intersection Observer for lazy loading
    if ('IntersectionObserver' in window) {
      const lazyImages = document.querySelectorAll('img[data-src]');
      
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }

  /**
   * Enable caching
   */
  private enableCaching(): void {
    // Set cache headers for static assets
    const links = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    
    links.forEach(link => {
      if (link instanceof HTMLLinkElement) {
        link.setAttribute('crossorigin', 'anonymous');
      }
    });
  }

  /**
   * Enable prefetching
   */
  private enablePrefetching(): void {
    // Prefetch critical resources
    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });

    // Prefetch next page on hover
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:')) {
          this.prefetchPage(href);
        }
      });
    });
  }

  /**
   * Enable service worker
   */
  private enableServiceWorker(): void {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('Service Worker registered:', registration);
        })
        .catch(error => {
          console.error('Service Worker registration failed:', error);
        });
    }
  }

  /**
   * Enable critical CSS
   */
  private enableCriticalCSS(): void {
    // Inline critical CSS
    const criticalCSS = `
      body { margin: 0; padding: 0; }
      .container { max-width: 1200px; margin: 0 auto; }
      .header { background: #f8f9fa; padding: 1rem; }
      .main { padding: 2rem 0; }
      .footer { background: #343a40; color: white; padding: 1rem; }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    document.head.insertBefore(style, document.head.firstChild);
  }

  /**
   * Enable resource hints
   */
  private enableResourceHints(): void {
    // DNS prefetch for external domains
    const externalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com',
      'cdnjs.cloudflare.com'
    ];

    externalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'dns-prefetch';
      link.href = `//${domain}`;
      document.head.appendChild(link);
    });

    // Preconnect to critical external resources
    const criticalDomains = [
      'fonts.googleapis.com',
      'fonts.gstatic.com'
    ];

    criticalDomains.forEach(domain => {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = `https://${domain}`;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }

  /**
   * Check if image is above the fold
   */
  private isAboveTheFold(img: HTMLImageElement): boolean {
    const rect = img.getBoundingClientRect();
    return rect.top < window.innerHeight;
  }

  /**
   * Prefetch page
   */
  private prefetchPage(url: string): void {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  }

  /**
   * Optimize bundle size
   */
  optimizeBundleSize(): void {
    // Remove unused CSS
    this.removeUnusedCSS();
    
    // Minify inline styles
    this.minifyInlineStyles();
    
    // Optimize images
    this.optimizeImages();
  }

  /**
   * Remove unused CSS
   */
  private removeUnusedCSS(): void {
    // This would typically be done at build time
    // For runtime, we can remove unused classes
    const usedClasses = new Set();
    const elements = document.querySelectorAll('*');
    
    elements.forEach(el => {
      el.classList.forEach(cls => usedClasses.add(cls));
    });

    // Remove unused CSS classes from stylesheets
    const styleSheets = document.styleSheets;
    for (let i = 0; i < styleSheets.length; i++) {
      try {
        const rules = styleSheets[i].cssRules;
        for (let j = 0; j < rules.length; j++) {
          const rule = rules[j] as CSSStyleRule;
          if (rule.selectorText && rule.selectorText.startsWith('.')) {
            const className = rule.selectorText.replace('.', '');
            if (!usedClasses.has(className)) {
              rule.style.display = 'none';
            }
          }
        }
      } catch (e) {
        // Cross-origin stylesheets can't be accessed
      }
    }
  }

  /**
   * Minify inline styles
   */
  private minifyInlineStyles(): void {
    const elements = document.querySelectorAll('[style]');
    
    elements.forEach(el => {
      const style = el.getAttribute('style');
      if (style) {
        const minified = style
          .replace(/\s+/g, ' ')
          .replace(/;\s*/g, ';')
          .replace(/:\s*/g, ':')
          .trim();
        el.setAttribute('style', minified);
      }
    });
  }

  /**
   * Get performance metrics
   */
  getPerformanceMetrics(): {
    loadTime: number;
    domContentLoaded: number;
    firstPaint: number;
    firstContentfulPaint: number;
    largestContentfulPaint: number;
    firstInputDelay: number;
    cumulativeLayoutShift: number;
  } {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paint = performance.getEntriesByType('paint');
    
    return {
      loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
      domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
      firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
      firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
      largestContentfulPaint: 0, // Would need PerformanceObserver
      firstInputDelay: 0, // Would need PerformanceObserver
      cumulativeLayoutShift: 0 // Would need PerformanceObserver
    };
  }
}

export default PerformanceEnhancer;