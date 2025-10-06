// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page view
  analytics.trackPageView(window.location.pathname);
  
  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    const longTaskObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        if (entry.duration > 50) { // Tasks longer than 50ms
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
          console.warn('Long task detected:', entry);
        }
      });
    });
    
    longTaskObserver.observe({ entryTypes: ['longtask'] });
  }

  // Monitor memory usage
  if ('memory' in performance) {
    const checkMemory = () => {
      const memory = (performance as any).memory;
      if (memory) {
        const memoryUsage = {
          used: memory.usedJSHeapSize,
          total: memory.totalJSHeapSize,
          limit: memory.jsHeapSizeLimit,
          percentage: (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100
        };
        
        analytics.track('memory_usage', 'performance', 'measured', undefined, memoryUsage.percentage);
        
        if (memoryUsage.percentage > 80) {
          console.warn('High memory usage detected:', memoryUsage);
        }
      }
    };

    // Check memory every 30 seconds
    setInterval(checkMemory, 30000);
  }

  // Monitor page visibility changes
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      analytics.track('page_hidden', 'user_behavior', 'page_visibility');
    } else {
      analytics.track('page_visible', 'user_behavior', 'page_visibility');
    }
  });

  // Monitor unhandled errors
  window.addEventListener('error', (event) => {
    errorHandler.handleError(event.error, {
      type: 'javascript_error',
      message: event.message,
      filename: event.filename,
      lineno: event.lineno,
      colno: event.colno,
      stack: event.error?.stack
    });
  });

  // Monitor unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    errorHandler.handleError(new Error(event.reason), {
      type: 'unhandled_promise_rejection',
      reason: event.reason
    });
  });
}
