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

<<<<<<< HEAD
    // Optimize fonts
    const optimizeFonts = () => {
      if ('fonts' in document) {
        document.fonts.ready.then(() => {
          document.body.classList.add('fonts-loaded');
        });
      }
=======
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
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
<<<<<<< HEAD
    optimizeFonts();

    // Performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }

    return () => {
      // Cleanup
      if (typeof window !== 'undefined' && 'performance' in window) {
        const observer = new PerformanceObserver(() => {});
        observer.disconnect();
      }
=======
    const cleanupScroll = optimizeScroll();

    return () => {
      cleanupScroll();
>>>>>>> cursor/fix-errors-and-merge-to-main-398f
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;