'use client';

import React, { useCallback, useEffect, memo } from 'react';

interface PerformanceOptimizationsProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
}

const PerformanceOptimizations: React.FC<PerformanceOptimizationsProps> = memo(({
  enableImageOptimization = true, enablePreloading = true, enableResourceHints = true
}) => {
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img');
    images.forEach(img => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
      if (!img.decoding) {
        img.decoding = 'async';
      }
      if (img.getBoundingClientRect().top <= window.innerHeight && !img.hasAttribute('fetchpriority')) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const _criticalResources = [
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
  }, [enablePreloading]);

  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const _hints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
    ];

<<<<<<< HEAD
    _hints.forEach(hint => {
      const _link = document.createElement('link');
      _link.rel = hint.rel;
      _link.href = hint.href;
      if (hint.crossOrigin) _link.crossOrigin = hint.crossOrigin;
      document.head.appendChild(_link);
=======
    hints.forEach(hint => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      if (hint.crossOrigin) link.crossOrigin = hint.crossOrigin;
      document.head.appendChild(link);
>>>>>>> cursor/fix-errors-and-merge-to-main-0a51
    });
  }, [enableResourceHints]);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

<<<<<<< HEAD
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
=======
    let __ticking = false;
    const _handleScroll = () => {
      if (!__ticking) {
>>>>>>> cursor/fix-errors-and-merge-to-main-0a51
        requestAnimationFrame(() => {
          // Throttled scroll handling
          ticking = false;
        });
        ticking = true;
      }
    };

<<<<<<< HEAD
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
=======
    window.addEventListener('scroll', _handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', _handleScroll);
>>>>>>> cursor/fix-errors-and-merge-to-main-0a51
  }, []);

  // Optimize resize performance
  const optimizeResizePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

<<<<<<< HEAD
    let ticking = false;
    const handleResize = () => {
      if (!ticking) {
=======
    let __ticking = false;
    const _handleResize = () => {
      if (!__ticking) {
>>>>>>> cursor/fix-errors-and-merge-to-main-0a51
        requestAnimationFrame(() => {
          // Throttled resize handling
          optimizeImages();
          ticking = false;
        });
        ticking = true;
      }
    };

<<<<<<< HEAD
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
=======
    window.addEventListener('resize', _handleResize, { passive: true });
    return () => window.removeEventListener('resize', _handleResize);
>>>>>>> cursor/fix-errors-and-merge-to-main-0a51
  }, [optimizeImages]);

  // Intersection Observer for lazy loading
  const setupIntersectionObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Load images when they come into view
          if (element.tagName === 'IMG') {
            const img = element as HTMLImageElement;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
              observer.unobserve(element);
            }
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.1
    });

    // Observe all images with data-src
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
<<<<<<< HEAD
    optimizeScrollPerformance();
    optimizeResizePerformance();
    setupIntersectionObserver();
  }, [optimizeScrollPerformance, optimizeResizePerformance, setupIntersectionObserver]);

  useEffect(() => {
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-0a51
    optimizeImages();
    preloadCriticalResources();
    addResourceHints();
  }, [optimizeImages, preloadCriticalResources, addResourceHints]);

  return null;
});

PerformanceOptimizations.displayName = 'PerformanceOptimizations';

export default PerformanceOptimizations;
