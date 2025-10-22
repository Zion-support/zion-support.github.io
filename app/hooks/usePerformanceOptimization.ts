import { useState, useEffect, useCallback } from 'react';

interface OptimizationConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enableCaching: boolean;
  enablePreloading?: boolean;
  enableBundleAnalysis?: boolean;
}

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
        }
      });
    });

    lazyElements.forEach((element) => observer.observe(element));
  }, [config.enableLazyLoading]);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const paintEntries = performance.getEntriesByType('paint');
    
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint');
    
    setOptimizationMetrics({
      bundleSize: navigation.transferSize || 0,
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      renderTime: fcp ? fcp.startTime : 0,
    });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

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