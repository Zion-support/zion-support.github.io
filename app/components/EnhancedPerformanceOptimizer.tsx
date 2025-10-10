'use client';
import React, { useEffect, useCallback } from 'react';
import { useAnalytics } from './EnhancedAnalytics';

interface PerformanceMetrics {
  lcp: number | null;
  fid: number | null;
  cls: number | null;
  fcp: number | null;
  ttfb: number | null;
}

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableCodeSplitting?: boolean;
  children: React.ReactNode;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableCodeSplitting = true,
  children
}) => {
  const { trackEvent } = useAnalytics();
  const [metrics, setMetrics] = React.useState<PerformanceMetrics>({
    lcp: null,
    fid: null,
    cls: null,
    fcp: null,
    ttfb: null
  });

  // Optimize images
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add proper alt text if missing
      if (!img.getAttribute('alt')) {
        img.setAttribute('alt', '');
      }
    });
  }, [enableImageOptimization]);

  // Setup lazy loading
  const setupLazyLoading = useCallback(() => {
    if (!enableLazyLoading) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          if (target.dataset.src) {
            target.style.backgroundImage = `url(${target.dataset.src})`;
            target.removeAttribute('data-src');
            observer.unobserve(target);
          }
        }
      });
    });

    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach((el) => observer.observe(el));
  }, [enableLazyLoading]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

    const criticalImages = document.querySelectorAll('img[data-critical]');
    criticalImages.forEach((img) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.getAttribute('src') || '';
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  // Track performance metrics
  const trackPerformanceMetrics = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (entry.entryType === 'largest-contentful-paint') {
            setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
          }
          if (entry.entryType === 'first-input') {
            setMetrics(prev => ({ ...prev, fid: entry.processingStart - entry.startTime }));
          }
          if (entry.entryType === 'layout-shift') {
            setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + (entry as any).value }));
          }
        });
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }
  }, []);

  useEffect(() => {
    // Run optimizations after component mount
    const timer = setTimeout(() => {
      optimizeImages();
      setupLazyLoading();
      preloadCriticalResources();
      trackPerformanceMetrics();
    }, 100);

    return () => clearTimeout(timer);
  }, [optimizeImages, setupLazyLoading, preloadCriticalResources, trackPerformanceMetrics]);

  // Track performance events
  useEffect(() => {
    if (metrics.lcp && metrics.lcp < 2500) {
      trackEvent('performance', 'good_lcp', { value: metrics.lcp });
    } else if (metrics.lcp && metrics.lcp > 4000) {
      trackEvent('performance', 'poor_lcp', { value: metrics.lcp });
    }
  }, [metrics.lcp, trackEvent]);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;