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
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src!;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
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
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          console.log('LCP:', lastEntry.startTime);
        }
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

  // Optimize bundle loading
  const optimizeBundleLoading = useCallback(() => {
    // Prefetch next likely routes
    const prefetchRoutes = ['/services', '/about', '/contact'];
    prefetchRoutes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, []);

  // Memory leak prevention
  const preventMemoryLeaks = useCallback(() => {
    // Clean up event listeners on route change
    return () => {
      // Cleanup logic here
    };
  }, []);

  useEffect(() => {
    preloadCriticalResources();
    optimizeImages();
    monitorCoreWebVitals();
    optimizeBundleLoading();
    
    return preventMemoryLeaks();
  }, [preloadCriticalResources, optimizeImages, monitorCoreWebVitals, optimizeBundleLoading, preventMemoryLeaks]);

  // Route change optimization
  useEffect(() => {
    // Prefetch next page data
    const prefetchNextPage = () => {
      // Implementation for prefetching next page data
    };

    prefetchNextPage();
  }, [location.pathname]);

  return null; // This component doesn't render anything
}
