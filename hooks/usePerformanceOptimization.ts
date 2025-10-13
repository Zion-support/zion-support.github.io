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
    enableCaching = true
  } = options;

  const observerRef = useRef<IntersectionObserver | null>(null);
  const preloadRef = useRef<Set<string>>(new Set());

  // Lazy loading for images
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src]');
    
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observerRef.current?.unobserve(img);
          }
        }
      });
    });

    images.forEach((img) => {
      observerRef.current?.observe(img);
    });
  }, [enableLazyLoading]);

  // Preload critical resources
  const preloadResource = useCallback((href: string, as: string) => {
    if (!enablePreloading || typeof window === 'undefined') return;
    if (preloadRef.current.has(href)) return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
    preloadRef.current.add(href);
  }, [enablePreloading]);

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  // Cache management
  const setupCaching = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined') return;

    // Set cache headers for static assets
    const links = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    links.forEach((link) => {
      if (link instanceof HTMLLinkElement) {
        link.setAttribute('data-cache', 'true');
      }
    });
  }, [enableCaching]);

  // Initialize optimizations
  useEffect(() => {
    setupLazyLoading();
    optimizeImages();
    setupCaching();

    // Preload critical resources
    preloadResource('/styles/main.css', 'style');
    preloadResource('/scripts/main.js', 'script');

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [setupLazyLoading, optimizeImages, setupCaching, preloadResource]);

  return {
    preloadResource,
    setupLazyLoading,
    optimizeImages
  };
};