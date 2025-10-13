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
<<<<<<< HEAD
=======
        '/icons/sprite.svg'
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
        '/icons/sprite.svg'
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'image';
<<<<<<< HEAD
<<<<<<< HEAD
=======
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
        if (resource.endsWith('.woff2')) {
          link.crossOrigin = 'anonymous';
        }
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
        document.head.appendChild(link);
      });

      // Optimize images
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });

      // Handle lazy loading for data-src images
      const lazyImages = document.querySelectorAll('img[data-src]');
      lazyImages.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src;
          imageElement.removeAttribute('data-src');
        }
      });

      // Add performance monitoring
      if ('performance' in window) {
        const observer = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              console.log('Navigation timing:', entry);
            }
          });
        });
<<<<<<< HEAD
        observer.observe({ entryTypes: ['navigation', 'paint'] });
      }

      // Enable service worker for caching
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service Worker registered:', registration);
          })
          .catch(error => {
            console.log('Service Worker registration failed:', error);
          });
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
=======
        observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
      }

      // Optimize scroll performance
      let ticking = false;
      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Scroll optimization logic here
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });

      // Cleanup
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

<<<<<<< HEAD
<<<<<<< HEAD
=======
    // Run optimization after component mount
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
    const timer = setTimeout(optimizePerformance, 100);
    return () => clearTimeout(timer);
=======
    const cleanup = optimizePerformance();
    setIsOptimized(true);

    return cleanup;
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
  }, []);

  return (
    <div className="performance-optimizer">
      {children}
<<<<<<< HEAD
      {isOptimized && (
<<<<<<< HEAD
=======
        <div className="hidden" aria-hidden="true">
          {/* Performance monitoring indicators */}
          <div id="performance-indicator" data-optimized="true" />
>>>>>>> cursor/fix-errors-and-merge-to-main-b3a8
        </div>
      )}
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-c316
    </div>
  );
};

export default PerformanceOptimizer;