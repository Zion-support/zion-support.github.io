import { useCallback, useEffect, useRef } from 'react';

interface UseEnhancedPerformanceOptions {
  enablePreloading?: boolean;
  enableLazyLoading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
  enableOptimization?: boolean;
}

export const useEnhancedPerformance = (options: UseEnhancedPerformanceOptions = {}) => {
  const {
    enablePreloading = true,
    enableLazyLoading = true,
    enableCaching = true,
    enableCompression = true,
    enableOptimization = true
  } = options;

  const performanceRef = useRef<{
    startTime: number;
    endTime: number;
    duration: number;
  }>({
    startTime: 0,
    endTime: 0,
    duration: 0
  });

  const startTiming = useCallback(() => {
    performanceRef.current.startTime = performance.now();
  }, []);

  const endTiming = useCallback(() => {
    performanceRef.current.endTime = performance.now();
    performanceRef.current.duration = performanceRef.current.endTime - performanceRef.current.startTime;
  }, []);

  const preloadResource = useCallback((href: string, as: string) => {
    if (!enablePreloading || typeof document === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }, [enablePreloading]);

  const lazyLoadImage = useCallback((img: HTMLImageElement, src: string) => {
    if (!enableLazyLoading) {
      img.src = src;
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = src;
          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);
  }, [enableLazyLoading]);

  const optimizeImage = useCallback((src: string, width?: number, height?: number) => {
    if (!enableOptimization) return src;

    const url = new URL(src);
    if (width) url.searchParams.set('w', width.toString());
    if (height) url.searchParams.set('h', height.toString());
    url.searchParams.set('q', '80');
    url.searchParams.set('f', 'auto');

    return url.toString();
  }, [enableOptimization]);

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
    if (!enableCaching) return;

    const cacheName = 'zion-tech-cache-v1';
    const urlsToCache = [
      '/',
      '/about',
      '/services',
      '/contact'
    ];

    if ('caches' in window) {
      caches.open(cacheName).then((cache) => {
        cache.addAll(urlsToCache);
      });
    }
  }, [enableCaching]);

  const enableCompression = useCallback(() => {
    if (!enableCompression) return;

    // Enable gzip compression for text resources
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
    startTiming();
    
    if (enablePreloading) {
      // Preload critical resources
      preloadResource('/fonts/main.woff2', 'font');
      preloadResource('/images/hero.jpg', 'image');
    }

    if (enableCaching) {
      enableCaching();
    }

    if (enableCompression) {
      enableCompression();
    }

    if (enableServiceWorker) {
      enableServiceWorker();
    }

    return () => {
      endTiming();
    };
  }, [startTiming, endTiming, preloadResource, enableCaching, enableCompression, enableServiceWorker, enablePreloading]);

  return {
    startTiming,
    endTiming,
    preloadResource,
    lazyLoadImage,
    optimizeImage,
    performance: performanceRef.current
  };
};

export default useEnhancedPerformance;