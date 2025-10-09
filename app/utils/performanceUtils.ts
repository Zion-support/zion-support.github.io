
// Performance monitoring and optimization utilities
export const performanceUtils = {
  // Measure Core Web Vitals
  measureWebVitals: () => {
    if (typeof window === 'undefined') return;
    
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime);
          // Send to analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              name: 'FCP',
              value: Math.round(entry.startTime),
              event_category: 'Performance'
            });
          }
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });
    
    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          name: 'LCP',
          value: Math.round(lastEntry.startTime),
          event_category: 'Performance'
        });
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    
    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      console.log('CLS:', clsValue);
      if (typeof gtag !== 'undefined') {
        gtag('event', 'web_vitals', {
          name: 'CLS',
          value: Math.round(clsValue * 1000),
          event_category: 'Performance'
        });
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  },
  
  // Preload critical resources
  preloadCriticalResources: () => {
    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/images/hero-bg.webp', as: 'image' },
      { href: '/images/logo.svg', as: 'image' }
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
  },
  
  // Optimize images
  optimizeImages: () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  },
  
  // Initialize performance optimizations
  init: () => {
    if (typeof window !== 'undefined') {
      performanceUtils.measureWebVitals();
      performanceUtils.preloadCriticalResources();
      performanceUtils.optimizeImages();
    }
  }
};

// Auto-initialize
if (typeof window !== 'undefined') {
  performanceUtils.init();
}
