'use client';

import { useEffect, useCallback, useMemo } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

export default function PerformanceOptimizer({ children }: PerformanceOptimizerProps) {
  // Preload critical resources
  useEffect(() => {
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontPreload = document.createElement('link');
      fontPreload.rel = 'preload';
      fontPreload.href = '/fonts/inter-var.woff2';
      fontPreload.as = 'font';
      fontPreload.type = 'font/woff2';
      fontPreload.crossOrigin = 'anonymous';
      document.head.appendChild(fontPreload);

      // Preload critical images
      const criticalImages = [
        '/og-image.jpg',
        '/hero-bg.jpg',
        '/logo.png'
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
  const handleScroll = useCallback(() => {
    // Throttle scroll events
    let ticking = false;
    
    const updateScrollPosition = () => {
      // Update scroll position for performance monitoring
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      
      // Store scroll metrics for analytics
      if (typeof window !== 'undefined') {
        (window as any).scrollMetrics = {
          scrollY,
          scrollPercent,
          timestamp: Date.now()
        };
      }
      
      ticking = false;
    };

    if (!ticking) {
      requestAnimationFrame(updateScrollPosition);
      ticking = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Optimize resize performance
  const handleResize = useCallback(() => {
    let timeoutId: NodeJS.Timeout;
    
    const updateDimensions = () => {
      const dimensions = {
        width: window.innerWidth,
        height: window.innerHeight,
        devicePixelRatio: window.devicePixelRatio,
        timestamp: Date.now()
      };

      if (typeof window !== 'undefined') {
        (window as any).viewportMetrics = dimensions;
      }
    };

    clearTimeout(timeoutId);
    timeoutId = setTimeout(updateDimensions, 150);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Memoize children to prevent unnecessary re-renders
  const memoizedChildren = useMemo(() => children, [children]);

  return <>{memoizedChildren}</>;
}