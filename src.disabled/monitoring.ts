// Performance monitoring setup
import analytics from './utils/analytics';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
export function initializePerformanceMonitoring(): void {
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();

  // Track Web Vitals
//   const metrics = performanceOptimizer.getPerformanceMetrics();
  if (metrics) {
//     }

  // Monitor long tasks
  if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
    const observer = new PerformanceObserver(list => {
      const _entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track(
          'long_task',
          'performance',
          'detected',
          undefined,
          entry.duration,
          { duration: entry.duration }
        );
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  }

  // Track additional performance metrics
//   const timingMetrics = performanceOptimizer.getPerformanceMetrics();
  if (timingMetrics) {
//     }
}

// Export default function for easy import
export default initializePerformanceMonitoring;
