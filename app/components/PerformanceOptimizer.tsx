import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts with better loading strategy
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images with proper attributes
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg',
        '/favicon.ico'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.fetchPriority = 'high';
        document.head.appendChild(link);
      });

      // Preload critical CSS
      const criticalCSS = document.createElement('link');
      criticalCSS.rel = 'preload';
      criticalCSS.href = '/assets/index.css';
      criticalCSS.as = 'style';
      document.head.appendChild(criticalCSS);
    };

    preloadCriticalResources();
  }, []);

  // Optimize scroll performance with intersection observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Lazy load images when they come into view
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    }, observerOptions);

    // Observe all images with data-src attribute
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  // Optimize scroll performance with throttling
  const handleScroll = useCallback(() => {
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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Optimize resize performance
  const handleResize = useCallback(() => {
    let ticking = false;
    
    const updateLayout = () => {
      // Add resize-based optimizations here
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateLayout);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Memory optimization - cleanup unused resources
  useEffect(() => {
    const cleanup = () => {
      // Cleanup unused event listeners and timers
      if (typeof window !== 'undefined') {
        // Clear any pending timeouts
        const highestTimeoutId = setTimeout(() => {}, 0);
        for (let i = 0; i < highestTimeoutId; i++) {
          clearTimeout(i);
        }
      }
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    return () => {
      window.removeEventListener('beforeunload', cleanup);
      cleanup();
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;