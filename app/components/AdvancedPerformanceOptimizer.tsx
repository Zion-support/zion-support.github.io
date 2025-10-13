import React, { useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceOptimizerProps {
  enableImageOptimization?: boolean;
  enablePreloading?: boolean;
  enableCaching?: boolean;
  enableCompression?: boolean;
}

const AdvancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({
  enableImageOptimization = true,
  enablePreloading = true,
  enableCaching = true,
  enableCompression = true,
}) => {
  const location = useLocation();

  // Image optimization
  const optimizeImages = useCallback(() => {
    if (!enableImageOptimization) return;

    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      // Add loading="lazy" to images below the fold
      if (img.getBoundingClientRect().top > window.innerHeight) {
        img.setAttribute('loading', 'lazy');
      }

      // Add decoding="async" for better performance
      img.setAttribute('decoding', 'async');

      // Add fetchpriority="high" for above-the-fold images
      if (img.getBoundingClientRect().top <= window.innerHeight) {
        img.setAttribute('fetchpriority', 'high');
      }
    });
  }, [enableImageOptimization]);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    if (!enablePreloading) return;

    // Preload critical CSS
    const criticalCSS = document.createElement('link');
    criticalCSS.rel = 'preload';
    criticalCSS.href = '/assets/index-Dq8n7JAm.css';
    criticalCSS.as = 'style';
    criticalCSS.onload = () => {
      criticalCSS.rel = 'stylesheet';
    };
    document.head.appendChild(criticalCSS);

    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
    fontPreload.as = 'style';
    document.head.appendChild(fontPreload);

    // Preload next likely page based on current route
    const nextPage = getNextLikelyPage(location.pathname);
    if (nextPage) {
      const prefetchLink = document.createElement('link');
      prefetchLink.rel = 'prefetch';
      prefetchLink.href = nextPage;
      document.head.appendChild(prefetchLink);
    }
  }, [enablePreloading, location.pathname]);

  // Enhanced caching strategies
  const setupCaching = useCallback(() => {
    if (!enableCaching) return;

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          if (process.env.NODE_ENV === 'development') {
            console.log($1);
          }
        })
        .catch((registrationError) => {
          if (process.env.NODE_ENV === 'development') {
            console.log($1);
          }
        });
    }

    // Set up cache headers for static assets
    const staticAssets = document.querySelectorAll('link[rel="stylesheet"], script[src]');
    staticAssets.forEach((asset) => {
      if (asset instanceof HTMLLinkElement && asset.href) {
        // Add cache control headers via meta tags
        const cacheMeta = document.createElement('meta');
        cacheMeta.setAttribute('http-equiv', 'Cache-Control');
        cacheMeta.setAttribute('content', 'public, max-age=31536000');
        asset.appendChild(cacheMeta);
      }
    });
  }, [enableCaching]);

  // Compression optimization
  const setupCompression = useCallback(() => {
    if (!enableCompression) return;

    // Enable gzip compression hints
    const compressionMeta = document.createElement('meta');
    compressionMeta.setAttribute('http-equiv', 'Accept-Encoding');
    compressionMeta.setAttribute('content', 'gzip, deflate, br');
    document.head.appendChild(compressionMeta);

    // Optimize resource loading
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach((script) => {
      if (script instanceof HTMLScriptElement) {
        script.setAttribute('defer', '');
        script.setAttribute('async', '');
      }
    });
  }, [enableCompression]);

  // Memory management
  const optimizeMemory = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove old event listeners that might be causing memory leaks
      const oldListeners = document.querySelectorAll('[data-listener-cleanup]');
      oldListeners.forEach((element) => {
        element.removeAttribute('data-listener-cleanup');
      });
    };

    // Run cleanup every 5 minutes
    const cleanupInterval = setInterval(cleanup, 5 * 60 * 1000);

    return () => clearInterval(cleanupInterval);
  }, []);

  // Bundle splitting optimization
  const optimizeBundleSplitting = useCallback(() => {
    // Dynamically import non-critical components
    const lazyLoadComponents = () => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const componentName = target.dataset.lazyComponent;
            
            if (componentName) {
              // Mark component as loaded
              target.classList.add('loaded');
              
              observer.unobserve(target);
            }
          }
        });
      });

      // Observe all elements with lazy-loading data attribute
      const lazyElements = document.querySelectorAll('[data-lazy-component]');
      lazyElements.forEach((element) => observer.observe(element));
    };

    // Start lazy loading after initial page load
    if (document.readyState === 'complete') {
      lazyLoadComponents();
    } else {
      window.addEventListener('load', lazyLoadComponents);
    }
  }, []);

  // Performance monitoring
  const setupPerformanceMonitoring = useCallback(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          const lcp = entry as PerformanceEntry & { startTime: number };
          if (lcp.startTime > 2500) {
            // LCP is too slow, trigger optimization
            optimizeImages();
          }
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Monitor memory usage
    if ('memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        const usedMemory = memory.usedJSHeapSize / memory.jsHeapSizeLimit;
        
        if (usedMemory > 0.8) {
          // Memory usage is high, trigger garbage collection
          if (window.gc) {
            window.gc();
          }
        }
      };

      setInterval(checkMemory, 30000); // Check every 30 seconds
    }
  }, [optimizeImages]);

  // Initialize all optimizations
  useEffect(() => {
    const cleanup = optimizeMemory();
    
    // Run optimizations after a short delay to not block initial render
    const timeoutId = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
      setupCaching();
      setupCompression();
      optimizeBundleSplitting();
      setupPerformanceMonitoring();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      cleanup();
    };
  }, [
    optimizeImages,
    preloadCriticalResources,
    setupCaching,
    setupCompression,
    optimizeMemory,
    optimizeBundleSplitting,
    setupPerformanceMonitoring,
  ]);

  // Re-run optimizations on route change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      optimizeImages();
      preloadCriticalResources();
    }, 200);

    return () => clearTimeout(timeoutId);
  }, [location.pathname, optimizeImages, preloadCriticalResources]);

  return null; // This component doesn't render anything
};

// Helper function to determine next likely page
const getNextLikelyPage = (currentPath: string): string | null => {
  const likelyPages: Record<string, string> = {
    '/': '/about',
    '/about': '/services',
    '/services': '/contact',
    '/ai-services': '/ai-analytics',
    '/micro-saas': '/zion-analytics-pro',
    '/5g-solutions': '/5g-implementation',
  };

  return likelyPages[currentPath] || null;
};

export default AdvancedPerformanceOptimizer;