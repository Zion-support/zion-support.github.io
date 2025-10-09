'use client';

import React, { useEffect, useCallback } from 'react';

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
  enableCodeSplitting = true,
}) => {
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (enableLazyLoading && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add fetchpriority="auto" for above-the-fold images
      if (img.getBoundingClientRect().top < window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization, enableLazyLoading]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/globals.css';
    criticalCSS.as = 'style';
    document.head.appendChild(criticalCSS);
  }, [enablePreloading]);

  const optimizeCodeSplitting = useCallback(() => {
    if (!enableCodeSplitting || typeof window === 'undefined') return;

    // Preload critical components
    const preloadComponents = () => {
      const criticalComponents = [
        '/components/Navigation',
        '/components/Footer',
        '/components/SEOOptimizer',
      ];

      criticalComponents.forEach((component) => {
        const link = document.createElement('link');
        link.rel = 'modulepreload';
        link.href = component;
        document.head.appendChild(link);
      });
    };

    // Delay preloading to not block initial render
    setTimeout(preloadComponents, 100);
  }, [enableCodeSplitting]);

  const setupPerformanceMonitoring = useCallback(() => {
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
          console.log('CLS:', entry.value);
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    // Monitor resource loading
    const resourceObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.duration > 1000) {
          console.warn('Slow resource:', entry.name, entry.duration);
        }
      });
    });

    resourceObserver.observe({ entryTypes: ['resource'] });
  }, []);

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      optimizeCodeSplitting();
      setupPerformanceMonitoring();
    }, 100);

    return () => clearTimeout(timer);
  }, [optimizeImages, preloadCriticalResources, optimizeCodeSplitting, setupPerformanceMonitoring]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;