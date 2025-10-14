import React, { useEffect, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Image optimization
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Font optimization
    const optimizeFonts = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = '/fonts/inter.woff2';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    // Resource preloading
    const preloadCriticalResources = () => {
      const criticalResources = [
        '/css/critical.css',
        '/js/critical.js'
      ];
      
      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'script';
        document.head.appendChild(link);
      });
    };

    // Intersection Observer for lazy loading
    const setupIntersectionObserver = () => {
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.classList.add('animate-fade-in');
              observer.unobserve(element);
            }
          });
        });

        const elements = document.querySelectorAll('[data-lazy]');
        elements.forEach((el) => observer.observe(el));
      }
    };

    // Run optimizations
    optimizeImages();
    optimizeFonts();
    preloadCriticalResources();
    setupIntersectionObserver();

    // Cleanup function
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;