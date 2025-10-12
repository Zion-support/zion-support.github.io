'use client';
import { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
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

    // Preload critical CSS
    const preloadCriticalCSS = () => {
      const criticalCSS = [
        '/app/styles/futuristic.css',
        '/app/styles/futuristic-enhanced.css'
      ];
      criticalCSS.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    preloadCriticalCSS();

    // Cleanup function
    return () => {
      // Remove any dynamically added elements if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;