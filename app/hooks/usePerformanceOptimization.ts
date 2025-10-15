import { useEffect, useCallback } from 'react';

// Performance metrics interface for future use
// interface PerformanceMetrics {
//   loadTime: number;
//   firstContentfulPaint: number;
//   largestContentfulPaint: number;
//   cumulativeLayoutShift: number;
//   firstInputDelay: number;
// }

export const usePerformanceOptimization = () => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical fonts
    const fontPreload = document.createElement('link');
    fontPreload.rel = 'preload';
    fontPreload.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
    fontPreload.as = 'style';
    fontPreload.crossOrigin = 'anonymous';
    document.head.appendChild(fontPreload);

    // Preload critical images
    const criticalImages = [
      '/logo.png',
      '/og-image.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = src;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
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
  }, []);

  // Debounce scroll events
  const debounce = useCallback((func: (...args: any[]) => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }, []);

  // Optimize scroll performance
  const optimizeScroll = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Add scroll-based optimizations here
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    const debouncedScroll = debounce(requestTick, 16); // ~60fps
    window.addEventListener('scroll', debouncedScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', debouncedScroll);
    };
  }, [debounce]);

  // Initialize performance optimizations
  useEffect(() => {
    preloadCriticalResources();
    optimizeImages();
    const cleanupScroll = optimizeScroll();

    return () => {
      cleanupScroll();
    };
  }, [preloadCriticalResources, optimizeImages, optimizeScroll]);

  return {
    preloadCriticalResources,
    optimizeImages,
    optimizeScroll
  };
};