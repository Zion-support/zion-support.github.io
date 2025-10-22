import { useEffect, useCallback } from 'react';

export const usePerformanceOptimization = () => {
  const optimizeImages = useCallback(() => {
    // Lazy load images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical CSS and fonts
    const criticalResources = [
      '/fonts/inter-var.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  const optimizeScroll = useCallback(() => {
    // Throttle scroll events
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Handle scroll logic here
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    const cleanup = optimizeScroll();
    
    return cleanup;
  }, [optimizeImages, preloadCriticalResources, optimizeScroll]);

  return {
    optimizeImages,
    preloadCriticalResources,
    optimizeScroll
  };
};