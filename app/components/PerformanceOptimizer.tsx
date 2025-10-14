import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    // Preload critical fonts
    const preloadFonts = () => {
      const fontLinks = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap'
      ];
      
      fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Preload critical images
    const preloadImages = () => {
      const criticalImages = [
        '/logo.svg',
        '/hero-bg.jpg',
        '/favicon.ico'
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Initialize performance optimizations
    preloadFonts();
    preloadImages();

    // Set up performance monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      // Monitor Core Web Vitals
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          if (process.env.NODE_ENV === 'development') {
            console.log('Performance metric:', entry.name, entry.value);
          }
        });
      });

      try {
        observer.observe({ entryTypes: ['measure', 'navigation', 'paint'] });
      } catch (e) {
        // Performance Observer not supported
      }
    }
  }, []);

  // Optimize scroll performance
  const handleScroll = useCallback(() => {
    // Throttle scroll events for better performance
    if (typeof window !== 'undefined') {
      window.requestAnimationFrame(() => {
        // Scroll optimization logic can be added here
      });
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return <>{children}</>;
};

export default PerformanceOptimizer;
