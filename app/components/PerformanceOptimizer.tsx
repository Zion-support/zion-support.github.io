import React, { useEffect, useCallback } from 'react';

const PerformanceOptimizer: React.FC = () => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreloads = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
        'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLUtHuJ_8JhLjO4.woff2'
      ];

      fontPreloads.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'style';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Preload critical images
      const imagePreloads = [
        '/og-image.jpg',
        '/logo.png',
        '/favicon.svg'
      ];

      imagePreloads.forEach(image => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = image;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;

    const updateScrollPosition = () => {
      // Throttle scroll events for better performance
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update any scroll-based animations here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    return () => window.removeEventListener('scroll', updateScrollPosition);
  }, []);

  // Optimize resize performance
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize optimizations
        window.dispatchEvent(new Event('optimizedResize'));
      }, 150);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.classList.add('animate-fade-in');
              observer.unobserve(target);
            }
          });
        },
        {
          rootMargin: '50px 0px',
          threshold: 0.1
        }
      );

      // Observe elements with lazy-load class
      const lazyElements = document.querySelectorAll('.lazy-load');
      lazyElements.forEach(el => observer.observe(el));

      return () => observer.disconnect();
    }
  }, []);

  // Web Vitals monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS((metric) => {
          // Store performance metrics for analysis
          if (typeof window !== 'undefined') {
            window.performanceMetrics = window.performanceMetrics || {};
            window.performanceMetrics.CLS = metric;
          }
        });
        getFID((metric) => {
          if (typeof window !== 'undefined') {
            window.performanceMetrics = window.performanceMetrics || {};
            window.performanceMetrics.FID = metric;
          }
        });
        getFCP((metric) => {
          if (typeof window !== 'undefined') {
            window.performanceMetrics = window.performanceMetrics || {};
            window.performanceMetrics.FCP = metric;
          }
        });
        getLCP((metric) => {
          if (typeof window !== 'undefined') {
            window.performanceMetrics = window.performanceMetrics || {};
            window.performanceMetrics.LCP = metric;
          }
        });
        getTTFB((metric) => {
          if (typeof window !== 'undefined') {
            window.performanceMetrics = window.performanceMetrics || {};
            window.performanceMetrics.TTFB = metric;
          }
        });
      });
    }
  }, []);

  // Memory optimization
  const optimizeMemory = useCallback(() => {
    // Clear unused event listeners periodically
    if (typeof window !== 'undefined' && 'performance' in window) {
      const memory = (performance as Performance & { memory?: { usedJSHeapSize: number; jsHeapSizeLimit: number } }).memory;
      if (memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
        // Trigger garbage collection if available
        if ('gc' in window) {
          (window as Window & { gc?: () => void }).gc?.();
        }
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(optimizeMemory, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, [optimizeMemory]);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;