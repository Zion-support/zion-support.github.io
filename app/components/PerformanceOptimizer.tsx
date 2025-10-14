import React, { useEffect } from 'react';

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
    // Performance optimization code
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    };

    const preloadCriticalResources = () => {
      // Preload critical CSS and fonts
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];
      
      fontLinks.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = href;
        document.head.appendChild(link);
      });
    };

    // Run optimizations
    optimizeImages();
    preloadCriticalResources();

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
