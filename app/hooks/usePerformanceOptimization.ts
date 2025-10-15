import { useCallback, useEffect, useRef } from 'react';

interface PerformanceOptimizationOptions {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

export const usePerformanceOptimization = (options: PerformanceOptimizationOptions = {}) => {
  const {
    enableImageOptimization = true,
    enableLazyLoading = true,
    enablePreloading = true,
    enableCaching = true,
    enableCompression = true
  } = options;

  const optimizationRef = useRef<{
    optimizedImages: Set<string>;
    preloadedResources: Set<string>;
    lazyLoadedElements: Set<Element>;
  }>({
    optimizedImages: new Set(),
    preloadedResources: new Set(),
    lazyLoadedElements: new Set()
  });

  const optimizeImage = useCallback((src: string, options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'webp' | 'jpeg' | 'png';
  } = {}) => {
    if (!enableImageOptimization) return src;

    const { width, height, quality = 80, format = 'webp' } = options;
    const url = new URL(src);
    
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    url.searchParams.set('q', quality.toString());
    url.searchParams.set('f', format);

    optimizationRef.current.optimizedImages.add(url.toString());
    return url.toString();
  }, [enableImageOptimization]);

  const preloadResource = useCallback((href: string, as: string) => {
    if (!enablePreloading || typeof document === 'undefined') return;

    if (optimizationRef.current.preloadedResources.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);

    optimizationRef.current.preloadedResources.add(href);
  }, [enablePreloading]);

  const lazyLoadElement = useCallback((element: Element, callback: () => void) => {
    if (!enableLazyLoading) {
      callback();
      return;
    }

    if (optimizationRef.current.lazyLoadedElements.has(element)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(element);
          optimizationRef.current.lazyLoadedElements.add(element);
        }
      });
    });

    observer.observe(element);
  }, [enableLazyLoading]);

  const enableServiceWorker = useCallback(() => {
    if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;

    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registered:', registration);
      })
      .catch((error) => {
        console.error('Service Worker registration failed:', error);
      });
  }, []);

  const enableCaching = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined') return;

    const cacheName = 'zion-tech-cache-v1';
    const urlsToCache = [
      '/',
      '/about',
      '/services',
      '/contact',
      '/images/hero.jpg',
      '/fonts/main.woff2'
    ];

    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.addAll(urlsToCache);
      });
    }
  }, [enableCaching]);

  const enableCompression = useCallback(() => {
    if (!enableCompression) return;

    // Enable compression for fetch requests
    const originalFetch = window.fetch;
    window.fetch = async (input, init) => {
      const request = new Request(input, {
        ...init,
        headers: {
          ...init?.headers,
          'Accept-Encoding': 'gzip, deflate, br'
        }
      });
      return originalFetch(request);
    };
  }, [enableCompression]);

  useEffect(() => {
    if (enableCaching) {
      enableCaching();
    }

    if (enableCompression) {
      enableCompression();
    }

    if (enableServiceWorker) {
      enableServiceWorker();
    }
  }, [enableCaching, enableCompression, enableServiceWorker]);

  return {
    optimizeImage,
    preloadResource,
    lazyLoadElement,
    optimizationStats: {
      optimizedImages: optimizationRef.current.optimizedImages.size,
      preloadedResources: optimizationRef.current.preloadedResources.size,
      lazyLoadedElements: optimizationRef.current.lazyLoadedElements.size
    }
  };
};

export default usePerformanceOptimization;