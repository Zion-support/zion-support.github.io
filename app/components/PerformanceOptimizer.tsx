'use client';

import React, { useEffect, useState, useCallback } from 'react';

const PerformanceOptimizer: React.FC = () => {
  const [isOptimized, setIsOptimized] = useState(false);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/css/critical.css'
    ];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'font';
      if (resource.endsWith('.woff2')) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    optimizeImages();
    preloadCriticalResources();
    setIsOptimized(true);
  }, [optimizeImages, preloadCriticalResources]);

  return null;
};

export default PerformanceOptimizer;
