import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" to images below the fold
        if (img.getBoundingClientRect().top > window.innerHeight) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        img.setAttribute('decoding', 'async');
      });
    };

    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/assets/index-Dh4x_LSv.js',
        '/assets/index-ByLiN45N.css',
        '/assets/vendor-DSl_H3E1.js'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.js') ? 'script' : 'style';
        document.head.appendChild(link);
      });
    };

    // Optimize scroll performance
    const optimizeScroll = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Add scroll optimization logic here
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    };

    // Optimize animations
    const optimizeAnimations = () => {
      // Reduce motion for users who prefer it
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        document.documentElement.style.setProperty('--transition-duration', '0.01ms');
      }
    };

    // Initialize optimizations
    optimizeImages();
    preloadCriticalResources();
    const cleanupScroll = optimizeScroll();
    optimizeAnimations();

    // Cleanup on unmount
    return () => {
      cleanupScroll();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;