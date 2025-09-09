import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function PerformanceOptimizer({ children }) {
  const location = useLocation();
  const observerRef = useRef(null);

  // Preload critical resources on route change
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.querySelector('link[data-critical]');
      if (criticalCSS && !criticalCSS.href.includes('loaded')) {
        criticalCSS.href = criticalCSS.href + '?loaded=true';
      }

      // Preload critical images
      const criticalImages = document.querySelectorAll('img[data-critical]');
      criticalImages.forEach(img => {
        if (img.dataset.src && !img.src) {
          img.src = img.dataset.src;
        }
      });
    };

    // Use requestIdleCallback for non-critical optimization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preloadCriticalResources, { timeout: 2000 });
    } else {
      setTimeout(preloadCriticalResources, 100);
    }
  }, [location.pathname]);

  // Memoize expensive computations
  const optimizedChildren = useMemo(() => children, [children]);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    if (!window.scrollTimeout) {
      window.scrollTimeout = setTimeout(() => {
        // Handle scroll-based optimizations here
        window.scrollTimeout = null;
      }, 16); // ~60fps
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Service Worker registration for caching
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      navigator.serviceWorker
        .register('/sw.js', {
          scope: '/',
          updateViaCache: 'none'
        })
        .then((registration) => {
          console.log('SW registered: ', registration);
          
          // Check for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content available
                console.log('New content available');
              }
            });
          });
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target;
            
            // Handle lazy images
            if (target.dataset.src) {
              target.src = target.dataset.src;
              target.removeAttribute('data-src');
              observerRef.current.unobserve(target);
            }
            
            // Handle lazy components
            if (target.dataset.component) {
              // Load component dynamically
              import(`../components/${target.dataset.component}.jsx`).then((module) => {
                // Component loaded
                target.removeAttribute('data-component');
                observerRef.current.unobserve(target);
              }).catch(() => {
                // Fallback if component not found
                target.removeAttribute('data-component');
                observerRef.current.unobserve(target);
              });
            }
          }
        });
      }, {
        rootMargin: '50px',
        threshold: 0.1,
      });

      // Observe all images with data-src
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => observerRef.current.observe(img));

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, [location.pathname]);

  // Memory optimization
  useEffect(() => {
    const cleanup = () => {
      // Clear timeouts
      if (window.scrollTimeout) {
        clearTimeout(window.scrollTimeout);
        window.scrollTimeout = null;
      }
      
      // Clear any other intervals or timeouts
      const intervals = window.intervals || [];
      intervals.forEach(clearInterval);
      window.intervals = [];
    };

    window.addEventListener('beforeunload', cleanup);
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, []);

  return <>{optimizedChildren}</>;
}

// Add global performance optimizations
if (typeof window !== 'undefined') {
  // Optimize memory usage
  if ('memory' in performance) {
    setInterval(() => {
      const memory = performance.memory;
      if (memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.9) {
        // Trigger garbage collection if available
        if (window.gc) {
          window.gc();
        }
      }
    }, 30000); // Check every 30 seconds
  }
}