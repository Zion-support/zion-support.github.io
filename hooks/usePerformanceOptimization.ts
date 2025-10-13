import { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
}

export function usePerformanceOptimization(options: PerformanceOptimizationOptions = {}) {
  const {
    enableLazyLoading = true,
    enableImageOptimization = true,
    enableCodeSplitting = true,
    enableCaching = true
  } = options;

  const optimizationRef = useRef({
    lazyLoadingEnabled: false,
    imageOptimizationEnabled: false,
    codeSplittingEnabled: false,
    cachingEnabled: false
  });

  const enableLazyLoadingOptimization = useCallback(() => {
    if (typeof window === 'undefined' || !enableLazyLoading) return;

    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
    optimizationRef.current.lazyLoadingEnabled = true;
  }, [enableLazyLoading]);

  const enableImageOptimization = useCallback(() => {
    if (typeof window === 'undefined' || !enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
    optimizationRef.current.imageOptimizationEnabled = true;
  }, [enableImageOptimization]);

  const enableCodeSplitting = useCallback(() => {
    if (!enableCodeSplitting) return;
    // Code splitting is typically handled at build time
    optimizationRef.current.codeSplittingEnabled = true;
  }, [enableCodeSplitting]);

  const enableCaching = useCallback(() => {
    if (typeof window === 'undefined' || !enableCaching) return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(() => {
          optimizationRef.current.cachingEnabled = true;
        })
        .catch(console.error);
    }
  }, [enableCaching]);

  useEffect(() => {
    enableLazyLoadingOptimization();
    enableImageOptimization();
    enableCodeSplitting();
    enableCaching();
  }, [enableLazyLoadingOptimization, enableImageOptimization, enableCodeSplitting, enableCaching]);

  return {
    optimizations: optimizationRef.current,
    enableLazyLoading: enableLazyLoadingOptimization,
    enableImageOptimization,
    enableCodeSplitting,
    enableCaching
  };
}

export default usePerformanceOptimization;