/**
 * Performance Optimizer
 * Simple performance optimization utilities
 */

export class PerformanceOptimizer {
  private static instance: PerformanceOptimizer;

  private constructor() {}

  static getInstance(): PerformanceOptimizer {
    if (!PerformanceOptimizer.instance) {
      PerformanceOptimizer.instance = new PerformanceOptimizer();
    }
    return PerformanceOptimizer.instance;
  }

  /**
   * Initialize performance monitoring
   */
  init(): void {
    if (typeof window === 'undefined') return;
    
    // Initialize web vitals monitoring
    this.initializeWebVitals();
    
    // Initialize performance observer
    this.initializePerformanceObserver();
  }

  /**
   * Initialize web vitals monitoring
   */
  private initializeWebVitals(): void {
    // Web vitals monitoring would go here
    console.log('Web vitals monitoring initialized');
  }

  /**
   * Initialize performance observer
   */
  private initializePerformanceObserver(): void {
    if ('PerformanceObserver' in window) {
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            // Process performance entries
            console.log('Performance entry:', entry);
          }
        });
        
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      } catch (error) {
        console.error('Failed to initialize performance observer:', error);
      }
    }
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
  }

  /**
   * Optimize scroll performance
   */
  optimizeScroll(): void {
    if (typeof window === 'undefined') return;
    
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Scroll optimization logic here
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  /**
   * Preload critical resources
   */
  preloadCriticalResources(): void {
    if (typeof window === 'undefined') return;
    
    const criticalResources = [
      '/fonts/critical.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      document.head.appendChild(link);
    });
  }

  /**
   * Observe First Input Delay
   */
  private observeFID(): void {
    if (typeof window === 'undefined') return;
    // FID observation logic would go here
  }

  /**
   * Observe Cumulative Layout Shift
   */
  private observeCLS(): void {
    if (typeof window === 'undefined') return;
    // CLS observation logic would go here
  }

  /**
   * Observe First Contentful Paint
   */
  private observeFCP(): void {
    if (typeof window === 'undefined') return;
    // FCP observation logic would go here
  }

  /**
   * Observe Time to First Byte
   */
  private observeTTFB(): void {
    if (typeof window === 'undefined') return;
    // TTFB observation logic would go here
  }

  /**
   * Observe memory usage
   */
  private observeMemory(): void {
    if (typeof window === 'undefined') return;
    // Memory observation logic would go here
  }
}

// Export singleton instance
export const performanceOptimizer = PerformanceOptimizer.getInstance();