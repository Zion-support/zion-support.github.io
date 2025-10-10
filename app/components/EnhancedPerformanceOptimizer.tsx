'use client';
import React, { useEffect, memo } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  children?: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = memo(({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  children
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
      const preloadCriticalResources = () => {
        // Preload critical CSS
        const criticalCSS = document.createElement('link');
        criticalCSS.rel = 'preload';
        criticalCSS.href = '/styles/critical.css';
        criticalCSS.as = 'style';
        document.head.appendChild(criticalCSS);

        // Preload critical fonts
        const criticalFont = document.createElement('link');
        criticalFont.rel = 'preload';
        criticalFont.href = '/fonts/inter-var.woff2';
        criticalFont.as = 'font';
        criticalFont.type = 'font/woff2';
        criticalFont.crossOrigin = 'anonymous';
        document.head.appendChild(criticalFont);
      };

      // Run after initial load
      if (document.readyState === 'complete') {
        preloadCriticalResources();
      } else {
        window.addEventListener('load', preloadCriticalResources);
      }
    }

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', entry.value);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }

    // Cleanup
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('load', preloadCriticalResources);
      }
    };
  }, [enableImageOptimization, enablePreloading]);

  return <>{children}</>;
});

PerformanceOptimizer.displayName = 'PerformanceOptimizer';

export default PerformanceOptimizer;