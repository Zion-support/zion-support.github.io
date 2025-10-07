// Performance monitoring setup
import { analytics } from './utils/analytics';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          analytics.track(
            'long_task',
            'performance',
            'detected',
            undefined,
            entry.duration
          );
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('Long task monitoring not available:', error);
    }
  }

  // Track Web Vitals
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    try {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'paint' || entry.entryType === 'largest-contentful-paint') {
            analytics.trackPerformance(entry.name, entry.startTime);
          }
        });
      });
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
    } catch (error) {
      console.warn('Performance monitoring not available:', error);
    }
  }
  
  // Monitor long tasks (if available)
  if ('PerformanceObserver' in window) {
    try {
      const longTaskObserver = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        });
      });
      longTaskObserver.observe({ entryTypes: ['longtask'] });
    } catch (error) {
      console.warn('Long task monitoring not available:', error);
    }
  }
}

export { analytics };