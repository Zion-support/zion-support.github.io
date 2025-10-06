// Performance monitoring setup
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizer';

// Initialize performance monitoring
export const initializeMonitoring = () => {
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  
  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
  });
  
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
};