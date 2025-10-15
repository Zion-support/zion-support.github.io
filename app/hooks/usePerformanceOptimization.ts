import { useEffect, useCallback, useRef } from 'react';
import { performanceMonitor } from '../utils/performanceUtils';

interface PerformanceConfig {
  enableLazyLoading: boolean;
  enableImageOptimization: boolean;
  enableCodeSplitting: boolean;
  enablePrefetching: boolean;
  enableCaching: boolean;
}

export const usePerformanceOptimization = (config: Partial<PerformanceConfig> = {}) => {
  const defaultConfig: PerformanceConfig = {
    enableLazyLoading: true,
    enableImageOptimization: true,
    enableCodeSplitting: true,
    enablePrefetching: true,
    enableCaching: true,
    ...config
  };

  const observerRef = useRef<IntersectionObserver | null>(null);
  const prefetchedResources = useRef<Set<string>>(new Set());

  // Initialize performance monitoring
  useEffect(() => {
    performanceMonitor.init();
    return () => performanceMonitor.dispose();
  }, []);

  // Lazy loading for images
  const setupLazyLoading = useCallback(() => {
    if (!defaultConfig.enableLazyLoading || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if (images.length === 0) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.remove('lazy');
              img.classList.add('loaded');
              
              observerRef.current?.unobserve(img);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [defaultConfig.enableLazyLoading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!defaultConfig.enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for non-blocking image decoding
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }, [defaultConfig.enableImageOptimization]);

  // Resource prefetching
  const prefetchResource = useCallback((url: string, type: 'script' | 'style' | 'image' | 'fetch' = 'fetch') => {
    if (!defaultConfig.enablePrefetching || prefetchedResources.current.has(url)) return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    link.as = type;
    
    document.head.appendChild(link);
    prefetchedResources.current.add(url);
  }, [defaultConfig.enablePrefetching]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Preload critical CSS
    const criticalCSS = document.querySelector('link[rel="stylesheet"][data-critical]');
    if (criticalCSS) {
      criticalCSS.setAttribute('rel', 'preload');
      criticalCSS.setAttribute('as', 'style');
      criticalCSS.addEventListener('load', () => {
        criticalCSS.setAttribute('rel', 'stylesheet');
      });
    }

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);
  }, []);

  // Service Worker registration for caching
  const registerServiceWorker = useCallback(() => {
    if (!defaultConfig.enableCaching || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }, [defaultConfig.enableCaching]);

  // Debounce function for performance
  const debounce = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }, []);

  // Throttle function for performance
  const throttle = useCallback(<T extends (...args: any[]) => any>(
    func: T,
    limit: number
  ): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
      if (!inThrottle) {
        func(...args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }, []);

  // Memory usage monitoring
  const monitorMemoryUsage = useCallback(() => {
    if (typeof window === 'undefined' || !('memory' in performance)) return;

    const memory = (performance as any).memory;
    if (memory) {
      const usedJSHeapSize = memory.usedJSHeapSize / 1048576; // Convert to MB
      const totalJSHeapSize = memory.totalJSHeapSize / 1048576;
      const jsHeapSizeLimit = memory.jsHeapSizeLimit / 1048576;

      if (usedJSHeapSize > jsHeapSizeLimit * 0.8) {
        console.warn('High memory usage detected:', {
          used: `${usedJSHeapSize.toFixed(2)}MB`,
          total: `${totalJSHeapSize.toFixed(2)}MB`,
          limit: `${jsHeapSizeLimit.toFixed(2)}MB`
        });
      }
    }
  }, []);

  // Initialize all optimizations
  useEffect(() => {
    setupLazyLoading();
    optimizeImages();
    preloadCriticalResources();
    registerServiceWorker();

    // Monitor memory usage periodically
    const memoryInterval = setInterval(monitorMemoryUsage, 30000);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      clearInterval(memoryInterval);
    };
  }, [setupLazyLoading, optimizeImages, preloadCriticalResources, registerServiceWorker, monitorMemoryUsage]);

  // Get performance metrics
  const getPerformanceMetrics = useCallback(() => {
    return performanceMonitor.getPerformanceSummary();
  }, []);

  // Clear performance data
  const clearPerformanceData = useCallback(() => {
    performanceMonitor.clearMetrics();
  }, []);

  return {
    prefetchResource,
    debounce,
    throttle,
    getPerformanceMetrics,
    clearPerformanceData,
    monitorMemoryUsage
  };
};

export default usePerformanceOptimization;