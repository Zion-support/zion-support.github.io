import React, { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
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
  }, []);

  // Optimize images
  const optimizeImages = useCallback(() => {
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
  }, []);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Update scroll position for animations
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll-y', `${scrollY}px`);
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  // Optimize resize performance
  const handleResize = useCallback(() => {
    // Throttle resize events
    let ticking = false;
    
    const updateDimensions = () => {
      // Update viewport dimensions for responsive calculations
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      document.documentElement.style.setProperty('--vw', `${vw}px`);
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateDimensions);
      ticking = true;
    }
  }, []);

  // Initialize performance optimizations
  useEffect(() => {
    preloadCriticalResources();
    
    // Optimize images after a short delay
    const timer = setTimeout(optimizeImages, 100);

    // Add scroll and resize listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [preloadCriticalResources, optimizeImages, handleScroll, handleResize]);

  // Memoize children to prevent unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children]);

  return <>{memoizedChildren}</>;
};

export default PerformanceOptimizer;