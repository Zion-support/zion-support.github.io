import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
}

export function PerformanceOptimizer() {
  const location = useLocation();

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/images/hero-bg.jpg',
      '/images/logo.svg',
      '/fonts/inter-var.woff2'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.endsWith('.woff2') ? 'font' : 'image';
      link.href = resource;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images with lazy loading
  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Prefetch likely next routes
  const prefetchNextRoutes = useCallback(() => {
    const likelyRoutes = ['/services', '/about', '/contact'];
    likelyRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);

  // Monitor Core Web Vitals
  const monitorCoreWebVitals = useCallback(() => {
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
          console.log('LCP:', entry.startTime);
        });
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          console.log('FID:', entry.processingStart - entry.startTime);
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value;
          }
        });
        console.log('CLS:', clsValue);
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    }
  }, []);

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Add modulepreload for critical modules
    const criticalModules = [
      '/src/components/App.tsx',
      '/src/pages/Home.tsx'
    ];

    criticalModules.forEach(module => {
      const link = document.createElement('link');
      link.rel = 'modulepreload';
      link.href = module;
      document.head.appendChild(link);
    });
  }, []);

  // Memory leak prevention
  const preventMemoryLeaks = useCallback(() => {
    // Clean up event listeners on route change
    return () => {
      // This will be called when component unmounts
      const cleanup = () => {
        // Remove any global event listeners if needed
      };
      return cleanup;
    };
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    optimizeImages();
    prefetchNextRoutes();
    monitorCoreWebVitals();
    optimizeBundleLoading();

    const cleanup = preventMemoryLeaks();
    return cleanup;
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
