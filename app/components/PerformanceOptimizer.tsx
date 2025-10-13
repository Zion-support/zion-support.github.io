import React, { useEffect, useState } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
<<<<<<< HEAD
        '/images/logo.svg'
=======
        '/icons/sprite.svg'
>>>>>>> cursor/fix-errors-and-merge-to-main-b963
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
<<<<<<< HEAD
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b963
        document.head.appendChild(link);
      });

      // Optimize images
<<<<<<< HEAD
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Add performance monitoring
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach(entry => {
            if (entry.entryType === 'navigation') {
              console.log('Navigation timing:', entry);
            }
          });
        });
        observer.observe({ entryTypes: ['navigation', 'paint'] });
=======
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src;
          imageElement.removeAttribute('data-src');
        }
      });

      // Enable service worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed:', error);
          });
>>>>>>> cursor/fix-errors-and-merge-to-main-b963
      }

      setIsOptimized(true);
    };

<<<<<<< HEAD
    // Run optimization after component mounts
=======
    // Run optimization after component mount
>>>>>>> cursor/fix-errors-and-merge-to-main-b963
    const timer = setTimeout(optimizePerformance, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="performance-optimizer">
      {children}
      {isOptimized && (
<<<<<<< HEAD
        <div className="hidden" aria-hidden="true">
          Performance optimization active
=======
        <div className="hidden">
          {/* Performance monitoring indicators */}
          <div id="performance-indicator" data-optimized="true" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b963
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;