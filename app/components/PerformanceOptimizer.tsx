'use client';

import React, { useState, useEffect } from 'react';

declare global {
  interface Performance {
    memory?: {
      usedJSHeapSize: number;
    };
  }
  
  interface Navigator {
    connection?: {
      effectiveType: string;
    };
    mozConnection?: {
      effectiveType: string;
    };
    webkitConnection?: {
      effectiveType: string;
    };
  }
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlowConnection: boolean;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);
  const [isOptimized, setIsOptimized] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window === 'undefined') return;

      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
      const renderTime = performance.timing.domContentLoadedEventEnd - performance.timing.navigationStart;
      const memoryUsage = performance.memory?.usedJSHeapSize || 0;
      
      // Check connection speed
      const connection = (navigator as any).connection || 
                        (navigator as any).mozConnection || 
                        (navigator as any).webkitConnection;
      const isSlowConnection = connection?.effectiveType === 'slow-2g' || 
                              connection?.effectiveType === '2g' || 
                              connection?.effectiveType === '3g';

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        isSlowConnection
      });
    };

    const applyOptimizations = () => {
      // Lazy load images
      const images = document.querySelectorAll('img[data-src]');
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

      images.forEach(img => imageObserver.observe(img));

      // Preload critical resources
      preloadCriticalResources();

      setIsOptimized(true);
    };

    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = '/fonts/inter.woff2';
      fontLink.as = 'font';
      fontLink.type = 'font/woff2';
      fontLink.crossOrigin = 'anonymous';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    const optimizeImages = () => {
      // Add loading="lazy" to non-critical images
      const images = document.querySelectorAll('img:not([loading])');
      images.forEach((img, index) => {
        if (index > 2) { // Skip first 3 images (likely above the fold)
          (img as HTMLImageElement).loading = 'lazy';
          (img as HTMLImageElement).decoding = 'async';
        }
      });
    };

    const optimizeScroll = () => {
      // Throttle scroll events
      let ticking = false;
      
      const updateScrollPosition = () => {
        // Update scroll position for performance
        ticking = false;
      };

      const requestTick = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', requestTick, { passive: true });
      
      return () => {
        window.removeEventListener('scroll', requestTick);
      };
    };

    // Initialize optimizations
    preloadCriticalResources();
    optimizeImages();
    const cleanupScroll = optimizeScroll();

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 100);

    // Apply optimizations
    applyOptimizations();

    // Cleanup on unmount
    return () => {
      cleanupScroll();
      clearTimeout(timer);
    };
  }, []);

  // Don't render in production
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div className="mb-2 font-bold">Performance Monitor</div>
      {metrics && (
        <div className="space-y-1">
          <div>Load: {metrics.loadTime.toFixed(0)}ms</div>
          <div>Render: {metrics.renderTime.toFixed(0)}ms</div>
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(1)}MB</div>
          <div>Slow: {metrics.isSlowConnection ? 'Yes' : 'No'}</div>
          {isOptimized && <div className="text-green-400">Optimized</div>}
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;
