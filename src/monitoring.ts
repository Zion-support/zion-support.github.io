// Performance monitoring setup
import { analytics } from './utils/analytics';
import { performanceOptimizer, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer

  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track(
        'long_task',
        'performance',
        'detected',
        undefined,
        entry.duration,
        undefined
      );
    });
  });

  // Track Web Vitals
  const metrics = measurePageLoad();
  if (metrics) {
    reportWebVitals(metrics);
  }
  
  // Monitor long tasks (if available)
  if ('monitorLongTasks' in performanceOptimizer) {
    (performanceOptimizer as { monitorLongTasks: (callback: (entries: PerformanceEntryList) => void) => void }).monitorLongTasks((entries: PerformanceEntryList) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
  }
}

export { analytics, performanceOptimizer };