'use client';
import React, { useEffect, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enablePreloading = true,
  enableCodeSplitting = true,
  enableImageOptimization = true,
  enableLazyLoading = true
}) => {
  useEffect(() => {
    // Performance optimizations
    if (enablePreloading) {
      // Preload critical resources
      const preloadCriticalResources = () => {
        const criticalImages = [
          '/images/hero-bg.jpg',
          '/images/logo.png'
        ];

        criticalImages.forEach(src => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          document.head.appendChild(link);
        });
      };

      preloadCriticalResources();
    }

    if (enableCodeSplitting) {
      // Enable code splitting optimizations
      const optimizeCodeSplitting = () => {
        // Add module preload hints for critical chunks
        const criticalChunks = ['main', 'vendor'];
        criticalChunks.forEach(chunk => {
          const link = document.createElement('link');
          link.rel = 'modulepreload';
          link.href = `/js/${chunk}.js`;
          document.head.appendChild(link);
        });
      };

      optimizeCodeSplitting();
    }

    if (enableImageOptimization) {
      // Image optimization
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
          // Add loading="lazy" for non-critical images
          if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Add decoding="async" for better performance
          if (!img.hasAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
        });
      };

      // Run after DOM is loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', optimizeImages);
      } else {
        optimizeImages();
      }
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
          if (entry.entryType === 'paint') {
            console.log('Paint timing:', entry);
          }
        }
      });

      observer.observe({ entryTypes: ['navigation', 'paint'] });
    }

  }, [enablePreloading, enableCodeSplitting, enableImageOptimization, enableLazyLoading]);

  return <>{children}</>;
};

export default PerformanceOptimizer;