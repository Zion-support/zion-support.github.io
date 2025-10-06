// Performance monitoring setup
import { analytics } from './utils/analytics';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
<<<<<<< HEAD
export function initializePerformanceMonitoring(): void {
=======
export const initializePerformanceMonitoring = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
<<<<<<< HEAD
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
  
  // Monitor long tasks
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration, { duration: entry.duration });
    });
  });
  observer.observe({ entryTypes: ['longtask'] });
  
  // Track additional performance metrics
  const timingMetrics = performanceOptimizer.measurePageLoad();
  if (timingMetrics) {
    performanceOptimizer.reportWebVitals(timingMetrics);
  }
}

// Export default function for easy import
export default initializePerformanceMonitoring;
=======
  
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
