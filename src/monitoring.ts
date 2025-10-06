// Performance monitoring setup
import { analytics } from './utils/analytics';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
export const initializePerformanceMonitoring = () => {
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  
  // Monitor long tasks
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
  });
  observer.observe({ entryTypes: ['longtask'] });
  
  // Track Web Vitals
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
};