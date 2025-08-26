import React, { useEffect, useMemo, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const PerformanceOptimizer = ({ children }) => {
  const location = useLocation();
  const observerRef = useRef(null);
  const preloadQueue = useRef(new Set());

  // Enhanced preloading strategy
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS with higher priority
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/src/index.css';
      criticalCSS.fetchPriority = 'high';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts with display swap
      const criticalFonts = document.createElement('link');
      criticalFonts.rel = 'preload';
      criticalFonts.as = 'font';
      criticalFonts.href = '/fonts/inter-var.woff2';
      criticalFonts.crossOrigin = 'anonymous';
      criticalFonts.fetchPriority = 'high';
      document.head.appendChild(criticalFonts);

      // Preload next route resources
      preloadNextRouteResources();
    };

    preloadCriticalResources();
  }, []);

  // Preload resources for next likely routes
  const preloadNextRouteResources = useCallback(() => {
    const nextRoutes = ['/services', '/about', '/contact'];
    const currentPath = location.pathname;
    
    nextRoutes.forEach(route => {
      if (route !== currentPath && !preloadQueue.current.has(route)) {
        preloadQueue.current.add(route);
        
        // Preload route-specific resources
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      }
    });
  }, [location.pathname]);

  // Enhanced image optimization
  useEffect(() => {
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      
      images.forEach((img) => {
        // Add loading="lazy" to images below the fold
        if (img.getBoundingClientRect().top > window.innerHeight) {
          img.loading = 'lazy';
        }
        
        // Add decoding="async" for better performance
        img.decoding = 'async';
        
        // Add error handling with fallback
        img.onerror = () => {
          if (!img.dataset.fallback) {
            img.style.display = 'none';
          } else {
            img.src = img.dataset.fallback;
          }
        };

        // Add intersection observer for better lazy loading
        if ('IntersectionObserver' in window && observerRef.current) {
          observerRef.current.observe(img);
        }
      });
    };

    // Use requestIdleCallback for non-critical optimization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(optimizeImages, { timeout: 2000 });
    } else {
      setTimeout(optimizeImages, 100);
    }
  }, [location.pathname]);

  // Enhanced scroll performance with passive listeners
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

  // Enhanced service worker registration
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

  // Enhanced intersection observer for lazy loading
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

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

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

  // Memoize children to prevent unnecessary re-renders
  const optimizedChildren = useMemo(() => children, [children]);

  return <>{optimizedChildren}</>;
};
