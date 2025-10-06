// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
<<<<<<< HEAD
import performanceOptimizer from './utils/performanceOptimizer';
=======
import { performanceOptimizer, lazyLoadImages, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';
>>>>>>> cursor/fix-errors-and-merge-to-main-775a

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  lazyLoadImages();

  // Track Web Vitals
<<<<<<< HEAD
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoadTiming();
=======
  const metrics = performanceOptimizer.measurePageLoad();
>>>>>>> cursor/fix-errors-and-merge-to-main-a3c4
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
=======
  measurePageLoad().then((metrics: any) => {
    reportWebVitals(metrics);
  });
>>>>>>> cursor/fix-errors-and-merge-to-main-775a
}

export { analytics, errorHandler, performanceOptimizer };
