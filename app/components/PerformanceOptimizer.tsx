'use client';
<<<<<<< HEAD
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
=======

import React, { useState, useEffect } from 'react';

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
      const startTime = performance.now();
      
      // Measure load time
      const loadTime = performance.timing?.loadEventEnd 
        ? performance.timing.loadEventEnd - performance.timing.navigationStart 
        : 0;

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
>>>>>>> 565082f4af95f25101578a95e87917e85c6148f6

      // Preload critical resources
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];

<<<<<<< HEAD
      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalResources.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = href.endsWith('.css') ? 'style' : 'font';
        document.head.appendChild(link);
      });

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
=======
      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.woff2') ? 'font' : 'style';
        document.head.appendChild(link);
      });
    };

    // Measure performance after component mount
    const timer = setTimeout(measurePerformance, 100);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything in production
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
>>>>>>> 565082f4af95f25101578a95e87917e85c6148f6
};

export default PerformanceOptimizer;