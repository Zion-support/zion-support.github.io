// Performance monitoring setup
import { analytics } from '../app/utils/analytics';
import { ErrorHandler } from '../app/utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  performanceOptimizer.optimizeImages();

  // Monitor long tasks using PerformanceObserver
  if (typeof PerformanceObserver !== 'undefined') {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: PerformanceEntry) => {
          analytics.track({
            event: 'long_task',
            category: 'performance',
            label: 'detected',
            value: entry.duration,
          });
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
    } catch {
      // PerformanceObserver may not support 'longtask' in some environments
    }
  }
}

export { analytics, ErrorHandler, performanceOptimizer };
