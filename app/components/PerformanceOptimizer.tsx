import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/images/hero-bg.webp',
        '/images/logo.webp'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // Add loading states
    const addLoadingStates = () => {
      const lazyElements = document.querySelectorAll('[data-lazy]');
      lazyElements.forEach(element => {
        element.classList.add('opacity-0', 'transition-opacity', 'duration-300');
      });
    };

    // Initialize performance optimizations
    preloadCriticalResources();
    optimizeImages();
    addLoadingStates();

    // Cleanup
    return () => {
      // Cleanup any observers or timers if needed
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;