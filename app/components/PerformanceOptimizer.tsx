'use client';
import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

<<<<<<< HEAD
      // Measure render time
      const renderTime = performance.now() - startTime;

      // Check memory usage (if available)
      const memoryUsage = (performance as any).memory?.usedJSHeapSize || 0;

      // Check connection speed
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection;
      const isSlowConnection = connection ? connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' : false;

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        isSlowConnection
      });

      // Auto-optimize based on metrics
      if (loadTime > 3000 || renderTime > 100 || isSlowConnection) {
        setIsOptimized(true);
        applyOptimizations();
      }
    };

    const applyOptimizations = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
      images.forEach(img => {
        const imageElement = img as HTMLImageElement;
        if (imageElement.dataset.src) {
          imageElement.src = imageElement.dataset.src;
          imageElement.removeAttribute('data-src');
        }
      });

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
=======
      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
>>>>>>> 883b2f1837ad94df26f75676952a53319ed72f1c
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
        // Add loading="lazy" to non-critical images
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
    const optimizeScroll = () => {
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
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    const cleanupScroll = optimizeScroll();

    // Cleanup on unmount
    return () => {
      cleanupScroll();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;