// Performance monitoring setup
<<<<<<< HEAD

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
=======
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer } from './utils/performanceOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-5c0d

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);
  
  // Initialize performance optimizer
<<<<<<< HEAD
  performanceOptimizer.measurePageLoad().then((metrics: any) => {
    analytics.trackPerformance('page_load', metrics.loadTime);
    analytics.trackPerformance('render_time', metrics.renderTime);
    analytics.trackPerformance('memory_usage', metrics.memoryUsage, 'MB');
  });

  // Track Web Vitals
=======
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks (if available)
>>>>>>> cursor/fix-errors-and-merge-to-main-5c0d
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          analytics.trackPerformance('navigation_time', navEntry.loadEventEnd - navEntry.fetchStart);
        }
      }
    });
<<<<<<< HEAD

    try {
      observer.observe({ entryTypes: ['navigation'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
}
=======
    observer.observe({ entryTypes: ['longtask'] });
  }
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { analytics, errorHandler };
>>>>>>> cursor/fix-errors-and-merge-to-main-5c0d
