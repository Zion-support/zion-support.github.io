// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer, lazyLoadImages, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';

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
  const metrics = performanceOptimizer.measurePageLoad();
  measurePageLoad().then((metrics: any) => {
    reportWebVitals(metrics);
  });
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        }
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  // Monitor long tasks (if available)
  if ('monitorLongTasks' in performanceOptimizer) {
    (performanceOptimizer as { monitorLongTasks: (callback: (entries: PerformanceEntryList) => void) => void }).monitorLongTasks((entries: PerformanceEntryList) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
  }
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  const metrics = performanceOptimizer.measurePageLoadTiming();
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { analytics, errorHandler, performanceOptimizer };
