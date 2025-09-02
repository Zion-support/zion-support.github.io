<<<<<<< HEAD
import { useEffect } from 'react';''interface PerformanceOptimizerProps {
  children: React.ReactNode;
}export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
const preloadCriticalResources = () => {;
      const criticalFonts = [;
        'https: //fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap''      ];'criticalFonts.forEach(font => {
        const link = document.createElement('link');'        link.rel = 'preload';'        link.as = 'style';'        link.href = font;'        document.head.appendChild(link);
=======
import { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600&display=swap'
      ];
      
      criticalFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = font;
        document.head.appendChild(link);
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      });
    };

    // Optimize images
<<<<<<< HEAD
const optimizeImages = () => {;
      const images = document.querySelectorAll('img');'      images.forEach(img => {'        if (!img.loading) {
          img.loading = 'lazy';'        }'        if (!img.decoding) {
          img.decoding = 'async';'        }'      });};
=======
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();

    // Set up intersection observer for lazy loading
<<<<<<< HEAD
const observer = new IntersectionObserver(;
=======
    const observer = new IntersectionObserver(
>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            if (target.dataset.src) {
<<<<<<< HEAD
              target.style.backgroundImage = `url(${target.dataset.src})`;`              target.removeAttribute('data-src');'              observer.unobserve(target);'            }
          }
        });
      }, { rootMargin: '50px' }'    );'// Observe lazy load elements
    const lazyElements = document.querySelectorAll('[data-src]');'    lazyElements.forEach(el => observer.observe(el));'
=======
              target.style.backgroundImage = `url(${target.dataset.src})`;
              target.removeAttribute('data-src');
              observer.unobserve(target);
            }
          }
        });
      },
      { rootMargin: '50px' }
    );

    // Observe lazy load elements
    const lazyElements = document.querySelectorAll('[data-src]');
    lazyElements.forEach(el => observer.observe(el));

>>>>>>> origin/cursor/install-dependencies-and-fix-errors-827a
    return () => {
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
};