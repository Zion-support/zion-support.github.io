import React, { useEffect } from 'react';

const EnhancedPerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];
      
      criticalImages.forEach((src) => {
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
      images.forEach((img) => {
        img.loading = 'lazy';
        img.decoding = 'async';
      });
    };

    // Register service worker
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            // Service worker registered successfully
            // console.log('SW registered: ', registration);
          })
          .catch((registrationError) => {
            // Service worker registration failed
            // console.log('SW registration failed: ', registrationError);
          });
      }
    };

    preloadCriticalResources();
    optimizeImages();
    registerServiceWorker();
  }, []);

  return null;
};

export default EnhancedPerformanceOptimizer;