// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer, lazyLoadImages, measurePageLoad, reportWebVitals } from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  lazyLoadImages();

  // Track Web Vitals
  measurePageLoad().then((metrics: any) => {
    reportWebVitals(metrics);
  });
}

export { analytics, errorHandler, performanceOptimizer };
