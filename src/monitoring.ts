// Performance monitoring setup
import { analytics } from './utils/analytics';
import { errorHandler } from './utils/errorHandler';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';
import performanceOptimizer from './utils/performanceOptimizer';
  // Initialize performance optimizer
  lazyLoadImages();
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  // Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
    observer.observe({ entryTypes: ['longtask'] });
  }
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  const metrics = performanceOptimizer.measurePageLoad();
  const metrics = performanceOptimizer.measurePageLoadTiming();
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }