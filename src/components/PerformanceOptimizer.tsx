import React, { useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const location = useLocation();

  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.as = 'style';
      criticalCSS.href = '/src/index.css';
      document.head.appendChild(criticalCSS);

      // Preload critical fonts
      const criticalFonts = document.createElement('link');
      criticalFonts.rel = 'preload';
      criticalFonts.as = 'font';
      criticalFonts.href = '/fonts/inter-var.woff2';
      criticalFonts.crossOrigin = 'anonymous';
      document.head.appendChild(criticalFonts);
    };

    preloadCriticalResources();
  }, []);

  // Optimize images on route change
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
        
        // Add error handling
        img.onerror = () => {
          img.style.display = 'none';
        };
      });
    };

    // Use requestIdleCallback for non-critical optimization
    if ('requestIdleCallback' in window) {
      requestIdleCallback(optimizeImages);
    } else {
      setTimeout(optimizeImages, 100);
    }
  }, [location.pathname]);

  // Memoize expensive computations
  const optimizedChildren = useMemo(() => children, [children]);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events for better performance
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
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              if (target.dataset.src) {
                target.src = target.dataset.src;
                target.removeAttribute('data-src');
                observer.unobserve(target);
              }
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );

      // Observe all images with data-src
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach((img) => observer.observe(img));

      return () => observer.disconnect();
    }
  }, [location.pathname]);

  return <>{optimizedChildren}</>;
};

// Add global performance optimizations
if (typeof window !== 'undefined') {
  // Optimize long tasks
  if ('scheduler' in window && 'postTask' in window.scheduler) {
    window.scheduler.postTask(() => {
      // Run non-critical tasks during idle time
    }, { priority: 'background' });
  }

  // Optimize memory usage
  if ('memory' in performance) {
    const memoryThreshold = 50 * 1024 * 1024; // 50MB
    if (performance.memory.usedJSHeapSize > memoryThreshold) {
      // Trigger garbage collection if available
      if ('gc' in window) {
        (window as any).gc();
      }
    }
  }
}

export default PerformanceOptimizer;