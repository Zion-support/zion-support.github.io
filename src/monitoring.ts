// Performance monitoring setup
<<<<<<< HEAD
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer } from './utils/performanceOptimizer';
=======
import { analytics } from './src/utils/analytics';
import { errorHandler } from './src/utils/errorHandler';
import performanceOptimizer from './src/utils/performanceOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-629e

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
<<<<<<< HEAD
  analytics.trackPageView(window.location.pathname);
=======
  analytics.trackPageView(window?.location.pathname);
>>>>>>> cursor/fix-errors-and-merge-to-main-629e
  
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
<<<<<<< HEAD
=======
  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries) => {
    entries.forEach((entry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
  });
  
>>>>>>> cursor/fix-errors-and-merge-to-main-629e
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { analytics, errorHandler, performanceOptimizer };