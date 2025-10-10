'use client';

import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  _enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  useEffect(() => {
    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontPreload.as = 'style';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const _criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const _link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    }

    // Optimize images
    if (enableImageOptimization && typeof window !== 'undefined') {
      const _images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add _loading="lazy" for non-critical images
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.loading = 'lazy';
        }

        // Add _decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.decoding = 'async';
        }
      });
    }

    // Intersection Observer for lazy loading
    if (enableLazyLoading && typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const _imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      });

      const _lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => imageObserver.observe(img));
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const _observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            // console.log(...);
          }
          if (entry.entryType === 'first-input') {
            // console.log(...);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
      } catch (e) {
        // Fallback for browsers that don't support these entry types
      }
    }

    // Resource hints for better performance
    if (typeof window !== 'undefined') {
      // DNS prefetch for external domains
      const _dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com',
        'www.google-analytics.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const _link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;