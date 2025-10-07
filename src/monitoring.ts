// Performance monitoring setup
import { analytics } from '../app/utils/analytics';
import { ErrorHandler } from '../app/utils/errorHandler';
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
}

export { analytics, ErrorHandler as errorHandler, performanceOptimizer };
