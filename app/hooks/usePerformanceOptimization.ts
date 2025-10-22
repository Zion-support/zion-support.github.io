import { useState, useEffect, useCallback } from 'react';
interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enablePreloading?: boolean;
  enableBundleAnalysis?: boolean;
}

<<<<<<< HEAD
export const usePerformanceOptimization = (config: OptimizationConfig) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [optimizationMetrics, setOptimizationMetrics] = useState({
    bundleSize: 0,
    loadTime: 0,
    renderTime: 0,
  });

  const optimizeImages = useCallback(() => {
    if (!config.enableImageOptimization) return;
    
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }, [config.enableImageOptimization]);

  const optimizeLazyLoading = useCallback(() => {
    if (!config.enableLazyLoading) return;
    
    const lazyElements = document.querySelectorAll('[data-lazy]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          observer.unobserve(element);
=======
export const usePerformanceOptimization = () => {
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return null;
    }

    const navigation = performance.getEntriesByType(
      'navigation'
    )[0] as PerformanceNavigationTiming;
    

    const metrics: PerformanceMetrics = {
      loadTime: navigation
        ? navigation.loadEventEnd - navigation.loadEventStart
        : 0,
      firstContentfulPaint:
        paintEntries.find(entry => entry.name === 'first-contentful-paint')
          ?.startTime || 0,
      largestContentfulPaint: 0,
      cumulativeLayoutShift: 0,
      firstInputDelay: 0,
    };

    // Measure LCP
    const lcpObserver = new PerformanceObserver(list => {
      
      
      if (lastEntry) {
        metrics.largestContentfulPaint = lastEntry.startTime;
      }
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // Measure CLS
    let _clsValue = 0;
    const clsObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const layoutShiftEntry = entry as PerformanceEntry & {
          hadRecentInput?: boolean;
          value?: number;
        };
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value || 0;
        }
      }
      metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Measure FID
    const fidObserver = new PerformanceObserver(list => {
      for (const entry of list.getEntries()) {
        const fidEntry = entry as PerformanceEntry & {
          processingStart?: number;
        };
        metrics.firstInputDelay =
          (fidEntry.processingStart || 0) - entry.startTime;
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cleanup observers after a delay
    setTimeout(() => {
      lcpObserver.disconnect();
      clsObserver.disconnect();
      fidObserver.disconnect();
    }, 10000);

    return metrics;
  }, []);

  const optimizeImages = useCallback(() => {
    
    const imageObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
>>>>>>> bda5d40addebc09fc3c74601f15d6b21b20062c5
        }
      });
    });

    lazyElements.forEach((element) => observer.observe(element));
  }, [config.enableLazyLoading]);

<<<<<<< HEAD
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    
    setOptimizationMetrics({
      bundleSize: navigation.transferSize || 0,
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      renderTime: fcp ? fcp.startTime : 0,
=======
  const preloadCriticalResources = useCallback(() => {
    

    criticalResources.forEach(resource => {
      
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'style';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
>>>>>>> bda5d40addebc09fc3c74601f15d6b21b20062c5
    });
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    if (typeof window === 'undefined') return;
=======
    // Measure performance after page load
    const timer = setTimeout(() => {
      
      if (metrics) {
        // Send metrics to analytics in production
        if (process.env['NODE_ENV'] === 'production') {
          // Track metrics in production
        }
         
        if (process.env['NODE_ENV'] === 'development') { 
          if (import.meta.env.DEV) { 
>>>>>>> bda5d40addebc09fc3c74601f15d6b21b20062c5

    const runOptimizations = () => {
      optimizeImages();
      optimizeLazyLoading();
      measurePerformance();
      setIsOptimized(true);
    };

    if (document.readyState === 'complete') {
      runOptimizations();
    } else {
      window.addEventListener('load', runOptimizations);
    }

    return () => {
      window.removeEventListener('load', runOptimizations);
    };
  }, [optimizeImages, optimizeLazyLoading, measurePerformance]);

  return {
    isOptimized,
    optimizationMetrics,
    optimizeImages,
    optimizeLazyLoading,
  };
};