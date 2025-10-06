// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window.location.pathname);
}

export { analytics, errorHandler };