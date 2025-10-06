// Performance monitoring setup
import { analytics } from './utils/analytics';
import performanceOptimizer from './utils/performanceOptimizer';

// Initialize performance monitoring
export function initializeMonitoring() {
  // Initialize performance optimizer
  lazyLoadImages();
  
  // Track Web Vitals
  const metrics = performanceOptimizer.measurePageLoad();
  
  // Monitor long tasks
  const observer = new PerformanceObserver((entries: PerformanceEntry[]) => {
    entries.forEach((entry: PerformanceEntry) => {
      analytics.track('long_task', 'performance', 'detected', undefined, entry.duration);
    });
  });
  observer.observe({ entryTypes: ['longtask'] });
  
  // Track Web Vitals
  if (metrics) {
    performanceOptimizer.reportWebVitals(metrics);
  }
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