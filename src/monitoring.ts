// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  console.log('Page loaded:', window.location.pathname);
  
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();

  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          console.log('Long task detected:', entry.duration);
        }
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  }
}

export { analytics, errorHandler };