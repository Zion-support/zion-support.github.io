//Performance monitoring setup
import { analytics } from './utils/analytics';
import { performanceOptimizer } from './utils/performanceOptimizer';
import { performanceOptimizer } from './utils/performanceOptimizer';

//Initialize performance monitoring
export const initializeMonitoring = () => {
  //Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  //Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();

//Initialize performance monitoring
if (typeof window !== 'undefined') {
  //Track page load
  analytics.trackPageView(window.location.pathname);
  
  //Initialize performance monitoring
  initPerformanceMonitoring();
  
  //Monitor long tasks
  performanceOptimizer.monitorLongTasks((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
  if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: PerformanceEntry) => {
        analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
      });
    });
    observer.observe({ entryTypes: ['longtask'] });
  }
  
  //Track Web Vitals
  const metrics = getPerformanceMetrics();
  if (metrics) {
    console.log('Performance metrics:', metrics);
  }
  
  //Monitor long tasks
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration, { duration: entry.duration });
    });
  });
  observer.observe({ entryTypes: ['longtask'] });
  
  //Track additional performance metrics
  const timingMetrics = performanceOptimizer.measurePageLoad();
  if (timingMetrics) {
    performanceOptimizer.reportWebVitals(timingMetrics);
  }
}

//Export default function for easy import
export default initializePerformanceMonitoring;
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
  
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
};
};
export { analytics, errorHandler };
