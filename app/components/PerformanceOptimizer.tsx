'use client';

import React, { useState, useEffect } from 'react';

// Extend interfaces for browser APIs
declare global {
  interface Performance {
    memory?: {
      usedJSHeapSize: number
    }
  }
  
  interface Navigator {
    connection?: {
      effectiveType: string
    }
    mozConnection?: {
      effectiveType: string
    }
    webkitConnection?: {
      effectiveType: string
    }
  }
}

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  memoryUsage: number;
  isSlowConnection: boolean;
}

const PerformanceOptimizer: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    loadTime: 0,
    renderTime: 0,
    memoryUsage: 0,
    isSlowConnection: false
  });

  useEffect(() => {
    const startTime = performance.now();

    // Measure load time
    const measureLoadTime = () => {
      const loadTime = performance.now() - startTime;

      // Measure render time
      const renderTime = performance.now() - startTime;

      // Check memory usage (if available)
      const memoryUsage = performance.memory?.usedJSHeapSize || 0;

      // Check connection speed
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const isSlowConnection = connection ? connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' : false;

      setMetrics({
        loadTime,
        renderTime,
        memoryUsage,
        isSlowConnection
      });
    };

    // Run measurements after component mounts
    const timeoutId = setTimeout(measureLoadTime, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);

      // Preload critical images
      const criticalImages = [
        '/images/hero-bg.jpg',
        '/images/logo.png'
      ];

      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    // Optimize images
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
        if (!img.decoding) {
          img.decoding = 'async';
        }
      });
    };

    optimizeImages();

    // Add performance monitoring
    if ('performance' in window) {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          if (entry.entryType === 'navigation') {
            console.log('Navigation timing:', entry);
          }
        });
      });

      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint'] });
    }
  }, []);

  return (
    <div className="performance-optimizer">
      {/* Performance metrics display (only in development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
          <div>Load: {metrics.loadTime.toFixed(2)}ms</div>
          <div>Render: {metrics.renderTime.toFixed(2)}ms</div>
          <div>Memory: {(metrics.memoryUsage / 1024 / 1024).toFixed(2)}MB</div>
          <div>Slow: {metrics.isSlowConnection ? 'Yes' : 'No'}</div>
        </div>
      )}
    </div>
  );
};

export default PerformanceOptimizer;