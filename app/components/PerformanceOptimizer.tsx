'use client';

import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enableCaching = true,
  enableCompression = true,
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (enableLazyLoading && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for non-blocking image loading
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority="low" for below-the-fold images
      if (!img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'low');
      }
    });
  }, [enableImageOptimization, enableLazyLoading]);

  // Resource preloading
  const preloadCriticalResources = useCallback(() => {
    if (!enableCaching) return;

    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/app.js', as: 'script' },
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  }, [enableCaching]);

  // Service Worker registration for caching
  const registerServiceWorker = useCallback(() => {
    if (!enableCaching || typeof window === 'undefined') return;

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, [enableCaching]);

  // Performance monitoring
  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime);
        }
        if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime);
        }
        if (entry.entryType === 'layout-shift') {
          console.log('CLS:', (entry as any).value);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor memory usage
    if ('memory' in performance) {
      const memory = (performance as any).memory;
      console.log('Memory usage:', {
        used: Math.round(memory.usedJSHeapSize / 1048576) + ' MB',
        total: Math.round(memory.totalJSHeapSize / 1048576) + ' MB',
        limit: Math.round(memory.jsHeapSizeLimit / 1048576) + ' MB',
      });
    }
  }, []);

  // Memoized performance optimizations
  const performanceOptimizations = useMemo(() => {
    return {
      imageOptimization: enableImageOptimization,
      lazyLoading: enableLazyLoading,
      codeSplitting: enableCodeSplitting,
      caching: enableCaching,
      compression: enableCompression,
    };
  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enableCaching, enableCompression]);

  useEffect(() => {
    // Run optimizations on mount
    optimizeImages();
    preloadCriticalResources();
    registerServiceWorker();
    monitorPerformance();

    // Re-optimize images when new content is added
    const observer = new MutationObserver(() => {
      optimizeImages();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [optimizeImages, preloadCriticalResources, registerServiceWorker, monitorPerformance]);

  // Return null as this is a utility component
  return null;
};

export default PerformanceOptimizer;