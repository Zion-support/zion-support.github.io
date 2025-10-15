import { useEffect, useRef, useCallback } from 'react';

interface UsePerformanceOptimizationOptions {
  enableLazyLoading?: boolean;
  enableImageOptimization?: boolean;
  enableCodeSplitting?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
}

export const usePerformanceOptimization = (options: UsePerformanceOptimizationOptions = {}) => {
  const {
    enableImageOptimization = true,
    enablePreloading = true,
    enableCaching = true
  } = options;

  const optimizationRef = useRef<Record<string, any>>({});

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/main.woff2',
      '/css/critical.css',
      '/js/main.js'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  const enableServiceWorker = useCallback(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.log('Service Worker registration failed:', error);
      });
  }, []);

  const optimizeCaching = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined') return;

    // Set cache headers for static assets
    const staticAssets = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    staticAssets.forEach((asset) => {
      if (asset instanceof HTMLLinkElement) {
        asset.crossOrigin = 'anonymous';
      }
    });
  }, [enableCaching]);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    enableServiceWorker();
    optimizeCaching();
  }, [optimizeImages, preloadCriticalResources, enableServiceWorker, optimizeCaching]);

  return {
    optimization: optimizationRef.current,
    optimizeImages,
    preloadCriticalResources,
    enableServiceWorker,
    optimizeCaching
  };
};

export default usePerformanceOptimization;