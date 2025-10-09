'use client';
import React, { useEffect } from 'react';
import { getPerformanceMonitor } from '../utils/performanceMonitor';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enableCodeSplitting?: boolean;
  enablePrefetching?: boolean;
  enablePerformanceMonitoring?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enableCodeSplitting = true,
  enablePrefetching = true,
  enablePerformanceMonitoring = true,
}) => {
  useEffect(() => {
    // Initialize performance monitoring
    if (enablePerformanceMonitoring && typeof window !== 'undefined') {
      const monitor = getPerformanceMonitor();
      
      // Report metrics after a delay to allow for measurements
      const timeoutId = setTimeout(() => {
        monitor.reportMetrics();
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [enablePerformanceMonitoring]);

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
        // Add error handling
        img.addEventListener('error', () => {
          console.warn('Image failed to load:', img.src);
        });
      });
    }

    // Prefetch critical resources
    if (enablePrefetching && typeof window !== 'undefined') {
      const prefetchLinks = [
        '/services',
        '/contact',
        '/ai-solutions',
        '/it-services',
      ];

      prefetchLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Preload critical fonts
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
      ];

      fontLinks.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    }

    // Resource hints for better performance
    if (typeof window !== 'undefined') {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        'https://www.google-analytics.com',
        'https://www.googletagmanager.com',
      ];

      dnsPrefetchDomains.forEach((domain) => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      });
    }
  }, [enableImageOptimization, enableLazyLoading, enableCodeSplitting, enablePrefetching]);

  return null;
};

export default PerformanceOptimizer;
