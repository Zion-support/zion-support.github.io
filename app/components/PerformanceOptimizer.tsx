<<<<<<< HEAD
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children?: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
=======
import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

>>>>>>> cursor/fix-errors-and-merge-to-main-d190
      const criticalImages = [
        '/og-image.jpg',
        '/logo.png',
        '/favicon.ico'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" to non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Intersection Observer for animations
    const setupIntersectionObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in');
            }
          });
        },
        { threshold: 0.1 }
      );

      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => observer.observe(el));
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    setupIntersectionObserver();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

<<<<<<< HEAD
=======
  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events for better performance
    let ticking = false;

    const updateScrollPosition = () => {
      // Add scroll-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  // Add scroll listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Add performance monitoring
  useEffect(() => {
    if ('performance' in window) {
      const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (entry.entryType === 'navigation') {
            if (process.env['NODE_ENV'] === 'development') {
              // eslint-disable-next-line no-console
              console.log('Navigation timing:', entry);
            }
          }
        });
      });

      observer.observe({ entryTypes: ['navigation'] });

      return () => observer.disconnect();
    }
  }, []);

  // Resource hints for better performance
  useEffect(() => {
    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
        { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' }
      ];

      hints.forEach(hint => {
        const link = document.createElement('link');
        link.rel = hint.rel;
        link.href = hint.href;
        if (hint.crossOrigin) {
          link.crossOrigin = hint.crossOrigin;
        }
        document.head.appendChild(link);
      });
    };

    addResourceHints();
  }, []);

>>>>>>> cursor/fix-errors-and-merge-to-main-d190
  return <>{children}</>;
};

export default PerformanceOptimizer;