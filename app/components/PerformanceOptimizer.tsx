import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/logo.svg',
        '/og-image.svg',
        '/api/placeholder/1200/630', // Hero image
        '/api/placeholder/800/600',  // Service images
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        // Add loading="lazy" for non-critical images
        if (!img.hasAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }
        
        // Add decoding="async" for better performance
        if (!img.hasAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    // Optimize scroll performance
    const handleScroll = useCallback(() => {
      // Throttle scroll events
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Add scroll optimization logic here
        ticking = false;
      };

      if (!ticking) {
        requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    }, []);

    // Initialize optimizations
    const initializeOptimizations = () => {
      preloadCriticalResources();
      optimizeImages();
      
      // Add scroll listener with throttling
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      // Cleanup function
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    };

    // Run optimizations after component mount
    const timer = setTimeout(initializeOptimizations, 100);

    return () => clearTimeout(timer);
  }, []);

  // Memoize children to prevent unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children]);

  return <>{memoizedChildren}</>;
};

export default PerformanceOptimizer;
