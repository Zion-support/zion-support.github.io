import React, { useEffect, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export const PerformanceOptimizer: React.FC = () => {
  const location = useLocation();

  // Performance monitoring
  const measurePerformance = useCallback(() => {
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            console.log('FCP:', entry.startTime);
          }
        });
      });
      fcpObserver.observe({ entryTypes: ['paint'] });

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalPaths = [
      '/src/pages/Home.tsx',
      '/src/layout/AppHeader.tsx',
      '/src/components/ui/LoadingSpinner.tsx'
    ];

    criticalPaths.forEach(path => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = path;
      link.as = 'script';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
    });
  }, []);

  // Route-based code splitting optimization
  const optimizeRouteLoading = useCallback(() => {
    const currentPath = location.pathname;
    
    // Preload next likely routes based on current location
    if (currentPath === '/') {
      // Preload services page when on home
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = '/src/pages/Services.tsx';
      document.head.appendChild(link);
    }
  }, [location.pathname]);

  // Memory management
  const cleanupMemory = useCallback(() => {
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      if (memory.usedJSHeapSize > 50 * 1024 * 1024) { // 50MB threshold
        console.warn('High memory usage detected');
        // Trigger garbage collection if available
        if ('gc' in window) {
          (window as any).gc();
        }
      }
    }
  }, []);

  useEffect(() => {
    measurePerformance();
    preloadCriticalResources();
    
    // Cleanup on unmount
    return () => {
      // Cleanup performance observers
      if ('PerformanceObserver' in window) {
        // Cleanup logic would go here
      }
    };
  }, [measurePerformance, preloadCriticalResources]);

  useEffect(() => {
    optimizeRouteLoading();
  }, [optimizeRouteLoading]);

  useEffect(() => {
    // Run optimizations after route change
    const timer = setTimeout(() => {
      optimizeImages();
      cleanupMemory();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, optimizeImages, cleanupMemory]);

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.src) {
              target.src = target.dataset.src;
              target.removeAttribute('data-src');
              observer.unobserve(target);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null; // This component doesn't render anything
};
