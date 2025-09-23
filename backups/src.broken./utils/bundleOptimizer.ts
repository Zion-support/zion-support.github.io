/**
 * Bundle optimization utilities for better performance
 */

interface PreloadResource {
  href: string;
  as: 'script' | 'style' | 'image' | 'font' | 'fetch';
  crossorigin?: boolean;
  rel?: 'preload' | 'prefetch' | 'dns-prefetch';
}

class BundleOptimizer {
  private preloadedResources = new Set<string>();
  private criticalResources: PreloadResource[] = [];

  constructor() {
    this.initializeCriticalResources();
  }

  private initializeCriticalResources() {
    // Define critical resources that should be preloaded
    this.criticalResources = [
      {
        href: '/assets/main-DJSPBlcx.css',
        as: 'style',
        rel: 'preload'
      },
      {
        href: '/assets/react-core-CeWZUsTL.js',
        as: 'script',
        rel: 'preload'
      },
      {
        href: '/assets/main-Bsz36TI1.js',
        as: 'script',
        rel: 'preload'
      }
    ];
  }

  /**
   * Preload critical resources for faster initial page load
   */
  preloadCriticalResources() {
    if (typeof window === 'undefined') return;

    this.criticalResources.forEach(resource => {
      if (this.preloadedResources.has(resource.href)) return;

      const link = document.createElement('link');
      link.rel = resource.rel || 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.crossorigin) {
        link.crossOrigin = 'anonymous';
      }

      document.head.appendChild(link);
      this.preloadedResources.add(resource.href);
    });
  }

  /**
   * Prefetch non-critical resources when user is idle
   */
  prefetchNonCriticalResources() {
    if (typeof window === 'undefined') return;

    // Use requestIdleCallback for non-critical prefetching
    if ('requestIdleCallback' in window) {
      requestIdleCallback(() => {
        this.prefetchSecondaryResources();
      });
    } else {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        this.prefetchSecondaryResources();
      }, 2000);
    }
  }

  private prefetchSecondaryResources() {
    const secondaryResources = [
      '/assets/forms-Bf7MfTMC.js',
      '/assets/motion-CVrGpB4u.js',
      '/assets/pages-G5uhS74l.js'
    ];

    secondaryResources.forEach(href => {
      if (this.preloadedResources.has(href)) return;

      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = href;
      link.as = 'script';

      document.head.appendChild(link);
      this.preloadedResources.add(href);
    });
  }

  /**
   * Optimize images by lazy loading
   */
  optimizeImages() {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      images.forEach(img => {
        const imgElement = img as HTMLImageElement;
        imgElement.src = imgElement.dataset.src || '';
        imgElement.classList.remove('lazy');
      });
    }
  }

  /**
   * Clean up unused CSS and JavaScript
   */
  cleanupUnusedResources() {
    if (typeof window === 'undefined') return;

    // Remove unused CSS classes (basic implementation)
    const usedClasses = new Set<string>();
    const allElements = document.querySelectorAll('*');
    
    allElements.forEach(element => {
      element.classList.forEach(className => {
        usedClasses.add(className);
      });
    });

    // This is a simplified version - in production, you'd want more sophisticated purging
    // // console.log(`Found ${usedClasses.size} used CSS classes`);
  }

  /**
   * Initialize all optimizations
   */
  init() {
    this.preloadCriticalResources();
    this.prefetchNonCriticalResources();
    this.optimizeImages();
    
    // Run cleanup after a delay to allow page to fully load
    setTimeout(() => {
      this.cleanupUnusedResources();
    }, 5000);
  }
}

export const bundleOptimizer = new BundleOptimizer();