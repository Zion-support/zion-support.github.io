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
    // Preload critical resources
    if (enablePreloading) {
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
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
        // Add loading="lazy" for images below the fold
        if (enableLazyLoading && !img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    }

    // Prefetch next page resources
    if (enablePreloading) {
      const prefetchLinks = [
        '/about',
        '/services',
        '/contact'
      ];

      prefetchLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        document.head.appendChild(link);
      });
    }

    // Optimize scroll performance
    let ticking = false;
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttle scroll events
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', optimizeScroll);
    };
  }, [enableImageOptimization, enableLazyLoading, enablePreloading, enableCodeSplitting]);

  return null;
};

export default PerformanceOptimizer;