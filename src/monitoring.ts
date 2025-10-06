// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer, monitorLongTasks } from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
<<<<<<< HEAD

=======
  
  // Monitor long tasks
<<<<<<< HEAD
  const monitorLongTasks = (performanceOptimizer as { monitorLongTasks?: (callback: (entries: PerformanceEntry[]) => void) => PerformanceObserver | null }).monitorLongTasks;
  if (monitorLongTasks) {
    monitorLongTasks((entries: PerformanceEntry[]) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
=======
  monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0e4c
    });
  }
  
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-014b
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { analytics, errorHandler, performanceOptimizer };
