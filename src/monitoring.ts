// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer } from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);

  // Initialize performance optimizer
  performanceOptimizer.initialize();
}

export { analytics, errorHandler, performanceOptimizer };