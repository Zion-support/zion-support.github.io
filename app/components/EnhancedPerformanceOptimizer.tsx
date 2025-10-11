'use client';
import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const EnhancedPerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    // Performance optimization code
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });
    };

    const preloadCriticalResources = () => {
      const criticalResources = [
        '/fonts/inter.woff2',
        '/css/critical.css'
      ];

      criticalResources.forEach(resource => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource;
        link.as = resource.endsWith('.css') ? 'style' : 'font';
        document.head.appendChild(link);
      });
    };

    optimizeImages();
    preloadCriticalResources();
  }, []);

  return <>{children}</>;
};

export default EnhancedPerformanceOptimizer;