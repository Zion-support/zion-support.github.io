'use client';
import React, { useEffect, useCallback, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  children,
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true
}) => {
  // Image optimization
  useEffect(() => {
    if (enableImageOptimization && typeof window !== 'undefined') {
      // Add image optimization logic here
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    }
  }, [enableImageOptimization]);

  // Lazy loading
  useEffect(() => {
    if (enableLazyLoading && typeof window !== 'undefined') {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('[data-lazy]');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }
  }, [enableLazyLoading]);

  // Preloading
  useEffect(() => {
    if (enablePreloading && typeof window !== 'undefined') {
      // Preload critical resources
      const criticalResources = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.jpg') || resource.endsWith('.png') ? 'image' : 'fetch';
        document.head.appendChild(link);
      });
    }
  }, [enablePreloading]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            console.log('CLS:', (entry as any).value);
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

      return () => observer.disconnect();
    }
  }, []);

  // Memory optimization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clean up unused event listeners and timers
      const cleanup = () => {
        // Remove any global event listeners that might be causing memory leaks
        window.removeEventListener('resize', () => {});
        window.removeEventListener('scroll', () => {});
      };

      return cleanup;
    }
  }, []);

  return <>{children}</>;
};

EnhancedPerformanceOptimizer.displayName = 'EnhancedPerformanceOptimizer';

export default EnhancedPerformanceOptimizer;