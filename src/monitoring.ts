// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.pageView(window.location.pathname);
  
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks (if available)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track({
            action: 'detected',
            category: 'performance',
            label: 'long_task',
            value: entry.duration
          });
        }
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  }
  
  // Track Web Vitals
  performanceOptimizer.initialize();
}

export { analytics, errorHandler };
