import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enableLazyLoading?: boolean;
  enablePrefetching?: boolean;
  enableCompression?: boolean;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enableLazyLoading = true,
  enablePrefetching = true,
  enableCompression = true,
}) => {
  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" for better performance
      if (enableLazyLoading && !img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for non-blocking image loading
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }

      // Add error handling
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });
    });
  }, [enableImageOptimization, enableLazyLoading]);

  // Prefetch critical resources
  const prefetchResources = useCallback(() => {
    if (!enablePrefetching) return;

    const criticalResources = [
      '/static/css/main.css',
      '/static/js/main.js',
      '/manifest.json',
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = resource;
      document.head.appendChild(link);
    });
  }, [enablePrefetching]);

  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      // Throttle scroll events for better performance
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update any scroll-dependent elements here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  // Optimize resize performance
  const optimizeResize = useCallback(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize optimizations
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      }, 100);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Enable compression hints
  const enableCompressionHints = useCallback(() => {
    if (!enableCompression) return;

    // Add compression hints to meta tags
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Accept-Encoding';
    meta.content = 'gzip, deflate, br';
    document.head.appendChild(meta);
  }, [enableCompression]);

  // Optimize third-party scripts
  const optimizeThirdPartyScripts = useCallback(() => {
    // Defer non-critical scripts
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
        script.setAttribute('defer', '');
      }
    });
  }, []);

  // Monitor and optimize performance
  const monitorPerformance = useCallback(() => {
    if (typeof window === 'undefined' || !('performance' in window)) return;

    // Monitor long tasks
    if ('PerformanceObserver' in window) {
      try {
        const longTaskObserver = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.duration > 50) {
              console.warn('Long task detected:', entry.duration + 'ms');
            }
          });
        });
        longTaskObserver.observe({ entryTypes: ['longtask'] });
      } catch (error) {
        console.warn('Long task observer not supported:', error);
      }
    }

    // Monitor memory usage
    if ('memory' in performance) {
      setInterval(() => {
        const memory = (performance as any).memory;
        if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          console.warn('High memory usage detected:', memory.usedJSHeapSize);
        }
      }, 30000);
    }
  }, []);

  // Initialize all optimizations
  useEffect(() => {
    // Run optimizations after DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        optimizeImages();
        prefetchResources();
        optimizeThirdPartyScripts();
        enableCompressionHints();
      });
    } else {
      optimizeImages();
      prefetchResources();
      optimizeThirdPartyScripts();
      enableCompressionHints();
    }

    // Set up scroll and resize optimizations
    const cleanupScroll = optimizeScroll();
    const cleanupResize = optimizeResize();

    // Monitor performance
    monitorPerformance();

    return () => {
      cleanupScroll();
      cleanupResize();
    };
  }, [
    optimizeImages,
    prefetchResources,
    optimizeScroll,
    optimizeResize,
    optimizeThirdPartyScripts,
    enableCompressionHints,
    monitorPerformance,
  ]);

  // Re-optimize when new content is added
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
          // Re-optimize images when new content is added
          optimizeImages();
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [optimizeImages]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;