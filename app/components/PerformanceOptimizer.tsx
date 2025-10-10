'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Image optimization
    if (enableImageOptimization) {
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          if (!img.loading) {
            img.loading = 'lazy';
          }
          if (!img.decoding) {
            img.decoding = 'async';
          }
        });
      };

      optimizeImages();
    }

    // Lazy loading
    if (enableLazyLoading) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              imageObserver.unobserve(img);
            }
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }
    }

    // Preload critical resources
    if (enablePreloading) {
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/fonts/inter.woff2',
          '/css/critical.css'
        ];

        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.href = resource;
          link.as = resource.endsWith('.css') ? 'style' : 'font';
          if (resource.endsWith('.woff2')) {
            link.crossOrigin = 'anonymous';
          }
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }

    // Code splitting optimization
    if (enableCodeSplitting) {
      const optimizeCodeSplitting = () => {
        // Preload next likely routes
        const nextRoutes = ['/about', '/services', '/contact'];
        nextRoutes.forEach((route) => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          document.head.appendChild(link);
        });
      };

      // Delay prefetching to not interfere with critical resources
      setTimeout(optimizeCodeSplitting, 2000);
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
        observer?.disconnect();
      }
    };
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;