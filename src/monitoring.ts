// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();

  // Track Web Vitals
<<<<<<< HEAD
  const metrics = performanceOptimizer.measurePageLoadTiming();
=======
  const metrics = performanceOptimizer.measurePageLoad();
>>>>>>> cursor/fix-errors-and-merge-to-main-a3c4
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { analytics, errorHandler, performanceOptimizer };
