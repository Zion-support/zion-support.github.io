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
    // Image optimization
    if (enableImageOptimization && typeof window !== 'undefined') {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }

    // Preload critical resources
    if (enablePreloading && typeof window !== 'undefined') {
      const preloadLinks = [
        { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
        { href: '/css/critical.css', as: 'style' }
      ];

      preloadLinks.forEach((link) => {
        const linkElement = document.createElement('link');
        linkElement.rel = 'preload';
        linkElement.href = link.href;
        linkElement.as = link.as;
        if (link.type) linkElement.type = link.type;
        if (link.crossorigin) linkElement.crossOrigin = link.crossorigin;
        document.head.appendChild(linkElement);
      });
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
          if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['navigation', 'paint'] });
      } catch (e) {
        console.warn('Performance Observer not supported');
      }
    }
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;