import { useState, useEffect, useCallback } from 'react';

interface PerformanceOptimizationOptions {
  enableLazyLoading: boolean;
  enablePreloading: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
}

interface UsePerformanceOptimizationReturn {
  isOptimized: boolean;
  optimize: () => void;
  options: PerformanceOptimizationOptions;
  setOptions: (options: PerformanceOptimizationOptions) => void;
}

const usePerformanceOptimization = (): UsePerformanceOptimizationReturn => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [options, setOptions] = useState<PerformanceOptimizationOptions>({
    enableLazyLoading: true,
    enablePreloading: true,
    enableCompression: true,
    enableCaching: true
  });

  const optimize = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Lazy load images
      if (options.enableLazyLoading) {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach((img) => {
          const image = img as HTMLImageElement;
          if (image.dataset.src) {
            image.src = image.dataset.src;
            image.removeAttribute('data-src');
          }
        });
      }

      // Preload critical resources
      if (options.enablePreloading) {
        const criticalResources = document.querySelectorAll('[data-preload]');
        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource.getAttribute('href') || '';
          link.as = resource.getAttribute('as') || 'script';
          document.head.appendChild(link);
        });
      }

      // Enable compression
      if (options.enableCompression) {
        // This would typically be handled by the server
      }

      // Enable caching
      if (options.enableCaching) {
        // This would typically be handled by the server
      }

      setIsOptimized(true);
    }
  }, [options]);

  useEffect(() => {
    if (isOptimized) {
      const timer = setTimeout(() => {
        setIsOptimized(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOptimized]);

  return {
    isOptimized,
    optimize,
    options,
    setOptions
  };
};

export default usePerformanceOptimization;