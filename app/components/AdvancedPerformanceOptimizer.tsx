'use client';

import React, { useEffect, useCallback, useRef } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePreloading?: boolean;
  enableResourceHints?: boolean;
  enableCriticalCSS?: boolean;
  enableServiceWorker?: boolean;
  onOptimizationComplete?: (metrics: any) => void;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePreloading = true,
  enableResourceHints = true,
  enableCriticalCSS = true,
  enableServiceWorker = false,
  onOptimizationComplete,
}) => {
  const optimizationRef = useRef<{
    imageObserver?: IntersectionObserver;
    preloadLinks: Set<HTMLLinkElement>;
    resourceHints: Set<HTMLLinkElement>;
  }>({
    preloadLinks: new Set(),
    resourceHints: new Set(),
  });

  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization || typeof window === 'undefined') return;

    const images = document.querySelectorAll('img[data-src], img[loading="lazy"]');
    
    if (enableLazyLoading && 'IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src || img.src;
            
            if (src) {
              img.src = src;
              img.classList.add('loaded');
              imageObserver.unobserve(img);
            }
          }
        });
      }, {
        rootMargin: '50px 0px',
        threshold: 0.01,
      });

      images.forEach((img) => {
        imageObserver.observe(img);
      });

      optimizationRef.current.imageObserver = imageObserver;
    }

    // Optimize existing images
    images.forEach((img) => {
      const htmlImg = img as HTMLImageElement;
      if (htmlImg.src && !htmlImg.classList.contains('optimized')) {
        htmlImg.classList.add('optimized');
        
        // Add loading optimization
        htmlImg.loading = 'lazy';
        
        // Add error handling
        htmlImg.onerror = () => {
          htmlImg.classList.add('error');
          htmlImg.alt = 'Image failed to load';
        };
      }
    });
  }, [enableImageOptimization, enableLazyLoading]);

  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading || typeof window === 'undefined') return;

    const criticalResources = [
      { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: '/css/critical.css', as: 'style' },
      { href: '/js/vendor.js', as: 'script' },
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.type) link.type = resource.type;
      if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
      
      document.head.appendChild(link);
      optimizationRef.current.preloadLinks.add(link);
    });
  }, [enablePreloading]);

  const addResourceHints = useCallback(() => {
    if (!enableResourceHints || typeof window === 'undefined') return;

    const hints = [
      { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
      { rel: 'dns-prefetch', href: '//www.google-analytics.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
      { rel: 'preconnect', href: 'https://www.google-analytics.com' },
    ];

    hints.forEach((hint) => {
      const link = document.createElement('link');
      link.rel = hint.rel;
      link.href = hint.href;
      
      if (hint.crossorigin) {
        link.crossOrigin = hint.crossorigin;
      }
      
      document.head.appendChild(link);
      optimizationRef.current.resourceHints.add(link);
    });
  }, [enableResourceHints]);

  const optimizeCriticalCSS = useCallback(() => {
    if (!enableCriticalCSS || typeof window === 'undefined') return;

    // Inline critical CSS for above-the-fold content
    const criticalCSS = `
      .hero-section { opacity: 0; animation: fadeIn 0.6s ease-in-out forwards; }
      .navigation { transform: translateY(-100%); animation: slideDown 0.4s ease-out forwards; }
      @keyframes fadeIn { to { opacity: 1; } }
      @keyframes slideDown { to { transform: translateY(0); } }
    `;

    const style = document.createElement('style');
    style.textContent = criticalCSS;
    style.setAttribute('data-critical', 'true');
    document.head.insertBefore(style, document.head.firstChild);
  }, [enableCriticalCSS]);

  const registerServiceWorker = useCallback(() => {
    if (!enableServiceWorker || typeof window === 'undefined' || !('serviceWorker' in navigator)) return;

    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    });
  }, [enableServiceWorker]);

  const optimizeAnimations = useCallback(() => {
    if (typeof window === 'undefined') return;

    // Reduce motion for users who prefer it
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }

    // Optimize scroll performance
    let ticking = false;
    const updateScrollPosition = () => {
      // Throttle scroll events
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-dependent elements
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
  }, []);

  const measurePerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    const measurePerformanceMetrics = () => {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      const paint = performance.getEntriesByType('paint');
      
      const metrics = {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        firstPaint: paint.find(entry => entry.name === 'first-paint')?.startTime || 0,
        firstContentfulPaint: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
        totalResources: performance.getEntriesByType('resource').length,
        memoryUsage: (performance as any).memory ? {
          usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
          totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
        } : null,
      };

      if (onOptimizationComplete) {
        onOptimizationComplete(metrics);
      }

      // Log performance metrics in development
      if (process.env.NODE_ENV === 'development') {
        console.log('Performance Metrics:', metrics);
      }
    };

    // Measure after page load
    if (document.readyState === 'complete') {
      measurePerformanceMetrics();
    } else {
      window.addEventListener('load', measurePerformanceMetrics);
    }
  }, [onOptimizationComplete]);

  useEffect(() => {
    // Run all optimizations
    optimizeImages();
    preloadCriticalResources();
    addResourceHints();
    optimizeCriticalCSS();
    registerServiceWorker();
    optimizeAnimations();
    measurePerformance();

    // Cleanup function
    return () => {
      if (optimizationRef.current.imageObserver) {
        optimizationRef.current.imageObserver.disconnect();
      }
      
      // Remove preload links
      optimizationRef.current.preloadLinks.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
      
      // Remove resource hints
      optimizationRef.current.resourceHints.forEach(link => {
        if (link.parentNode) {
          link.parentNode.removeChild(link);
        }
      });
    };
  }, [
    optimizeImages,
    preloadCriticalResources,
    addResourceHints,
    optimizeCriticalCSS,
    registerServiceWorker,
    optimizeAnimations,
    measurePerformance,
  ]);

  // Don't render anything
  return null;
};

export default AdvancedPerformanceOptimizer;