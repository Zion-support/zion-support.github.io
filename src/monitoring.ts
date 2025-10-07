// Performance monitoring setup
import { analytics } from '../app/utils/analytics';
import { errorHandler } from '../app/utils/errorHandler';
import { performanceOptimizer } from '../app/utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();

  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
  
  // Monitor long tasks (if available)
  if ('monitorLongTasks' in performanceOptimizer && typeof performanceOptimizer.monitorLongTasks === 'function') {
    performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
  }
}

export { analytics, errorHandler, performanceOptimizer };
