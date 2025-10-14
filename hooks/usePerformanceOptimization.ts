import { useEffect, useCallback, useRef } from 'react';
interface PerformanceMetrics { lcp: number;
  fid: number;
  cls: number;
  fcp: number;
  ttfb: number; }
interface UsePerformanceOptimizationOptions { enablePreloading?: boolean;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean; }
export const usePerformanceOptimization = (options: UsePerformanceOptimizationOptions = {}) => {
  const {
    enablePreloading = true,
    enableImageOptimization = true,
    enableLazyLoading = true,
    enableCodeSplitting = true,
  } = options;
  const metricsRef = useRef<PerformanceMetrics | null>(null);
  const observerRef = useRef<PerformanceObserver | null>(null);
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/images/hero-bg.jpg',
      '/images/logo.svg',
    ];
    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, [enablePreloading]);
  // Optimize images
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
    images.forEach((img) => imageObserver.observe(img));
  }, [enableImageOptimization]);
  // Lazy load components
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;
    const lazyElements = document.querySelectorAll('[data-lazy]');
    const lazyObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          element.classList.add('loaded');
          lazyObserver.unobserve(element);
        }
      });
    });
    lazyElements.forEach((element) => lazyObserver.observe(element));
  }, [enableLazyLoading]);
  // Measure performance metrics
  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            metricsRef.current = {
              ...metricsRef.current,
              lcp: entry.startTime,
            } as PerformanceMetrics;
          }
        });
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      observerRef.current = observer;
    } catch (error) { // Silently handle performance measurement errors }
  }, []);
  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    if (!enableCodeSplitting) return;
    // Preload next likely routes
    const preloadRoute = (route: string) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    };
    // Preload common routes based on user behavior
    const commonRoutes = ['/about', '/services', '/contact'];
    commonRoutes.forEach(preloadRoute);
  }, [enableCodeSplitting]);
  // Cleanup function
  const cleanup = useCallback(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
  }, []);
  useEffect(() => {
    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();
    setupLazyLoading();
    measurePerformance();
    optimizeBundleLoading();
    // Cleanup on unmount
    return cleanup;
  }, [
    preloadCriticalResources,
    optimizeImages,
    setupLazyLoading,
    measurePerformance,
    optimizeBundleLoading,
    cleanup,
  ]);
  return {
    metrics: metricsRef.current,
    preloadCriticalResources,
    optimizeImages,
    setupLazyLoading,
    measurePerformance,
    optimizeBundleLoading,
  };
};