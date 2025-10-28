'use client';

import React, { useCallback, useEffect, memo } from 'react';

interface PerformanceOptimizationsProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceOptimizations: React.FC<PerformanceOptimizationsProps> = memo(({
  enableImageOptimization = true, enablePreloading: _enablePreloading = true, enableResourceHints: _enableResourceHints = true
}) => {
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      // Add loading="lazy" if not already present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (!_enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/images/hero-bg.jpg', as: 'image' },
      { href: '/images/logo.png', as: 'image' }
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
      document.head.appendChild(link);
    });
  }, [_enablePreloading]);

  const addResourceHints = useCallback(() => {
    if (!_enableResourceHints || typeof window === 'undefined') return;

    const hints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
    ];

    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
      document.head.appendChild(link);
    });
  }, [_enableResourceHints]);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    let __ticking = false;
    const _handleScroll = () => {
      if (!__ticking) {
        requestAnimationFrame(() => {
          // Throttled scroll handling
          __ticking = false;
        });
        __ticking = true;
      }
    };

    window.addEventListener('scroll', _handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', _handleScroll);
  }, []);

  // Optimize resize performance
  const optimizeResizePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    let __ticking = false;
    const _handleResize = () => {
      if (!__ticking) {
        requestAnimationFrame(() => {
          // Throttled resize handling
          optimizeImages();
          __ticking = false;
        });
        __ticking = true;
      }
    };

    window.addEventListener('resize', _handleResize, { passive: true });
    return () => window.removeEventListener('resize', _handleResize);
  }, [optimizeImages]);

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    addResourceHints();
    const scrollCleanup = optimizeScrollPerformance();
    const resizeCleanup = optimizeResizePerformance();
    const observerCleanup = setupIntersectionObserver();

    return () => {
      scrollCleanup?.();
      resizeCleanup?.();
      observerCleanup?.();
    };
  }, [optimizeImages, preloadCriticalResources, addResourceHints, optimizeScrollPerformance, optimizeResizePerformance, setupIntersectionObserver]);

  return null;
});

PerformanceOptimizations.displayName = 'PerformanceOptimizations';

export default PerformanceOptimizations;