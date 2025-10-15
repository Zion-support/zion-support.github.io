import React, { useEffect, ReactNode } from 'react';

interface PerformanceOptimizerProps {
  children: ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" to images below the fold
        if (img.getBoundingClientRect().top > window.innerHeight) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        img.setAttribute('decoding', 'async');
      });
    };

    // Intersection Observer for lazy loading
    const setupLazyLoading = () => {
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
              }
            }
          });
        });

        const lazyImages = document.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => imageObserver.observe(img));
      }
    };

    // Resource hints
    const addResourceHints = () => {
      // DNS prefetch for external domains
      const dnsPrefetchDomains = [
        'fonts.googleapis.com',
        'fonts.gstatic.com'
      ];

      dnsPrefetchDomains.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = `//${domain}`;
        document.head.appendChild(link);
      });
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    setupLazyLoading();
    addResourceHints();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;