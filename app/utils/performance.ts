// Performance optimization utilities

export const lazyLoadImages = () => {
  if (typeof window === 'undefined') return;

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

  images.forEach((img) => imageObserver.observe(img));
};

export const preloadCriticalResources = () => {
  if (typeof window === 'undefined') return;

  // Preload critical CSS
  const criticalCSS = document.createElement('link');
  criticalCSS.rel = 'preload';
  criticalCSS.as = 'style';
  criticalCSS.href = '/assets/index.css';
  document.head.appendChild(criticalCSS);

  // Preload critical fonts
  const fontPreload = document.createElement('link');
  fontPreload.rel = 'preload';
  fontPreload.as = 'font';
  fontPreload.type = 'font/woff2';
  fontPreload.crossOrigin = 'anonymous';
  fontPreload.href = '/fonts/inter.woff2';
  document.head.appendChild(fontPreload);
};

export const collectPerformanceMetrics = () => {
  if (typeof window === 'undefined' || !('performance' in window)) return null;

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  
  return {
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
    firstByte: navigation.responseStart - navigation.navigationStart,
    domInteractive: navigation.domInteractive - navigation.navigationStart,
  };
};

// Performance optimizer class
export class PerformanceOptimizer {
  private metrics: any = null;

  init() {
    this.metrics = collectPerformanceMetrics();
  }

  getMetrics() {
    return this.metrics;
  }
}

// Performance monitor class
export class PerformanceMonitor {
  init() {
    // Initialize performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Set up performance observers
      this.observeWebVitals();
    }
  }

  private observeWebVitals() {
    // Implementation for Web Vitals monitoring
    // This would typically use web-vitals library
  }
}

// SEO optimizer class
export class SEOOptimizer {
  init() {
    // Initialize SEO optimizations
    this.optimizeMetaTags();
    this.addStructuredData();
  }

  private optimizeMetaTags() {
    // Optimize meta tags for better SEO
  }

  private addStructuredData() {
    // Add structured data for better search engine understanding
  }
}

// Accessibility enhancer class
export class AccessibilityEnhancer {
  init() {
    // Initialize accessibility enhancements
    this.addSkipLinks();
    this.optimizeFocusManagement();
  }

  private addSkipLinks() {
    // Add skip links for keyboard navigation
  }

  private optimizeFocusManagement() {
    // Optimize focus management for better accessibility
  }
}

// Export instances
export const performanceOptimizer = new PerformanceOptimizer();
export const performanceMonitor = new PerformanceMonitor();
export const seoOptimizer = new SEOOptimizer();
export const accessibilityEnhancer = new AccessibilityEnhancer();