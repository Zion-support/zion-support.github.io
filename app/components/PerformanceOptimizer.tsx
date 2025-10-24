'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableResourcePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableLazyLoading?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableResourcePreloading = true,
  enableCodeSplitting = true,
  enableLazyLoading = true
}) => {
  useEffect(() => {
    const startTime = performance.now();

    // Preload critical fonts
    if (enableResourcePreloading) {
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical CSS
      const cssLink = document.createElement('link');
      cssLink.rel = 'preload';
      cssLink.href = '/css/critical.css';
      cssLink.as = 'style';
      document.head.appendChild(cssLink);
    }

    // Preload critical images
    if (enableImageOptimization) {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    }

    // Lazy loading for images
    if (enableLazyLoading && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Code splitting optimization
    if (enableCodeSplitting) {
      // Preload next route
      const nextLink = document.querySelector('a[href]') as HTMLAnchorElement;
      if (nextLink) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = nextLink.href;
        document.head.appendChild(link);
      }
    }

    // Measure render time
    const renderTime = performance.now() - startTime;
    console.log(`Performance optimization completed in ${renderTime.toFixed(2)}ms`);

    return () => {
      // Cleanup
      const preloadLinks = document.querySelectorAll('link[rel="preload"]');
      preloadLinks.forEach(link => link.remove());
    };
  }, [enableImageOptimization, enableResourcePreloading, enableCodeSplitting, enableLazyLoading]);

  return null;
};

export default PerformanceOptimizer;