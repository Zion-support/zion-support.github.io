import { useEffect, useCallback, useRef } from 'react';

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
    enableImageOptimization = true,

    // enableCodeSplitting = true,
    enableCaching = true,
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);

  // Lazy loading for images
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.getAttribute('data-src');
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              img.classList.add('loaded');
              observerRef.current?.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.01,
      }
    );

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/inter.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      
      if (resource.endsWith('.woff2')) {
        link.as = 'font';
        link.type = 'font/woff2';
        link.crossOrigin = 'anonymous';
      } else if (resource.endsWith('.jpg') || resource.endsWith('.png')) {
        link.as = 'image';
      }
      
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    
    images.forEach((img) => {
      // Add loading="lazy" for non-critical images
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
      
      // Add proper alt text if missing
      if (!img.hasAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }, [enableImageOptimization]);

  // Service Worker registration for caching
  const registerServiceWorker = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(() => {
            })
          .catch(() => {
            });
      });
    }
  }, [enableCaching]);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.duration > 50) {
<<<<<<< HEAD
            // Handle long task
=======
            // Long task detected
>>>>>>> f79fb9e5ca53251693aa9e67e477c500c97551c0
          }
        }
      });
      
      try {
        observer.observe({ entryTypes: ['longtask'] });
      } catch {
        // Long task observer not supported
      }
    }

    // Monitor memory usage
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usedMB = Math.round(memory.usedJSHeapSize / 1048576);
        const totalMB = Math.round(memory.totalJSHeapSize / 1048576);
        
        if (usedMB / totalMB > 0.8) {
<<<<<<< HEAD
          // Handle high memory usage
=======
          // High memory usage detected
>>>>>>> f79fb9e5ca53251693aa9e67e477c500c97551c0
        }
      };
      
      setInterval(checkMemory, 30000); // Check every 30 seconds
    }
  }, []);

  // Resource hints
  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      Object.entries(hint).forEach(([key, value]) => {
        if (key === 'crossOrigin') {
          link.setAttribute('crossorigin', value as string);
        } else {
          link.setAttribute(key, value as string);
        }
      });
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    // Initialize all optimizations
    setupLazyLoading();
    preloadCriticalResources();
    optimizeImages();
    registerServiceWorker();
    setupPerformanceMonitoring();
    addResourceHints();

    // Cleanup
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [
    setupLazyLoading,
    preloadCriticalResources,
    optimizeImages,
    registerServiceWorker,
    setupPerformanceMonitoring,
    addResourceHints,
  ]);

  return {
    setupLazyLoading,
    preloadCriticalResources,
    optimizeImages,
    registerServiceWorker,
    setupPerformanceMonitoring,
  };
};