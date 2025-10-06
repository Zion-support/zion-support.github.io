// Performance monitoring setup

// Mock analytics object
// Simple analytics object
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
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
  },
  lazyLoadImages: () => {
    console.log('Lazy loading images...');
  },
  reportWebVitals: (metrics: any) => {
    console.log('Web Vitals:', metrics);
  }
};

// Mock error handler
const errorHandler = {
  captureException: (error: Error) => {
    console.error('Error captured:', error);
  track: (event: string, category: string, action: string, label?: string, value?: number) => {
    console.log('Analytics:', event, category, action, label, value);
  }
};

// Simple error handler
const errorHandler = {
  reportError: (error: Error, context?: string) => {
    console.error('Error reported:', error, context);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
  }
};
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
=======
import performanceOptimizer from './utils/performanceOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.pageView(window.location.pathname);
  
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Measure page load performance
  performanceOptimizer.measurePageLoad().then((metrics: any) => {
    analytics.trackPerformance('page_load', metrics.loadTime);
    analytics.trackPerformance('render_time', metrics.renderTime);
    analytics.trackPerformance('memory_usage', metrics.memoryUsage, 'MB');
  });

  // Monitor long tasks and navigation (if available)
  // Monitor long tasks if PerformanceObserver is available
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
  // Monitor long tasks (if available)
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
<<<<<<< HEAD
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          const navEntry = entry as PerformanceNavigationTiming;
          analytics.trackPerformance('navigation_time', navEntry.loadEventEnd - navEntry.fetchStart);
=======
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track({
            action: 'detected',
            category: 'performance',
            label: 'long_task',
            value: entry.duration
          });
>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'longtask'] });
    } catch (error) {
      console.warn('Performance monitoring not supported:', error);
    }
  }
  
  // Track Web Vitals
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-2e62
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
>>>>>>> cursor/fix-errors-and-merge-to-main-cfe1
  }
=======
  performanceOptimizer.initialize();
>>>>>>> cursor/fix-errors-and-merge-to-main-e9bd
}

export { analytics, errorHandler };
=======

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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
