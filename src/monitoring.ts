// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
<<<<<<< HEAD
import performanceOptimizer from './utils/performanceOptimizer';
=======
import { performanceOptimizer, lazyLoadImages, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';
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
  
  // Monitor long tasks (if available)
  if ('monitorLongTasks' in performanceOptimizer) {
    (performanceOptimizer as { monitorLongTasks: (callback: (entries: PerformanceEntryList) => void) => void }).monitorLongTasks((entries: PerformanceEntryList) => {
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
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