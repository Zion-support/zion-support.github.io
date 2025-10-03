
// Performance monitoring and optimization
class PerformanceOptimizer {
  constructor() {
    this.metrics = {};
    this.init();
  }
  
  init() {
    this.observeLCP();
    this.observeFID();
    this.observeCLS();
    this.optimizeImages();
    this.preloadCriticalResources();
  }
  
  observeLCP() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.lcp = lastEntry.startTime;
    });
    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
  
  observeFID() {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        this.metrics.fid = entry.processingStart - entry.startTime;
      });
    });
    observer.observe({ entryTypes: ['first-input'] });
  }
  
  observeCLS() {
    let clsValue = 0;
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
        }
      }
      this.metrics.cls = clsValue;
    });
    observer.observe({ entryTypes: ['layout-shift'] });
  }
  
  optimizeImages() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.loading !== 'lazy') {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }
  
  preloadCriticalResources() {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (link.as === 'font') {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }
  
  getMetrics() {
    return this.metrics;
  }
}

// Initialize performance optimizer
if (typeof window !== 'undefined') {
  window.performanceOptimizer = new PerformanceOptimizer();
}
