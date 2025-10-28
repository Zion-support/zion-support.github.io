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
  const __optimizeImages = useCallback(() => {
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

  const _preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const _criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
      { href: '/images/hero-bg.jpg', as: 'image' },
      { href: '/images/logo.png', as: 'image' }
    ];

    _criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.type) link.type = resource.type;
      if (resource.crossOrigin) link.crossOrigin = resource.crossOrigin;
      document.head.appendChild(link);
    });
  }, [enablePreloading]);

  const _addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const _hints = [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
    ];

    _hints.forEach(hint => {
      const _link = document.createElement('link');
      _link.rel = hint.rel;
      _link.href = hint.href;
      if (hint.crossOrigin) _link.crossOrigin = hint.crossOrigin;
      document.head.appendChild(_link);
    });
  }, [enableResourceHints]);

  // Optimize scroll performance
  const _optimizeScrollPerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    let _ticking = false;
    const _handleScroll = () => {
      if (!_ticking) {
        requestAnimationFrame(() => {
          // Throttled scroll handling
          _ticking = false;
        });
        _ticking = true;
      }
    };

    window.addEventListener('scroll', _handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', _handleScroll);
  }, []);

  // Optimize resize performance
  const _optimizeResizePerformance = useCallback(() => {
    if (typeof window === 'undefined') return;

    let _ticking = false;
    const __handleResize = () => {
      if (!_ticking) {
        requestAnimationFrame(() => {
          // Throttled resize handling
          _ticking = false;
        });
        _ticking = true;
      }
    };

  }, []);

  // Intersection Observer for lazy loading
  const _setupIntersectionObserver = useCallback(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Load images when they come into view
          if (element.tagName === 'IMG') {
            const _img = element as HTMLImageElement;
            if (_img.dataset.src) {
              _img.src = _img.dataset.src;
              _img.removeAttribute('data-src');
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
    const _lazyImages = document.querySelectorAll('img[data-src]');
    _lazyImages.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
  }, []);

  return null;
});

PerformanceOptimizations.displayName = 'PerformanceOptimizations';

export default PerformanceOptimizations;
