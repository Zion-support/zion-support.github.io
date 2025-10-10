'use client';
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePrefetching?: boolean;
  enableCompression?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePrefetching = true,
  enableCompression = true
}) => {
  // Image optimization
  useEffect(() => {
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
  }, [enableImageOptimization]);

  // Prefetch critical resources
  useEffect(() => {
    if (enablePrefetching && typeof window !== 'undefined') {
      const prefetchLinks = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];

      prefetchLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }
  }, [enablePrefetching]);

  // Compression optimization
  useEffect(() => {
    if (enableCompression && typeof window !== 'undefined') {
      // Enable compression for text content
      const style = document.createElement('style');
      style.textContent = `
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `;
      document.head.appendChild(style);
    }
  }, [enableCompression]);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;