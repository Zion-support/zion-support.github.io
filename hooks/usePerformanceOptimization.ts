import { useEffect, useCallback } from 'react';

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const {
    enableLazyLoading = true,
    enablePreloading = true,
    enableImageOptimization = true
  } = options;

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (img.dataset.src && !img.src) {
        img.src = img.dataset.src;
      }
    });
  }, [enableImageOptimization]);

  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const lazyElements = document.querySelectorAll('[data-lazy]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          observer.unobserve(element);
        }
      });
    });

    lazyElements.forEach(el => observer.observe(el));
  }, [enableLazyLoading]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      '/app/globals.css',
      '/app/styles/futuristic.css'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'style';
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  useEffect(() => {
    optimizeImages();
    setupLazyLoading();
    preloadCriticalResources();
  }, [optimizeImages, setupLazyLoading, preloadCriticalResources]);

  return {
    optimizeImages,
    setupLazyLoading,
    preloadCriticalResources
  };
};