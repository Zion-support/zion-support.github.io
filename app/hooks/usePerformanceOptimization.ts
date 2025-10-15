import { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizationOptions {
  enableImageLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const {
    enableImageLazyLoading = true,
    enablePreloading = true
  } = options;

  const optimizationRef = useRef({
    preloadedResources: new Set<string>(),
    lazyLoadedImages: new Set<string>()
  });

  const preloadResource = useCallback((url: string, type: 'script' | 'style' | 'image' | 'font' = 'script') => {
    if (!enablePreloading || optimizationRef.current.preloadedResources.has(url)) {
      return;
    }

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = url;
    link.as = type;
    document.head.appendChild(link);

    optimizationRef.current.preloadedResources.add(url);
  }, [enablePreloading]);

  const lazyLoadImage = useCallback((img: HTMLImageElement, src: string) => {
    if (!enableImageLazyLoading || optimizationRef.current.lazyLoadedImages.has(src)) {
      img.src = src;
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.unobserve(img);
          optimizationRef.current.lazyLoadedImages.add(src);
        }
      });
    });

    observer.observe(img);
  }, [enableImageLazyLoading]);

  const optimizeImages = useCallback(() => {
    if (typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
      const src = img.getAttribute('data-src');
      if (src) {
        lazyLoadImage(img as HTMLImageElement, src);
      }
    });
  }, [lazyLoadImage]);

  useEffect(() => {
    if (enableImageLazyLoading) {
      optimizeImages();
    }
  }, [enableImageLazyLoading, optimizeImages]);

  return {
    preloadResource,
    lazyLoadImage,
    optimizeImages
  };
};