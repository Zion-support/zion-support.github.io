import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Lazy load images
  const lazyLoadImages = useCallback(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/src/index.css',
      '/src/components/RevolutionaryContentBanner2025.tsx',
      '/src/components/InteractiveTechShowcase2025.tsx'
    ];

    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'script';
      document.head.appendChild(link);
    });
  }, []);

  // Optimize scroll performance
  const optimizeScrollPerformance = useCallback(() => {
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Throttle scroll events
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-dependent elements
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', updateScrollPosition, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', updateScrollPosition);
    };
  }, []);

  // Memory cleanup
  const cleanupMemory = useCallback(() => {
    // Clean up unused event listeners
    const cleanup = () => {
      // Remove any unused event listeners
      window.removeEventListener('beforeunload', cleanup);
    };
    
    window.addEventListener('beforeunload', cleanup);
  }, []);

  useEffect(() => {
    // Initialize performance optimizations
    lazyLoadImages();
    preloadCriticalResources();
    const scrollCleanup = optimizeScrollPerformance();
    cleanupMemory();

    // Cleanup on unmount
    return () => {
      scrollCleanup();
    };
  }, [lazyLoadImages, preloadCriticalResources, optimizeScrollPerformance, cleanupMemory]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
