// Performance monitoring setup
import { analytics } from './utils/analytics';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
export function initializePerformanceMonitoring(): void {
  // Initialize performance optimizer
  performanceOptimizer.initialize();
  performanceOptimizer.lazyLoadImages();
  
  // Monitor long tasks
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
  }
}

// Export default function for easy import
export default initializePerformanceMonitoring;