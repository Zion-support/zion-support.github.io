// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();

  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track(
        'long_task',
        'performance',
        'detected',
        undefined,
        entry.duration
      );
    });
  });

  // Track Web Vitals
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoad();
  measurePageLoad().then((metrics: Record<string, number>) => {
    reportWebVitals(metrics);
  });

  // Monitor long tasks (if available)
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        }
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  }

=======
  measurePageLoad().then((metrics: { fcp?: number; lcp?: number; fid?: number; cls?: number; ttfb?: number }) => {
    reportWebVitals(metrics);
  });
  
>>>>>>> cursor/fix-errors-and-merge-to-main-241d
  // Monitor long tasks (if available)
  if ('monitorLongTasks' in performanceOptimizer) {
    (performanceOptimizer as { monitorLongTasks: (callback: (entries: PerformanceEntryList) => void) => void }).monitorLongTasks((entries: PerformanceEntryList) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
  }
<<<<<<< HEAD

  // Track Web Vitals
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-241d
}

export { analytics, errorHandler, performanceOptimizer };