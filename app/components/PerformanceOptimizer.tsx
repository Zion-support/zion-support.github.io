<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';

<<<<<<< HEAD
<<<<<<< HEAD
interface PerformanceOptimizerProps {
=======
interface PerformanceoptimizerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
=======
interface PerformanceOptimizerProps {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
  className?: string;
  children?: React.ReactNode;
}

<<<<<<< HEAD
<<<<<<< HEAD
export default function PerformanceOptimizer({ className = '', children }: PerformanceOptimizerProps) {
=======
export default function Performanceoptimizer({ className = '', children, ...props }: PerformanceoptimizerProps) {
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8b27
  return (
    <div className={`${className}`}>
=======
interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {

  useEffect(() => {
    // Performance optimization logic
    const optimizePerformance = () => {
      // Preload critical resources
      const criticalResources = [
        '/fonts/inter-var.woff2',
        '/images/hero-bg.jpg',
        '/icons/sprite.svg'
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

      // Optimize images
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
          entries.forEach(entry => {
            if (entry.entryType === 'navigation') {
              console.log('Navigation timing:', entry);
            }
          });
        });
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
      }

      setIsOptimized(true);
    };

    // Run optimization after component mount
    const timer = setTimeout(optimizePerformance, 100);
    return () => clearTimeout(timer);
  }, []);
=======

import React from 'react';

interface PerformanceoptimizerProps {
  className?: string;
  children?: React.ReactNode;
}

export default function Performanceoptimizer({ className = '', children, ...props }: PerformanceoptimizerProps) {
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-365c

  return (
    <div className="performance-optimizer">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
      {children}
      {isOptimized && (
        <div className="hidden" aria-hidden="true">
          {/* Performance monitoring indicators */}
          <div id="performance-indicator" data-optimized="true" />
        </div>
      )}
    </div>
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
export default function PerformanceOptimizer({ className = '', children, ...props }: PerformanceOptimizerProps) {
    return (
        <div className="component" {...props}>
          {children}
        </div>
      );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-5a44
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-a9f6
=======
};

<<<<<<< HEAD
export default PerformanceOptimizer;
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-214f
=======
export default PerformanceOptimizer;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-d081
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-34b5
