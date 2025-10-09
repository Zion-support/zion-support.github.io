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
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    }

    // Prefetch critical resources
    if (enablePrefetching && typeof window !== 'undefined') {
      const prefetchLinks = [
        '/contact',
        '/services',
        '/ai-solutions'
      ];

      prefetchLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }

    // Service Worker registration for caching
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => {
        // Service worker registration failed, continue without it
      });
    }
  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enablePrefetching]);

  return null;
};

export default PerformanceOptimizer;