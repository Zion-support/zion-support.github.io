// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
<<<<<<< HEAD
import { performanceOptimizer } from './utils/performanceOptimizer';
=======
<<<<<<< HEAD
import { performanceOptimizer } from './utils/performanceOptimizer';
=======
<<<<<<< HEAD
import { performanceOptimizer } from './utils/performanceOptimizer';
=======
<<<<<<< HEAD
import performanceOptimizer from './utils/performanceOptimizer';
=======
import { performanceOptimizer, lazyLoadImages, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);
  
  // Initialize performance optimizer
<<<<<<< HEAD
  lazyLoadImages();

  // Track Web Vitals
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoad();
=======
  measurePageLoad().then((metrics: any) => {
    reportWebVitals(metrics);
  });
=======
  performanceOptimizer.lazyLoadImages();
  
<<<<<<< HEAD
  // Monitor long tasks
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> main
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
=======
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 50) {
          analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
        }
      });
>>>>>>> main
    });
    observer.observe({ entryTypes: ['longtask'] });
=======
  // Monitor long tasks (if available)
  if ('monitorLongTasks' in performanceOptimizer) {
    (performanceOptimizer as { monitorLongTasks: (callback: (entries: PerformanceEntryList) => void) => void }).monitorLongTasks((entries: PerformanceEntryList) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
>>>>>>> main
  }
  
  // Track Web Vitals
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoad();
=======
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoad();
=======
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoadTiming();
=======
  const metrics = performanceOptimizer.measurePageLoad();
>>>>>>> main
>>>>>>> main
>>>>>>> main
>>>>>>> main
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
>>>>>>> main
}

export { analytics, errorHandler, performanceOptimizer };