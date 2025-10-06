// Performance monitoring setup
import { analytics } from './utils/analytics';
<<<<<<< HEAD
<<<<<<< HEAD
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
<<<<<<< HEAD
<<<<<<< HEAD
export function initializePerformanceMonitoring(): void {
=======
export const initializePerformanceMonitoring = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
import { performanceOptimizer } from './utils/performanceOptimizer';

// Initialize performance monitoring
export const initializeMonitoring = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
export const initializeMonitoring = () => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  // Initialize performance optimizer
  performanceOptimizer.lazyLoadImages();
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  
  // Monitor long tasks
  const observer = new PerformanceObserver((list) => {
    const entries = list.getEntries();
<<<<<<< HEAD
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
=======
export function initializeMonitoring() {
  // Initialize performance optimizer
  lazyLoadImages();
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  
  // Monitor long tasks
  const observer = new PerformanceObserver((entries: PerformanceEntry[]) => {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-74a6
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
  });
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
  observer.observe({ entryTypes: ['longtask'] });
  
  // Track Web Vitals
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
<<<<<<< HEAD
<<<<<<< HEAD
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-7834
=======
}

// Lazy load images function
function lazyLoadImages() {
  const images = document.querySelectorAll('img[data-src]');
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });
  
  images.forEach((img) => imageObserver.observe(img));
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-74a6
=======
  
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-4854
=======
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8da8
