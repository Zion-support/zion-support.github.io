'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true
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

    // Lazy loading for images
    if (enableLazyLoading && typeof window !== 'undefined') {
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
      lazyImages.forEach((img) => imageObserver.observe(img));
    }

    // Prefetch critical resources
    if (enablePrefetching && typeof window !== 'undefined') {
      const criticalResources = [
        '/fonts/orbitron.woff2',
        '/fonts/rajdhani.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = resource;
        document.head.appendChild(link);
      });
    }
  }, [enableImageOptimization, enableLazyLoading, enablePrefetching]);

  return null;
};

export default PerformanceOptimizer;