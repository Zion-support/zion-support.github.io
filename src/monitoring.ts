// Performance monitoring setup
import { analytics } from '../app/utils/analytics';
import { ErrorHandler } from '../app/utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';

// Initialize error handler
const errorHandler = ErrorHandler.getInstance();

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  performanceOptimizer.optimize();

  // Track Web Vitals and performance metrics
  const metrics = performanceOptimizer.getMetrics();
  if (metrics.bundleSize) {
    analytics.trackPerformance('bundle_size', metrics.bundleSize);
  }
  if (metrics.loadTime) {
    analytics.trackPerformance('load_time', metrics.loadTime);
  }
  
  // Monitor long tasks using Performance Observer API
  if ('PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) { // Tasks longer than 50ms
            analytics.track({
              event: 'long_task',
              category: 'performance',
              label: 'detected',
              value: Math.round(entry.duration)
            });
          }
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('Long task monitoring not supported');
    }
  }
}

export { analytics, errorHandler, performanceOptimizer };
