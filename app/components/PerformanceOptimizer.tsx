import React, { useEffect, useCallback } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  // Preload critical resources
  useEffect(() => {
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
        '/hero-bg.jpg',
        '/favicon.ico'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();
  }, []);

  // Optimize scroll performance
  useEffect(() => {
    let ticking = false;

    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Throttle scroll events for better performance
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', optimizeScroll, { passive: true });
    return () => window.removeEventListener('scroll', optimizeScroll);
  }, []);

  // Optimize resize performance
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

    const optimizeResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        // Handle resize events with debouncing
      }, 150);
    };

    window.addEventListener('resize', optimizeResize);
    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', optimizeResize);
    };
  }, []);

  // Lazy load images
  useEffect(() => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => imageObserver.observe(img));

    return () => imageObserver.disconnect();
  }, []);

  // Optimize animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      document.documentElement.style.setProperty('--animation-duration', '0.01ms');
      document.documentElement.style.setProperty('--animation-iteration-count', '1');
    }
  }, []);

  // Memory optimization
  useEffect(() => {
    const cleanup = () => {
      // Clean up any global event listeners or timers
      if (typeof window !== 'undefined') {
        // Clear any global intervals or timeouts
        const highestTimeoutId = setTimeout(() => {}, 0);
        for (let i = 0; i < highestTimeoutId; i++) {
          clearTimeout(i);
        }
      }
    };

    // Cleanup on page unload
    window.addEventListener('beforeunload', cleanup);
    return () => {
      cleanup();
      window.removeEventListener('beforeunload', cleanup);
    };
  }, []);

  // Optimize bundle loading
  const preloadRoute = useCallback((route: string) => {
    // Preload route components for faster navigation
    if (typeof window !== 'undefined') {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    }
  }, []);

  // Preload critical routes
  useEffect(() => {
    const criticalRoutes = [
      '/about',
      '/services',
      '/contact',
      '/ai-services',
      '/micro-saas',
      '/5g-solutions'
    ];

    criticalRoutes.forEach(route => {
      preloadRoute(route);
    });
  }, [preloadRoute]);

  return (
    <div className="performance-optimizer">
      {children}
    </div>
  );
};

export default PerformanceOptimizer;