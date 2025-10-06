// Performance monitoring setup

// Mock analytics object
const analytics = {
  trackPageView: (path: string) => {
    console.log('Page view:', path);
  },
  trackPerformance: (name: string, value: number, unit: string = 'ms') => {
    console.log(`Performance: ${name} = ${value}${unit}`);
  }
};

// Mock performance optimizer
const performanceOptimizer = {
  measurePageLoad: () => {
    return Promise.resolve({
      loadTime: 0,
      renderTime: 0,
      memoryUsage: 0
    });
  }
};

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);
  
  // Initialize performance optimizer
  performanceOptimizer.measurePageLoad().then((metrics: any) => {
    analytics.trackPerformance('page_load', metrics.loadTime);
    analytics.trackPerformance('render_time', metrics.renderTime);
    analytics.trackPerformance('memory_usage', metrics.memoryUsage, 'MB');
  });

  // Track Web Vitals
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          analytics.trackPerformance('navigation_time', navEntry.loadEventEnd - navEntry.fetchStart);
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
}