import { useState, useEffect, useCallback, useRef } from 'react';

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

  const [isOptimized, setIsOptimized] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;

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
        threshold: 0.01
      }
    );

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      '/fonts/main-font.woff2',
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

  const addResourceHints = useCallback(() => {
    if (typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' }
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

  const setupPerformanceMonitoring = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        console.log('Performance metric:', entry.name, entry.value);
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
  }, []);

  useEffect(() => {
    setupLazyLoading();
    preloadCriticalResources();
    optimizeImages();
    addResourceHints();
    setupPerformanceMonitoring();
    setIsOptimized(true);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupLazyLoading, preloadCriticalResources, optimizeImages, addResourceHints, setupPerformanceMonitoring]);

  return { isOptimized };
};