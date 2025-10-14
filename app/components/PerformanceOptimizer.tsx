import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Performance optimization code
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    const preloadCriticalResources = () => {
      // Preload critical CSS and fonts
      const criticalResources = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
      ];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = 'style';
        document.head.appendChild(link);
      });
    };

    const optimizeAnimations = () => {
      // Use requestAnimationFrame for smooth animations
      const animatedElements = document.querySelectorAll('[data-animate]');
      animatedElements.forEach((element) => {
        element.addEventListener('animationend', () => {
          element.classList.remove('animate-pulse');
        });
      });
    };

    // Run optimizations
    optimizeImages();
    preloadCriticalResources();
    optimizeAnimations();

    // Cleanup function
    return () => {
      // Cleanup any event listeners or timers if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;