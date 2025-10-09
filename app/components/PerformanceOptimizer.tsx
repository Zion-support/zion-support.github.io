import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/og-image.jpg',
        '/favicon.ico',
        '/apple-touch-icon.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    // Optimize images with lazy loading
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

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScroll = () => {
        // Throttle scroll events
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-dependent elements
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', updateScroll, { passive: true });
      return () => window.removeEventListener('scroll', updateScroll);
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    const cleanupScroll = optimizeScroll();

    return () => {
      cleanupScroll();
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;