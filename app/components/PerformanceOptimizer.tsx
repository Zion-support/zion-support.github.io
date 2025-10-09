'use client';
import React from 'react';

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
  React.useEffect(() => {
    if (typeof window === 'undefined') return;

    // Preload critical resources
    if (enablePrefetching) {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.jpg'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    }

    // Optimize images
    if (enableImageOptimization) {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }
  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enablePrefetching]);

  return null;
};

export default PerformanceOptimizer;