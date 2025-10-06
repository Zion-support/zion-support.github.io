// Performance monitoring setup
import { analytics } from './src/utils/analytics';
import { errorHandler } from './src/utils/errorHandler';
import performanceOptimizer from './src/utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Track page load
  analytics.trackPageView(window?.location.pathname);
  
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries) => {
    entries.forEach((entry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
  });
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { analytics, errorHandler, performanceOptimizer };