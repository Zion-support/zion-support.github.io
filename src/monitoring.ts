// Performance monitoring setup
import { performanceOptimizer } from './utils/performanceOptimizer';

// Initialize performance monitoring
if (typeof window !== 'undefined') {
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry) => {
      console.log('Long task detected:', entry.duration);
    });
  });
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
}

export { performanceOptimizer };